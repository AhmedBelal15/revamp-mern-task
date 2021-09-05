const AdminBro = require("admin-bro");
const bcrypt = require("bcrypt");
const AdminBroExpress = require("@admin-bro/express");
const User = require("../models/User");
const adminOptions = require("./adminOptions");

const adminBro = new AdminBro(adminOptions);

const router = AdminBroExpress.buildAuthenticatedRouter(
  adminBro,
  {
    cookieName: "admin-bro",
    cookiePassword: process.env.COOKIE_PASSWORD,
    authenticate: async (email, password) => {
      const user = await User.findOne({ email });
      if (user && (await bcrypt.compare(password, user.encryptedPassword))) {
        return user.toJSON();
      }
      return null;
    },
  },
  null,
  {
    resave: false,
    saveUninitialized: true,
  },
);

module.exports = { adminBro, router };

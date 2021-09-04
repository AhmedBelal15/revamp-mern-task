const AdminBro = require("admin-bro");
const AdminBroMongoose = require("@admin-bro/mongoose");
const Company = require("../models/Company");

AdminBro.registerAdapter(AdminBroMongoose);
const adminOptions = {
  databases: [],
  rootpath: "/admin",
  resources: [Company],
};

module.exports = adminOptions;

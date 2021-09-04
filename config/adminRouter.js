const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const adminOptions = require("./adminOptions");

const adminBro = new AdminBro(adminOptions);

const router = AdminBroExpress.buildRouter(adminBro);

module.exports = { adminBro, router };

const AdminBro = require("admin-bro");
const AdminBroMongoose = require("@admin-bro/mongoose");
const Ticket = require("../models/Ticket");
const ticketOptions = require("./modelsOptions/ticketOptions");

const contentNavigation = {
  name: "Content",
  icon: "Accessibility",
};

AdminBro.registerAdapter(AdminBroMongoose);
const adminOptions = {
  databases: [],
  rootpath: "/admin",
  resources: [
    {
      resource: Ticket,
      options: {
        navigation: contentNavigation,
        ...ticketOptions,
      },
    },
  ],
  locale: {
    translations: {
      labels: {
        Ticket: "Amazing Tickets",
      },
    },
  },
};

module.exports = adminOptions;

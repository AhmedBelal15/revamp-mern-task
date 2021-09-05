const AdminBro = require("admin-bro");
const AdminBroMongoose = require("@admin-bro/mongoose");
const Ticket = require("../models/Ticket");
const User = require("../models/User");
const { ticketOptions } = require("./modelsOptions/ticketOptions");
const { userOptions } = require("./modelsOptions/userOptions");

const contentNavigation = {
  name: "Content",
  icon: "Accessibility",
};

AdminBro.registerAdapter(AdminBroMongoose);
const adminOptions = {
  rootpath: "/admin",
  resources: [
    {
      resource: Ticket,
      options: {
        navigation: contentNavigation,
        ...ticketOptions,
      },
    },
    {
      resource: User,
      options: {
        navigation: contentNavigation,
        ...userOptions,
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

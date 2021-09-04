const AdminBro = require("admin-bro");
const AdminBroMongoose = require("@admin-bro/mongoose");
const Ticket = require("../models/Ticket");

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
        properties: {
          description: { type: "textarea" },
          createdAt: {
            isVisible: {
              list: true,
              filter: true,
              show: true,
              edit: false,
            },
          },
          updatedAt: {
            isVisible: {
              list: true,
              filter: true,
              show: true,
              edit: false,
            },
          },
          status: {
            isVisible: {
              edit: false,
            },
          },
        },
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

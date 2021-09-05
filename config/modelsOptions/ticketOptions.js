exports.ticketOptions = {
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
};

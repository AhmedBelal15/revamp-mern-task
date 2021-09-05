const {
  after: afterPasswordHook,
  before: beforePasswordHook,
} = require("../actions/userActions");

exports.userOptions = {
  properties: {
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
    role: {
      isVisible: false,
    },
    encryptedPassword: {
      isVisible: false,
    },
    password: {
      type: "password",
    },
  },
  actions: {
    new: {
      after: afterPasswordHook,
      before: beforePasswordHook,
    },
    edit: {
      after: afterPasswordHook,
      before: beforePasswordHook,
    },
  },
};

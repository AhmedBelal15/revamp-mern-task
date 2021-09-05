const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: [
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Please enter a valid email",
      ],
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["customer", "agent", "admin"],
      default: "customer",
    },
    encryptedPassword: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add title to your ticked"],
      minlength: 4,
      maxlength: 60,
    },
    description: {
      type: String,
      required: [true, "Please add description to your ticket"],
      minlength: 25,
      maxlength: 500,
    },
    status: {
      type: String,
      enum: ["Active", "Pending", "Closed"],
      default: "Active",
    },
    // customer: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Ticket", TicketSchema);

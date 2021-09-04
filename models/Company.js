const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
});

module.exports = mongoose.model("Company", CompanySchema);

const mongoose = require("mongoose");

const personalSecuritySchema = new mongoose.Schema({
  domain: String,
  is_blocked: Boolean,
  token: String,
});

const SecurityModel = mongoose.model(
  "PersonalSecurity",
  personalSecuritySchema
);
module.exports = SecurityModel;

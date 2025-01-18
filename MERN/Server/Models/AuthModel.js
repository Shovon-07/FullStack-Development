const mongoose = require("mongoose");

//__ Define database schema __//
const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  role: { type: Boolean, default: false },
});

//__ Define model __//
const User = new mongoose.model("User", userSchema);

module.exports = User;

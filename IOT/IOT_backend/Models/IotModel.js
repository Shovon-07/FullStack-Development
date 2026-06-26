const mongoose = require("mongoose");

const IOTdataSchema = new mongoose.Schema(
  {
    name: String,
    status: Number,
    boolStatus: Boolean,
  },
  {
    timestamps: true,
  },
);

const IotModel = mongoose.model("IOT_Data", IOTdataSchema);
module.exports = IotModel;

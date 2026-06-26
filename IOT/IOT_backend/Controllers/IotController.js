const IotModel = require("../Models/IotModel");

const GetData = async (req, res) => {
  try {
    const data = await IotModel.find().sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const Store = async (req, res) => {
  try {
    const { name, status, boolStatus } = req.body;

    const data = await IotModel.create({
      name,
      status,
      boolStatus,
    });

    res.status(201).json({
      success: true,
      message: "Data stored successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const Update = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedData = await IotModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedData) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data updated successfully",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { GetData, Store, Update };

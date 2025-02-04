const SecurityModel = require("../Models/SecurityModel");

const GetSecurity = async (req, res) => {
  try {
    const data = await SecurityModel.find();
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = { GetSecurity };

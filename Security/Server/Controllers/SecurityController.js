const SecurityModel = require("../Models/SecurityModel");

const GetSecurity = async (req, res) => {
  try {
    const data = await SecurityModel.find({
      domain: req.body.domain,
      token: req.body.token,
    });
    if (data.length > 0) {
      return res.status(200).json({ status: true, data: data });
    } else {
      return res.status(500).json({ status: false, data: "No data found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = { GetSecurity };

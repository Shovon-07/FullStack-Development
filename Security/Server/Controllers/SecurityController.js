const DB = require("../Util/DB");
const bcrypt = require("bcrypt");

const GetSecurity = async (req, res) => {
  try {
    DB.query("SELECT * FROM System-Security", async (err, res, field) => {
      if (err) return res.status(400).json({ status: false, msg: err });
      return res
        .status(400)
        .json({ status: false, msg: "Security status retrived", data: res });
    });
  } catch (err) {
    return res.status(400).json({ status: false, msg: err });
  }
};

module.exports = { GetSecurity };

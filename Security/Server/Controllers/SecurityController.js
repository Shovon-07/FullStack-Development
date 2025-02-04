const DB = require("../Util/DB");
// const bcrypt = require("bcrypt");

const GetSecurity = async (req, res) => {
  try {
    const [rows] = await DB.query("SELECT * FROM System-Security");
    return res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = { GetSecurity };

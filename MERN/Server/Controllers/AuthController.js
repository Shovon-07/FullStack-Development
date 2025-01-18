const DB = require("../Util/DB");

const index = async (req, res) => {
  try {
    DB.query("SELECT * FROM users", (err, result, field) => {
      if (err) {
        console.log(err);
      }
      return res.status(200).json({ status: true, data: result });
    });
  } catch (err) {
    console.log(err);
  }
};

const SignUp = async (req, res) => {
  try {
    DB.query("INSERT INTO users SET ?", req.body, (err, result, field) => {
      if (err) {
        console.log(err);
      }
      return res
        .status(200)
        .json({ status: true, msg: "Registration successfull" });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { index, SignUp };

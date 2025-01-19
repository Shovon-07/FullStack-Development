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

const Login = async (req, res) => {
  try {
    DB.query(
      `SELECT * FROM users WHERE email = ? AND password = ?`,
      [req.body.email, req.body.password],
      (err, result, field) => {
        if (err) {
          console.log(err);
        }

        if (result.length != 0) {
          return res
            .status(200)
            .json({ status: true, msg: "Login sucessfull", data: result });
        } else {
          return res.status(200).json({ status: false, msg: "User not found" });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const SignUp = async (req, res) => {
  try {
    // Check duplicate user
    DB.query(
      "SELECT email FROM users WHERE email = ?",
      req.body.email,
      (err, result, field) => {
        if (err) {
          console.log(err);
        }

        let userExist = result;
        // Store data
        if (userExist <= 0) {
          DB.query(
            "INSERT INTO users SET ?",
            req.body,
            (err, result, field) => {
              if (err) {
                console.log(err);
              }
              return res
                .status(200)
                .json({ status: true, msg: "Registration successfull" });
            }
          );
        } else {
          return res
            .status(200)
            .json({ status: false, msg: "User already exist" });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = { index, Login, SignUp };

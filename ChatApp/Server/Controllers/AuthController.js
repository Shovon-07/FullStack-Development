const DB = require("../Util/DB");
const bcrypt = require("bcrypt");
const { Encrypt, Decrypt } = require("../Util/Encription");

const Login = async (req, res) => {
  try {
    DB.query(
      "SELECT password FROM users WHERE email = ?",
      req.body.email,
      async (err, result, field) => {
        if (err) {
          return res.status(400).json({ status: false, msg: err });
        } else {
          const decryptedPassword = await Decrypt(
            req.body.password,
            result[0].password
          );
          console.log(`Decrypted success : ${decryptedPassword}`);

          if (decryptedPassword == true) {
            DB.query(
              `SELECT * FROM users WHERE email = ? AND password = ?`,
              [req.body.email, result[0].password],
              (err, result, field) => {
                if (err) {
                  return res.status(400).json({ status: false, msg: err });
                } else {
                  if (result.length != 0) {
                    return res.status(200).json({
                      status: true,
                      msg: "Login sucessfull",
                      data: result,
                    });
                  } else {
                    return res
                      .status(200)
                      .json({ status: false, msg: "User not found" });
                  }
                }
              }
            );
          } else {
            return res
              .status(200)
              .json({ status: false, msg: "User not found" });
          }
        }
      }
    );

    /*
    
    */
  } catch (err) {
    return res.status(400).json({ status: false, msg: err });
  }
};

const SignUp = async (req, res) => {
  try {
    const hasedPassword = await Encrypt(req.body.password);

    // Check duplicate user
    DB.query(
      "SELECT email FROM users WHERE email = ?",
      req.body.email,
      (err, result, field) => {
        if (err) {
          return res.status(400).json({ status: false, msg: err });
        } else {
          // Store data
          if (result <= 0) {
            const { name, email, password } = req.body;
            DB.query(
              `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${hasedPassword}')`,
              (err, result, field) => {
                if (err) {
                  return res.status(400).json({ status: false, msg: err });
                } else {
                  return res.status(200).json({
                    status: true,
                    msg: "Registration successfull",
                  });
                }
              }
            );
          } else {
            return res
              .status(200)
              .json({ status: false, msg: "User already exist" });
          }
        }
      }
    );
  } catch (err) {
    return res.status(400).json({ status: false, msg: err });
  }
};

// const SignUp = async (req, res) => {
//   try {
//     // Check duplicate user
//     DB.query(
//       "SELECT email FROM users WHERE email = ?",
//       req.body.email,
//       (err, result, field) => {
//         if (err) {
//           return res.status(400).json({ status: false, msg: err });
//         } else {
//           // Store data
//           if (result <= 0) {
//             DB.query(
//               "INSERT INTO users SET ?",
//               req.body,
//               (err, result, field) => {
//                 if (err) {
//                   return res.status(400).json({ status: false, msg: err });
//                 } else {
//                   return res
//                     .status(200)
//                     .json({ status: true, msg: "Registration successfull" });
//                 }
//               }
//             );
//           } else {
//             return res
//               .status(200)
//               .json({ status: false, msg: "User already exist" });
//           }
//         }
//       }
//     );
//   } catch (err) {
//     return res.status(400).json({ status: false, msg: err });
//   }
// };

module.exports = { Login, SignUp };

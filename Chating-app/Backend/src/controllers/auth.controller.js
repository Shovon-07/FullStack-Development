import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { createToken, verifyToken } from "../lib/jwtToken.js";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    //===> Check user exist or not
    const isExist = await User.findOne({ email: email });
    if (isExist)
      return res
        .status(400)
        .json({ status: false, message: "User already exist" });

    //===> Encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //===> Create jwt token
    const token = await createToken(fullname, email);

    //===> Create user
    const newUser = await User.insertOne({
      fullname: fullname,
      email: email,
      password: hashPassword,
      token: token,
    });
    if (newUser) {
      const data = await User.findOne(
        {
          _id: newUser._id,
          email: newUser.email,
        },
        { password: 0 }
      );
      return res
        .status(200)
        .json({ status: true, message: "Signup successfull", data: data });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWwganViYWlyIHNob3ZvbiIsImVtYWlsIjoic2hvdm9uQGdtYWlsLmNvbSIsImlhdCI6MTczOTE4MTY5MCwiZXhwIjoxNzM5Nzg2NDkwfQ.07ykGx6BiEp_zeQcfcVCU3Wwddw2qdb9Yf0t1OolRbI`;
    const verifiedJWT = await verifyToken(token);
    if (verifiedJWT)
      return res.status(200).json({ status: true, message: verifiedJWT });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error.message });
  }
};

export const logout = (req, res) => {
  try {
    res.send("logout");
  } catch (error) {
    console.log(error);
  }
};

// import bcrypt from "bcrypt";
// import User from "../models/user.model.js";

// export const signup = async (req, res) => {
//   try {
//     const { email, fullname, password } = req.body;

//     // Check password
//     // if (password.length < 6) {
//     //   return res.status(400).json({ message: "Password must be 6 charecter" });
//     // }

//     // Check user exists or not
//     const isExists = await User.findOne({ email: email });
//     if (isExists)
//       return res.status(400).json({ message: "User already exists" });

//     // Encrypt password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPass = await bcrypt.hash(password, salt);

//     // Create user
//     const newUser = new User({
//       fullname: fullname,
//       email: email,
//       password: hashedPass,
//     });

//     if (newUser) {
//       // Create jwt token
//     } else {
//       return res.status(400).json({ message: "Something went wrong!" });
//     }

//     return res.json(req.body);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const login = (req, res) => {
//   try {
//     res.send("login");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const logout = (req, res) => {
//   try {
//     res.send("logout");
//   } catch (error) {
//     console.log(error);
//   }
// };

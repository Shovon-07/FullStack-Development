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
    return res.status(500).json({ status: "error", message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const token = req.headers.authorization;
    return res.status(200).json({ status: true, message: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    // Verify jwt token
    const verifiedJWT = await verifyToken(token);
    if (!verifiedJWT)
      return res
        .status(400)
        .json({ status: true, message: "Unauthorized", data: verifiedJWT });

    return res.status(200).json({ status: true, message: verifiedJWT });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error.message });
  }
};

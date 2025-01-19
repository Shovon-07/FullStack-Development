const mongoose = require("mongoose");
const User = require("../Models/UserModel");

const index = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json({ msg: "This auth route", data: data });
  } catch (err) {
    console.error(err);
  }
};

const Login = async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
  }
};

const SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "User already exist" });
    }
    const created = await User.create({ name, email, password });

    res.status(200).json({ msg: "This sign-up route", data: created });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { index, SignUp };

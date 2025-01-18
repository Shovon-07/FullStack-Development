const User = require("../Models/AuthModel");

const index = async (req, res) => {
  res.status(200).send("This is login route");
};

const SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const created = await User.create({ name, email, password });
    res.status(200).json({ data: created });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { index, SignUp };

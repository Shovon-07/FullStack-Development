const index = async (req, res) => {
  res.status(200).send("This is login route");
};

const SignUp = async (req, res) => {
  res.status(200).send("This is sign-up route");
};

module.exports = { index, SignUp };

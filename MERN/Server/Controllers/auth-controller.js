const root = async (req, res) => {
  try {
    res.status(200).send("This is auth router");
  } catch (err) {
    console.log(err);
  }
};

const registration = async (req, res) => {
  try {
    console.log(req.body);
    res
      .status(200)
      .json({ status: true, msg: "This is registration", data: req.body });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { root, registration };

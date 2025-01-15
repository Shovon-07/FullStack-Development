const root = async (req, res) => {
  try {
    res.status(200).send("This is auth router");
  } catch (err) {
    console.log(err);
  }
};

const registration = async (req, res) => {
  try {
    res.status(200).send("This is registration");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { root, registration };

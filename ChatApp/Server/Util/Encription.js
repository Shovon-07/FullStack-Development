const bcrypt = require("bcrypt");
const saltRounds = 10;

async function Encrypt(data) {
  try {
    const hashedData = await bcrypt.hash(data, saltRounds);
    return hashedData;
  } catch (error) {
    console.error("Error encrypting data:", error);
    throw error;
  }
}

const Decrypt = (txt) => {
  bcrypt.hash(txt, salt, (err, hashedTxt) => {
    console.log(hashedTxt);
  });
};

module.exports = { Encrypt, Decrypt };

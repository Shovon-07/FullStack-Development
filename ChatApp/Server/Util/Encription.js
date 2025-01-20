const bcrypt = require("bcrypt");
const saltRounds = 10;

async function Encrypt(data) {
  try {
    const hashedData = await bcrypt.hash(String(data), saltRounds);
    return hashedData;
  } catch (error) {
    console.error("Error encrypting data:", error);
    throw error;
  }
}

async function Decrypt(plainText, hashedData) {
  try {
    const isMatch = await bcrypt.compare(String(plainText), hashedData);
    return isMatch;
  } catch (error) {
    console.error("Error verifying data:", error);
    throw error;
  }
}

module.exports = { Encrypt, Decrypt };

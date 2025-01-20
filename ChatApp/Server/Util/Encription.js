const bcrypt = require("bcrypt");
const saltRounds = process.env.BCRYPTS_SAlT_COUNT;

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
    const isMatch = await bcrypt.compare(String(plainText), String(hashedData));
    return isMatch;
  } catch (error) {
    console.error("Error verifying data:", error);
    throw error;
  }
}

module.exports = { Encrypt, Decrypt };

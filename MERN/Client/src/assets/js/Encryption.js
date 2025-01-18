import CryptoJS from "crypto-js";

export const secretKey =
  "U2FsdGVkX18OyYZccVfgl9d7tf69Vi/zot3ctafRE/w2+T2PmHnDF/EVkOFz6MHDd7YdgwQ1puacNPGBnNFcVA==";

// Encryption
export const Encryption = (txt, key) => {
  if (secretKey == key) {
    const encrypted = CryptoJS.AES.encrypt(txt, key).toString();
    return encrypted;
  } else {
    return "Key is not valid";
  }
};

// Decryption
export const Decryption = (encryptedTxt, key) => {
  if (secretKey == key) {
    const decrypted = CryptoJS.AES.decrypt(encryptedTxt, key).toString(
      CryptoJS.enc.Utf8
    );
    return decrypted;
  } else {
    return "Key is not valid";
  }
};

// console.log(`Encrypt = ${Encrypt("Shovon", secretKey)}`);

// console.log(
//   `Decrypt = ${Decrypt(
//     "U2FsdGVkX18QOQfokZpdp3toAORhxIwF4zwAW3dO+lM=",
//     secretKey
//   )}`
// );

import jwt, { decode } from "jsonwebtoken";

export const createToken = async (uName, uEmail, res) => {
  const token = jwt.sign(
    { name: uName, email: uEmail },
    process.env.JWT_SECRET_KEY,
    {
      // expiresIn: 60,
      expiresIn: "7d",
    }
  );
  return token;
};

export const verifyToken = async (token) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  return jwt.verify(token, secretKey, (err, decode) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return "Token has expired";
      } else if (
        err.name === "JsonWebTokenError" ||
        err.name === "NotBeforeError"
      ) {
        return "Invalid token";
      } else {
        return "Authentication failed";
      }
    } else {
      return decode;
    }
  });

  // return new Promise((resolve, reject) => {
  //   jwt.verify(token, secretKey, (err, decoded) => {
  //     if (err) {
  //       if (err.name === "TokenExpiredError") {
  //         reject(new Error("Token has expired"));
  //       } else if (
  //         err.name === "JsonWebTokenError" ||
  //         err.name === "NotBeforeError"
  //       ) {
  //         // Include other JWT errors
  //         reject(new Error("Invalid token"));
  //       } else {
  //         reject(new Error("Authentication failed")); // Generic error for other issues
  //       }
  //     } else {
  //       resolve(decoded);
  //     }
  //   });
  // });
};

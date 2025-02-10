import jwt from "jsonwebtoken";

export const createToken = (uId, uEmail, res) => {
  const token = jwt.sign(
    { id: uId, email: uEmail },
    process.env.JWT_SECRET_KEY,
    {
      // expiresIn: 60,
      expiresIn: "7d",
    }
  );
  return token;
};

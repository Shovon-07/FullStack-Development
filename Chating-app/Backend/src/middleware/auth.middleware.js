import { verifyToken } from "../lib/jwtToken.js";
import User from "../models/user.model.js";

export const protectedRoute = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return res
      .status(401)
      .json({ message: "Unauthorized - No Token Provided" });

  //===> Decode token
  const decoded = await verifyToken(token);
  if (decoded) {
    //===> Verify token by db's token and get user data
    const userData = await User.findOne(
      {
        email: decoded.email,
        token: token,
      },
      { password: 0 }
    );
    if (!userData)
      return res.status(401).json({ message: "Unauthorized user" });

    req.id = userData._id;
    req.email = userData.email;
    next();
    // return res.status(200).json({ data: userData });
  }
};

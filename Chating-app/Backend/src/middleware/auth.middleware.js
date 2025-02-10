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
    const userData = await User.findOne({
      email: decoded.email,
      token: token,
    });
    if (!userData)
      return res.status(401).json({ message: "Unauthorized user" });

    return res.status(200).json({ data: userData });
  }
  req.token = token;
  next();
};

// import jwt from "jsonwebtoken";
// import User from "../models/user.model.js";

// export const protectRoute = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     if (!token) {
//       return res
//         .status(401)
//         .json({ message: "Unauthorized - No Token Provided" });
//     }

//     const decoded = await verifyToken(token);
//     if (!decoded) {
//       return res.status(401).json({ message: "Unauthorized - Invalid Token" });
//     }

//     const user = await User.findById(decoded.userId).select("-password");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     req.user = user;

//     next();
//   } catch (error) {
//     console.log("Error in protectRoute middleware: ", error.message);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

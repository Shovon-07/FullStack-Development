import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const id = req.id;
    const email = req.email;
    return res.status(200).json({ status: true, data: id });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error.message });
  }
};

// import User from "../models/user.model.js";

// export const getUserForSidebar = async (req, res) => {
//   try {
//     const loggedInUser = req.user._id; // from middleware
//     const filteredUser = await User.find({ _id: { $ne: loggedInUser } }).select(
//       "-password"
//     );
//     return res.status(200).json({ status: true, data: filteredUser });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ status: "error", message: error.message });
//   }
// };

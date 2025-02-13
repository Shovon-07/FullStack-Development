import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.id;
    // const loggedInUserEmail = req.email;

    //===> Find all user without me
    const users = await User.find(
      { _id: { $ne: loggedInUserId } },
      { password: 0 }
    );

    return res.status(200).json({ status: true, data: users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error.message });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.id;

    //===> Find user
    const userToChatData = await User.findOne({
      _id: userToChatId,
    });

    //===> Find message
    const message = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });

    return res
      .status(200)
      .json({ status: true, data: message, userToChatData: userToChatData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error.message });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.id;
    const { text, image } = req.body;

    let imgUrl;
    if (image) {
      // ...
      // imgUrl= ...
    }

    const sent = await Message.insertOne({
      senderId: senderId,
      receiverId: receiverId,
      text: text,
      image: imgUrl,
    });

    //===> Realtime transmit messages by socket.io
    /**
     * ...
     **/

    return res.status(201).json({ status: true, data: sent });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error.message });
  }
};

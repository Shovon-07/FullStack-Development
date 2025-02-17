import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

//===> Css
import "./EmojiPicker.css";

const EmojiPickerComponent = ({ onEmojiClick }) => {
  return <EmojiPicker onEmojiClick={onEmojiClick} />;
};

export default EmojiPickerComponent;

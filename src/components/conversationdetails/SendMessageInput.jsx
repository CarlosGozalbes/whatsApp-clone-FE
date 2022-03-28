import React from 'react'
import './sendmessageinput.css'
import { BsEmojiSmile, BsPaperclip, BsMic } from "react-icons/bs";
export default function SendMessageInput() {
  return (
    <div className="send-message-input-container">
      <BsEmojiSmile className="send-message-icons mr-3" />
      <BsPaperclip className="send-message-icons mr-3" />
      <input
        type="text"
        className="send-message-input mr-3"
        placeholder="write a message here"
      />
      <BsMic className="send-message-icons" />
    </div>
  );
}

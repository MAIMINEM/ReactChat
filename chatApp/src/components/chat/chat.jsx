import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>User name</span>
            <p>user description</p>
          </div>
        </div>

        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              asdfljaskdf asdlfkjaskld asdlfkjaskldasdfljaskdf asdlfkjaskld asdlfkjaskldasdfljaskdf asdlfkjaskld
              asdlfkjaskld asdfljaskdf asdlfkjaskld asdlfkjaskld asdfljaskdf asdlfkjaskld asdlfkjaskld{" "}
            </p>
            <span>15 mins ago </span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>asdfljaskdf asdlfkjaskld asdlfkjaskld </p>
            <span>15 mins ago </span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>asdfljaskdf asdlfkjaskld asdlfkjaskld </p>
            <span>15 mins ago </span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://res.cloudinary.com/project-casting/image/upload/x_55,y_0,w_491,h_747,c_crop/v1674105461/0076BSS5ly8gzhdhgy1ooj30u011dwhc_ay30zc.jpg"
              alt=""
            />
            <p>asdfljaskdf asdlfkjaskld asdlfkjaskld </p>
            <span>15 mins ago </span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>asdfljaskdf asdlfkjaskld asdlfkjaskld </p>
            <span>15 mins ago </span>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder="Type message..." value={text} onChange={(e) => setText(e.target.value)} />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !prev)} />
          <EmojiPicker className="emojiPicker " open={open} onEmojiClick={handleEmoji} />
        </div>

        <button className="sendBtn">Send Message</button>
      </div>
    </div>
  );
};
export default Chat;

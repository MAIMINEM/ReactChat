import { useState } from "react";
import "./chatList.css";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder="Search Chat..." />
        </div>

        <img
          className="add"
          src={addMode ? "./minus.png" : "./plus.png"}
          onClick={() => setAddMode((prev) => !prev)}
          alt=""
        />
      </div>

      <div className="chatItem">
        <img src="./avatar.png" alt="" />

        <div className="chatContent">
          <span>user name</span>
          <p>Latest chat message </p>
        </div>
      </div>

      <div className="chatItem">
        <img src="./avatar.png" alt="" />

        <div className="chatContent">
          <span>user name</span>
          <p>Latest chat message </p>
        </div>
      </div>

      <div className="chatItem">
        <img src="./avatar.png" alt="" />

        <div className="chatContent">
          <span>user name</span>
          <p>Latest chat message </p>
        </div>
      </div>

      <div className="chatItem">
        <img src="./avatar.png" alt="" />

        <div className="chatContent">
          <span>user name</span>
          <p>Latest chat message </p>
        </div>
      </div>

      <div className="chatItem">
        <img src="./avatar.png" alt="" />

        <div className="chatContent">
          <span>user name</span>
          <p>Latest chat message </p>
        </div>
      </div>

      <div className="chatItem">
        <img src="./avatar.png" alt="" />

        <div className="chatContent">
          <span>user name</span>
          <p>Latest chat message </p>
        </div>
      </div>

      <div className="chatItem">
        <img src="./avatar.png" alt="" />

        <div className="chatContent">
          <span>user name</span>
          <p>Latest chat message </p>
        </div>
      </div>

      <div className="chatItem">
        <img src="./avatar.png" alt="" />

        <div className="chatContent">
          <span>user name</span>
          <p>Latest chat message </p>
        </div>
      </div>

      <div className="chatItem">
        <img src="./avatar.png" alt="" />

        <div className="chatContent">
          <span>user name</span>
          <p>Latest chat message </p>
        </div>
      </div>

      <div className="chatItem">
        <img src="./avatar.png" alt="" />

        <div className="chatContent">
          <span>user name</span>
          <p>Latest chat message </p>
        </div>
      </div>

      <div className="chatItem">
        <img src="./avatar.png" alt="" />

        <div className="chatContent">
          <span>user name</span>
          <p>Latest chat message </p>
        </div>
      </div>

      <div className="chatItem">
        <img src="./avatar.png" alt="" />

        <div className="chatContent">
          <span>user name</span>
          <p>Latest chat message </p>
        </div>
      </div>

      <div className="chatItem">
        <img src="./avatar.png" alt="" />

        <div className="chatContent">
          <span>user name</span>
          <p>Latest chat message </p>
        </div>
      </div>

      <div className="chatItem">
        <img src="./avatar.png" alt="" />

        <div className="chatContent">
          <span>user name</span>
          <p>Latest chat message </p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;

import "./userInfo.css";

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>User Name </h2>
      </div>

      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./edit.png" alt="" />
        <img src="./video.png" alt="" />
      </div>
    </div>
  );
};

export default UserInfo;

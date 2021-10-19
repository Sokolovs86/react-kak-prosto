import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ss from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={ss.content}>
      <div>
        <img src="https://pbs.twimg.com/media/E_NfXvgX0AEN1sc.jpg" alt="" />
      </div>
      <div>ava + discription</div>
      <MyPosts />
    </div>
  );
};

export default Profile;

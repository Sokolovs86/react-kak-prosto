import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ss from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>

      <ProfileInfo />

      <div>
        <img src="https://pbs.twimg.com/media/E_NfXvgX0AEN1sc.jpg" alt="" />
      </div>
      <div>ava + discription</div>

      <MyPosts />

    </div>
  );
};

export default Profile;

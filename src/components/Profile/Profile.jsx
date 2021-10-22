import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ss from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
      <div>ava + discription</div>
    </div>
  );
};

export default Profile;

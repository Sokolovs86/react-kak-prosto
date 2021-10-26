import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ss from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

/* let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 15 },
  { id: 2, message: "Cool, I'am the best", likesCount: 20 },
]; */

const Profile = (props) => {
  // debugger;
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </div>
  );
};

export default Profile;

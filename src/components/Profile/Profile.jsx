import React from "react";
import { updateNewPostText } from "../../redux/store";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import ss from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

/* let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 15 },
  { id: 2, message: "Cool, I'am the best", likesCount: 20 },
]; */

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;

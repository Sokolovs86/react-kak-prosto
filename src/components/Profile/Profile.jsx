import React from "react";
import { updateNewPostText } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
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
      <MyPosts
        posts={props.profilePage.posts}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;

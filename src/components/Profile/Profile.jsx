import React from "react";
import { updateNewPostText } from "../../redux/store";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer /> 
    </div>
  );
};

export default Profile;

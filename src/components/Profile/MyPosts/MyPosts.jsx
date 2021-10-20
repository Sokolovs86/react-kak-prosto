import React from "react";
import ss from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={ss.posts}>
        <Post likeCount={15} message={"Hi, how are you?"} />
        <Post likeCount={20} message={"Cool, I'am the best"} />
        <Post likeCount={15} />
        <Post likeCount={20} />
      </div>
    </div>
  );
};

export default MyPosts;

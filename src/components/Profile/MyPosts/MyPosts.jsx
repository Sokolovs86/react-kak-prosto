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
        <Post likesCount="15" message={"Hi, how are you?"} />
        <Post likesCount={20} message={"Cool, I'am the best"} />
        <Post message={"Help me"} likesCount={10} />
        <Post message="Yo" likesCount="15" />
        <Post likesCount={20} />
      </div>
    </div>
  );
};

export default MyPosts;

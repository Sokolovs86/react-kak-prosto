import React from "react";
import ss from "./MyPosts.module.css";

const MyPosts = () => {
  return (
      <div>
        My posts
        <div>
          New post
        </div>
        <div className={ss.posts}>
          <div className={ss.item}>
            post 1
          </div>
          <div className={ss.item}>
            post 2
          </div>
        </div>
      </div>
  );
};

export default MyPosts;

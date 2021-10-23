import React from "react";
import ss from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let postsData = [
    { id: 1, post: "Hi, how are you?", likeCount: 15 },
    { id: 2, post: "Cool, I'am the best", likeCount: 20 },
  ];

  return (
    <div className={ss.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={ss.posts}>
        <Post post={postsData[0].post} likesCount={postsData[0].likeCount} id={postsData[0].id} />
        <Post post={postsData[1].post} likesCount={postsData[1].likeCount} id={postsData[1].id} />
        {/* <Post likesCount="15" message={"Hi, how are you?"} />
        <Post likesCount={20} message={"Cool, I'am the best"} />
        <Post message={"Help me"} likesCount={10} />
        <Post message="Yo" likesCount="15" />
        <Post likesCount={20} /> */}
      </div>
    </div>
  );
};

export default MyPosts;

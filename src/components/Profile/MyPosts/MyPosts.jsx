import React from "react";
import ss from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

 /*  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "Cool, I'am the best", likesCount: 20 },
  ]; */

let postsElements = 
  props.posts.map((p) => (<Post message={p.message} likesCount={p.likesCount} />));

let newPostElement = React.createRef();

let addPost = () => {
  //let text = newPostElement.current.value;
  //props.addPost();
  props.dispatch({ type: "ADD-POST" });
  // newPostElement.current.value = ''; // занулить значение value 
  // alert("google.com");
//   let text = document.getElementById('new-post').value;
//   alert(text);
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  //props.updateNewPostText (text);
  let action = ({ type: "UPDATE-NEW-POST-TEXT", newText: text });
  props.dispatch(action);
  //console.log (text);
}
 
  return (
    <div className={ss.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          {/* <textarea id='new-post'></textarea> */}
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={ss.posts}>
        {postsElements}
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

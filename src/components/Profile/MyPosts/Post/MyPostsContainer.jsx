import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import ss from "./MyPosts.module.css";
import Post from "./Post/Post";
//import {addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";

// let addPostActionCreator = () => {
//   return {
//     type: 'ADD-POST',
//   }
// }

// let updateNewPostTextActionCreator = (text) => {
//   return {
//     type: 'UPDATE-NEW-POST-TEXT',
//     newText: text,
//   };
// };



const MyPostsContainer = (props) => {

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
  props.dispatch(addPostActionCreator() );
  // newPostElement.current.value = ''; // занулить значение value 
  // alert("google.com");
//   let text = document.getElementById('new-post').value;
//   alert(text);
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  //props.updateNewPostText (text);
  //let action = ({ type: "UPDATE-NEW-POST-TEXT", newText: text });
  let action = updateNewPostTextActionCreator(text);
  props.dispatch (action);
  //console.log (text);
}
 
  return (<MyPosts updateNewPostText = {() => {let action = updateNewPostTextActionCreator(text);
  props.dispatch(action);}} />);
};

export default MyPostsContainer;

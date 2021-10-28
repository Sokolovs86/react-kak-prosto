import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost, addPosts, updateNewPostText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} /> 
      {/* addPost={ (message) => { alert("IIIIUUUUUU" + message)}} /> тупая компонента */}
    </BrowserRouter>,
    document.getElementById("root")
  );
};
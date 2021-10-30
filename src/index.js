import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost, addPosts, updateNewPostText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
      {/* addPost={ (message) => { alert("IIIIUUUUUU" + message)}} /> тупая компонента */}
    </BrowserRouter>,
    document.getElementById("root")
  );
};

// import Dialogs from './components/Dialogs/Dialogs';

// addPost('Niger, Hi))');

rerenderEntireTree(state);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

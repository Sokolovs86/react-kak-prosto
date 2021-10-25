import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 15 },
  { id: 2, message: "Cool, I'am the best", likesCount: 20 },
];

let dialogsData = [
  { id: 1, name: "Andrei" },
  { id: 2, name: "Dima" },
  { id: 3, name: "Artem" },
  { id: 4, name: "Lev" },
  { id: 5, name: "Petr" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hi Hi" },
  { id: 3, message: "Hello" },
  { id: 4, message: "Hello pa" },
  { id: 5, message: "Yo" },
];

ReactDOM.render(<App posts={posts} dialogsData={dialogsData} messages={messages} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

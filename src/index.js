import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
        
      />
      {/* addPost={ (message) => { alert("IIIIUUUUUU" + message)}} /> тупая компонента */}
    </BrowserRouter>,
    document.getElementById("root")
  );
};

// import Dialogs from './components/Dialogs/Dialogs';

// addPost('Niger, Hi))');

rerenderEntireTree(store.getState() );
store.subscribe(rerenderEntireTree);

reportWebVitals();

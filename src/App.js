import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//import { updateNewPostText } from "./redux/store";

// let SomeComponent = () => <Dialogs />

const App = (props) => {
  /* let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "Cool, I'am the best", likesCount: 20 },
  ]; */
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        
        <Route
          path="/dialogs"
          //render={() => <Dialogs store={props.store} />} />
          render={() => <DialogsContainer />} />
        <Route
          path="/profile"
          // render={() => (
          //   <Profile
          //     profilePage={props.state.profilePage}
          //     dispatch={props.dispatch}
          render={() => <Profile /> } />
        {/* <Route path="/dialogs" render={() => <News />} />
          <Route path="/dialogs" render={() => <Music />} />
          <Route path="/dialogs" render={() => <Settings />} /> */}
      </div>
    </div>
  );
};

export default App;

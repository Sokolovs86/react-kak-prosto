import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { updateNewPostText } from "./redux/state";

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
        {/* <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} /> */}

        {/* <Route path="/dialogs" component={() => SomeComponent} /> */}
        {/* <Route path="/dialogs" render={() => <Dialogs />} /> */}
        {/* <Route exact path="/dialogs"><Dialogs /></Route> */}
        <Route
          path="/dialogs"
          render={() => <Dialogs state={props.state.dialogsPage} />}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={updateNewPostText} />
          )}
        />
        {/* <Route path="/dialogs" render={() => <News />} />
          <Route path="/dialogs" render={() => <Music />} />
          <Route path="/dialogs" render={() => <Settings />} /> */}
      </div>
    </div>
  );
};

export default App;

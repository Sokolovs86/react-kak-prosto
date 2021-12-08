import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
//import { updateNewPostText } from './redux/store';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/Login';
// let SomeComponent = () => <Dialogs />

const App = (props) => {
  
  /* let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "Cool, I'am the best", likesCount: 20 },
  ]; */
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs"
          render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?"
          render={() => <ProfileContainer />} />
        <Route path="/users"
          render={() => <UsersContainer />} />
        <Route path="/login"
          render={() => <LoginPage />}
        />
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
//import { updateNewPostText } from './redux/store';

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
        <Route path="/dialogs" 
          render={() => <DialogsContainer />} />
        <Route path="/profile/:userId"  
          render={() => <ProfileContainer />} />
        <Route path="/users"
          render={() => <UsersContainer />}
        />
      </div>
    </div>
  );
};

export default App;

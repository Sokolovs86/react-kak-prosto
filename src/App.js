import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://w7.pngwing.com/pngs/64/56/png-transparent-warner-bros-studio-tour-hollywood-warner-bros-studios-burbank-film-business-business-emblem-text-label-thumbnail.png' alt='' />
      </header>
      <nav className='nav'>
        <div>
          <a href='#'>Profile</a>
        </div>
        <div>
          <a href='#'>Messages</a>
        </div>
        <div>
          <a href='#'>News</a>
        </div>
        <div>
          <a href='#'>Music</a>
        </div>
        <div>
          <a href='#'>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://pbs.twimg.com/media/E_NfXvgX0AEN1sc.jpg' alt='' />
        </div>
        <div>
          ava + discription
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
            <div>
              <div>
                post 1
              </div>
              <div>
                post 2
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

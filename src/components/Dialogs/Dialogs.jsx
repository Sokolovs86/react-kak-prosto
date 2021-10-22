import React from 'react';
import ss from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialogs-items">
        <div className="dialog">
          Andrei
        </div>
        <div className="dialog">
          Dima
        </div>
        <div className="dialog">
          Artem
        </div>
        <div className="dialog">
          Lev
        </div>
        <div className="dialog">
          Petr
        </div>
      </div>
    <div className="messages">
      <div className="message">Hi</div>
      <div className="messags">Hi Hi</div>
      <div className="message">Hello</div>
      <div className="message">Hello pa</div>
      <div className="message">Hello ma</div>
    </div>
    </div>
  );
};

export default Dialogs;
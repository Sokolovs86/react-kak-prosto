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
      <div className="message"></div>
      <div className="messags"></div>
      <div className="message"></div>
      <div className="message"></div>
      <div className="message"></div>
    </div>
    </div>
  );
};

export default Dialogs;
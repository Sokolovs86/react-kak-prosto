import React from 'react';
import { NavLink } from 'react-router-dom';
import ss from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={ss.dialogs}>
      <div className={ss.dialogsItems}>
        <div className={ss.dialog + " " + ss.active}>
          <NavLink to="/dialogs/1">Andrei</NavLink>
        </div>
        <div className={ss.dialog}>
          <NavLink to="/dialogs/2">Dima</NavLink>
        </div>
        <div className={ss.dialog}>
          <NavLink to="/dialogs/3">Artem</NavLink>
        </div>
        <div className={ss.dialog}>
          <NavLink to="/dialogs/4">Lev</NavLink>
        </div>
        <div className={ss.dialog}>
          <NavLink to="/dialogs/5">Petr</NavLink>
        </div>
      </div>
      <div className={ss.messages}>
        <div className={ss.message}>Hi</div>
        <div className={ss.message}>Hi Hi</div>
        <div className={ss.message}>Hello</div>
        <div className={ss.message}>Hello pa</div>
        <div className={ss.message}>Hello ma</div>
      </div>
    </div>
  );
};

export default Dialogs;
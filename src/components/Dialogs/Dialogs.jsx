import React from 'react';
import { NavLink } from 'react-router-dom';
import ss from './Dialogs.module.css';

const DialogItem = (props) => {

  let path = "/dialogs/" + props.id; 

  return (
    <div className={ss.dialog + " " + ss.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

const Dialogs = (props) => {
  return (
    <div className={ss.dialogs}>
      <div className={ss.dialogsItems}>

        <DialogItem name='Andrei' id='1' />
        <DialogItem name='Dima' id='2' />
        <DialogItem name='Artem' id='3' />
        <DialogItem name='Lev' id='4' />
        <DialogItem name='Petr' id='5' />
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
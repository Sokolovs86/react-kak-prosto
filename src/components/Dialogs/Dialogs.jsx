import React from "react";
import { NavLink } from "react-router-dom";
import ss from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={ss.dialog + " " + ss.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={ss.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={ss.dialogs}>
      <div className={ss.dialogsItems}>
        <DialogItem name="Andrei" id="1" />
        <DialogItem name="Dima" id="2" />
        <DialogItem name="Artem" id="3" />
        <DialogItem name="Lev" id="4" />
        <DialogItem name="Petr" id="5" />
      </div>
      <div className={ss.messages}>
        <Message message="Hi" />
        <Message message="Hi Hi" />
        <Message message="Hello" />
        <Message message="Hello pa" />
        <Message message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;

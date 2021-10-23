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

  let dialogsData = [
    {id: 1, name: 'Andrei'}, 
    {id: 2, name: 'Dima'}, 
    {id: 3, name: 'Artem'}, 
    {id: 4, name: 'Lev'}, 
    {id: 5, name: 'Petr'}, 
  ];

  let messagesData = [
    { id: 1, name: "Hi" },
    { id: 2, name: "Hi Hi" },
    { id: 3, name: "Hello" },
    { id: 4, name: "Hello pa" },
    { id: 5, name: "Yo" },
  ];
    
    // let d= {
    //   id: 2,
    //   name: 'Dimas',
    // };

  return (
    <div className={ss.dialogs}>
      <div className={ss.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
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

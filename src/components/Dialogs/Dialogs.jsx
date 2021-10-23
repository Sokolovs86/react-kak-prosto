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

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hi Hi" },
    { id: 3, message: "Hello" },
    { id: 4, message: "Hello pa" },
    { id: 5, message: "Yo" },
  ];

  let dialogsElements = dialogsData
  .map( d => <DialogItem name={d.name} id={d.id} /> );

  let messagesElements = messages.map((message) => (
    <Message message={message.message} />
  ));

    // let d= {
    //   id: 2,
    //   name: 'Dimas',
    // };

  return (
    <div className={ss.dialogs}>
      <div className={ss.dialogsItems}>

        {dialogsElements}

        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
      </div>
      <div className={ss.messages}>
        {/* <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} /> */}
      </div>
    </div>
  );
};

export default Dialogs;

import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import ss from "./Dialogs.module.css";
import Message from "./Message/Message";

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

  let messagesElements = messages.map((m) => (
    <Message message={m.message} />
  ));

    // let d= {
    //   id: 2,
    //   name: 'Dimas',
    // };

  return (
    <div className={ss.dialogs}>
      <div className={ss.dialogsItems}>
          {dialogsElements}
      </div>
      <div className={ss.messages}>
          {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;

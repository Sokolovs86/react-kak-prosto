import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import ss from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
  let messagesElements = props.state.messages.map((m) => (<Message message={m.message} />));

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

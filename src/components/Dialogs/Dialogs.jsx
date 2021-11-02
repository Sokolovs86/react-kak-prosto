import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import ss from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
let messagesElements = props.state.messages.map((m) => (<Message message={m.message} />));
let newMessageBody = props.state.newMessageBody;

let onSendMessageClick = () => {
  
}

let onNewMessageChange = () => {
  
};

// let newMessageElement = React.createRef();

// let addMessages = () => {
// let text = newMessageElement.current.value;
// alert(text);
// }

    // let d= {
    //   id: 2,
    //   name: 'Dimas',
    // };

  return (
    <div className={ss.dialogs}>
      {/* <h3>My messages</h3>
      <div>
        <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={addMessages}>Add message</button>
        </div>
      </div> */}

      <div className={ss.dialogsItems}>{dialogsElements}</div>
      <div className={ss.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

import React from "react";
import ss from "./../Dialogs.module.css";

const Message = (props) => {

let newMessageElement = React.createRef();

let addMessages = () => {
  let text = newMessageElement.current.value;
  alert(text);
}

return (
  <div>
    <textarea ref={newMessageElement}></textarea>
    <div>
      <button onClick={addMessages}>Add message</button>
    </div>
    <div>
      <div className={ss.message}>{props.message}</div>
      <div></div>
    </div>
  </div>
);
};

export default Message;

import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import ss from './Dialogs.module.css';
import Message from './Message/Message';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
  //let state = props.store.getState().dialogsPage;
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    //props.store.dispatch(sendMessageCreator());
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    // e = event
    let body = e.target.value;
    //props.store.dispatch(updateNewMessageBodyCreator(body));
    props.updateNewMessageBody(body);
  };

  if (!props.isAuth) return <Redirect to = {"/login"} />;
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

      <div className={ss.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={ss.messages}>
        <div>{messagesElements}</div>

      </div>
      <AddMessageFormRedux />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component='textarea' name='newMessageBody' placeholder='Enter your message' />
        </div>
        <div><button>Send</button></div>
      </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);


export default Dialogs;

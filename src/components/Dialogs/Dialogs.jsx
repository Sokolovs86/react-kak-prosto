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

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to = {"/login"} />;

  return (
    <div className={ss.dialogs}>
      <div className={ss.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={ss.messages}>
        <div>{messagesElements}</div>

      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
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

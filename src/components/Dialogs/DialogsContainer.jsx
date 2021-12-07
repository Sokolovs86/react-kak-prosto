import React from 'react';
import ss from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
      updateNewMessageBody: (body) => {
          dispatch(updateNewMessageBodyCreator(body));
      },
      sendMessage: () => {
          dispatch(sendMessageCreator());
      },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
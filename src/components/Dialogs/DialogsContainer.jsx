import React from 'react';
import ss from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';
import {connect} from "react-redux";

const DialogsContainer = () => {
            
            return <StoreContext.Consumer> 
            { store => {
               let onSendMessageClick = () => {
                 store.dispatch(sendMessageCreator());
               };

               let onNewMessageChange = (body) => {
                 store.dispatch(updateNewMessageBodyCreator(body));
               };
               return <Dialogs updateNewMessageBody={onNewMessageChange} 
                      sendMessage={onSendMessageClick}
                      dialogsPage={store.getState().dialogsPage}/>
            }
           }
           </StoreContext.Consumer>
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};

let mapDispatchToProps = () => {
    return {
      updateNewMessageBody: () => {
          store.dispatch(sendMessageCreator());
      },
      sendMessage: () => {
          store.dispatch(updateNewMessageBodyCreator(body));
      },
    };
};

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
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

let f1 = () => {
    return {
        a: 1,
        b: 2,
    };
};

let f2 = () => {
    return {
        c: 3,
    };
};

const SuperDialogsContainer = connect (f1, f2) (Dialogs);

export default DialogsContainer;
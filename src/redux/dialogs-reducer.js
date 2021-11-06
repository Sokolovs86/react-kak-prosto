const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Andrei" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Artem" },
    { id: 4, name: "Lev" },
    { id: 5, name: "Petr" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hi Hi" },
    { id: 3, message: "Hello" },
    { id: 4, message: "Hello pa" },
    { id: 5, message: "Yo" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {

  // let stateCopy = {...state};
  // stateCopy.messages = [...state.messages];
  let stateCopy;
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      stateCopy = {
        ...state,
        newMessageBody: action.body
      };
      return stateCopy;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      stateCopy.newMessageBody = "";
      stateCopy = {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }],
      };
      return stateCopy;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;

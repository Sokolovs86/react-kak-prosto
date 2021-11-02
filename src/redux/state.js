const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "Cool, I'am the best", likesCount: 20 },
      ],
      newPostText: "it-kabzda", //"it-kabzda"
    },

    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hi Hi" },
        { id: 3, message: "Hello" },
        { id: 4, message: "Hello pa" },
        { id: 5, message: "Yo" },
      ],
    newMessageBody: "",

      dialogs: [
        { id: 1, name: "Andrei" },
        { id: 2, name: "Dima" },
        { id: 3, name: "Artem" },
        { id: 4, name: "Lev" },
        { id: 5, name: "Petr" },
      ],
    },
    sidebar: {
      sidebarPage: [{}],
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // паттерн observer addEventListener похож на publisher-subscriber
  },

  dispatch(action) {
    // { type: 'ADD-POST' }
    if (action.type === ADD_POST) {
      // this._addPost ();
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 25,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      // this._updateNewPostText (action.newText);
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this.state.dialogsPage.newMessageBody = action.bodyText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  },
};

// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST,
//   };
// };
export const addPostActionCreator = () => ({type: ADD_POST});

// export const updateNewPostTextActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text,
//   };
// };
export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => 
({ type: UPDATE_NEW_MESSAGE_BODY, body: text,});

export default store;
window.store = store;
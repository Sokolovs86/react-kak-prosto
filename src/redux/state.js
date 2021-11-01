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
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer; // паттерн observer addEventListener похож на publisher-subscriber
  },

  _addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 25,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch (action) { // { type: 'ADD-POST' }
if (action.type === "ADD-POST") {
    this._addPost ();
//   let newPost = {
//     id: 3,
//     message: this._state.profilePage.newPostText,
//     likesCount: 25,
//   };

//   this._state.profilePage.posts.push(newPost);
//   this._state.profilePage.newPostText = "";
//   this._callSubscriber(this._state);
} else if (action.type === "UPDATE-NEW-POST-TEXT") {
    this._updateNewPostText (action.newText);
//   this._state.profilePage.newPostText = action.newText;
//   this._callSubscriber(this._state);
}
  }
};

export default store;
window.state = store;
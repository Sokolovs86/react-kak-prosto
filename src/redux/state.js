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
    rerenderEntireTree ()  {
    console.log ('state changed');
},
    addPost ()  {
    let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 25,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._rerenderEntireTree(this._state);
},
    updateNewPostText (newText)  {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
    },
    subscribe (observer)  {
    this._rerenderEntireTree = observer; // паттерн observer addEventListener похож на publisher-subscriber
},

}

export default store;
window.state = store;
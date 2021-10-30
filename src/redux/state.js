let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 15 },
      { id: 2, message: "Cool, I'am the best", likesCount: 20 },
    ],
    newPostText: ('') //"it-kabzda"
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
};

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 25,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
        rerenderEntireTree(state);
    };
    
export default state;
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    // this._addPost ();
    let newPost = {
      id: 3,
      message: state.newPostText,
      likesCount: 25,
    };

    state.posts.push(newPost);
    state.newPostText = "";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    // this._updateNewPostText (action.newText);
    state.newPostText = action.newText;
  }

  return state;
};

export default profileReducer;
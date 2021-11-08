const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "Cool, I'am the best", likesCount: 20 },
    { id: 3, message: "Yo", likesCount: 10 },
    { id: 4, message: "Hello bitch", likesCount: 5 },
  ],
  newPostText: "it-kabzda", //"it-kabzda"
};
// let sum (a = -1, b= 0) => {
//     return a + b;
// }
// sum();

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default usersReducer;

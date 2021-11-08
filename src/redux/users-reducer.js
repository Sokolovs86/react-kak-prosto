const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  users: [
    { id: 1, fullName: "Dmitri D.", status: "I'm boss", location: {city: "Minsk", country: "Belarus"} },
    { id: 2, fullName: "Elena M.", status: "I'm full", location: {city: "Moscow", country: "Russia"}},
    { id: 3, fullName: "Isabella F..", status: "I'm cool", location: {city: "Toronto", country: "Canada"}},
    { id: 4, fullName: "Peter G.", status: "I'm hungry", location: {city: "Kazan", country: "Sweden"}},
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

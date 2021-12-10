import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "Cool, I'am the best", likesCount: 20 },
    { id: 3, message: "Yo", likesCount: 10 },
    { id: 4, message: "Hello bitch", likesCount: 5 },
  ],
  newPostText: "it-kamasutra.com",
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: { 
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 25,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile}
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({type: SET_STATUS, status });


export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setUserProfile(response.data) );
  });
};

export const getStatus = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setStatus(response.data) );
  });
};

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;

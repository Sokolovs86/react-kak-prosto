import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
  dialogsReducer: dialogsReducer,
  profileReducer: profileReducer,
  sidebarReducer: sidebarReducer,
});

let store = createStore();

export default store;
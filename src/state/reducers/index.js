import { combineReducers } from "redux";
import { LOGOUT } from "../actions/userActions";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import profileReducer from "./profileReducer";
export const USER_LOGOUT = "USER_LOGOUT";
const appReducers = combineReducers({
  user: userReducer,
  posts: postReducer,
  profile: profileReducer,
});
// So we can clean the global state after logout
const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    return appReducers(undefined, action);
  }
  return appReducers(state, action);
};

export default rootReducer;

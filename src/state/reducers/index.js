import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from './postReducer';
const reducers = combineReducers({
    user:userReducer,
    posts:postReducer
})

export default reducers
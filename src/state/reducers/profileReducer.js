import {
  GET_PROFILE_INFO,
  REMOVE_FOLLOWER,
  ADD_FOLLOWER,
  CLEAN_UP_PROFILE,
} from "../actions/profileActions";

const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILE_INFO:
      return action.payload ? action.payload : {};
    case ADD_FOLLOWER:
      return { ...state, followers: state.followers.concat(action.payload) };
    case REMOVE_FOLLOWER:
      return {
        ...state,
        followers: state.followers.filter(
          (toKeep) => toKeep !== action.payload
        ),
      };
    case CLEAN_UP_PROFILE:
      return {};
    default:
      return state;
  }
};

export default profileReducer;

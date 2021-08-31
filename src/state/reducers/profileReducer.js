import { GET_PROFILE_INFO } from "../actions/profileActions";

const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILE_INFO:
      return action.payload ? action.payload : {};

    default:
      return state;
  }
};

export default profileReducer;

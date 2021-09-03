export const GET_PROFILE_INFO = "GET_PROFILE_INFO";
export const ADD_FOLLOWER = "ADD_FOLLOWER";
export const REMOVE_FOLLOWER = "REMOVE_FOLLOWER";
export const CLEAN_UP_PROFILE = "CLEAN_UP_PROFILE";
export const getProfileInfo = (profile) => {
  return {
    type: GET_PROFILE_INFO,
    payload: profile,
  };
};

export const addFollower = (userId) => {
  return {
    type: ADD_FOLLOWER,
    payload: userId,
  };
};

export const removeFollower = (userId) => {
  return {
    type: REMOVE_FOLLOWER,
    payload: userId,
  };
};

export const cleanUpProfile = () => {
  return {
    type: CLEAN_UP_PROFILE,
  };
};

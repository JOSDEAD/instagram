export const GET_PROFILE_INFO = 'GET_PROFILE_INFO'


export const getProfileInfo = (profile) =>{
    return {
        type: GET_PROFILE_INFO,
        payload: profile
    }
}
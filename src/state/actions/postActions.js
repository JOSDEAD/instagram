export const GET_ALL_POST = 'GET_ALL_POST';
export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const getAllPost = (posts) => {
    return ({
        type: GET_ALL_POST,
        payload: posts
    })
}

export const addLikeToPost = (docId,userId) => {
    return ({
        type:ADD_LIKE,
        payload:{
            docId,
            userId
        }
    })
}

export const removeLikeToPost = (docId,userId) => {
    return ({
        type:REMOVE_LIKE,
        payload:{
            docId,
            userId
        }
    })
}
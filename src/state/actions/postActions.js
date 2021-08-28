export const GET_ALL_POST = 'GET_ALL_POST';
export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const ADD_COMMENT = 'ADD_COMMENT';
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

export const addCommentToPost = (docId,username,comment) => {
    return ({
        type: ADD_COMMENT,
        payload:{
            docId,
            comment: [{
                comment,
                displayName:username
            }]
        }
    })
}
export const GET_ALL_POST = 'GET_ALL_POST'

export const getAllPost = (posts) => {
    return ({
        type: GET_ALL_POST,
        payload: posts
    })
}


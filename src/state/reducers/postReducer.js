import {GET_ALL_POST , ADD_LIKE, REMOVE_LIKE} from '../actions/postActions';

const postReducer = (state=null, action) => {
    switch (action.type) {
        case GET_ALL_POST:
           return state?state.concat(action.payload):action.payload ;
        case ADD_LIKE:
            return addLike(state,action.payload.docId,action.payload.userId)
        case REMOVE_LIKE:
            return removeLike(state,action.payload.docId,action.payload.userId)
        default:
            return state;
    }
}

const addLike = (posts , docId, userId) => posts.map(post => post.docId===docId?{...post,likes:post.likes.concat(userId)}:{...post});
const removeLike = (posts , docId, userId) => posts.map(post => post.docId===docId?{...post,likes:post.likes.filter(id => id !== userId)}:{...post});

export default postReducer
import {GET_ALL_POST} from '../actions/postActions';

const postReducer = (state=null, action) => {
    switch (action.type) {
        case GET_ALL_POST:
           return state?state.concat(action.payload):action.payload ;
        default:
            return state;
    }
}

export default postReducer
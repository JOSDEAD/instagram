import { LOGIN_OK } from "../actions/userActions";

const userReducer = (state={},action) => {
    switch (action.type) {
        case LOGIN_OK:
            return ({...state,...action.payload});
        default:
            return state;
    }

}

export default userReducer
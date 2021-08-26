import { LOGIN_OK,LOGOUT } from "../actions/userActions";

const userReducer = (state={},action) => {
    switch (action.type) {
        case LOGIN_OK:
            return ({...state,...action.payload});
        case LOGOUT:
            return ({})
        default:
            return state;
    }

}

export default userReducer
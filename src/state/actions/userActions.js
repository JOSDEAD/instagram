import { getUserInfoById } from "../../services/firebase";
export const LOGIN_OK = 'LOGIN_OK'
export const LOGOUT = 'LOGOUT'

export const loginOk = (user) => {
    return async (dispatch)=>{
        const userInfo = await getUserInfoById(user.uid);
        dispatch({      
            type: LOGIN_OK,
            payload: userInfo[0]
        })
    }
}

export const logOut = () => {
    return {
      type: LOGOUT
    }
  }

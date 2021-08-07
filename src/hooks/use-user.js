import { useContext, useEffect, useState } from "react"
import UserContext from "../context/user"
import { getUserInfoById } from "../services/firebase";


const useUser = () =>{
    const user = useContext(UserContext);
    const [userInfo,setUserInfo]=useState([])
    useEffect(()=>{
        if(user?.uid){
            getUserInfoById(user.uid)
            .then(([user])=>setUserInfo(user))
        }
    },[user])
    return {user:userInfo}
}

export default useUser
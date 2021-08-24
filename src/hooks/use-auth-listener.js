import { useState,useEffect,useContext } from "react"
import FirebaseContext from "../context/firebase"
import { useDispatch } from "react-redux"
import {loginOk,logOut} from '../state/actions/userActions'

const useAuthListener = () =>{
    const {firebase} = useContext(FirebaseContext);
    const dispatch = useDispatch();
    useEffect(()=>{
        const listener = firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                //user if signed in, therefore we should add it to the local storage
                localStorage.setItem('authUser',JSON.stringify(user))
                dispatch(loginOk(user));
            }
            else{
                //Not Signed in
                localStorage.removeItem('authUser')
                dispatch(logOut);
            }

        })
        //close the listener connection
        return () => listener()
    },[firebase,dispatch])
}
export default useAuthListener
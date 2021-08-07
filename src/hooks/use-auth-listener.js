import { useState,useEffect,useContext } from "react"
import FirebaseContext from "../context/firebase"
const useAuthListener = () =>{
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('authUser')))
    const {firebase} = useContext(FirebaseContext);
    useEffect(()=>{
        const listener = firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                //user if signed in, therefore we should add it to the local storage
                localStorage.setItem('authUser',JSON.stringify(user))
                setUser(user)
            }
            else{
                //Not Signed in
                localStorage.removeItem('authUser')
                setUser(null)
            }

        })
        //close the listener connection
        return () => listener()
    },[firebase])
    return user;
}
export default useAuthListener
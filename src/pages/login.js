import { useState,useContext, useEffect} from "react";
import { useHistory } from "react-router";
import FirebaseContext from "../context/firebase";


const Login = () => {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [emailAddress,setEmailAddress] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const isInvalid= emailAddress === "" | password === "";

    const handleLogin = () => {}
    
    useEffect(()=>{
        document.title = "Login - Instagram"
    },[]);
    return <p>Login Page</p>;
}

export default Login;
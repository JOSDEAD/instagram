import { firebase,FieldValue } from "../lib/firebase";

const doesUserNameExist = (username) =>{
    const userExists =  firebase
    .firestore()
    .collection("users")
    .where("username","==",username)
    .get()
    .then(result => result.docs.length>0)
    
    return userExists   
}

export  {doesUserNameExist}
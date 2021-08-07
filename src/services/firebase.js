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
const getUserInfoById = (uid) =>{
    const userInfo = firebase
    .firestore()
    .collection("users")
    .where("userId","==",uid)
    .get()
    .then(result => result.docs.map((item)=>({
        ...item.data(),
        docId:item.id
    })
    ))
    return userInfo
}

export  {doesUserNameExist,getUserInfoById}
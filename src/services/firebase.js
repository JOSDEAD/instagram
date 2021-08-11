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
const getRecomendationForUser = (id,following)=>{
    const recomendation = firebase
    .firestore()
    .collection("users")
    .limit(10)
    .get()
    .then(recomendation => {
        const userArray=recomendation.docs.map(item=>({...item.data(),docId:item.id}))
        return userArray.filter(({userId})=>userId!==id && !following.includes(userId))
    })
    return recomendation
}
export  {doesUserNameExist,getUserInfoById,getRecomendationForUser} 
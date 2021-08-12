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
// followedDocId = The user that was followed
// follower = the user that want to follow someone
const updateFollowers = (followedDocId,follower,isFollower) =>{
    return firebase
    .firestore()
    .collection("users")
    .doc(followedDocId)
    .update({followers:isFollower?FieldValue.arrayRemove(follower):FieldValue.arrayUnion(follower) // If it's already following then remove it from the followers
    })
}
// docId = the current user profile
// followed = the user that was followed
// We are adding the use that was followed to the following of the current user
const updateFollowings = (docId,followed,isFollowingProfile) =>{
    return firebase
   .firestore()
   .collection("users")
   .doc(docId)
   .update({
       following:isFollowingProfile?FieldValue.arrayRemove(followed):FieldValue.arrayUnion(followed) // If I'm already following that person remove it from my followings
    })
}

export  {doesUserNameExist,getUserInfoById,getRecomendationForUser,updateFollowers,updateFollowings} 
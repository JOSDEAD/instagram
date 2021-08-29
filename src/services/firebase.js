import { firebase, FieldValue } from "../lib/firebase";

const doesUserNameExist = (username) => {
  const userExists = firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get()
    .then((result) => result.docs.length > 0);

  return userExists;
};
const getUserInfoById = (uid) => {
  const userInfo = firebase
    .firestore()
    .collection("users")
    .where("userId", "==", uid)
    .get()
    .then((result) =>
      result.docs.map((item) => ({
        ...item.data(),
        docId: item.id,
      }))
    );
  return userInfo;
};
const getUserInfoByUsername = (username) => {
    const userInfo = firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get()
    .then((result) =>
      result.docs.map((item) => ({
        ...item.data(),
        docId: item.id,
      }))
    );
  return userInfo;
};
const getRecomendationForUser = (id, following) => {
  const recomendation = firebase
    .firestore()
    .collection("users")
    .limit(10)
    .get()
    .then((recomendation) => {
      const userArray = recomendation.docs.map((item) => ({
        ...item.data(),
        docId: item.id,
      }));
      return userArray.filter(
        ({ userId }) => userId !== id && !following.includes(userId)
      );
    });
  return recomendation;
};
// followedDocId = The user that was followed
// follower = the user that want to follow someone
const updateFollowers = (followedDocId, follower, isFollower) => {
  return firebase
    .firestore()
    .collection("users")
    .doc(followedDocId)
    .update({
      followers: isFollower
        ? FieldValue.arrayRemove(follower)
        : FieldValue.arrayUnion(follower), // If it's already following then remove it from the followers
    });
};
// docId = the current user profile
// followed = the user that was followed
// We are adding the use that was followed to the following of the current user
const updateFollowings = (docId, followed, isFollowingProfile) => {
  return firebase
    .firestore()
    .collection("users")
    .doc(docId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(followed)
        : FieldValue.arrayUnion(followed), // If I'm already following that person remove it from my followings
    });
};

const getUserPhotos = async (followingList, userId) => {
  const photosResult = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "in", followingList)
    .get();

  const photosWithDocId = photosResult.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));

  const photosToShow = await Promise.all(
    photosWithDocId.map(async (photo) => {
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      const user = await getUserInfoById(photo.userId);
      const { username } = user[0];
      return { userLikedPhoto, username, ...photo };
    })
  );
  return photosToShow;
};

const likePost = (postDoctId, userId, liked) => {
  const toggleLike = firebase
    .firestore()
    .collection("photos")
    .doc(postDoctId)
    .update({
      likes: liked
        ? FieldValue.arrayRemove(userId)
        : FieldValue.arrayUnion(userId), //If the user likes it, then dislike the photo
    });
  return toggleLike;
};

const commentToPost = (docId, username, comment) => {
  const commentToAdd = firebase
    .firestore()
    .collection("photos")
    .doc(docId)
    .update({
      comments: FieldValue.arrayUnion({ displayName: username, comment }),
    });
  return commentToAdd;
};

export {
  doesUserNameExist,
  getUserInfoById,
  getRecomendationForUser,
  updateFollowers,
  updateFollowings,
  getUserPhotos,
  likePost,
  commentToPost,
  getUserInfoByUsername
};

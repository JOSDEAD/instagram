import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
import {getUserPhotosbyUserId} from '../../services/firebase';
import {getAllPost} from '../../state/actions/postActions';
const UserProfile = () => {
  const profile = useSelector((state) => state.profile);
  const photos = useSelector((state) => state.posts)
  const dispatch = useDispatch();

  useEffect(()=>{
    if(profile?.userId){
      getUserPhotosbyUserId(profile.userId)
      .then((photos) => {
        dispatch(getAllPost(photos))
      })
    }
  },[profile?.userId])
  return (
    <>
      <Header profile={profile} photosCount={photos?.length} />
    </>
  );
};

export default UserProfile;

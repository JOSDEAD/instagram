import { useEffect, useMemo, useState } from "react";
import { getUserPhotos } from "../services/firebase";
import { useSelector, useDispatch } from "react-redux";
import { getAllPost } from "../state/actions/postActions";
const usePhotos = (user) => {
  const [photos, setPhotos] = useState();
  const { following, userId } = user;
  const followingList = useMemo(() => {
    return following && userId ? [...following, userId] : null;
  }, [following, userId]);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(followingList, userId);
    const getTimeLinePhotos = async () => {
      if (followingList) {
        const photos = await getUserPhotos(followingList, userId);
        const photosInOrder = photos.sort(
          (a, b) => b.dateCreated - a.dateCreated
        );
        setPhotos(photosInOrder);
        dispatch(getAllPost(photosInOrder));
      }
    };
    getTimeLinePhotos();
  }, [followingList, userId]);

  return { photos };
};

export default usePhotos;

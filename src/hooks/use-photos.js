import { useEffect, useMemo, useState } from "react";
import useUser from "./use-user";
import {getUserPhotos} from '../services/firebase';
import { useSelector } from "react-redux";
const usePhotos = () =>{
    const [photos,setPhotos] = useState();
    const {following,userId} = useSelector(state=>state.user);
    const followingList = useMemo(()=>{return following && userId?[...following,userId]:null},[following,userId]);

    useEffect(()=>{
        const getTimeLinePhotos = async () =>{
            if(followingList){
                const photos = await getUserPhotos(followingList,userId);
                const photosInOrder = photos.sort((a,b) => a.dateCreated - b.dateCreated)
                setPhotos(photosInOrder);
            }
        }
        getTimeLinePhotos();
    },[followingList,userId])

    return {photos}
}

export default usePhotos
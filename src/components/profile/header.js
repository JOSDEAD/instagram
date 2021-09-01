import { useState } from "react";
import { useEffect } from "react";
import { DEFAULT_IMAGE_PATH } from "../../constants/paths";
import Skeleton from 'react-loading-skeleton';
import { useSelector } from "react-redux";
const Header = ({ profile }) => {
    const {userId,docId} = useSelector(state => state.user)
    const isOwnProfile = userId === profile.userId;
    const [isFollowingProfile,setIsFollowingProfile] = useState("");

    useEffect(()=>{
      setIsFollowingProfile(profile?.followers?.includes(userId))
    },[profile,userId])

    return (
    <header className="grid grid-cols-3 mb-11 ">
      <div className="flex justify-end mr-8">
        {profile ?
        <img
          className="rounded-full h-36 w-36 flex"
          src={`/images/avatars/${profile.username}.jpg`}
          alt={`${profile?.username} profile`}
          onError={(e) => {
            e.target.src = DEFAULT_IMAGE_PATH;
          }}
        />
        :
          <Skeleton circle height={150} width={150} count={1} />
        }
      </div>
      <div className="flex items-start justify-center flex-col col-span-2">
        <div className="container flex justify-start">
          <span>{profile.username}</span>
          {!isOwnProfile && (
          <button type="button">{isFollowingProfile ? "UnFollow" : "Follow"}</button>
          )
          }
        </div>
        <div className="flex justify-between">
          <span>25 publicaciones</span>
          <span>96 seguidores</span>
          <span>6 seguidore</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

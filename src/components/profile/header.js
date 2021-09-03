import { useState } from "react";
import { useEffect } from "react";
import { DEFAULT_IMAGE_PATH } from "../../constants/paths";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import {
  addFollower,
  removeFollower,
} from "../../state/actions/profileActions";
import { updateFollowers, updateFollowings } from "../../services/firebase";

const Header = ({ profile, photosCount }) => {
  const { userId, docId } = useSelector((state) => state.user);
  const isOwnProfile = userId === profile.userId;
  const [isFollowingProfile, setIsFollowingProfile] = useState("");
  const followersCount = profile?.followers?.length;
  const followingCount = profile?.following?.length;
  const dispatch = useDispatch();
  useEffect(() => {
    setIsFollowingProfile(profile?.followers?.includes(userId));
  }, [profile, userId]);

  const handleFollow = () => {
    const updatedFollowers = updateFollowers(
      profile.docId,
      userId,
      isFollowingProfile
    );
    const updatedFolowings = updateFollowings(
      docId,
      profile.userId,
      isFollowingProfile
    );
    Promise.all([updatedFollowers, updatedFolowings]).then(
      isFollowingProfile
        ? dispatch(removeFollower(userId))
        : dispatch(addFollower(userId))
    );
  };
  return (
    <header className="grid grid-cols-3 gap-4 justify-between mb-11 ">
      <div className="flex justify-end mr-8">
        {profile ? (
          <img
            className="rounded-full h-36 w-36 flex"
            src={`/images/avatars/${profile.username}.jpg`}
            alt={`${profile?.username} profile`}
            onError={(e) => {
              e.target.src = DEFAULT_IMAGE_PATH;
            }}
          />
        ) : (
          <Skeleton circle height={150} width={150} count={1} />
        )}
      </div>
      <div className="flex items-start justify-center flex-col col-span-2">
        <div className="container flex justify-start items-center">
          <span>{profile.username}</span>
          {!isOwnProfile && (
            <button
              type="button"
              onClick={handleFollow}
              className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8 ml-5"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleFollow();
              }}
            >
              {isFollowingProfile ? "UnFollow" : "Follow"}
            </button>
          )}
        </div>
        <div className="flex justify-between mt-4">
          {!profile || !(photosCount >= 0) ? (
            <Skeleton count={1} width={300} height={24} />
          ) : (
            <>
              <p className="mr-10">
                <span className="font-bold">{`${photosCount}`} </span> posts
              </p>
              <p className="mr-10">
                <span className="font-bold">{followersCount}</span> 
                {` ${followersCount === 1 ? `Follower`: `Followers`}`}
              </p>
              <p className="mr-10">
                <span className="font-bold">{followingCount}</span> Following
              </p>
            </>
          )}
        </div>
        <div className="container mt-4">
          <p className="font-medium">
            {!profile?.fullName ? (
              <Skeleton count={1} height={24} />
            ) : (
              profile.fullName
            )}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { getRecomendationForUser } from "../../services/firebase";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import SuggestedProfile from "./suggestedProfile";
import Proptypes from "prop-types";
const Recomendation = ({ userId, docId, following }) => {
  const [profiles, setProfiles] = useState(null);
  useEffect(() => {
    if (userId) {
      getRecomendationForUser(userId, following).then((profiles) =>
        setProfiles(profiles.slice(0, 5))
      );
    }
  }, [userId, following]);
  return (
    <div>
      {!profiles ? (
        <Skeleton count={1} height={150} className="mt-5" />
      ) : profiles.length > 0 ? (
        <div className="rounded flex flex-col">
          <div className="text-sm flex justify-between align-items items-center mb-2">
            <p className="font-bold text-gray-base">Suggestions for you</p>
          </div>
          <div className="mt-4 grid gap-5">
            {profiles.map((profile) => (
              <SuggestedProfile
                key={profile.docId}
                profileId={profile.userId}
                profileUsername={profile.username}
                profileDocId={profile.docId}
                userDocId={docId}
                userId={userId} // So we can add followers
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
Recomendation.propTypes = {
  userId: Proptypes.string,
  docId: Proptypes.string,
  following: Proptypes.array,
};

export default Recomendation;

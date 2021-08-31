import { useSelector } from "react-redux";
import Header from "./header"

const UserProfile = () => {
  const profile = useSelector(state => state.profile)
  return (
    <>
        <Header profile={profile}/>
    </>
  );
};

export default UserProfile;

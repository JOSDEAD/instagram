import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../components/header";
import { getUserInfoByUsername } from "../services/firebase";
import { NOT_FOUND } from "../constants/routes";
import LoggedContext from "../context/logged";
import UserProfile from "../components/profile";
import { useDispatch } from "react-redux";
import { getProfileInfo } from "../state/actions/profileActions";

const Profile = () => {
  const isLogged = useContext(LoggedContext);
  const { username } = useParams();
  const [userInfo, setUserInfo] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    getUserInfoByUsername(username).then(([info]) => {
      info?.userId
        ? setUserInfo(info) || dispatch(getProfileInfo(info))
        : history.push(NOT_FOUND);
    });
  }, [username]);
  return (
    <>
      {userInfo && (
        <div className="bg-gray-background">
          <Header isLogged={isLogged} />
          <div className="mx-auto max-w-screen-lg">
            <UserProfile/>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

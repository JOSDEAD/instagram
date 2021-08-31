import { useState, useContext, useEffect, useMemo } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import * as SERVICE from "../services/firebase";

const SignUp = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid =
    (emailAddress === "") |
    (password === "") |
    (userName === "") |
    (fullName === "");
  const handleSignUp = (event) => {
    event.preventDefault();
    SERVICE.doesUserNameExist(userName)
      .then((userExist) => {
        if (!userExist) {
          // Manage authentication
          firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((createdUser) => {
              // Add display name to the created user
              createdUser.user.updateProfile({ displayName: userName });
              // Link the user with the firestore colletion (users)
              firebase
                .firestore()
                .collection("users")
                .add({
                  userId: createdUser.user.uid,
                  username: userName.toLowerCase(),
                  fullName: fullName,
                  emailAddress: emailAddress,
                  following: [],
                  followers: [],
                  dateCreated: Date.now(),
                })
                .then(history.push(ROUTES.DASHBOARD))
                .catch((error) => setError(error.message));
            })
            .catch((error) => {
              setError(error.message);
              setUserName("");
              setFullName("");
              setEmailAddress("");
              setPassword("");
            });
        } else {
          setError("Username is already in use.");
          setUserName("");
        }
      })
      .catch((error) => {
        // In Case we can't verify if the user exists
        setUserName("");
        setFullName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  useEffect(() => {
    document.title = "SignUp - Instagram";
  }, []);
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="Iphone with profile" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="" className="mt-2 w-6/12 mb-4" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          <form onSubmit={handleSignUp} method="POST">
            <input
              aria-label="Enter your username"
              placeholder="Username"
              type="text"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(event) => setUserName(event.target.value)}
              value={userName}
            />

            <input
              aria-label="Enter your full name"
              placeholder="Full Name"
              type="text"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(event) => setFullName(event.target.value)}
              value={fullName}
            />

            <input
              aria-label="Enter your email address"
              placeholder="Email address"
              type="text"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(event) => setEmailAddress(event.target.value)}
              value={emailAddress}
            />

            <input
              aria-label="Enter your password"
              placeholder="Password"
              type="password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />

            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              {" "}
              Sign Up{" "}
            </button>
          </form>
        </div>
        <div className="flex justify-center flex-col w-full items-center bg-white p-4 border border-gray-primary rounded">
          <p className="text-sm">
            Have an account?{` `}
            {
              <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
                Log In
              </Link>
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

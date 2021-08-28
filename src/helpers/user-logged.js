import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const IsUserLoggedIn = ({ isLogged, loggedInPath, children, ...rest }) => {

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!isLogged) {
          return children;
        } else {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
                state: { from: location },
              }}
            />
          );
        }
      }}
    />
  );
};

IsUserLoggedIn.prototypes = {
  isLogged: PropTypes.object,
  loggedInPath: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default IsUserLoggedIn;

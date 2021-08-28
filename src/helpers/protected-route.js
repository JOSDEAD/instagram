import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";
const ProtectedRoute = ({ isLogged, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isLogged) {
          return children;
        } else {
          return (
            <Redirect
              to={{
                pathname: ROUTES.LOGIN,
                state: { from: location },
              }}
            />
          );
        }
      }}
    />
  );
};

ProtectedRoute.prototypes= {
    isLogged:PropTypes.object,
    children: PropTypes.object.isRequired
}

export default ProtectedRoute;

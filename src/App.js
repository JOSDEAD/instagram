import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import LoggedContext from "./context/logged";
import ProtectedRoute from "./helpers/protected-route";
import IsUserLoggedIn from "./helpers/user-logged";
import useAuthListener from "./hooks/use-auth-listener";
//Lazy allows us to split the bundle into chucks
// it returns a promise, needs to be render inside a suspense component
const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/sign-up"));
const NotFound = lazy(() => import("./pages/not-found"));
const Dashboard = lazy(() => import("./pages/bashboard"));
const Profile = lazy(() => import("./pages/profile"));
function App() {
  const isLogged = useAuthListener();
  return (
    <Router>
      <LoggedContext.Provider value={isLogged}>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <IsUserLoggedIn
              isLogged={isLogged}
              loggedInPath={ROUTES.DASHBOARD}
              path={ROUTES.LOGIN}
            >
              <Login />
            </IsUserLoggedIn>
            <IsUserLoggedIn
              isLogged={isLogged}
              loggedInPath={ROUTES.DASHBOARD}
              path={ROUTES.SIGN_UP}
            >
              <SignUp />
            </IsUserLoggedIn>
            <ProtectedRoute isLogged={isLogged} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            <Route path={ROUTES.PROFILE} component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </LoggedContext.Provider>
    </Router>
  );
}

export default App;

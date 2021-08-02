import { lazy, Suspense } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes';
//Lazy allows us to split the bundle into chucks
// it returns a promise, needs to be render inside a suspense component
const Login = lazy(()=>import('./pages/login'))

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login}/>
      </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

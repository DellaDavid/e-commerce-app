import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
import LandingLayout from './containers/Landing';

function App() {
  return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/home" component={LandingLayout}></Route>
            <Redirect exact from="/" to="/home/product"></Redirect>
          </Switch>
        </Suspense>
      </Router>
  );
}

export default App;

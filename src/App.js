import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
import LandingLayout from './containers/Landing';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import addToCartReducer from '../src/store/reducers/addToCartReducer';

const store = createStore(addToCartReducer);

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/home" component={LandingLayout}></Route>
              <Redirect exact from="/" to="/home/product"></Redirect>
            </Switch>
          </Suspense>
        </Router>
      </Provider>
  );
}

export default App;

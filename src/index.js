import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import APP from './App';

/* pages */
import MOTION from './pages/motion-page'

/* css */
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact
        path='/'
        name='app'
        component={ APP }
      />
      <Route exact
        path='/react-motion'
        name='react-component'
        component={ MOTION }
      />

    </Switch>

  </Router>,
  document.getElementById('root')
);

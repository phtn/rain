import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, browserHistory } from 'react-router-dom'
import APP from './App';

/* pages */
import MOTION from './pages/motion-page'
import MOVE from './pages/move-page'
import MOJS from './pages/mojs-page'
import SANDBOX from './pages/sandbox'


/* css */
import './index.css';

ReactDOM.render(
  <Router onUpdate={ window.scrollTo(0, 0)} history={browserHistory}>
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
      <Route exact
        path='/react-move'
        name='react-component'
        component={ MOVE }
      />
      <Route exact
        path='/mo-js'
        name='react-component'
        component={ MOJS }
      />
      <Route exact
        path='/sandbox'
        name='sandbox'
        component={ SANDBOX }
      />

    </Switch>

  </Router>,
  document.getElementById('root')
);

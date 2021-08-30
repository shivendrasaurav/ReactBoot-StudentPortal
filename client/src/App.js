import 'fdweb/fluent.js';
import 'fdweb/fluent.css';
import 'fdweb/fluent-icons.css';
import './App.css';

import React, { Fragment } from 'react';
import {HashRouter as Router, Route, Switch, Redirect, useHistory} from "react-router-dom";

//import components
import LoginComp from './components/LoginComp';
import HomeComp from './components/HomeComp';
import StudDash from './components/StudDash';

//setup router
const App = () => {
  return (
    <Router history={useHistory}>
      <Fragment>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path="/home" component={HomeComp} />
          <Route exact path="/login" component={LoginComp} />
          <Route exact path="/studentDashboard" component={StudDash} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
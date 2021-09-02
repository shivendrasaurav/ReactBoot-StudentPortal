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
import FacultyDashHome from './components/FacultyDashHome';

//setup router
const App = () => {
  return (
    <Router history={useHistory}>
      <Fragment>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/home" component={HomeComp} />
          <Route path="/login" component={LoginComp} />
          <Route path="/studentDashboard" component={StudDash} />
          <Route path="/facultyDashboardHome" component={FacultyDashHome} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
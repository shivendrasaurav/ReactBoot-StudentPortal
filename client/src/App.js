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
import FacultyBatchView from './components/FacultyBatchView';
import FacultyNewAssessView from './components/FacultyNewAssessView';

//setup router
const App = () => {
  return (
    <Router history={useHistory}>
      <Fragment>
        <Switch>
          <Redirect exact from="/" to="/app/login" />
          <Route path="/app/home" component={HomeComp} />
          <Route path="/app/login" component={LoginComp} />
          <Route path="/app/student/dashboard" component={StudDash} />
          <Route path="/app/faculty/dashboard" component={FacultyDashHome} />
          <Route path="/app/faculty/batch/:id" component={FacultyBatchView} />
          <Route path="/app/faculty/assessment/new" component={FacultyNewAssessView} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
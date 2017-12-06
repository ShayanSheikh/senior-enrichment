import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Campuses from './Campuses';
import Students from './Students';

export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
              <NavLink className="btn btn-primary btn-block" to="/campuses">
                <span className="glyphicon glyphicon-plus"></span> Campuses
              </NavLink>
              <Route path='/campuses' render={() => (
                <Campuses />
              )} />
              <NavLink className="btn btn-primary btn-block" to="/students">
                <span className="glyphicon glyphicon-plus"></span> Students
              </NavLink>
              <Route path='/students' render={() => (
                <Students />
              )} />
          </div>
        </div>
      </Router>
    )
  }
}
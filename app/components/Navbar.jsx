import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavLink className="btn" to="/campuses">
          <button>Campuses</button>
        </NavLink>
        <NavLink className="btn" to="/students">
          <button>Students</button>
        </NavLink>
      </nav>
    )
  }
}
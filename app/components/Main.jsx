import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Campuses from './Campuses';
import Students from './Students';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import store, { fetchCampuses, fetchStudents } from '../store';

export default class Main extends Component {
  
  componentDidMount() {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path='/campuses/:campusId' component={SingleCampus}/>
          <Route path='/students/:studentId' component={SingleStudent}/>
          <Route exact path='/campuses' component={Campuses}/>
          <Route exact path='/students' component={Students}/>
        </Switch>
      </div>
    )
  }
}
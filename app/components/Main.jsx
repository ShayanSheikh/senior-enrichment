import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Campuses from './Campuses';
import Students from './Students';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import AddStudent from './AddStudent';
import AddCampus from './AddCampus';
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
          <Route path='/campuses/:campusId/edit' component={AddCampus} />
          <Route path='/students/:studentId/edit' component={AddStudent} />          
          <Route path='/campuses/:campusId' component={SingleCampus}/>
          <Route path='/students/:studentId' component={SingleStudent}/>
          <Route path='/new-student' component={AddStudent}/>
          <Route path='/new-campus' component={AddCampus} />
          <Route path='/campuses' component={Campuses}/>
          <Route path='/students' component={Students}/>
          <Route path='/' component={Home} />
        </Switch>
      </div>
    )
  }
}
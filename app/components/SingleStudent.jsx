import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function SingleStudent(props) {
  const { student, campus } = props;
  return (student) ?
  (
    <div>
      <p>Name: {student.firstName} {student.lastName}</p>
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa}</p>
      <p>Campus:
        <NavLink to={`/campuses/${student.campus.id}`}>
          {student.campus.name}
        </NavLink>
      </p>
    </div>
  )
  :
  (
    <div> </div>
  )
}

const mapStateToProps = function (state, ownProps) {
  let student = state.students.find(s => s.id === +ownProps.match.params.studentId);
  let campus = student ?
    state.campuses.find(c => c.id === student.campusId) : {};
  return {
    student, campus
  };
};

export default withRouter(connect(mapStateToProps)(SingleStudent));
import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function SingleStudent(props) {
  const { student } = props;
  return (
    <div>
      <p>Name: {student.fullName}</p>
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa}</p>
      <p>Campus:
        <NavLink to={`/campuses/${student.campusId}`}>
          {student.campus.name}
        </NavLink>
      </p>
    </div>
  );
}

const mapStateToProps = function (state, ownProps) {
  let student = state.students.filter(s => s.id === +ownProps.match.params.studentId)[0];
  return {
    student
  };
};

export default withRouter(connect(mapStateToProps)(SingleStudent));
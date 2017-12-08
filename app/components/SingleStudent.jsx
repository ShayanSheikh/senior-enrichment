import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function SingleStudent(props) {
  const { students } = props;
  var student = students.filter(s => s.id === +props.match.params.studentId)[0];
  if(student) {
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
  else return (<div> </div>);
}

const mapStateToProps = function (state) {
  return {
    students: state.students
  };
};

export default withRouter(connect(mapStateToProps)(SingleStudent));
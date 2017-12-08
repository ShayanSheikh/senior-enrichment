import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function SingleStudent(props) {
  const { students } = props;
  var student = students.filter(s => s.id === +props.match.params.studentId)[0];
  if(student) {
    return (
      <div>
        <p>{student.fullName}</p>
        <p>{student.email}</p>
        <p>{student.gpa}</p>
        <NavLink to={`/campuses/${student.campusId}`}>
          <p>{student.campus.name}</p>
        </NavLink>
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
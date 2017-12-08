import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Students(props) {
  const { students } = props;
  return (
    <div>
      <NavLink className="btn" to="/new-student">
        <button>Add Student</button>
      </NavLink>
      <ul>
        {
          students.map(student => {
            return (
              <li key={student.id}>
                <NavLink to={`/students/${student.id}`}>
                  <span>{student.fullName}</span>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    students: state.students
  };
};

export default withRouter(connect(mapStateToProps)(Students));
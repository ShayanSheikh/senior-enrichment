import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeStudent } from '../store';

function Students(props) {
  const { students, removeStudent } = props;
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
                <button onClick={() => removeStudent(student.id)}>X</button>
                <NavLink to={`/students/${student.id}/edit`}>
                  <button>Edit</button>
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

const mapDispatchToProps = function (dispatch) {
  return {
    removeStudent (studentId) {
      dispatch(removeStudent (studentId));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Students));
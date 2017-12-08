import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStudent, writeStudent } from '../store';

function AddStudent(props) {
  const { currStudent, campuses, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Add a Student</label>
        <br></br>
        <input
          onChange={handleChange}
          type="text"
          name="firstName"
          value={currStudent.firstName}
          placeholder="First Name"
        />
        <br></br>
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          value={currStudent.lastName}
          placeholder="Last Name"
        />
        <br></br>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          value={currStudent.email}
          placeholder="email"
        />
        <br></br>
        <input
          onChange={handleChange}
          type="text"
          name="gpa"
          value={currStudent.gpa}
          placeholder="GPA"
        />
        <br></br>
        <select name="campus">
          {
            campuses.map(campus => {
              return <option key={campus.id} value={campus.id}>{campus.name}</option>
            })
          }
        </select>
      </div>
      <div>
        <button type="submit">Create Student</button>
      </div>
    </form>
  );
}

const mapStateToProps = function (state) {
  return {
    currStudent: state.currStudent,
    campuses: state.campuses
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChange(evt) {
      dispatch(writeStudent(evt.target.value));
    },
    handleSubmit(evt) {
      evt.preventDefault();
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const email = evt.target.email.value;      
      const gpa = evt.target.gpa.value;
      const campusId = evt.target.campus.value;
      console.log(campusId);
      dispatch(addStudent({ firstName, lastName, email, gpa, campusId }, ownProps.history));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddStudent)); 
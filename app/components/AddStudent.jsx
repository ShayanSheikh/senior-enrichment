import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStudent, writeStudent, writeStudentFirst, writeStudentLast, writeStudentEmail,
  writeStudentGPA, updateStudent } from '../store';

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dirty: false
    }
    this.add = (this.props.match.path === '/new-student');
    this.clearForm = props.clearForm
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.student && !this.state.dirty) {
      this.setState({ dirty: true });
      nextProps.populateForm(nextProps.student);
    }
  }

  componentDidMount() {
    if (this.props.student && !this.state.dirty) {
      this.setState({ dirty: true });
      this.props.populateForm(this.props.student);
    }
  }

  componentWillUnmount() {
    if(!this.add) this.clearForm();
  }

  render () {
    const { currStudent, campuses, handleChange, handleSubmit } = this.props;
    return (
      <form onSubmit={(evt) => handleSubmit(evt, currStudent)}>
        <div>
          {
            (this.add) ? (<label>Add Student</label>) : (<label>Edit Student</label>)
          }
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
          {
            (this.add) ? (<button type="submit">Add Student</button>) : (<button type="submit">Edit</button>)
          }
        </div>
      </form>
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  let student = (state.students.find(s => s.id === +ownProps.match.params.studentId));
  return {
    student: student,
    currStudent: state.currStudent,
    campuses: state.campuses
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  const add = (ownProps.match.path === '/new-student');
  return {
    handleChange(evt) {
      switch (evt.target.name) {
        case "firstName":
          dispatch(writeStudentFirst(evt.target.value));
          break;
        case "lastName":
          dispatch(writeStudentLast(evt.target.value));
          break;
        case "email":
          dispatch(writeStudentEmail(evt.target.value));
          break;
        case "gpa":
          dispatch(writeStudentGPA(evt.target.value));
          break;
      }
    },
    handleSubmit(evt, student) {
      evt.preventDefault();
      student.campusId = evt.target.campus.value;
      (add) ? dispatch(addStudent(student, ownProps.history)) : dispatch(updateStudent(student, ownProps.history));
      dispatch(writeStudent({ firstName: '', lastName: '', email: '', gpa: 0, campusId:0 }));
    },
    populateForm(student) {
      dispatch(writeStudent(student));
    },
    clearForm() {
      dispatch(writeStudent({ firstName: '', lastName: '', email: '', gpa: 0, campusId: 0 }));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddStudent)); 
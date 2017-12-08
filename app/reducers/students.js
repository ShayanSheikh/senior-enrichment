import axios from 'axios';

//ACTION TYPES
const POST_STUDENT = 'POST_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const DELETE_STUDENT = 'DELETE_STUDENT';

// ACTION CREATORS
export function postStudent (student) {
  const action = { type: POST_STUDENT, student };
  return action;
}

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function deleteStudent(studentId) {
  const action = { type: DELETE_STUDENT, studentId };
  return action;
}

//THUNK CREATORS
export function fetchStudents () {
  return function (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents (students);
        dispatch(action);
      });
  }
}

export function addStudent(student, history) {
  return function (dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        const action = postStudent(newStudent);
        dispatch(action);
        history.push('/students/'+newStudent.id);
      });
  }
}

export function removeStudent(studentId) {
  return function (dispatch) {
    return axios.delete('/api/students/' + studentId)
      .then(() => {
        const action = deleteStudent(studentId);
        dispatch(action);
      });
  }
}

//REDUCER
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;

    case POST_STUDENT:
      return [...state, action.student];
    
    case DELETE_STUDENT:
      let newState = [...state];
      let ind = newState.findIndex(s => s.id === action.studentId);
      newState.splice(ind, 1);
      return newState;

    default:
      return state;
  }

}
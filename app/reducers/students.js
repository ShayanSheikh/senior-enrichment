import axios from 'axios';

//ACTION TYPES
const POST_STUDENT = 'POST_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const EDIT_STUDENT = 'EDIT_STUDENT';
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

//REDUCER
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;

    case POST_STUDENT:
      return [...state, action.student];

    default:
      return state;
  }

}
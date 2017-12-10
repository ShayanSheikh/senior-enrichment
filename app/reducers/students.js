import axios from 'axios';

//ACTION TYPES
const POST_STUDENT = 'POST_STUDENT';
const PUT_STUDENT = 'PUT_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const DELETE_STUDENT = 'DELETE_STUDENT';

// ACTION CREATORS
export function postStudent (student) {
  const action = { type: POST_STUDENT, student };
  return action;
}

export function putStudent (student) {
  const action = { type: PUT_STUDENT, student };
  return action;
}

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function deleteStudent (studentId) {
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

export function addStudent (student, history) {
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

export function updateStudent (student, history) {
  return function (dispatch) {
    return axios.put('/api/students/' + student.id, student)
      .then(res => res.data)
      .then(() => {
        const action = putStudent(student);
        dispatch(action);
        history.push('/students/' + student.id);
      });
  }
}

export function removeStudent (studentId) {
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
  let newState = [...state];
  let ind = -1;
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;

    case PUT_STUDENT:
      ind = newState.findIndex(s => s.id === action.student.id);
      newState[ind] = action.student;
      return newState;

    case POST_STUDENT:
      return [...state, action.student];
    
    case DELETE_STUDENT:
      ind = newState.findIndex(s => s.id === action.studentId);
      newState.splice(ind, 1);
      return newState;

    default:
      return state;
  }

}
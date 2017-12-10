const WRITE_STUDENT = "WRITE_STUDENT";
const WRITE_STUDENT_FIRST = "WRITE_STUDENT_FIRST";
const WRITE_STUDENT_LAST = "WRITE_STUDENT_LAST";
const WRITE_STUDENT_EMAIL = "WRITE_STUDENT_EMAIL";
const WRITE_STUDENT_GPA =" WRITE_STUDENT_GPA";

export function writeStudent (student) {
  return { type: WRITE_STUDENT, student };
}

export function writeStudentFirst (first) {
  return { type: WRITE_STUDENT_FIRST, first };
}

export function writeStudentLast (last) {
  return { type: WRITE_STUDENT_LAST, last };
}

export function writeStudentEmail (email) {
  return { type: WRITE_STUDENT_EMAIL, email };
}

export function writeStudentGPA (gpa) {
  return { type: WRITE_STUDENT_GPA, gpa };
}

const initialState = { 
  firstName: '', 
  lastName: '', 
  email: '', 
  gpa: 0, 
  campusId: 0 
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case WRITE_STUDENT:
      return action.student;

    case WRITE_STUDENT_FIRST:
      return Object.assign({}, state, { firstName: action.first });
    
    case WRITE_STUDENT_LAST:
      return Object.assign({}, state, { lastName: action.last });

    case WRITE_STUDENT_EMAIL:
      return Object.assign({}, state, { email: action.email });

    case WRITE_STUDENT_GPA:
      return Object.assign({}, state, { gpa: action.gpa })

    default:
      return state;
  }
}
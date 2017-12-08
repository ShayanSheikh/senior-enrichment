const WRITE_STUDENT = "WRITE_STUDENT";

export function writeStudent(student) {
  return { type: WRITE_STUDENT, student };
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case WRITE_STUDENT:
      return action.student;
    default:
      return state;
  }
}
const WRITE_CAMPUS = "WRITE_CAMPUS";

export function writeCampus (campus) {
  return { type: WRITE_CAMPUS, campus };
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case WRITE_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
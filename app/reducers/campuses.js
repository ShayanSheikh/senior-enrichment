import axios from 'axios';

//ACTION TYPES
const POST_CAMPUS = 'POST_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

// ACTION CREATORS
export function postCampus (campus) {
  const action = { type: POST_CAMPUS, campus };
  return action;
}

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

//THUNK CREATORS
export function fetchCampuses () {
  return function (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  }
}

//REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;

    case POST_CAMPUS:
      return [...state, action.campus];

    default:
      return state;
  }

}
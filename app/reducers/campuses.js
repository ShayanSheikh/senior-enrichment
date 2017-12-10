import axios from 'axios';

//ACTION TYPES
const POST_CAMPUS = 'POST_CAMPUS';
const PUT_CAMPUS = 'PUT_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

// ACTION CREATORS
export function postCampus (campus) {
  const action = { type: POST_CAMPUS, campus };
  return action;
}

export function putCampus (campus) {
  const action = { type: PUT_CAMPUS, campus };
  return action;
}

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function deleteCampus (campusId) {
  const action = { type: DELETE_CAMPUS, campusId };
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

export function addCampus (campus, history) {
  return function (dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        const action = postCampus(newCampus);
        dispatch(action);
        history.push('/campuses/'+newCampus.id);
      });
  }
}

export function updateCampus (campus, history) {
  return function (dispatch) {
    return axios.put('/api/campuses/' + campus.id, campus)
      .then(res => res.data)
      .then(() => {
        const action = putCampus(campus);
        dispatch(action);
        history.push('/campuses/'+campus.id);
      });
  }
}

export function removeCampus (campusId) {
  return function (dispatch) {
    return axios.delete('/api/campuses/'+campusId)
      .then(res => res.data)
      .then(() => {
        const action = deleteCampus(campusId);
        dispatch(action);
      });
  }
}

//REDUCER
export default function reducer (state = [], action) {
  let newState = [...state];
  let ind = -1;
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;

    case PUT_CAMPUS:
      ind = newState.findIndex(c => c.id === action.campus.id);
      newState[ind] = action.campus;
      return newState;

    case POST_CAMPUS:
      return [...state, action.campus];

    case DELETE_CAMPUS:
      ind = newState.findIndex(c => c.id === action.campusId);
      newState.splice(ind, 1);
      return newState;

    default:
      return state;
  }

}
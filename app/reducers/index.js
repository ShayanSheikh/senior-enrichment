/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'

import campuses from './campuses';
import students from './students';
import currCampus from './currCampus';
import currStudent from './currStudent';

const initialState = {}

const rootReducer = combineReducers({
  campuses,
  students,
  currCampus,
  currStudent
});

export default rootReducer

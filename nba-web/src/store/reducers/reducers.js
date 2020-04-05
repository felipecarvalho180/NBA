
import { combineReducers } from 'redux';

import teamReducer from './team/team.reducer';

export default combineReducers({
  team: teamReducer,
});
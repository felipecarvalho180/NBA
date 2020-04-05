
import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  updateTeam: ['team'],
});

const INITIAL_STATE = null;

const updateTeam = (state = INITIAL_STATE, action) => action.team;

export default createReducer(INITIAL_STATE, {
  [Types.UPDATE_TEAM]: updateTeam,
});
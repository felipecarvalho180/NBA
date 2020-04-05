
import { createActions } from 'reduxsauce';
import { takeLatest } from 'redux-saga/effects';

import asyncGetTeams from './async-get-teams/async-get-teams.team.saga';

export const { Creators, Types } = createActions({
  asyncGetTeams: (payload = { }, callbacks = { }) => ({
    type: 'ASYNC_GET_TEAMS',
    payload,
    callbacks,
  }),
});

export default [
  takeLatest(Types.ASYNC_GET_TEAMS, asyncGetTeams),
];
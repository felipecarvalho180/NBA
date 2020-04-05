
import { call } from 'redux-saga/effects';

import teamService from '../../../../services/team/team.service';

export default function* (action) {
  const { onSuccess, onError } = action.callbacks;

  let result;
  try {
    result = yield call(teamService.getTeams);
  } catch(error) {
    console.error(error);
    if(onError) onError(error);
    return;
  }

  if(onSuccess) onSuccess(result);
};
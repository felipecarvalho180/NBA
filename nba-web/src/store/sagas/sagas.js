
import { all } from 'redux-saga/effects';

import teamSaga from './team/team.saga';

export default function* () {
  yield all([
    ...teamSaga,
  ]);
}

import { takeLatest } from '@redux-saga/core/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { getTasksSaga } from './tasksSaga';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_TASKS_ACTION, getTasksSaga);
}

export default rootSaga;

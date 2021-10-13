import { put } from 'redux-saga/effects';
import { getTasksError, getTasksRequest, getTasksSuccess } from '../actions';
import * as API from './../api';

export function * getTasksSaga () {
  yield put(getTasksRequest());
  try {
    const { data: tasks } = yield API.getTasks();
    console.log(`tasks`, tasks);
    yield put(getTasksSuccess(tasks));
  } catch (err) {
    yield put(getTasksError(err));
  }
}

import { put } from 'redux-saga/effects';
import {
  createTaskError,
  createTaskRequest,
  createTaskSuccess,
  deleteTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  getTasksError,
  getTasksRequest,
  getTasksSuccess,
} from '../actions';
import * as API from './../api';

export function * getTasksSaga () {
  yield put(getTasksRequest());
  try {
    const { data: tasks } = yield API.getTasks();

    yield put(getTasksSuccess(tasks));
  } catch (err) {
    yield put(getTasksError(err));
  }
}

export function * createTaskSaga (action) {
  const { task } = action;

  yield put(createTaskRequest());
  try {
    const { data: newTask } = yield API.createTask(task);
    yield put(createTaskSuccess(newTask));
  } catch (err) {
    yield put(createTaskError(err));
  }
}

export function * deleteTaskSaga (action) {
  const { id } = action;
  console.log(`into deleteTaskSaga id=`, id);
  yield put(deleteTaskRequest());
  try {
    const {
      data: [deletedTask],
    } = yield API.deleteTask(id);
    console.log(`deletedTask from delete saga`, deletedTask);
    yield put(deleteTaskSuccess(deletedTask));
  } catch (err) {
    yield put(deleteTaskError(err));
  }
}

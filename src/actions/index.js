import ACTION_TYPES from './actionTypes';

export const getTasksAction = () => ({
  type: ACTION_TYPES.GET_TASKS_ACTION,
});

export const getTasksRequest = () => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
});

export const getTasksSuccess = tasks => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  tasks,
});

export const getTasksError = err => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  err,
});

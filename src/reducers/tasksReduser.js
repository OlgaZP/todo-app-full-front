import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

function tasksReduser (state = initialState, action) {
  const { type } = action;
  console.log(`type from taskReducer`, type);
  console.log(`state from taskReducer`, state);
  switch (type) {
    case ACTION_TYPES.GET_TASKS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const { tasks } = action;
      return {
        ...state,
        isFetching: false,
        tasks,
      };
    }
    case ACTION_TYPES.GET_TASKS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    default:
      return state;
  }
}

export default tasksReduser;

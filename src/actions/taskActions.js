export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_FILTER = 'SET_FILTER';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});

export const editTask = (taskId, updates) => ({
  type: EDIT_TASK,
  payload: { taskId, updates }
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter
});

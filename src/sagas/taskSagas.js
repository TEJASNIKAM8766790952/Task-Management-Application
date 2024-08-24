import { takeEvery, put } from 'redux-saga/effects';
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/taskActions';

function* handleAddTask(action) {
  // Logic for adding a task (e.g., API call) goes here
  yield put({ type: ADD_TASK, payload: action.payload });
}

function* handleEditTask(action) {
  // Logic for editing a task (e.g., API call) goes here
  yield put({ type: EDIT_TASK, payload: action.payload });
}

function* handleDeleteTask(action) {
  // Logic for deleting a task (e.g., API call) goes here
  yield put({ type: DELETE_TASK, payload: action.payload });
}

function* rootSaga() {
  yield takeEvery(ADD_TASK, handleAddTask);
  yield takeEvery(EDIT_TASK, handleEditTask);
  yield takeEvery(DELETE_TASK, handleDeleteTask);
}

export default rootSaga;

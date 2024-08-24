import { all } from 'redux-saga/effects';
import taskSaga from './taskSagas';

export default function* rootSaga() {
  yield all([
    taskSaga()
  ]);
}

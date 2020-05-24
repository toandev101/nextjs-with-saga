import { all } from 'redux-saga/effects';
import watchSample from '../providers/SampleProvider/saga';

export default function* rootSaga() {
  yield all([
    watchSample(),
    ///watchABC
  ]);
}
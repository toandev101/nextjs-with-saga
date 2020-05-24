import {
    sayHello,
  } from './actions';
  
  import {
    HELLO_WATCH,
  } from './constants';
  import { put, takeLeading, call } from 'redux-saga/effects';
  
  function* sayHelloWatch(action) {
    try {
      console.log('saga.action.payload: ', action.payload)
        yield put(sayHello(action.payload));
      
    } catch (e) {
      console.log(e);
    }
  }
  
  export default function* watchSample() {
    yield takeLeading(HELLO_WATCH, sayHelloWatch);
  }
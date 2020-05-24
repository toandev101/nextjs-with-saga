import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';

import rootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();
let store = null;

//return a function that return redux store current state
export function getStore() {
  return store.getState || {};
}

export const initializeStore = (preloadedState = {}) => {
  const middlewares = [sagaMiddleware];

  store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga);
  return store;
}



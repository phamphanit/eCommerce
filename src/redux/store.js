import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import { logger } from 'redux-logger';
import rootSaga from './root-saga';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
middlewares.push(logger);
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

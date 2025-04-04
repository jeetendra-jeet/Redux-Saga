/* eslint-disable prettier/prettier */
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import { logger } from 'redux-logger';
import rootSaga from './saga';
import { createStore, applyMiddleware } from 'redux';


const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

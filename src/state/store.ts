import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/reducers';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);

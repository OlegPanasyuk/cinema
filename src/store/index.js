import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';

import sagas from '../sagas/getFilmsSaga';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(sagas);
  return store;
};

export default configureStore;

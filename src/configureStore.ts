import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});
const epicMiddleware = createEpicMiddleware();


export const configureStore = () => {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));
  epicMiddleware.run(rootEpic);
  return store;
}
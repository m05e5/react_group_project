/*eslint-disable*/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';
const reducer = combineReducers({
  rocketsReducer,
});

const store = createStore(
  reducer,
  // applyMiddleware(logger),
  applyMiddleware(thunk),
);
export default store;

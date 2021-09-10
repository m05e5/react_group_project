/*eslint-disable*/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import missionsReducer from './reducers/MissionsReducer';
import rocketsReducer from './rockets/rockets';
const reducer = combineReducers({
  rocketsReducer,
  missionsReducer,
});

const store = createStore(
  reducer,
  // applyMiddleware(logger),
  applyMiddleware(thunk),
);
export default store;

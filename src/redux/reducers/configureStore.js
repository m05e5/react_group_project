import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './reducers/MissionsReducer';
import { rocketsReducer } from './rockets/rockets';

const reducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;

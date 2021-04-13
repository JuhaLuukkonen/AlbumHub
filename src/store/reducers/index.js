import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';

const appReducer = combineReducers({
  Users: UsersReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;

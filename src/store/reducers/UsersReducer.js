import { createReducer } from 'reduxsauce';
import { ActionTypes } from '../actions/UsersActions';

export const INITIAL_STATE = {
  users: [],
};

const getUsers = (state, action) => {
  const { result } = action;
  return { ...state, users: result };
};

const ACTION_HANDLERS = {
  [ActionTypes.GET_USERS]: getUsers,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

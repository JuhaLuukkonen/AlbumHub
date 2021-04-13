import axios from 'axios';
import { createTypes } from 'reduxsauce';
import ActionTypes from 'seed';

export const ActionTypes = createTypes(`
  GET_USERS
`);

export default (dispatch) => {
  const getUsers = () =>
    axios.get('/users')  // <- käyttäjälistaus, /users/:userId = käyttäjän näkymä polkuun, /users/:userId/albums = käyttäjän albumilistaus polkuun 
      .then(response => {
        dispatch({ type: ActionTypes.GET_USERS, result: response.data });
      })
      .catch(error => {
        console.log(error);
      });

  return {
    getUsers,
  };
};

import axios from './api';
// import qs from 'query-string';

export const fetchUsers = async () => {

  const response = await axios.get('/');

  return response;
};
import axios from 'axios';
import {Alert} from 'react-native';

//Constants
import {BASE_URL } from '../constants';

axios.defaults.baseURL = BASE_URL;

axios.interceptors.response.use(
  response => response,
  async error => {
    console.log('>>>>API<<<< RESPONSE ERROR', error);
    if (error.message === 'Network Error') {
      Alert.alert('You are offline', 'Please, check your connection');
    }

    if (error.response && error.response.status === 400) {
      Alert.alert('Something went wrong', 'Please try again later');
    }

    if (error.response && error.response.status === 500) {
      Alert.alert('Something went wrong', 'Please try again later');
    }

    if (error.response && error.response.status === 503) {
      Alert.alert('Server not available');
    }

    return Promise.reject(error);
  },
);

export default axios;

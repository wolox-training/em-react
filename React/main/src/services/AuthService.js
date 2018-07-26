import api from '../config/api';

export default {
  logIn: ({ username, password }) => {
    return api.get(`/login?username=${username}&password=${password}`);
    // return api.get(`/login`);
  }
};

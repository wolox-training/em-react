import api from '../config/api';

export default {
  logIn: ({ username, password }) => api.get(`/login?username=${username}&password=${password}`)
};

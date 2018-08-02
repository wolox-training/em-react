import api from '../config/api';

export default {
  getUsers: () => api.get('/users'),
  getUser: id => api.get(`/users?id=${id}`)
};

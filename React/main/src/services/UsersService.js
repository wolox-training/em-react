import api from '../config/api';

export default {
  getUsers: () => api.get('/users'),
  getUser: id => api.get(`/users?id=${id}`),
  updateUser: (id, data) => api.put(`/users/${id}`, data)
};

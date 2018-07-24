import api from '../config/api';

export default {
  getHistory: id => api.get('/history', { id })
};

import api from '../config/api';

export default {
  getWinningMoves: async () => api.get('/winning-moves')
};

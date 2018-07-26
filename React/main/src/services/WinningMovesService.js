import api from '../config/api';

export default {
  getWinningMoves: () => api.get('/winning-moves')
};

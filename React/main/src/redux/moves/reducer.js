const initialState = {
  error: null,
  isLoading: true,
  moves: []
};

export function winningMoves(state = initialState, action) {
  switch (action.type) {
    case 'GET_WINNING_MOVES':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_WINNING_MOVES_SUCCESS':
      return {
        ...state,
        error: null,
        isLoading: false,
        moves: action.payload
      };
    case 'GET_WINNING_MOVES_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

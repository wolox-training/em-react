const initialState = {
  xIsNext: true
};

export function xIsNext(state = initialState, action) {
  switch (action.type) {
    case 'X_IS_NEXT':
      return {
        ...state,
        xIsNext: action.xIsNext
      };
    default:
      return state;
  }
}

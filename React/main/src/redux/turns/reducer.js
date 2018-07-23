const initialState = {
  xIsNext: true
};

export function xIsNext(state = initialState.xIsNext, action) {
  switch (action.type) {
    case 'X_IS_NEXT':
      return action.xIsNext;
    default:
      return state;
  }
}

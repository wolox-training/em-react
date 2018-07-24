const initialState = {
  xIsNext: true
};

export function turns(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_X_IS_NEXT':
      return {
        ...state,
        xIsNext: action.xIsNext
      };
    default:
      return state;
  }
}

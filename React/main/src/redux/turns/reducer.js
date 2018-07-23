const turns = {
  xIsNext: true
};

export function xIsNext(state = turns, action) {
  switch (action.type) {
    case 'X_IS_NEXT':
      return action.xIsNext;
    default:
      return state;
  }
}

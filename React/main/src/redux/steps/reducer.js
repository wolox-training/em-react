const initialState = {
  stepNumber: 0
};

export function steps(state = initialState, action) {
  switch (action.type) {
    case 'ADD_STEP':
      return {
        ...state,
        stepNumber: action.step
      };
    default:
      return state;
  }
}

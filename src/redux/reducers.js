export function counter(state, action) {
  if (state === 'undefined') {
    return 0;
  }

  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export function counter(state, action) {
  if (state === 'undefined') {
    return 0;
  }

  if (action.type === 'INCREMENT') {
    return state + 1;
  }

  if (action.type === 'DECREMENT') {
    return state - 1;
  }

  return state;
}

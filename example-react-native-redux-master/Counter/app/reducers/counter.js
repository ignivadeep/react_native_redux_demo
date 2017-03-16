
const initialState = {
  count: 0
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.incby
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.decby
      };
    default:
      return state;
  }
}

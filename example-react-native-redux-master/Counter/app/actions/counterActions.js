
export function increment(incby) {
  return {
    type: 'INCREMENT',
    incby
  };
}

export function decrement(decby) {
  return {
    type: 'DECREMENT',
    decby
  };
}
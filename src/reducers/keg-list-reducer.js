export default (state = {}, action) => {
  const { name, brand, origin, pintsRemaining, price, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          origin: origin,
          pintsRemaining: pintsRemaining,
          price: price,
          id: id
        }
      });
    case 'DELETE_KEG':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
    }
};
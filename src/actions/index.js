export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const { name, brand, origin, pintsRemaining, price, id } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    origin: origin,
    pintsRemaining: pintsRemaining,
    price: price,
    id: id
  }
}
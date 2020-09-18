import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const sampleKegData = {
    name: "Blue Milk",
    brand: "Twin Suns Inc.",
    origin: "Tatooine",
    pintsRemaining: "124",
    price: "4.00",
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer',() => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, origin, pintsRemaining, price, id } = sampleKegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      origin: origin,
      pintsRemaining: pintsRemaining,
      price: price,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        origin: origin,
        pintsRemaining: pintsRemaining,
        price: price,
        id: id
      }
    });
  });
  
});
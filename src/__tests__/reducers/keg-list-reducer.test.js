import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;

  const currentState = {
    1: {
    name: "Blue Milk",
    brand: "Twin Suns Inc.",
    origin: "Tatooine",
    pintsRemaining: 124,
    price: "4.00",
    id: 1 },
    2: {
    name: "Gamorrean Ale",
    brand: "Warlords Choice",
    origin: "Gamorr",
    pintsRemaining: 124,
    price: "3.00",
    id: 2 }
    }

    const sampleKegData = {
      name: 'Blue Milk',
      brand: 'Twin Suns Inc.',
      origin: 'Tatooine',
      pintsRemaining: 124,
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

    test('Should successfully delete a keg', () => {
      action = {
        type: 'DELETE_KEG',
        id: 1
      };
      expect(kegListReducer(currentState, action)).toEqual({
        2: {name: 'Gamorrean Ale',
            brand: 'Warlords Choice',
            origin: 'Gamorr',
            pintsRemaining: 124,
            price: "3.00",
            id: 2 }
        });
    });
  });
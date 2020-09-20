import * as actions from './../../actions';

describe('help queue actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({ name: 'Blue Milk', brand: 'Twin Suns Inc.', origin: 'Tatooine', pintsRemaining: 124, price: '4.00',id: 1 })).toEqual({
      type: 'ADD_KEG',
      name: 'Blue Milk',
      brand: 'Twin Suns Inc.',
      origin: 'Tatooine',
      pintsRemaining: 124,
      price: '4.00',
      id: 1
    });
  });
});
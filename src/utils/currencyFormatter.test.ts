import {currencyFormatter} from './currencyFormatter';

describe('currencyFormatter', () => {
  test('returns a formatted currency', () => {
    expect(currencyFormatter({price: 100})).toEqual('$100.00');
    expect(currencyFormatter({price: 100, currency: 'JPY'})).toEqual('¥100');
    expect(currencyFormatter({price: 100, currency: 'USD'})).toEqual('$100.00');
    expect(currencyFormatter({price: 100, currency: 'EUR'})).toEqual('€100.00');
    expect(currencyFormatter({price: 100, currency: 'CLP'})).toEqual('CLP 100');
  });
});

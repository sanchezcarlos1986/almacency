import {currencyFormatter} from './currencyFormatter';

describe('currencyFormatter', () => {
  test('returns a formatted currency', () => {
    expect(currencyFormatter({price: 100})).toEqual('$100.00');
    expect(currencyFormatter({price: 100, currency: 'JPY'})).toBe('¥100');
    expect(currencyFormatter({price: 100, currency: 'USD'})).toBe('$100.00');
    expect(currencyFormatter({price: 100, currency: 'EUR'})).toBe('€100.00');
    expect(currencyFormatter({price: 100, currency: 'CLP'})).toBe('CLP 100');
  });
});

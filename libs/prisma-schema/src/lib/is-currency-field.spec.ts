import { isCurrencyField } from './is-currency-field.js';

describe('isCurrencyField', () => {
  it('should check the field name is currency or not', () => {
    expect(isCurrencyField('cost')).toEqual(true);
    expect(isCurrencyField('price')).toEqual(true);
    expect(isCurrencyField('total')).toEqual(true);
    expect(isCurrencyField('subtotal')).toEqual(true);
    expect(isCurrencyField('tax')).toEqual(true);
    expect(isCurrencyField('salesPrice')).toEqual(true);
    expect(isCurrencyField('amount')).toEqual(true);
    expect(isCurrencyField('rate')).toEqual(true);
    expect(isCurrencyField('value')).toEqual(true);
    expect(isCurrencyField('fee')).toEqual(true);
    expect(isCurrencyField('revenue')).toEqual(true);
    expect(isCurrencyField('expense')).toEqual(true);
    expect(isCurrencyField('budget')).toEqual(true);
    expect(isCurrencyField('discount')).toEqual(true);
    expect(isCurrencyField('debit')).toEqual(true);
    expect(isCurrencyField('credit')).toEqual(true);
    expect(isCurrencyField('finance')).toEqual(true);
    expect(isCurrencyField('currency')).toEqual(true);
    expect(isCurrencyField('money')).toEqual(true);
    expect(isCurrencyField('usd')).toEqual(true);
    expect(isCurrencyField('eur')).toEqual(true);
    expect(isCurrencyField('gbp')).toEqual(true);
    expect(isCurrencyField('jpy')).toEqual(true);
  });
});

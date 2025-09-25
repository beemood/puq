import { getOwnPropertyNames } from './get-own-property-names.js';
describe('getOwnPropertyNames', () => {
  it('should work', () => {
    class Sample {
      some() {
        //
      }
    }
    expect(getOwnPropertyNames(Sample)).toEqual(['some']);
  });
});

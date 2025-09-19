import { getOwnPropertyDescriptor } from './get-own-property-descriptor.js';
describe('getOwnPropertyDescriptor', () => {
  it('should work', () => {
    class Sample {
      some(value: string) {
        return value;
      }
    }

    expect(getOwnPropertyDescriptor(Sample, 'some')).toBeDefined();
  });
});

import { extractResourceName } from './extract-resource-name.js';
import { classNamePrefixes, classNameSuffixes } from './resource-names.js';

describe('extractResourceName', () => {
  describe('valid cases', () => {
    it.each([
      ...Object.values(classNamePrefixes).map((e) => {
        return `${e}SomeSampleDto`;
      }),
      ...Object.values(classNameSuffixes).map((e) => {
        return `SomeSample${e}`;
      }),
    ])('extractResourceName($0) should return sample', (value) => {
      expect(extractResourceName(value)).toEqual('SomeSample');
    });
  });
});

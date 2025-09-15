import {
  classNamePrefixes,
  classNameSuffixes,
  isResouceDataClassName,
  isResouceOperationClassName,
} from './resource-names.js';

describe('isResourceName', () => {
  describe('valid', () => {
    it.each([
      ...Object.values(classNameSuffixes).map((e) => {
        return `Some${e}`;
      }),
    ])('isResourceName($0) should return false', (value) => {
      expect(isResouceOperationClassName(value as any)).toEqual(true);
    });
  });

  describe('invalid', () => {
    it.each([
      '',
      '   ',
      'Some',
      'some',
      ...Object.values(classNamePrefixes),
      ...Object.values(classNameSuffixes),
      'CreateSome',
      'QuerySome',
      'ControllerSome',
    ])('isResourceName($0) should return false', (value) => {
      expect(isResouceDataClassName(value as any)).toEqual(false);
    });
  });
});

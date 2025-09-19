import { values } from '@puq/utils';
import {
  DtoClassNamePrefixes,
  DtoClassNameSuffixes,
  isDtoClassName,
} from './dto-class-name.js';

describe('dto-class-name', () => {
  describe('isDtoClassName', () => {
    describe('valid cases', () => {
      const testData = [
        ...values(DtoClassNamePrefixes).map((p) => {
          return values(DtoClassNameSuffixes).map((s) => {
            return `${p}Sample${s}`;
          });
        }),
      ].flat(2);

      it.each(testData)('isDtoClassName($1) should return true', (value) => {
        expect(isDtoClassName(value)).toBeTruthy();
      });
    });
  });
});

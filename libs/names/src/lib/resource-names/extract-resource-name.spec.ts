import {
  DtoClassNamePrefixes,
  DtoClassNameSuffixes,
} from './dto-class-name.js';
import { extractResourceName } from './extract-resource-name.js';

describe('extractResourceName', () => {
  const testData = [
    ...Object.values(DtoClassNamePrefixes).map((e) => {
      return `${e}SomeSampleDto`;
    }),
    ...Object.values(DtoClassNameSuffixes).map((e) => {
      return `SomeSample${e}`;
    }),
  ];
  it.each(testData)('extractResourceName($0) should return sample', (value) => {
    expect(extractResourceName(value)).toEqual('SomeSample');
  });
});

import { values } from '@puq/utils';
import {
    isResourceOperationName,
    ResourceOperationNames,
} from './resource-operation-name.js';

describe('resource-operation-name', () => {
  describe('valid cases', () => {
    const testData = values(ResourceOperationNames);

    it.each(testData)(
      'isResourceOperationName($1) should return true',
      (value) => {
        expect(isResourceOperationName(value)).toBeTruthy();
      }
    );
  });
});

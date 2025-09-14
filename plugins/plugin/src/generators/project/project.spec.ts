import { } from '@nx/devkit';
import {
    createTsconfigReferenceUpdater,
    getOrganizationPrefix,
    getShortName
} from './project-helper';

describe('project', () => {
  describe('getOrganizationPrefix', () => {
    it('should get the organization prefix', () => {
      expect(getOrganizationPrefix('@some/project')).toEqual('@some');
    });
  });

  describe('getShortName', () => {
    it('should get short name', () => {
      expect(getShortName('some/name')).toEqual('name');
    });
  });

  describe('addTsconfigReference', () => {
    it('should add tsconfig reference', () => {
      const updater = createTsconfigReferenceUpdater('some/dir');

      const tsconfigJson = {};
      const updatedTsconfig = updater(tsconfigJson);

      expect(updatedTsconfig).toHaveProperty('references');
      expect(updatedTsconfig.references[0]).toHaveProperty('path');
      expect(updatedTsconfig.references[0].path).toEqual('./some/dir');
    });
  });
});

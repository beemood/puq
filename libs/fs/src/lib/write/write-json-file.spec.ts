import { testDirectory } from '@puq/testing';
import { rm } from '../delete/rm.js';
import { readJsonFile } from '../read/read-json-file.js';
import { scope } from '../read/scope.js';
import { writeJsonFile, writeJsonFileExclusive } from './write-json-file.js';

describe('writeJsonFile', () => {
  const { resolve } = (() => {
    const libraryRoot = testDirectory('libs/fs');
    const __resolve = scope(libraryRoot);
    const resolve = (...args: string[]) => __resolve(libraryRoot, ...args);
    return { resolve };
  })();

  describe('writeJsonFile', () => {
    const root = resolve('writeJsonFile');
    const filePath = resolve(root, 'writeJsonFile');

    afterAll(async () => {
      await rm(root);
    });

    it('should write text file', async () => {
      const content = { some: 'some' };
      await writeJsonFile(filePath, content);
      expect(await readJsonFile(filePath)).toEqual(content);
    });
  });

  describe('writeJsonFileExclusive', () => {
    const root = resolve('writeJsonFileExclusive');
    const filePath = resolve(root, 'writeJsonFileExclusive');

    beforeAll(async () => {
      await rm(root);
    });

    afterAll(async () => {
      await rm(root);
    });

    it('should writeJsonFileExclusive', async () => {
      const content = { some: 'some' };
      await writeJsonFileExclusive(filePath, content);
      expect(await readJsonFile(filePath)).toEqual(content);

      expect(
        async () => await writeJsonFileExclusive(filePath, content)
      ).rejects.toThrowError();
    });
  });
});

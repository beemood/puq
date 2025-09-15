import { testDirectory } from '@puq/testing';
import { rm } from '../delete/rm.js';
import { readTextFile } from '../read/read-text-file.js';
import { scope } from '../read/scope.js';
import {
  appendTextFile,
  writeTextFile,
  writeTextFileExclusive,
} from './write-text-file.js';

describe('writeTextFile', () => {
  const { resolve } = (() => {
    const libraryRoot = testDirectory('libs/fs');
    const __resolve = scope(libraryRoot);
    const resolve = (...args: string[]) => __resolve(libraryRoot, ...args);
    return { resolve };
  })();

  describe('writeTextFile', () => {
    const root = resolve('writeTextFile');
    const filePath = resolve(root, 'writeTextFile');

    afterAll(async () => {
      await rm(root);
    });

    it('should write text file', async () => {
      const content = 'some';
      await writeTextFile(filePath, content);
      expect(await readTextFile(filePath)).toEqual(content);
    });
  });

  describe('appendTextFile', () => {
    const root = resolve('appendTextFile');
    const filePath = resolve(root, 'appendTextFile');

    beforeAll(async () => {
      await rm(root);
    });
    afterAll(async () => {
      await rm(root);
    });

    it('should appendTextFile', async () => {
      const content = 'some';
      await appendTextFile(filePath, content);
      await appendTextFile(filePath, content);
      await appendTextFile(filePath, content);
      expect(await readTextFile(filePath)).toEqual(content + content + content);
    });
  });

  describe('writeTextFileExclusive', () => {
    const root = resolve('writeTextFileExclusive');
    const filePath = resolve(root, 'writeTextFileExclusive');

    beforeAll(async () => {
      await rm(root);
    });

    afterAll(async () => {
      await rm(root);
    });

    it('should writeTextFileExclusive', async () => {
      const content = 'some';
      await writeTextFileExclusive(filePath, content);
      expect(await readTextFile(filePath)).toEqual(content);

      expect(
        async () => await writeTextFileExclusive(filePath, content)
      ).rejects.toThrowError();
    });
  });
});

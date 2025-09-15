import { testDirectory } from '@puq/testing';
import { rm } from 'fs/promises';
import { writeTextFile } from '../write/write-text-file.js';
import { readTextFile } from './read-text-file.js';
import { scope } from './scope.js';

describe('readTextFile', () => {
  const root = testDirectory('libs/fs/read-text-file');
  const resolve = scope(root);
  const filePath = resolve(root, 'file');

  beforeAll(async () => {
    await writeTextFile(filePath, 'some');
  });
  afterAll(async () => {
    await rm(root, { recursive: true });
  });
  it('should read json file', async () => {
    const result = await readTextFile(filePath);
    expect(result).toBeDefined();
    expect(result).toEqual('some');
  });
});

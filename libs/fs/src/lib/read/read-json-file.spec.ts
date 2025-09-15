import { testDirectory } from '@puq/testing';
import { rm } from 'fs/promises';
import { writeJsonFile } from '../write/write-json-file.js';
import { readJsonFile } from './read-json-file.js';
import { scope } from './scope.js';

describe('readJsonFile', () => {
  const root = testDirectory('libs/fs/readJsonFile');
  const resolve = scope(root);
  const filePath = resolve(root, 'file');

  beforeAll(async () => {
    await writeJsonFile(filePath, { ok: true });
  });

  afterAll(async () => {
    await rm(root, { recursive: true });
  });

  it('should read json file', async () => {
    const result = await readJsonFile<{ ok: boolean }>(filePath);
    expect(result).toBeDefined();
    expect(result.ok).toEqual(true);
  });
});

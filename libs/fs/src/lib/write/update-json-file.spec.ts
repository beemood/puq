import { createTestJsonFiles, testDirectory } from '@puq/testing';
import { rm } from 'fs/promises';
import { readJsonFile } from '../read/read-json-file.js';
import { scope } from '../read/scope.js';
import { updateJsonFile } from './update-json-file.js';

describe('updateJsonFile', () => {
  const root = testDirectory('libs/fs/update-json-file');
  const resolve = scope(root);

  beforeAll(async () => {
    await createTestJsonFiles(root);
  });

  afterAll(async () => {
    await rm(root, { recursive: true });
  });

  it('should udpate json file', async () => {
    const filePath = resolve(root, 'dir1', 'file1');
    await updateJsonFile<{ path: string }>(filePath, (value) => {
      value.path = 'updated';
      return value;
    });
    const updatedJson = await readJsonFile<{ path: string }>(filePath);
    expect(updatedJson.path).toEqual('updated');
  });
});

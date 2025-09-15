import { createTestYamlFiles, testDirectory } from '@puq/testing';
import { rm } from 'fs/promises';
import { readYamlFile } from '../read/read-yaml-file.js';
import { scope } from '../read/scope.js';
import { updateYamlFile } from './update-yaml-file.js';

describe('updateYamlFile', () => {
  const root = testDirectory('libs/fs/update-yaml-file');
  const resolve = scope(root);

  beforeAll(async () => {
    await createTestYamlFiles(root);
  });

  afterAll(async () => {
    await rm(root, { recursive: true });
  });

  it('should udpate json file', async () => {
    const filePath = resolve(root, 'dir1', 'file1');
    await updateYamlFile<{ path: string }>(filePath, (value) => {
      value.path = 'updated';
      return value;
    });
    const updatedYamlFile = await readYamlFile<{ path: string }>(filePath);
    expect(updatedYamlFile.path).toEqual('updated');
  });
});

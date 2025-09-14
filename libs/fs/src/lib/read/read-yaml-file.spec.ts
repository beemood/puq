import { testDirectory } from '@puq/testing';
import { rm } from 'fs/promises';
import { writeYamlFile } from '../write/write-yaml-file.js';
import { readYamlFile } from './read-yaml-file.js';
import { scope } from './scope.js';

describe('readYamlFile', () => {
  const root = testDirectory('lib/fs/read-yaml-file');
  const resolve = scope(root);
  const filePath = resolve(root, 'file.yaml');

  beforeAll(async () => {
    await writeYamlFile(filePath, { ok: true });
  });

  afterAll(async () => {
    await rm(root, { recursive: true });
  });
  it('should read yaml file', async () => {
    const result = await readYamlFile<{ ok: boolean }>(filePath);
    expect(result).toBeDefined();
    expect(result.ok).toEqual(true);
  });
});

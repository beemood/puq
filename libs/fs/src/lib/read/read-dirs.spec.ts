import {
  createTestFiles,
  testDirectories,
  testDirectory,
  testFiles,
} from '@puq/testing';
import { rm } from 'fs/promises';
import { readDirs } from './read-dirs.js';
import { scope } from './scope.js';

describe('dirs', () => {
  const root = testDirectory('libs/fs/read-dirs');
  const resolve = scope(root);

  beforeAll(async () => {
    await createTestFiles(root);
  });

  afterAll(async () => {
    await rm(root, { recursive: true });
  });

  it('it should read directories', async () => {
    const d = await readDirs(root);
    expect(d.sort()).toEqual(testDirectories.sort());
  });

  it('it should read directories recursively', async () => {
    const d = await readDirs(root, { recursive: true });
    expect(d.sort()).toEqual([...testDirectories, ...testFiles].sort());
  });
});

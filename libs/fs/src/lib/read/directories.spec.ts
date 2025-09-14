import { createTestFiles, testDirectories, testDirectory } from '@puq/testing';
import { rm } from 'fs/promises';
import { directories } from './directories.js';

describe('directories', () => {
  const root = testDirectory('libs/fs/directories');

  beforeAll(async () => {
    await createTestFiles(root);
  });

  afterAll(async () => {
    await rm(root, { recursive: true });
  });

  it('should read directories only', async () => {
    expect((await directories(root)).sort()).toEqual(testDirectories);
  });

  it('should read directories only recursively', async () => {
    expect((await directories(root, { recursive: true })).sort()).toEqual(
      testDirectories.sort()
    );
  });
});

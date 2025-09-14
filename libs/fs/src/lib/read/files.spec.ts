import { createTestFiles, testDirectory, testFiles } from '@puq/testing';
import { rm } from 'fs/promises';
import { files } from './files.js';

describe('files', () => {
  const root = testDirectory('libs/fs/files');

  beforeAll(async () => {
    await createTestFiles(root);
  });

  afterAll(async () => {
    await rm(root, { recursive: true });
  });

  it('should read files only', async () => {
    expect((await files(root)).sort()).toEqual([]);
  });

  it('should read files only recursively', async () => {
    expect((await files(root, { recursive: true })).sort()).toEqual(
      testFiles.sort()
    );
  });
});

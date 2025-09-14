import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

export const testDirectories = ['dir1', 'dir2', 'dir3'];

export const testFiles = ['dir1/file1.txt', 'dir2/file2.txt', 'dir3/file3.txt'];

export async function createTestFiles(rootDir: string) {
  for (const d of testDirectories) {
    await mkdir(join(rootDir, d), { recursive: true });
  }
  for (const path of testFiles) {
    await writeFile(join(rootDir, path), path, { encoding: 'utf-8' });
  }
}

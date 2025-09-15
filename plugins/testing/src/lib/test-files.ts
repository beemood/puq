import { mkdir, writeFile } from 'fs/promises';
import { dump } from 'js-yaml';
import { join } from 'path';

export const testDirectories = ['dir1', 'dir2', 'dir3'];

export const testFiles = ['dir1/file1', 'dir2/file2', 'dir3/file3'];

export async function createTestFiles(rootDir: string) {
  for (const d of testDirectories) {
    await mkdir(join(rootDir, d), { recursive: true });
  }
  for (const path of testFiles) {
    await writeFile(join(rootDir, path), path, {
      encoding: 'utf-8',
    });
  }
}

export async function createTestJsonFiles(rootDir: string) {
  for (const d of testDirectories) {
    await mkdir(join(rootDir, d), { recursive: true });
  }
  for (const path of testFiles) {
    await writeFile(join(rootDir, path), `{ "path": "some" }`, {
      encoding: 'utf-8',
    });
  }
}

export async function createTestYamlFiles(rootDir: string) {
  for (const d of testDirectories) {
    await mkdir(join(rootDir, d), { recursive: true });
  }
  for (const path of testFiles) {
    await writeFile(join(rootDir, path), dump({ path: 'some' }), {
      encoding: 'utf-8',
    });
  }
}

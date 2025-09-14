import { readdir } from 'fs/promises';
import { ReadDirOptions } from './read-dir-options.js';

export async function readDir(
  rootPath: string,
  options?: ReadDirOptions
): Promise<string[]> {
  return await readdir(rootPath, { encoding: 'utf-8', ...options });
}

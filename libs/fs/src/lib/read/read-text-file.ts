import { readFile } from 'fs/promises';
import { resolve } from './scope.js';

/**
 * Read text file
 *
 * @group Read
 * @param filePath file path
 * @returns utf-8 file content
 */
export async function readTextFile(filePath: string) {
  filePath = resolve(filePath);
  return await readFile(resolve(filePath), { encoding: 'utf-8' });
}

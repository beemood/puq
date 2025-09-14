import { readFile } from 'fs/promises';
/**
 * Read text file
 *
 * @group Read
 * @param filePath file path
 * @returns utf-8 file content
 */
export async function readTextFile(filePath: string) {
  return await readFile(filePath, { encoding: 'utf-8' });
}

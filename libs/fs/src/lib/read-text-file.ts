import { readFile } from 'fs/promises';

/**
 * Read file content with utf-8 encoding
 * @param filePath string
 * @returns utf-8 ecoding content of the given {@link filePath}
 */
export async function readTextFile(filePath: string) {
  return await readFile(filePath, { encoding: 'utf-8' });
}

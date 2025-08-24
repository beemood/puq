import { readFile } from 'fs/promises';

/**
 * Read text file
 * @param filePath file path
 * @returns file content as string
 */
export async function readTextFile(filePath: string): Promise<string> {
  return await readFile(filePath, { encoding: 'utf-8' });
}

import { readTextFile } from './read-text-file.js';

/**
 * Read and parase json file
 * @param filePath json file path
 * @returns json content as object
 */
export async function readJsonFile<T extends {} = Record<string, any>>(
  filePath: string
): Promise<T> {
  const text = await readTextFile(filePath);
  return JSON.parse(text) as T;
}

import { readTextFile } from './read-text-file.js';
/**
 * Read and parse json file
 *
 * @group Read
 * @param filePath file path
 * @returns parsed json value such as object or valid json literal
 */
export async function readJsonFile<T>(filePath: string): Promise<T> {
  const content = await readTextFile(filePath);
  return JSON.parse(content) as T;
}

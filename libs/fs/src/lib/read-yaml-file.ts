import { load } from 'js-yaml';
import { readTextFile } from './read-text-file.js';
/**
 * Read yaml file and parse it
 * @param filePath file path
 * @returns yaml file content as object
 */
export async function readYamlFile<T extends object>(
  filePath: string
): Promise<T> {
  const content = await readTextFile(filePath);
  return load(content) as T;
}

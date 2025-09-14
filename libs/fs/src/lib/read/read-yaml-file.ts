import { load } from 'js-yaml';
import { readTextFile } from './read-text-file.js';
/**
 * Read and parse yaml file
 *
 * @group Read
 * @param filePath file path
 * @returns parsed yaml value such as object or valid yaml literal
 */
export async function readYamlFile<T>(filePath: string) {
  const content = await readTextFile(filePath);
  return load(content) as T;
}

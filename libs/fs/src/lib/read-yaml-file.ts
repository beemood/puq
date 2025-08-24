import { readTextFile } from './read-text-file.js';
import { load } from 'js-yaml';

export async function readYamlFile<T extends object>(
  filepath: string
): Promise<T> {
  const content = await readTextFile(filepath);
  return load(content) as T;
}

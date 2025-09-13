import { load } from 'js-yaml';
import { readTextFile } from './read-text-file.js';

export async function readYamlFile(filePath: string) {
  const content = await readTextFile(filePath);
  return load(content);
}

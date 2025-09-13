import { readTextFile } from './read-text-file.js';

export async function readJsonFile(filePath: string) {
  const content = await readTextFile(filePath);
  return JSON.parse(content);
}

import { readTextFile } from './read-text-file.js';

export async function readJsonFile<T extends {} = Record<string, any>>(
  filepath: string
): Promise<T> {
  const text = await readTextFile(filepath);
  return JSON.parse(text) as T;
}

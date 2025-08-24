import { writeTextFile } from './write-text-file.js';

export async function writeJsonFile<T extends object>(
  filepath: string,
  contnet: T
): Promise<void> {
  await writeTextFile(filepath, JSON.stringify(contnet, undefined, 2));
}

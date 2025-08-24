import { writeTextFile } from './write-text-file.js';
/**
 * Write json file content
 * @param filePath json file path
 * @param content json object content
 */
export async function writeJsonFile<T extends object>(
  filePath: string,
  content: T
): Promise<void> {
  await writeTextFile(filePath, JSON.stringify(content, undefined, 2));
}

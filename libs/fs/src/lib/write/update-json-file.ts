import { readJsonFile } from '../read/read-json-file.js';
import { writeJsonFile } from './write-json-file.js';

export type UpdateJsonFileHandler<T> = (value: T) => T;

/**
 * Update json file content
 *
 * @group Write
 * @param filePath file path
 * @param updateJson function to update and return the new json content
 */
export async function updateJsonFile<T>(
  filePath: string,
  updateJson: UpdateJsonFileHandler<T>
) {
  const jsonValue = await readJsonFile<T>(filePath);
  await writeJsonFile(filePath, updateJson(jsonValue));
}

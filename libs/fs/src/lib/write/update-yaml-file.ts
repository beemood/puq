import { readYamlFile } from '../read/read-yaml-file.js';
import { writeYamlFile } from './write-yaml-file.js';

export type UpdateYamlFileHandler<T> = (value: T) => T;

/**
 * Update yaml file content
 *
 * @group Write
 * @param filePath file path
 * @param updateYaml function to update and return the new yaml content
 */
export async function updateYamlFile<T>(
  filePath: string,
  updateYaml: UpdateYamlFileHandler<T>
) {
  const jsonValue = await readYamlFile<T>(filePath);
  await writeYamlFile(filePath, updateYaml(jsonValue));
}

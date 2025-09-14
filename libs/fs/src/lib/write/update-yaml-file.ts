import { readYamlFile } from '../read/read-yaml-file.js';
import { writeYamlFile } from './write-yaml-file.js';

export type UpdateYamlFileHandler<T> = (value: T) => T;

export async function updateYamlFile<T>(
  filePath: string,
  updateYaml: UpdateYamlFileHandler<T>
) {
  const jsonValue = await readYamlFile<T>(filePath);
  await writeYamlFile(filePath, updateYaml(jsonValue));
}

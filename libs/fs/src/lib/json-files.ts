import { files } from './files.js';

/**
 * List all json file paths under the {@link rootDirectory}
 * @param rootDirectory root directory
 * @returns list of json file paths
 */
export async function jsonFiles(rootDirectory: string) {
  const found = await files(rootDirectory);
  return found.filter((e) => e.path.endsWith('.json'));
}

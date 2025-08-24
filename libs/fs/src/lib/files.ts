import { dirs } from './dirs.js';
/**
 * List all file paths under the ${@link rootDirectory}
 * @param rootDirectory root directory
 * @returns list of file paths
 */
export async function files(rootDirectory: string) {
  const found = await dirs(rootDirectory);
  return found.filter((e) => e.isFile);
}

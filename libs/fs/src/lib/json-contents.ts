import { files } from './files.js';
import { readJsonFile } from './read-json-file.js';

/**
 * Read all json files under the {@link rootDirectory}
 * @param rootDirectory root directory
 * @returns list of json file paths
 */
export async function jsonContents(rootDirectory: string) {
  const found = await files(rootDirectory);

  return await Promise.all(
    found
      .filter((e) => e.path.endsWith('.json'))
      .map(async (e) => {
        return {
          path: e.path,
          content: await readJsonFile(e.path),
        };
      })
  );
}

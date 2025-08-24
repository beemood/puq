import { files } from './files.js';
import { readJsonFile } from './read-json-file.js';

export async function jsonContents(root: string) {
  const found = await files(root);

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

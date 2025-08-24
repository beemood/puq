import { Dir } from 'fs';
import { files } from './files.js';
import { readTextFile } from './read-text-file.js';

export type Content<T = string> = {
  content: T;
};

export type TextContent = Dir | Content<string>;

/**
 * Read all files under the {@link rootDirectory}.
 * @param rootDirectory
 * @returns list of {@link TextContent}
 */
export async function textContents(
  rootDirectory: string
): Promise<TextContent[]> {
  const found = await files(rootDirectory);

  return await Promise.all(
    found.map(async (e) => {
      return {
        ...e,
        content: await readTextFile(e.path),
      };
    })
  );
}

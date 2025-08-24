import { Dir } from 'fs';
import { files } from './files.js';
import { readTextFile } from './read-text-file.js';

export type Content<T = string> = {
  content: T;
};
export type TextContent = Dir | Content<string>;

export async function textContents(root: string): Promise<TextContent[]> {
  const found = await files(root);

  return await Promise.all(
    found.map(async (e) => {
      return {
        ...e,
        content: await readTextFile(e.path),
      };
    })
  );
}

import { ObjectEncodingOptions } from 'fs';
import { readdir } from 'fs/promises';

export type ReadDirOptions = ObjectEncodingOptions & {
  withFileTypes?: false | undefined;
  recursive?: boolean | undefined;
};

export async function readDirs(
  rootPath: string,
  options?: ReadDirOptions
): Promise<string[]> {
  return await readdir(rootPath, { encoding: 'utf-8', ...options });
}

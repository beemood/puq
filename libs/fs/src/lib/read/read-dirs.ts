import type { ObjectEncodingOptions } from 'fs';
import { readdir } from 'fs/promises';
import { resolve } from './scope.js';

export type ReadDirOptions = ObjectEncodingOptions & {
  withFileTypes?: false | undefined;
  recursive?: boolean | undefined;
};

/**
 * List file/directory paths under the {@link rootPath} directory.
 *
 * @group Read
 * @param rootPath string
 * @param options {@link ReadDirOptions}
 * @returns List of file/directory paths only under the {@link rootPath} directory.
 */
export async function readDirs(
  rootPath: string,
  options?: ReadDirOptions
): Promise<string[]> {
  rootPath = resolve(rootPath);
  return await readdir(rootPath, { encoding: 'utf-8', ...options });
}

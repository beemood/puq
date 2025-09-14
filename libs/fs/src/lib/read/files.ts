import { stat } from 'fs/promises';
import { join } from 'path';
import { ReadDirOptions, readDirs } from './read-dirs.js';

/**
 * List file paths under the {@link rootPath} directory.
 *
 * @group Read
 * @param rootPath string
 * @param options {@link ReadDirOptions}
 * @returns List of file paths only under the {@link rootPath} directory.
 */
export async function files(
  rootPath: string,
  options?: ReadDirOptions
): Promise<string[]> {
  const allPaths = await readDirs(rootPath, options);
  const foundRootPaths: string[] = [];
  for (const d of allPaths) {
    const s = await stat(join(rootPath, d));
    if (s.isFile()) {
      foundRootPaths.push(d);
    }
  }
  return foundRootPaths;
}

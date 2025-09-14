import { stat } from 'fs/promises';
import { join } from 'path';
import { ReadDirOptions, readDirs } from './read-dirs.js';

/**
 * List directory paths under the {@link rootPath} directory.
 *
 * @group Read
 * @param rootPath string
 * @param options {@link ReadDirOptions}
 * @returns List of directory paths only under the {@link rootPath} directory.
 */
export async function directories(
  rootPath: string,
  options?: ReadDirOptions
): Promise<string[]> {
  const allPaths = await readDirs(rootPath, options);

  const directoryPaths: string[] = [];

  for (const d of allPaths) {
    if ((await stat(join(rootPath, d))).isDirectory()) {
      directoryPaths.push(d);
    }
  }

  return directoryPaths;
}

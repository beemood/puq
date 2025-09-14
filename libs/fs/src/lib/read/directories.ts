import { stat } from 'fs/promises';
import { join } from 'path';
import { ReadDirOptions } from './read-dir-options.js';
import { readDirs } from './read-dirs.js';

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

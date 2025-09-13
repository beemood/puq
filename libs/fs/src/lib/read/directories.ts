import { stat } from 'fs/promises';
import { join } from 'path';
import { readdir, ReadDirOptions } from './readdir.js';

export async function directories(
  rootPath: string,
  options?: ReadDirOptions
): Promise<string[]> {
  const allPaths = await readdir(rootPath, options);

  const directoryPaths: string[] = [];

  for (const d of allPaths) {
    if ((await stat(join(rootPath, d))).isDirectory()) {
      directoryPaths.push(d);
    }
  }

  return directoryPaths;
}

import { stat } from 'fs/promises';
import { join } from 'path';
import { readdir, ReadDirOptions } from './readdir.js';

export async function files(
  rootPath: string,
  options?: ReadDirOptions
): Promise<string[]> {
  const allPaths = await readdir(rootPath, options);
  const foundRootPaths: string[] = [];
  for (const d of allPaths) {
    const s = await stat(join(rootPath, d));
    if (s.isFile()) {
      foundRootPaths.push(d);
    }
  }
  return foundRootPaths;
}

import { readdir, stat } from 'fs/promises';
import { resolve } from 'path';

export type Dir = {
  path: string;
  isFile: boolean;
  isDirectory: boolean;
};

export async function dirs(root: string): Promise<Dir[]> {
  const result: Dir[] = [];

  const found = await readdir(root, { encoding: 'utf-8' });

  for (const d of found) {
    const rPath = resolve(root, d);
    const cStat = await stat(rPath);
    result.push({
      path: rPath,
      isDirectory: cStat.isDirectory(),
      isFile: cStat.isFile(),
    });
    if (cStat.isDirectory()) {
      result.push(...(await dirs(rPath)));
    }
  }
  return result;
}

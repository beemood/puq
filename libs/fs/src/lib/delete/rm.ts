import { rm as __rm } from 'fs/promises';

/**
 * Remove file/directory that pointing out to the given {@link path}.
 *
 * @group Delete
 * @param path file or directory
 * @returns
 */
export async function rm(path: string) {
  return await __rm(path, { recursive: true, force: true });
}

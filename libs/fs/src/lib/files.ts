import { dirs } from './dirs.js';

export async function files(root: string) {
  const found = await dirs(root);
  return found.filter((e) => e.isFile);
}

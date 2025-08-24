import { files } from './files.js';

export async function jsonFiles(root: string) {
  const found = await files(root);
  return found.filter((e) => e.path.endsWith('.json'));
}

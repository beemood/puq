import { readdir } from 'fs/promises';
import { join } from 'path';

export async function libs() {
  return await readdir(join('libs'));
}

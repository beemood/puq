import { mkdir, writeFile } from 'fs/promises';
import { dirname } from 'path';

export async function writeTextFile(
  filepath: string,
  contnet: string
): Promise<void> {
  try {
    await mkdir(dirname(filepath), { recursive: true });
  } catch (err) {
    // Ignore errors
  }
  return await writeFile(filepath, contnet, { encoding: 'utf-8' });
}

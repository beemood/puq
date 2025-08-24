import { mkdir, writeFile } from 'fs/promises';
import { dirname } from 'path';
/**
 * Write text file content
 * @param filePath file path
 * @param content string file content
 * @returns void
 */
export async function writeTextFile(
  filePath: string,
  content: string
): Promise<void> {
  try {
    await mkdir(dirname(filePath), { recursive: true });
  } catch (err) {
    // Ignore errors
  }
  return await writeFile(filePath, content, { encoding: 'utf-8' });
}

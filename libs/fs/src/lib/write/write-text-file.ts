import { writeFile } from 'fs/promises';
import { OpenMode } from './open-mode.js';
import { WriteFileOptions } from './write-file-options.js';

export async function __writeTextFile(
  filePath: string,
  content: string,
  options?: WriteFileOptions
) {
  await writeFile(filePath, content, {
    encoding: 'utf-8',
    ...options,
  });
}

export async function writeTextFile(filePath: string, content: string) {
  await __writeTextFile(filePath, content);
}

export async function appendTextFile(filePath: string, content: string) {
  await __writeTextFile(filePath, content, { mode: OpenMode.APPEND });
}

export async function writeTextFileExclusive(
  filePath: string,
  content: string
) {
  await __writeTextFile(filePath, content, { mode: OpenMode.EXCLUSIVE });
}

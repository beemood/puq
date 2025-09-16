import { appendFile, mkdir, writeFile } from 'fs/promises';
import { dirname } from 'path';
import { resolve } from '../read/scope.js';
import type { WriteFileOptions } from './write-file-options.js';
import { WriteFlag } from './write-flag.js';

/**
 * Write text file with utf-8 encoding
 *
 * @group Write
 * @param filePath file path
 * @param content file content
 * @param options {@link WriteFileOptions}
 */
export async function __writeTextFile(
  filePath: string,
  content: string,
  options?: WriteFileOptions
) {
  filePath = resolve(filePath);
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, content, {
    encoding: 'utf-8',
    ...options,
  });
}

/**
 * Write text file with utf-8 encoding
 *
 * @group Write
 * @param filePath file path
 * @param content file content
 */

export async function writeTextFile(filePath: string, content: string) {
  await __writeTextFile(filePath, content);
}

/**
 * Append text file
 *
 * @group Write
 * @param filePath file path
 * @param content file content
 */
export async function appendTextFile(filePath: string, content: string) {
  await mkdir(dirname(filePath), { recursive: true });
  await appendFile(filePath, content, { encoding: 'utf-8', flush: true });
}

/**
 * Create and write tex file if it does not exist
 *
 * @group Write
 * @param filePath file path
 * @param content file content
 */
export async function writeTextFileExclusive(
  filePath: string,
  content: string
) {
  await __writeTextFile(filePath, content, { flag: WriteFlag.EXCLUSIVE_FLAG });
}

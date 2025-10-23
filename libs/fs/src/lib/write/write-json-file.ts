import type { WriteFileOptions } from './write-file-options.js';
import { WriteFlag } from './write-flag.js';
import { __writeTextFile } from './write-text-file.js';
/**
 * Write json file
 *
 * @group Write
 * @param filePath file path
 * @param content file content
 * @param options {@link WriteFileOptions}
 */
export async function __writeJsonFile<T>(
  filePath: string,
  content: T,
  options?: WriteFileOptions
) {
  const stringContent = JSON.stringify(content, undefined, 2);
  await __writeTextFile(filePath, stringContent, options);
}

/**
 * Write json file
 *
 * @group Write
 * @param filePath file pathF
 * @param content file content
 */
export async function writeJsonFile<T>(filePath: string, content: T) {
  await __writeJsonFile(filePath, content);
}

/**
 * Create and write json file if it does not exist
 *
 * @group Write
 * @param filePath file pathF
 * @param content file content
 */
export async function writeJsonFileExclusive<T>(filePath: string, content: T) {
  await __writeJsonFile(filePath, content, { flag: WriteFlag.EXCLUSIVE_FLAG });
}

import { dump } from 'js-yaml';
import { WriteFileOptions } from './write-file-options.js';
import { WriteFlag } from './write-flag.js';
import { __writeTextFile } from './write-text-file.js';

/**
 * Write yaml file
 *
 * @group Write
 * @param filePath file path
 * @param content file content
 * @param options {@link WriteFileOptions}
 */
export async function __writeYamlFile<T>(
  filePath: string,
  content: T,
  options?: WriteFileOptions
) {
  const yamlContent = dump(content);
  await __writeTextFile(filePath, yamlContent, options);
}

/**
 * Write yaml file
 *
 * @group Write
 * @param filePath file path
 * @param content file content
 */
export async function writeYamlFile<T>(filePath: string, content: T) {
  await __writeYamlFile(filePath, content);
}

/**
 * Create and write yaml file if it does not exist
 *
 * @group Write
 * @param filePath file path
 * @param content file content
 */
export async function writeYamlFileExclusive<T>(filePath: string, content: T) {
  await __writeYamlFile(filePath, content, { flag: WriteFlag.EXCLUSIVE_FLAG });
}

import { dump } from 'js-yaml';
import { OpenMode } from './open-mode.js';
import { WriteFileOptions } from './write-file-options.js';
import { __writeTextFile } from './write-text-file.js';

export async function __writeYamlFile<T>(
  filePath: string,
  content: T,
  options?: WriteFileOptions
) {
  const yamlContent = dump(content);
  await __writeTextFile(filePath, yamlContent, options);
}

export async function writeYamlFile<T>(filePath: string, content: T) {
  await __writeYamlFile(filePath, content);
}

export async function appendYamlFile<T>(filePath: string, content: T) {
  await __writeYamlFile(filePath, content, { mode: OpenMode.APPEND });
}

export async function writeYamlFileExclusive<T>(filePath: string, content: T) {
  await __writeYamlFile(filePath, content, { mode: OpenMode.EXCLUSIVE });
}

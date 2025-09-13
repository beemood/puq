import { readJsonFile } from '../read/read-json-file.js';
import { OpenMode } from './open-mode.js';
import { WriteFileOptions } from './write-file-options.js';
import { __writeTextFile } from './write-text-file.js';

export async function __writeJsonFile<T>(
  filePath: string,
  content: T,
  options?: WriteFileOptions
) {
  const stringContent = JSON.stringify(content);
  await __writeTextFile(filePath, stringContent, options);
}

export async function writeJsonFile<T>(filePath: string, content: T) {
  await __writeJsonFile(filePath, content);
}

export async function appendJsonFile<T>(filePath: string, content: T) {
  let jsonFileContent = await readJsonFile(filePath);

  if (Array.isArray(jsonFileContent)) {
    jsonFileContent.push(content);
  } else if (typeof jsonFileContent == 'object') {
    jsonFileContent = { ...jsonFileContent, ...content };
  }
  await __writeJsonFile(filePath, jsonFileContent);
}

export async function writeJsonFileExclusive<T>(filePath: string, content: T) {
  await __writeJsonFile(filePath, content, { mode: OpenMode.EXCLUSIVE });
}

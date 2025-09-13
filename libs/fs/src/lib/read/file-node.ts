import { createReadStream } from 'fs';
import { stat as __stat } from 'fs/promises';
import {
  appendJsonFile,
  writeJsonFile,
  writeJsonFileExclusive,
} from '../write/write-json-file.js';
import {
  appendTextFile,
  writeTextFile,
  writeTextFileExclusive,
} from '../write/write-text-file.js';
import {
  appendYamlFile,
  writeYamlFile,
  writeYamlFileExclusive,
} from '../write/write-yaml-file.js';
import { readJsonFile } from './read-json-file.js';
import { readTextFile } from './read-text-file.js';
import { readYamlFile } from './read-yaml-file.js';

export class FileNode {
  constructor(public readonly filePath: string) {}

  async stat() {
    return await __stat(this.filePath);
  }

  readStream() {
    return createReadStream(this.filePath);
  }

  async readText() {
    return await readTextFile(this.filePath);
  }

  async readJson() {
    return await readJsonFile(this.filePath);
  }

  async readYaml() {
    return await readYamlFile(this.filePath);
  }

  async writeText(content: string) {
    await writeTextFile(this.filePath, content);
  }
  async appendText(content: string) {
    await appendTextFile(this.filePath, content);
  }
  async writeTextExclusive(content: string) {
    await writeTextFileExclusive(this.filePath, content);
  }

  async writeJson<T>(content: T) {
    await writeJsonFile(this.filePath, content);
  }
  async appendJson<T>(content: T) {
    await appendJsonFile(this.filePath, content);
  }
  async writeJsonExclusive(content: string) {
    await writeJsonFileExclusive(this.filePath, content);
  }

  async writeYaml<T>(content: T) {
    await writeYamlFile(this.filePath, content);
  }
  async appendYaml<T>(content: T) {
    await appendYamlFile(this.filePath, content);
  }
  async writeYamlExclusive(content: string) {
    await writeYamlFileExclusive(this.filePath, content);
  }
}

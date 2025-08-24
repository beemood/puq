import { fileName } from '@puq/fs';
import { names } from '@puq/names';
import { DEFINITIONS_PREFIX } from './is-definition-path.js';

/**
 * Convert file path into json definition path
 * @param filePath file path
 * @returns definition path such as '#/definitions/PascalCaseName
 */
export function toDefinitionPath(filePath: string) {
  const name = names(fileName(filePath)).pascalCase;
  return `${DEFINITIONS_PREFIX}/${name}`;
}

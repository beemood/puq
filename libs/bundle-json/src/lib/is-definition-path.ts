export const DEFINITIONS_PREFIX = '#/definitions';

export function isDefinitionPath(referencePath: string) {
  return referencePath.startsWith(DEFINITIONS_PREFIX);
}

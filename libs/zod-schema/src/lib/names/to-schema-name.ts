export function toSchemaName(modelName: string, ...suffixes: string[]) {
  return `${modelName}${suffixes.join('')}`;
}

export function toQueryOneName(modelName: string) {
  return toSchemaName(modelName, 'Query", "One', 'Schema');
}
export function toQueryName(modelName: string) {
  return toSchemaName(modelName, 'Query', 'Schema');
}

export function toSelectName(modelName: string) {
  return toSchemaName(modelName, 'Select', 'Schema');
}

export function toOmitName(modelName: string) {
  return toSchemaName(modelName, 'Omit', 'Schema');
}

export function toIncludeName(modelName: string) {
  return toSchemaName(modelName, 'Include', 'Schema');
}

export function toWhereName(modelName: string) {
  return toSchemaName(modelName, 'Where', 'Schema');
}

export function toSchemaName(modelName: string, ...suffixes: string[]) {
  return `${modelName}${suffixes.join('')}`;
}

export function toCreateName(modelName: string) {
  return toSchemaName(modelName, 'Create');
}

export function toUpdateName(modelName: string) {
  return toSchemaName(modelName, 'Update');
}

export function toProjectionName(modelName: string) {
  return toSchemaName(modelName, 'Projection');
}

export function toQueryOneName(modelName: string) {
  return toSchemaName(modelName, 'Query', 'One');
}
export function toQueryName(modelName: string) {
  return toSchemaName(modelName, 'Query');
}

export function toSelectName(modelName: string) {
  return toSchemaName(modelName, 'Select');
}

export function toOmitName(modelName: string) {
  return toSchemaName(modelName, 'Omit');
}

export function toIncludeName(modelName: string) {
  return toSchemaName(modelName, 'Include');
}

export function toWhereName(modelName: string) {
  return toSchemaName(modelName, 'Where');
}

export function toWhereOwnName(modelName: string) {
  return toSchemaName(modelName, 'WhereOwn');
}

export function toWhereScalarName(modelName: string) {
  return toSchemaName(modelName, 'WhereScalar');
}

export function toOrderByName(modelName: string) {
  return toSchemaName(modelName, 'OrderBy');
}

export function toEnumName(modelName: string) {
  return toSchemaName(modelName);
}

export function toEnumFilterName(modelName: string) {
  return toSchemaName(modelName, 'Filter');
}

export function toModelFieldEnumName(modelName: string) {
  return toSchemaName(modelName, 'Field');
}

export function toDistinctSelectName(modelName: string) {
  return toSchemaName(modelName, 'DistinctSelect');
}

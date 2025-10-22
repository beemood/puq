import type { DMMF } from '@prisma/client/runtime/library';
import type { Predicate } from '@puq/types';
import { isOrderByField, isOwnOrderByField } from './is-field.js';
import { toOrderByFieldDefinition } from './to-field-definitions.js';
import {
  toOrderBySchemaName,
  toOwnOrderBySchemaName,
} from './to-schema-names.js';

export function __printOrderBySchema(
  model: DMMF.Model,
  toSchemaName: (modelName: string) => string,
  toFieldDefinition: (field: DMMF.Field) => string,
  fieldFilterFn: Predicate<DMMF.Field>
): string {
  const schemaFields = model.fields
    .filter(fieldFilterFn)
    .map(toFieldDefinition)
    .join(',');

  return [
    `export const ${toSchemaName(model.name)}`,
    `=z.object({`,
    schemaFields,
    `})`,
  ].join('');
}

export function printOrderBySchema(model: DMMF.Model) {
  return __printOrderBySchema(
    model,
    toOrderBySchemaName,
    toOrderByFieldDefinition,
    isOrderByField
  );
}

export function printOwnOrderBySchema(model: DMMF.Model) {
  return __printOrderBySchema(
    model,
    toOwnOrderBySchemaName,
    toOrderByFieldDefinition,
    isOwnOrderByField
  );
}

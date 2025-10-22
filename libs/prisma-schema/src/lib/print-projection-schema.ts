import type { DMMF } from '@prisma/client/runtime/library';
import type { Predicate } from '@puq/types';
import {
    toOwnProjectionFieldDefinition,
    toProjectionFieldDefinition,
} from './to-field-definitions.js';
import {
    toOwnSelectSchemaName,
    toSelectSchemaName,
} from './to-schema-names.js';

export function printProjectionSchema(
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

export function printOwnSelectProjectionSchema(model: DMMF.Model) {
  return printProjectionSchema(
    model,
    toOwnSelectSchemaName,
    toOwnProjectionFieldDefinition,
    () => true
  );
}

export function printSelectProjectionSchema(model: DMMF.Model) {
  return printProjectionSchema(
    model,
    toSelectSchemaName,
    toProjectionFieldDefinition,
    () => true
  );
}

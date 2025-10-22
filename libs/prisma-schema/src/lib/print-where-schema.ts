import type { DMMF } from '@prisma/client/runtime/library';
import type { Predicate } from '@puq/types';
import { isOwnField } from './is-field.js';
import { toWhereFieldDefinition } from './to-field-definitions.js';
import { toOwnWhereSchemaName } from './to-schema-names.js';

export function _printWhereSchema(
  model: DMMF.Model,
  toSchemaName: (modelName: string) => string,
  toFieldDefinition: (field: DMMF.Field) => string,
  fieldFilterFn: Predicate<DMMF.Field> = () => true
) {
  const schemaFields = model.fields
    .filter(fieldFilterFn)
    .map(toFieldDefinition)
    .join(',');
  return [
    `export const ${toSchemaName(model.name)} = z.object({`,
    schemaFields,
    `})`,
  ].join('');
}

export function printOwnWhereSchema(model: DMMF.Model) {
  return _printWhereSchema(
    model,
    toOwnWhereSchemaName,
    toWhereFieldDefinition,
    isOwnField
  );
}

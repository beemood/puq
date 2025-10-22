import type { DMMF } from '@prisma/client/runtime/library';
import { isOwnField } from './is-field.js';
import { toDistictSchemaName } from './to-schema-names.js';

export function printDistictSchema(model: DMMF.Model) {
  const _fields = model.fields
    .filter(isOwnField)
    .map((e) => `"${e.name}"`)
    .join(',');
  const enumArray = `[ ${_fields}]`;
  const schemaName = toDistictSchemaName(model.name);
  const schemaDefinition = `z.enum(${enumArray}).array().optional()`;

  return `export const ${schemaName} = ${schemaDefinition}`;
}

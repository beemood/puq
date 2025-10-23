import type { DMMF } from '@prisma/client/runtime/library';
import type { FieldFilterFn, NameFn, ToFieldDefinitionFn } from '../common/types.js';
import { isOwnField } from '../helpers/is-field.js';
import { toDistictSchemaName } from '../helpers/to-schema-name.js';

/**
 * Print the zod schema to validate distinct query parameters (list of property names).
 * @param model DMMF.Model
 * @param toSchemaNameFn {@link NameFn}
 * @param toSchemaNameFn {@link NameFn}
 * @returns
 *
 * @example
 *
 * ````ts
 *  const ModelNameDistinctSchema = z.enum(['id', 'name']).array().optional()
 *  const fields = ['id', 'name'];
 *  const distinct  = ModelNameDistinctSchema.parse(fields);
 * ````
 */
export function printDistictSchema(
  model: DMMF.Model,
  toSchemaNameFn: NameFn = toDistictSchemaName,
  toFieldDefinitionFn: ToFieldDefinitionFn = (model, field) =>
    `"${field.name}"`,
  fieldFilterFn: FieldFilterFn = isOwnField
) {
  const _fields = model.fields
    .filter(fieldFilterFn)
    .map((field) => toFieldDefinitionFn(model, field))
    .join(',');

  const enumArray = `[ ${_fields}]`;
  const schemaName = toSchemaNameFn(model.name);
  const schemaDefinition = `z.enum(${enumArray}).array().optional()`;

  return `export const ${schemaName} = ${schemaDefinition}`;
}

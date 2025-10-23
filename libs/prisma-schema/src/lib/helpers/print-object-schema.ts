import type { DMMF } from '@prisma/client/runtime/library';
import type { FieldFilterFn, NameFn, ToFieldDefinitionFn } from '../common/types.js';

/**
 *
 * @param model DMMF.Model
 * @param toSchemaNameFn {@link NameFn}
 * @param toFieldDefinitionFn {@link ToFieldDefinitionFn}
 * @param fieldFilterFn {@link FieldFilterFn}
 * @returns boolean
 *
 * @example
 *
 * ````ts
 * export const SchemaName = z.object({
 *   name: z.string(),
 *   count: z.int(),
 * })
 * ````
 */
export function printObjectSchema(
  model: DMMF.Model,
  toSchemaNameFn: NameFn,
  toFieldDefinitionFn: ToFieldDefinitionFn,
  fieldFilterFn: FieldFilterFn = () => true
) {
  const schemaName = toSchemaNameFn(model.name);
  const schemaFields = model.fields
    .filter(fieldFilterFn)
    .map((field) => toFieldDefinitionFn(model, field))
    .join(',');

  return [`export const ${schemaName} = z.object({`, schemaFields, `})`].join(
    ''
  );
}

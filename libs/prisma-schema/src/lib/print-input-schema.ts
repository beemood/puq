import type { DMMF } from '@prisma/client/runtime/library';
import type { Predicate } from '@puq/types';
import { isUpdateField } from './generate-zod-schemas.js';
import { isInputField } from './is-field.js';
import { toInputFieldDefinition } from './to-field-definitions.js';
import { toCreateSchemaName, toUpdateSchemaName } from './to-schema-names.js';

/**
 * Print zod input object schema from the given {@link model}
 * @param model DMMF.Model metadata
 * @param toSchemaName function to create the name of the schema such as CategoryCreateSchema, CaegoryUpdateSchema, CategoryOwnCreateSchema
 * @param toFieldDefinition function to print the zod object's field such as `name: z.string()`
 * @param fieldFilterFn function to filter the `model.fields` for example we can filter the own-fields (without relation fields)
 * @returns string
 */
export function printInputSchema(
  model: DMMF.Model,
  toSchemaName: (modelName: string) => string,
  toFieldDefinition: (model: DMMF.Model, field: DMMF.Field) => string,
  fieldFilterFn: Predicate<DMMF.Field>
): string {
  const schemaFields = model.fields
    .filter(fieldFilterFn)
    .map((field) => toFieldDefinition(model, field))
    .join(',');

  return [
    `export const ${toSchemaName(model.name)}`,
    `=z.object({`,
    schemaFields,
    `})`,
  ].join('');
}

/**
 * Printn create-input-schema with relation options
 * @param model DMMF.Model
 * @returns string
 */
export function printCreateInputSchema(model: DMMF.Model) {
  return printInputSchema(
    model,
    toCreateSchemaName,
    toInputFieldDefinition,
    isInputField
  );
}

export function printUpdateInputSchema(model: DMMF.Model) {
  return printInputSchema(
    model,
    toUpdateSchemaName,
    toInputFieldDefinition,
    isUpdateField
  );
}

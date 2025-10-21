import type { DMMF } from '@prisma/client/runtime/library';
import type { Predicate } from '@puq/types';
import { isInputField } from './field-filter-functions.js';
import { isUpdateField } from './generate-zod-schemas.js';
import { printSchemaDefinition } from './print-schema-definition.js';

/**
 * Print zod input object schema from the given {@link model}
 * @param model DMMF.Model metadata
 * @param schemaNameFn function to create the name of the schema such as CategoryCreateSchema, CaegoryUpdateSchema, CategoryOwnCreateSchema
 * @param fieldPrinterFn function to print the zod object's field such as `name: z.string()`
 * @param fieldFilterFn function to filter the `model.fields` for example we can filter the own-fields (without relation fields)
 * @returns string
 */
export function printInputSchema(
  model: DMMF.Model,
  schemaNameFn: (modelName: string) => string,
  fieldPrinterFn: (field: DMMF.Field) => string,
  fieldFilterFn: Predicate<DMMF.Field>
): string {
  const schemaFields = model.fields
    .filter(fieldFilterFn)
    .map(fieldPrinterFn)
    .join(',');

  return [
    `export const ${schemaNameFn(model.name)}`,
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
    (modelName) => `${modelName}CreateInputSchema`,
    (field) => {
      return `${field.name}: ${printSchemaDefinition(model, field)}`;
    },
    isInputField
  );
}

export function printUpdateInputSchema(model: DMMF.Model) {
  return printInputSchema(
    model,
    (modelName) => `${modelName}UpdateInputSchema`,
    (field) => {
      return `${field.name}: ${printSchemaDefinition(model, field)}`;
    },
    isUpdateField
  );
}

import type { DMMF } from '@prisma/client/runtime/library';
import { printOwnCreateSchemaFields } from './print-own-create-schema-fields.js';
import { } from './print-own-input-field-schema.js';

/**
 * Print the input create schema with only own fields excluding relations.
 * @param model
 */
export function printOwnCreateSchema(model: DMMF.Model) {
  return [
    `export const ${model.name}OwnInputCreateSchema`,
    `=z.object({`,
    printOwnCreateSchemaFields(model),
    `})`,
  ].join('');
}

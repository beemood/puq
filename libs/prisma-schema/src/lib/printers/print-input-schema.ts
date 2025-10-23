import type { DMMF } from '@prisma/client/runtime/library';

import { isCreateInputField, isOwnInputField } from '../helpers/is-field.js';
import { printObjectSchema } from '../helpers/print-object-schema.js';
import {
  toCreateSchemaName,
  toOwnCreateSchemaName,
  toUpdateSchemaName,
} from '../helpers/to-schema-name.js';
import { isUpdateField } from '../old-version/generate-zod-schemas.js';
import { toInputFieldDefinition } from './to-field-definitions.js';

/**
 * Print create-input schema to validate *create* input from the given model
 * @param model DMMF.Model
 * @returns string
 *
 *
 * @example
 * ````ts
 * export const ModelNameCreateSchema = z.object({
 *   name: z.stirng()
 *   description: z.string().optional()
 *   status: StatusSchema.optional()
 * })
 * ````
 */
export function printCreateInputSchema(model: DMMF.Model) {
  return printObjectSchema(
    model,
    toCreateSchemaName,
    toInputFieldDefinition,
    isCreateInputField
  );
}

export function printOwnCreateInputSchema(model: DMMF.Model) {
  return printObjectSchema(
    model,
    toOwnCreateSchemaName,
    toInputFieldDefinition,
    isOwnInputField
  );
}

/**
 * Print update-input schema to validate *update* input from the given model
 * @param model DMMF.Model
 * @returns string
 *
 *
 * @example
 * ````ts
 * export const ModelNameUpdatechema = z.object({
 *   name: z.stirng().optional()
 *   description: z.string().optional()
 *   status: StatusSchema.optional()
 * })
 * ````
 */
export function printUpdateInputSchema(model: DMMF.Model) {
  return printObjectSchema(
    model,
    toUpdateSchemaName,
    toInputFieldDefinition,
    isUpdateField
  );
}

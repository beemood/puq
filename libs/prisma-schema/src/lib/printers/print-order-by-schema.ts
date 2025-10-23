import type { DMMF } from '@prisma/client/runtime/library';
import { isOwnField } from '../helpers/is-field.js';
import { printObjectSchema } from '../helpers/print-object-schema.js';
import {
  toOrderBySchemaName,
  toOwnOrderBySchemaName,
} from '../helpers/to-schema-name.js';
import { toOrderByFieldDefinition } from './to-field-definitions.js';

/**
 * Print the dedicated order-by schema for the given model
 * @param model
 * @returns string
 *
 * @example
 * ````ts
 * export const ModelNameOrderBySchema = z.object({
 *    id: _direction,
 *    name: _direction
 * })
 * ````
 */
export function printOrderBySchema(model: DMMF.Model) {
  return printObjectSchema(
    model,
    toOrderBySchemaName,
    toOrderByFieldDefinition,
    () => true
  );
}

/**
 * Print the dedicated  order-by schema  for the given model (exluding relation fields)
 * @param model
 * @returns string
 *
 * @example
 * ````ts
 * export const ModelNameOrderBySchema = z.object({
 *    id: _direction,
 *    name: _direction
 * })
 * ````
 */
export function printOwnOrderBySchema(model: DMMF.Model) {
  return printObjectSchema(
    model,
    toOwnOrderBySchemaName,
    toOrderByFieldDefinition,
    isOwnField
  );
}

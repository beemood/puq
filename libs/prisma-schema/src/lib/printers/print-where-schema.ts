import type { DMMF } from '@prisma/client/runtime/library';
import { isOwnField } from '../helpers/is-field.js';
import { printObjectSchema } from '../helpers/print-object-schema.js';
import {
  toOwnWhereSchemaName,
  toWhereSchemaName,
} from '../helpers/to-schema-name.js';
import { toWhereFieldDefinition } from './to-field-definitions.js';

/**
 * Print where schema including only model's own fields
 * @param model DMMF.Model
 * @returns string
 */
export function printOwnWhereSchema(model: DMMF.Model) {
  return printObjectSchema(
    model,
    toOwnWhereSchemaName,
    toWhereFieldDefinition,
    isOwnField
  );
}

/**
 * Print where schema that inlude all fields
 * @param model DMMF.Model
 * @returns string
 */
export function printWhereSchema(model: DMMF.Model) {
  return printObjectSchema(model, toWhereSchemaName, toWhereFieldDefinition);
}

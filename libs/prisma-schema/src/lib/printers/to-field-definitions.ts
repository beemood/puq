import type { DMMF } from '@prisma/client/runtime/library';
import { isRelationField } from '../helpers/is-field.js';
import {
  toOwnOrderBySchemaName,
  toOwnQueryOneSchemaName,
} from '../helpers/to-schema-name.js';
import {
  printCreateInputFieldSchemaDefinition,
  printUpdateInputFieldSchemaDefinition,
} from './print-input-field-schema-definition.js';
import { printWhereSchemaFieldDefinition } from './print-where-schema-field-definition.js';

/**
 * Print a projection field definition such as `name : _select`
 * @param model DMMF.Model
 * @param field DMMF.Field
 * @returns string
 */
export function toProjectionFieldDefinition(
  model: DMMF.Model,
  field: DMMF.Field
) {
  return `${field.name}: _select`;
}

/**
 * Print a complete projection field definition including relation projections such as `name: _select.or(RelationQuerySchema).optional()`
 * @param model DMMF.Model
 * @param field DMMF.Field
 * @returns string
 */
export function toCompleteProjectionFieldDefinition(
  model: DMMF.Model,
  field: DMMF.Field
) {
  if (isRelationField(field)) {
    if (field.isList) {
      const schemaName = toOwnQueryOneSchemaName(field.type);
      return `${field.name} : _select.or(${schemaName}).optional()`;
    }
    {
      const schemaName = toOwnQueryOneSchemaName(field.type);
      return `${field.name} : _select.or(${schemaName}).optional()`;
    }
  }
  return `${field.name}: _select`;
}

/**
 * Print an input field definition such as `name: z.string()`
 * @param model DMMF.Model
 * @param field DMMF.Field
 * @returns string
 */
export function toCreateInputFieldDefinition(
  model: DMMF.Model,
  field: DMMF.Field
) {
  return `${field.name}: ${printCreateInputFieldSchemaDefinition(
    model,
    field
  )}`;
}

export function toUpdateInputFieldDefinition(
  model: DMMF.Model,
  field: DMMF.Field
) {
  return `${field.name}: ${printUpdateInputFieldSchemaDefinition(
    model,
    field
  )}`;
}

/**
 * Print order-by field definition such as `name: _direction`
 * @param model DMMF.Model
 * @param field DMMF.Field
 * @returns string
 */
export function toOrderByFieldDefinition(model: DMMF.Model, field: DMMF.Field) {
  if (isRelationField(field)) {
    if (field.isList) {
      return `${field.name}: _orderByCount`;
    } else {
      return `${field.name}: ${toOwnOrderBySchemaName(field.type)}.optional()`;
    }
  }
  return `${field.name}: _direction`;
}

/**
 * Print where schema field definition such as `name: _strFilter`
 * @param model DMMF.Model
 * @param field DMMF.Field
 * @returns string
 */
export function toWhereFieldDefinition(model: DMMF.Model, field: DMMF.Field) {
  return `${field.name}: ${printWhereSchemaFieldDefinition(field)}`;
}

import type { DMMF } from '@prisma/client/runtime/library';
import { isRelationField } from './is-field.js';
import { printSchemaDefinition } from './print-schema-definition.js';
import { printWhereFieldSchemaDefinition } from './print-where-field-schema-defintion.js';
import {
  toOwnOrderBySchemaName,
  toOwnQueryOneSchemaName,
  toOwnQuerySchemaName,
} from './to-schema-names.js';

/**
 * Define a projection fields "key": _select
 * @param field
 * @returns
 */
export function toProjectionFieldDefinition(field: DMMF.Field) {
  return `${field.name}: _select`;
}

export function toCompleteProjectionFieldDefinition(field: DMMF.Field) {
  if (isRelationField(field)) {
    if (field.isList) {
      return `${field.name} : _select.or(${toOwnQuerySchemaName(
        field.type
      )}).optional()`;
    }
    return `${field.name} : _select.or(${toOwnQueryOneSchemaName(
      field.type
    )}).optional()`;
  }
  return `${field.name}: _select`;
}

export function toInputFieldDefinition(model: DMMF.Model, field: DMMF.Field) {
  return `${field.name}: ${printSchemaDefinition(model, field)}`;
}

export function toOrderByFieldDefinition(field: DMMF.Field) {
  if (isRelationField(field)) {
    if (field.isList) {
      return `${field.name}: _orderByCount`;
    } else {
      return `${field.name}: ${toOwnOrderBySchemaName(field.type)}`;
    }
  }
  return `${field.name}: _direction`;
}

export function toWhereFieldDefinition(field: DMMF.Field) {
  return `${field.name}: ${printWhereFieldSchemaDefinition(field)}`;
}

import type { DMMF } from '@prisma/client/runtime/library';
import { printSchemaDefinition } from './print-schema-definition.js';
import {
  toOwnOrderBySchemaName,
  toOwnQueryOneSchemaName,
} from './to-schema-names.js';

export function toOwnProjectionFieldDefinition(field: DMMF.Field) {
  return `${field.name}: _select`;
}

export function toProjectionFieldDefinition(field: DMMF.Field) {
  if (field.relationName) {
    return `${field.name}: z.boolean().or(${toOwnQueryOneSchemaName(
      field.type
    )}).optional() `;
  }
  return `${field.name}: _select`;
}

export function toInputFieldDefinition(model: DMMF.Model, field: DMMF.Field) {
  return `${field.name}: ${printSchemaDefinition(model, field)}`;
}

export function toOrderByFieldDefinition(field: DMMF.Field) {
  if (field.relationName != undefined) {
    if (field.isList) {
      return `${field.name}: _orderByCount`;
    } else {
      return `${field.name}: ${toOwnOrderBySchemaName(field.type)}`;
    }
  }
  return `${field.name}: _direction`;
}

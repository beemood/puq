import type { DMMF } from '@prisma/client/runtime/library';
import { printSchemaDefinition } from './print-schema-definition.js';
import { toOwnQueryOneSchemaName } from './to-schema-names.js';

export function toOwnProjectionFieldDefinition(field: DMMF.Field) {
  return `${field.name}: z.boolean().optional()`;
}

export function toProjectionFieldDefinition(field: DMMF.Field) {
  if (field.relationName) {
    return `${field.name}: ${toOwnQueryOneSchemaName(field.type)} `;
  }
  return `${field.name}: z.boolean().optional()`;
}

export function toInputFieldDefinition(model: DMMF.Model, field: DMMF.Field) {
  return `${field.name}: ${printSchemaDefinition(model, field)}`;
}

export function toOrderByFieldDefinition(field: DMMF.Field) {
  if (field.relationName != undefined) {
    return `${field.name}: ${toOwnQueryOneSchemaName(field.type)}`;
  }
  return `${field.name}: z.enum(['asc', 'desc']).optional()`;
}

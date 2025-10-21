import type { DMMF } from '@prisma/client/runtime/library';

/**
 * Check the field is relation field or not
 * @param field
 * @returns
 */
export function isRelationField(field: DMMF.Field) {
  return field.relationName != undefined;
}

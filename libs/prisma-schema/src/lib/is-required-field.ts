import type { DMMF } from '@prisma/client/runtime/library';

/**
 * Check the field is required or not
 * @param field
 * @returns
 */
export function isRequiredField(field: DMMF.Field): boolean {
  return field.isRequired;
}

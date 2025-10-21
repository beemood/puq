import type { DMMF } from '@prisma/client/runtime/library';
import { isGeneratedField } from './is-generated-field.js';
import { isRelationField } from './is-relation-field.js';

/**
 * Check the field is an input field or either  system-generated or relation-field
 * @param field Field
 * @returns
 */
export function isOwnInputField(field: DMMF.Field) {
  if (isGeneratedField(field)) {
    return false;
  }

  if (isRelationField(field)) {
    return false;
  }

  return true;
}

/**
 * Check the field is an input field or either  system-generated or relation-field
 * @param field Field
 * @returns
 */
export function isInputField(field: DMMF.Field) {
  if (isGeneratedField(field)) {
    return false;
  }

  return true;
}

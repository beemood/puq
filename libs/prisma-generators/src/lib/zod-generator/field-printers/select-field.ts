import type { Field } from '../common/dmmf.js';
import { isRelation } from '../common/is-field.js';
import { toQueryOneOwn, toQueryOwn } from '../common/names.js';
import { pre } from '../common/pre.js';

/**
 * Print relation select field schema
 *
 * @param field {@link Field}
 * @returns string
 */
export const selectRelationField = (field: Field): string => {
  if (field.isList) {
    return toQueryOwn(field.type);
  }
  return toQueryOneOwn(field.type);
};

/**
 * Print select field schema
 *
 * @param field {@link Field}
 * @returns string
 */
export const selectField = (field: Field): string => {
  if (isRelation(field)) {
    return selectRelationField(field);
  }
  return pre('bool');
};

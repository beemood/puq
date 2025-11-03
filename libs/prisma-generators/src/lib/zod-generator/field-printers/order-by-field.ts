import type { Field } from '../common/dmmf.js';
import { isRelation } from '../common/is-field.js';
import { toOrderByOwn } from '../common/names.js';
import { pre } from '../common/pre.js';

/**
 * Print order-by schema for relation field
 *
 * @param field {@link Field}
 * @returns
 */
export const orderByRelationField = (field: Field) => {
  if (field.isList) {
    return pre('orderByCount');
  }
  return toOrderByOwn(field.type);
};

/**
 * Print order by schema for field
 *
 * @param field {@link Field}
 * @returns
 */
export const orderByField = (field: Field) => {
  if (isRelation(field)) {
    return orderByRelationField(field);
  }
  return pre('dir');
};

import type { Field } from '../common/dmmf.js';
import { toQueryOneOwn, toQueryOwn } from '../common/names.js';
import { pre } from '../common/pre.js';

/**
 * Print include field schema
 *
 * @param field {@link Field}
 * @returns
 */
export const includeField = (field: Field): string => {
  if (field.isList) {
    return `${pre('bool')}.or(${toQueryOwn(field.type)})`;
  }
  return `${pre('bool')}.or(${toQueryOneOwn(field.type)})`;
};

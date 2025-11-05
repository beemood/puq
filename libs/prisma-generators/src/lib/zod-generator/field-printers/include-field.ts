import type { Field } from '../common/dmmf.js';
import { toSelectOwn } from '../common/names.js';
import { pre } from '../common/pre.js';

/**
 * Print include field schema
 *
 * @param field {@link Field}
 * @returns
 */
export const includeField = (field: Field): string => {
  const query = `z.object({ select :${toSelectOwn(field.type)} })`;

  if (field.isList) {
    return `${query}.or(${pre('bool')})`;
  }
  return `${query}.or(${pre('bool')})`;
};

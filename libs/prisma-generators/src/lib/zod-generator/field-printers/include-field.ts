import { toQueryOneOwn, toQueryOwn } from '../common/names.js';
import type { Field } from '../common/types.js';

export const includeField = (field: Field): string => {
  if (field.isList) {
    return `bool.or(${toQueryOwn(field.type)})`;
  }
  return `bool.or(${toQueryOneOwn(field.type)})`;
};

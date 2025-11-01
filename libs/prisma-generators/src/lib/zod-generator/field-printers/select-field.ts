import { isRelation } from '../common/checkers.js';
import { toQueryOneOwn, toQueryOwn } from '../common/names.js';
import type { Field } from '../common/types.js';

export const selectRelationField = (field: Field): string => {
  if (field.isList) {
    return toQueryOwn(field.type);
  }
  return toQueryOneOwn(field.type);
};

export const selectField = (field: Field): string => {
  if (isRelation(field)) {
    return selectRelationField(field);
  }
  return 'bool';
};

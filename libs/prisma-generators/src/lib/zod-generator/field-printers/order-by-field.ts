import { isRelation } from '../common/checkers.js';
import { toOrderByOwn } from '../common/names.js';
import type { Field } from '../common/types.js';

export const orderByRelationField = (field: Field) => {
  if (field.isList) {
    return `orderByCount`;
  }
  return toOrderByOwn(field.type);
};

export const orderByField = (field: Field) => {
  if (isRelation(field)) {
    return orderByRelationField(field);
  }
  return 'dir';
};

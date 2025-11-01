import { isRelation } from '../common/checkers.js';
import type { Field, Model } from '../common/types.js';
import { includeField } from '../field-printers/include-field.js';

export const includeFields = (fields: Field[]): string => {
  return fields.filter(isRelation).map(includeField).join(', ');
};

export const includeModel = (model: Model): string => {
  const fields = includeFields([...model.fields]);
  return `z.object({ ${fields} })`;
};

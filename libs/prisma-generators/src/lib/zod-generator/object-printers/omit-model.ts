import { isNotRelation } from '../common/checkers.js';
import type { Field, Model } from '../common/types.js';
import { selectField } from '../field-printers/select-field.js';

export const omitFields = (fields: Field[]): string => {
  return fields.filter(isNotRelation).map(selectField).join(', ');
};

export const omitModel = (model: Model): string => {
  const fields = omitFields([...model.fields]);
  return `z.object({ ${fields} })`;
};

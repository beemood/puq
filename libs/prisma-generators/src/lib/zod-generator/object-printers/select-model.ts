import type { Field, Model } from '../common/types.js';
import { selectField } from '../field-printers/select-field.js';

export const selectFields = (fields: Field[]): string => {
  return fields
    .map(selectField)
    .map((e) => `${e}.optional()`)
    .join(', ');
};

export const selectModel = (model: Model): string => {
  const fields = selectFields([...model.fields]);
  return `z.object({ ${fields} })`;
};

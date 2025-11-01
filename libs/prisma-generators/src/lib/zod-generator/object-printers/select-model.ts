import type { Field, Model } from '../common/types.js';
import { fieldDef } from '../field-printers/field-def.js';
import { selectField } from '../field-printers/select-field.js';

export const selectFields = (fields: Field[]): string => {
  return fields.map(fieldDef(selectField)).join(', ');
};

export const selectModel = (model: Model): string => {
  const fields = selectFields([...model.fields]);
  return `z.object({ ${fields} })`;
};

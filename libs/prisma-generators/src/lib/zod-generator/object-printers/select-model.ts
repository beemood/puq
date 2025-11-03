import type { Field, Model } from '../common/dmmf.js';
import { fieldDef } from '../field-printers/field-def.js';
import { makePartial } from '../field-printers/make-partial.js';
import { selectField } from '../field-printers/select-field.js';

/**
 * Print select schema fields
 *
 * @param fields {@link Field}[]
 * @returns string
 */
export const selectFields = (fields: Field[]): string => {
  return fields.map(fieldDef(selectField)).join(', ');
};

/**
 * Print select schema
 *
 * @param model {@link Model}
 * @returns string
 */
export const selectModel = (model: Model): string => {
  const fields = selectFields([...model.fields]);
  const schema = `z.object({ ${fields} })`;
  return makePartial(schema);
};

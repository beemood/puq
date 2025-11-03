import type { Field, Model } from '../common/dmmf.js';
import { isNotRelation } from '../common/is-field.js';
import { fieldDef } from '../field-printers/field-def.js';
import { makePartial } from '../field-printers/make-partial.js';
import { selectField } from '../field-printers/select-field.js';

/**
 * Print omit schema fields
 *
 * @param fields {@link Field}[]
 * @returns string
 */
export const omitFields = (fields: Field[]): string => {
  return fields.filter(isNotRelation).map(fieldDef(selectField)).join(', ');
};

/**
 * Print omit schema
 *
 * @param model {@link Model}
 * @returns string
 */
export const omitModel = (model: Model): string => {
  const fields = omitFields([...model.fields]);
  const schema = `z.object({ ${fields} })`;
  return makePartial(schema);
};

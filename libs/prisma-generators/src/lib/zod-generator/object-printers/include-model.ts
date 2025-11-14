import type { Field, Model } from '../common/dmmf.js';
import { isRelation } from '../common/is-field.js';
import { fieldDef } from '../field-printers/field-def.js';
import { includeField } from '../field-printers/include-field.js';
import { makePartial } from '../field-printers/make-partial.js';

/**
 * Print include schema fields
 *
 * @param fields {@link Field}[]
 * @returns
 */
export const includeFields = (fields: Field[]): string => {
  return fields.filter(isRelation).map(fieldDef(includeField)).join(', ');
};

/**
 * Print include schema
 *
 * @param model {@link Model}
 * @returns string
 */
export const includeModel = (model: Model): string => {
  const fields = includeFields([...model.fields]);

  if (fields.trim() === '') {
    return `z.any()`;
  }

  const schema = `z.object({ ${fields} })`;
  return makePartial(schema);
};

import type { Field, Model } from '../common/dmmf.js';
import { toWhereOwn } from '../common/names.js';
import { fieldDef } from '../field-printers/field-def.js';
import { makePartial } from '../field-printers/make-partial.js';
import { whereField } from '../field-printers/where-field.js';

/**
 * Print where schema fields
 *
 * @param fields {@link Field}[]
 * @returns string
 */
export const whereFields = (fields: Field[]): string => {
  return fields.map(fieldDef(whereField)).join(', ');
};

/**
 * Print where schema
 *
 * @param model {@link Model}
 * @returns string
 */
export const whereModel = (model: Model): string => {
  const schema = `z.object({ 
  ${whereFields([...model.fields])}, 
    AND:${toWhereOwn(model.name)},
    OR:${toWhereOwn(model.name)}.array(), 
    NOT:${toWhereOwn(model.name)}.or(${toWhereOwn(model.name)}.array())
  })`;

  return makePartial(schema);
};

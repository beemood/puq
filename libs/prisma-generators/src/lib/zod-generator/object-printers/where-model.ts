import type { Field, Model } from '../common/dmmf.js';
import { isNotRelation, isRelation } from '../common/is-field.js';
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
  const relationFields = model.fields.filter(isRelation);

  const ownSchemaName = toWhereOwn(model.name);
  const schema = `z.object({ 
  ...${ownSchemaName}.shape,
  ${whereFields([...relationFields])}, 
    AND:${toWhereOwn(model.name)},
    OR:${toWhereOwn(model.name)}.array(), 
    NOT:${toWhereOwn(model.name)}.or(${toWhereOwn(model.name)}.array())
  })`;

  return makePartial(schema);
};

const whereModelOwnFields = (fields: Field[]): string => {
  return fields.map(fieldDef(whereField)).join(', ');
};

/**
 * Print where schema without other schemas
 *
 * @param model {@link Model}
 * @returns string
 */
export const whereModelOwn = (model: Model): string => {
  const ownFields = model.fields.filter(isNotRelation);
  const fields = whereModelOwnFields([...ownFields]);
  const schemea = `z.object({ ${fields} })`;

  return makePartial(schemea);
};

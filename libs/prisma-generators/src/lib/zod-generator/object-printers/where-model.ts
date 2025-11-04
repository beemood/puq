import { isNotEmpty } from '@puq/utils';
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

  const whereOwnName = toWhereOwn(model.name);

  const content = [
    `...${ownSchemaName}.shape`,
    whereFields([...relationFields]),
    `AND: ${whereOwnName}`,
    `OR:  ${whereOwnName}.array()`,
    `NOT: ${whereOwnName}.or(${whereOwnName}.array())`,
  ].filter(isNotEmpty);

  const schema = `z.object({ ${content} })`;

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

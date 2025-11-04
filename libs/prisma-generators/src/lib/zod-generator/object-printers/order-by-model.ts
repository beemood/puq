import type { Field, Model } from '../common/dmmf.js';
import { isNotRelation, isRelation } from '../common/is-field.js';
import { toOrderByOwn } from '../common/names.js';
import { fieldDef } from '../field-printers/field-def.js';
import { makePartial } from '../field-printers/make-partial.js';
import { orderByField } from '../field-printers/order-by-field.js';

/**
 * Print order-by schema fields
 *
 * @param fields {@link Field}[]
 * @returns string
 */
export const orderByFields = (fields: Field[]): string => {
  return fields.map(fieldDef(orderByField)).join(', ');
};

/**
 * Print order-by schema
 *
 * @param model {@link Model}
 * @returns string
 */
export const orderByModel = (model: Model): string => {
  const relationFields = model.fields.filter(isRelation);
  const ownSchemaName = toOrderByOwn(model.name);
  const schema = `z.object({
    ...${ownSchemaName}.shape, 
    ${orderByFields([...relationFields])} 
  })`;
  return makePartial(schema);
};

/**
 * Print order-by own schema
 * @param model {@link Model}
 * @returns
 */
export const orderByModelOwn = (model: Model): string => {
  const ownFields = model.fields.filter(isNotRelation);
  const fields = orderByFields([...ownFields]);
  const schema = `z.object({ 
    ${fields} 
  })`;
  return makePartial(schema);
};

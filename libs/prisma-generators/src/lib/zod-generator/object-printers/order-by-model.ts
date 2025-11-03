import type { Field, Model } from '../common/dmmf.js';
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
  const schema = `z.object({ ${orderByFields([...model.fields])} })`;
  return makePartial(schema);
};

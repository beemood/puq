import type { Field, Model } from '../common/types.js';
import { fieldDef } from '../field-printers/field-def.js';
import { orderByField } from '../field-printers/order-by-field.js';

export function orderByFields(fields: Field[]) {
  return fields.map(fieldDef(orderByField)).join(', ');
}

export function orderByModel(model: Model) {
  return `z.object({ ${orderByFields([...model.fields])} })`;
}

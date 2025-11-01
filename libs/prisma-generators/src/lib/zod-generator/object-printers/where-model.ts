import { toWhereOwn } from '../common/names.js';
import type { Field, Model } from '../common/types.js';
import { fieldDef } from '../field-printers/field-def.js';
import { whereField } from '../field-printers/where-field.js';

export function whereFields(fields: Field[]) {
  return fields.map(fieldDef(whereField)).join(', ');
}

export function whereModel(model: Model) {
  return `z.object({ 
  ${whereFields([...model.fields])}, 
    AND:${toWhereOwn(model.name)},
    OR:${toWhereOwn(model.name)}.array(), 
    NOT:${toWhereOwn(model.name)}.or(${toWhereOwn(model.name)}.array())
  })`;
}

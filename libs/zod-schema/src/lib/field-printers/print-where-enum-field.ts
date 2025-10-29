import type { Field } from '../dmmf.js';

export function printWhereEnumField(field: Field) {
  if (field.isList) {
    return `${field.type}.array()`;
  }
  return `${field.type}`;
}

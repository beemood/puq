import type { Field } from '../common/types.js';

export function modelField(field: Field) {
  return `'${field.name}'`;
}

import type { EnumField } from '../common/types.js';

export function enumField(field: EnumField) {
  return `'${field.name}'`;
}

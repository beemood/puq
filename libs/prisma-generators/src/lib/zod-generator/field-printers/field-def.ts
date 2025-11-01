import type { Field } from '../common/types.js';

export function fieldDef(fieldPrinter: (field: Field) => string) {
  return (field: Field) => {
    return `${field.name}: ${fieldPrinter(field)}`;
  };
}

import type { Field } from '../common/dmmf.js';

/**
 * Print object-schemea field definition such as `name: z.string()`
 *
 * @param fieldPrinter Field schema printer
 * @returns
 */
export function fieldDef(fieldPrinter: (field: Field) => string) {
  return (field: Field) => {
    return `${field.name}: ${fieldPrinter(field)}`;
  };
}

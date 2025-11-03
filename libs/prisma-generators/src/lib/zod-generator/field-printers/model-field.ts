import type { Field } from '../common/dmmf.js';

/**
 * Print field name for model-field enum schemea
 *
 * @param field {@link Field}
 * @returns string
 */
export function modelField(field: Field) {
  return `'${field.name}'`;
}

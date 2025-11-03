import type { EnumField } from '../common/dmmf.js';

/**
 * Print enum schema field such as 'id', 'name'
 *
 * @param field {@link EnumField}
 * @returns
 */
export function enumField(field: EnumField) {
  return `'${field.name}'`;
}

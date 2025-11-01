import type { EnumField, EnumModel } from '../common/types.js';
import { enumField } from '../field-printers/enum-field.js';

/**
 * Enum fields
 * @param fields {@link EnumField}[]
 * @returns
 */
export function enumFields(fields: EnumField[]) {
  return fields.map(enumField).join(', ');
}

/**
 * Enum model schema
 * @param model {@link EnumModel}
 * @returns string
 */
export function enumModel(model: EnumModel) {
  const fields = enumFields([...model.values]);
  return `z.enum([ ${fields} ])`;
}

import type { EnumField, EnumModel } from '../common/dmmf.js';
import { enumField } from '../field-printers/enum-field.js';

/**
 * Print enum schema fields
 *
 * @param fields {@link EnumField}[]
 * @returns
 */
export const enumFields = (fields: EnumField[]): string => {
  return fields.map(enumField).join(', ');
};

/**
 * Print enum schema for enum model
 *
 * @param model {@link EnumModel}
 * @returns string
 */
export const enumModel = (model: EnumModel): string => {
  const fields = enumFields([...model.values]);
  return `z.enum([ ${fields} ])`;
};

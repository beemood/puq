import type { Field, Model } from '../common/dmmf.js';
import { isNotRelation } from '../common/is-field.js';
import { modelField } from '../field-printers/model-field.js';

/**
 * Print enum schema fields for model fields
 *
 * @param fields {@link Field}[]
 * @returns
 */
export const fieldModelFields = (fields: Field[]): string => {
  return fields.filter(isNotRelation).map(modelField).join(', ');
};

/**
 * Print model's field-enum schema such as `z.enum([ 'id', 'name' ])`
 *
 * @param model {@link Model}
 * @returns string
 */
export const fieldModel = (model: Model): string => {
  const fields = fieldModelFields([...model.fields]);
  return `z.enum([ ${fields} ])`;
};

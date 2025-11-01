import { isNotRelation } from '../common/checkers.js';
import type { Field, Model } from '../common/types.js';
import { modelField } from '../field-printers/model-field.js';

/**
 * Model fields
 * @param fields {@link Field}[]
 * @returns
 */
export function fieldModelFields(fields: Field[]) {
  return fields.filter(isNotRelation).map(modelField).join(', ');
}

/**
 * Field model schema
 * @param model {@link Model}
 * @returns string
 */
export function fieldModel(model: Model) {
  const fields = fieldModelFields([...model.fields]);
  return `z.enum([ ${fields} ])`;
}

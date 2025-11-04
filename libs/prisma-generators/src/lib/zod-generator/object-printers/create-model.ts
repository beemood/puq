import type { Model } from '../common/dmmf.js';
import { isInputField, isRelation } from '../common/is-field.js';
import { toCreate } from '../common/names.js';
import { fieldDef } from '../field-printers/field-def.js';
import { inputField } from '../field-printers/input-field.js';

export const createModelOwn = (model: Model): string => {
  const fields = model.fields
    .filter(isInputField)
    .filter((field) => {
      if (isRelation(field)) {
        if (field.isList) {
          return false;
        }
      }
      return field.isRequired;
    })
    .map(fieldDef(inputField));

  return `z.object({ ${fields} })`;
};

export function createModel(model: Model) {
  const fields = model.fields
    .filter(isInputField)
    .map(fieldDef(inputField))
    .join(', ');

  const schema = `z.object({ ${fields} })`;
  return schema;
}

export const updateModel = (model: Model): string => {
  return `${toCreate(model.name)}.clone().partial()`;
};

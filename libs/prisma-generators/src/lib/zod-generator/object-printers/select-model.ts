import type { Field, Model } from '../common/dmmf.js';
import { toOmit, toSelectOwn } from '../common/names.js';
import { fieldDef } from '../field-printers/field-def.js';
import { makePartial } from '../field-printers/make-partial.js';
import { selectField } from '../field-printers/select-field.js';

/**
 * Print select schema fields
 *
 * @param fields {@link Field}[]
 * @returns string
 */
export const selectFields = (fields: Field[]): string => {
  return fields.map(fieldDef(selectField)).join(', ');
};

/**
 * Print select schema
 *
 * @param model {@link Model}
 * @returns string
 */
export const selectModel = (model: Model): string => {
  // const relationFields = model.fields.filter(isRelation);
  // const fields = selectFields([...relationFields]);
  const ownSchemaName = toSelectOwn(model.name);
  const schema = `z.object({...${ownSchemaName}.shape,  })`;
  return makePartial(schema);
};

export const selectModelOwn = (model: Model): string => {
  return toOmit(model.name);
};

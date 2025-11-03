import type { Datamodel, Model } from '../common/dmmf.js';
import { isNotRelation, isRelation } from '../common/is-field.js';
import { makePartial } from '../field-printers/make-partial.js';
import { whereRelationFields } from '../field-printers/where-relation-field.js';
import { whereFields } from './where-model.js';

/**
 * Print where schema without other schemas
 * @param datamodel {@link Datamodel}
 * @param model {@link Model}
 * @returns string
 */
export const whereModelOwn = (datamodel: Datamodel, model: Model): string => {
  const scalarFields = model.fields.filter(isNotRelation);
  const relationFields = model.fields.filter(isRelation);
  const schema = `z.object({ 
    ${whereFields([...scalarFields])},
    ${whereRelationFields(datamodel, [...relationFields])}
  })`;
  return makePartial(schema);
};

import type { Datamodel, Field } from '../common/dmmf.js';

/**
 * Print where schema relation field without using other schemas
 * @param datamodel {@link Datamodel}
 * @param field {@link Field}
 * @returns string
 */
const _whereRelationField = (datamodel: Datamodel, field: Field): string => {
  return `z.object({})`;
};

/**
 * Print where schema relation fields (without using other schemas)
 *
 * @param datamodel {@link Datamodel}
 * @param fields {@link Field}[]
 * @returns string
 */
export const whereRelationFields = (
  datamodel: Datamodel,
  fields: Field[]
): string => {
  return fields
    .map((field) => _whereRelationField(datamodel, field))
    .join(', ');
};

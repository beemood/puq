import type { DMMF } from '@prisma/client/runtime/library';
import { isOwnField, isRelationField } from '../helpers/is-field.js';
import { printObjectSchema } from '../helpers/print-object-schema.js';
import {
  toCompleteSelectSchemaName,
  toIncludeSchemaName,
  toJsonProcessorSchemaName,
  toOmitSchemaName,
  toOwnSelectSchemaName,
  toProjectionSchemaName,
  toSelectSchemaName,
} from '../helpers/to-schema-name.js';
import {
  toCompleteProjectionFieldDefinition,
  toProjectionFieldDefinition,
} from './to-field-definitions.js';

export function printOwnSelectProjectionSchema(model: DMMF.Model) {
  return printObjectSchema(
    model,
    toOwnSelectSchemaName,
    toProjectionFieldDefinition,
    isOwnField
  );
}

/**
 * Print the **select** projection schema
 * @param model
 * @returns string
 * @group Projection
 *
 * @example
 * ````ts
 * export const ModelNameSelectSchema = z.object({
 *  id: _select,
 *  name: _select
 * })
 * ````
 */
export function printSelectProjectionSchema(model: DMMF.Model) {
  return printObjectSchema(
    model,
    toSelectSchemaName,
    toProjectionFieldDefinition
  );
}
/**
 * Print the complete **select** projection schema including complex relation projections
 * @param model DMMF.Model
 * @returns string
 * @group Projection
 *
 * @example
 *
 * ````ts
 * export const ModelNameCompleteSelectSchema = z.object({
 *  id: _select,
 *  name: _select,
 *  relationName: _select.or(RelationSelectSchema).optional()
 * })
 *
 * ````
 */
export function printCompleteSelectProjectionSchema(model: DMMF.Model) {
  return printObjectSchema(
    model,
    toCompleteSelectSchemaName,
    toCompleteProjectionFieldDefinition
  );
}

/**
 * Print the **omit** projection schema
 * @param model DMMF.Model
 * @returns string
 * @group Projection
 *
 * @example
 * ````ts
 * export const ModelNameOmitSchema = z.object({
 *  id: _select,
 *  name: _select
 * })
 * ````
 */
export function printOmitProjectionSchema(model: DMMF.Model) {
  return printObjectSchema(
    model,
    toOmitSchemaName,
    toProjectionFieldDefinition,
    isOwnField
  );
}

/**
 * Print the **include** projection schema
 * @param model DMMF.Model
 * @returns string
 *
 * @example
 * ````ts
 * export const ModelNameIncludeSchema = z.object({
 *   oneRelation: _select.or(RelationQueryOneShcmea),
 *   manyRelation: _select.or(RelationQuerySchema)
 * })
 * ````
 */
export function printIncludeProjectionSchema(model: DMMF.Model) {
  return printObjectSchema(
    model,
    toIncludeSchemaName,
    toCompleteProjectionFieldDefinition,
    isRelationField
  );
}

/**
 * Print the combined projection schema including **select**, **omit**, and **include**.
 * @param model DMMF.Model
 * @returns string
 *
 *
 * @example
 *
 * ````ts
 * export const ModelNameProjectionSchema = z.union({
 *    z.object({ select: SelectSchemaName }),
 *    z.object({ omit: OmitSchemaName }),
 *    z.object({ include: IncludeSchemaName }),
 *    z.object({ })
 * })
 * ````
 */
export function printProjectionSchema(model: DMMF.Model) {
  const schameName = toProjectionSchemaName(model.name);

  const selectName = toJsonProcessorSchemaName(toSelectSchemaName(model.name));
  const omitName = toJsonProcessorSchemaName(toOmitSchemaName(model.name));
  const includeName = toJsonProcessorSchemaName(
    toIncludeSchemaName(model.name)
  );
  return [
    `export const ${schameName} = z.union([`,
    [
      `z.object({ omit: ${omitName}})`,
      `z.object({ select: ${selectName}})`,
      `z.object({ include: ${includeName}})`,
      `z.object({})`,
    ].join(','),
    `]);`,
  ].join('');
}

import type { DMMF } from '@prisma/client/runtime/library';
import {
  toCompleteQueryOneSchemaName,
  toCompleteQuerySchemaName,
  toCompleteSelectSchemaName,
  toDistictSchemaName,
  toIncludeSchemaName,
  toJsonProcessorSchemaName,
  toOmitSchemaName,
  toOrderBySchemaName,
  toOwnOrderBySchemaName,
  toOwnQueryOneSchemaName,
  toOwnQuerySchemaName,
  toOwnSelectSchemaName,
  toOwnWhereSchemaName,
  toQueryOneSchemaName,
  toQuerySchemaName,
  toSelectSchemaName,
  toWhereSchemaName,
} from '../helpers/to-schema-name.js';

/**
 * Print own query one schema including projections and where query property
 * @param model
 * @returns
 * @group Query
 *
 * @example
 * ````ts
 * export const ModelNameOwnQueryOneSchema = z.object({
 *  select: SelectSchema,
 *  omit: OmitSchema,
 *  where: WhereSchema,
 * })
 * ````
 */
export function printOwnQueryOneSchema(model: DMMF.Model) {
  const schemaName = toOwnQueryOneSchemaName(model.name);

  const selectName = toJsonProcessorSchemaName(
    toOwnSelectSchemaName(model.name)
  );
  const omitName = toJsonProcessorSchemaName(toOmitSchemaName(model.name));
  const whereName = toJsonProcessorSchemaName(toOwnWhereSchemaName(model.name));

  const fields = [
    `select: ${selectName}.optional()`,
    `omit: ${omitName}.optional()`,
    `where: ${whereName}.optional()`,
  ].join(',');

  return [`export const ${schemaName} = z.object({`, fields, `})`].join('');
}

/**
 * Print own query schema
 * @param model
 * @returns
 * @group Query
 *
 * @example
 * ````ts
 * export const ModelNameOwnQuerySchema = z.object({
 *  take: _take,
 *  skip: _skip,
 *  orderBy: OrderBySchema,
 *  select: SelectSchema,
 *  omit: OmitSchema,
 *  where: WhereSchema,
 *  distinct: DistinctSchema
 * })
 * ````
 */
export function printOwnQuerySchema(model: DMMF.Model) {
  const schemaName = toOwnQuerySchemaName(model.name);

  const selectName = toJsonProcessorSchemaName(
    toOwnSelectSchemaName(model.name)
  );
  const omitName = toJsonProcessorSchemaName(toOmitSchemaName(model.name));
  const whereName = toJsonProcessorSchemaName(toOwnWhereSchemaName(model.name));
  const orderByName = toJsonProcessorSchemaName(
    toOwnOrderBySchemaName(model.name)
  );

  const distinctName = toDistictSchemaName(model.name);

  const fields = [
    `take: _take`,
    `skip: _skip`,
    `distinct: ${distinctName}.optional()`,
    `select: ${selectName}.optional()`,
    `omit: ${omitName}.optional()`,
    `where: ${whereName}.optional()`,
    `orderBy: ${orderByName}.optional()`,
  ].join(',');

  return [`export const ${schemaName} = z.object({`, fields, `})`].join('');
}

/**
 * Print own query schema
 * @param model
 * @returns
 * @group Query
 *
 * @example
 * ````ts
 * export const ModelNameQuerySchema = z.object({
 *  take: _take,
 *  skip: _skip,
 *  orderBy: OrderBySchema,
 *  select: SelectSchema,
 *  omit: OmitSchema,
 *  where: WhereSchema,
 *  distinct: DistinctSchema
 * })
 * ````
 */
export function printQuerySchema(model: DMMF.Model) {
  const schemaName = toQuerySchemaName(model.name);

  const selectName = toJsonProcessorSchemaName(
    toOwnSelectSchemaName(model.name)
  );
  const omitName = toJsonProcessorSchemaName(toOmitSchemaName(model.name));
  const whereName = toJsonProcessorSchemaName(toOwnWhereSchemaName(model.name));
  const orderByName = toJsonProcessorSchemaName(
    toOwnOrderBySchemaName(model.name)
  );
  const includeName = toJsonProcessorSchemaName(
    toIncludeSchemaName(model.name)
  );

  const fields = [
    `take: _take`,
    `skip: _skip`,
    `distinct: ${toDistictSchemaName(model.name)}.optional()`,
    `select: ${selectName}.optional()`,
    `omit: ${omitName}.optional()`,
    `include: ${includeName}.optional()`,
    `where: ${whereName}.optional()`,
    `orderBy: ${orderByName}.optional()`,
  ].join(',');

  return [`export const ${schemaName} = z.object({`, fields, `})`].join('');
}

/**
 * Print query one schema
 * @param model
 * @returns
 * @group Query
 *
 * @example
 * ````ts
 * export const ModelNameOwnQueryOneSchema = z.object({
 *  select: SelectSchema,
 *  omit: OmitSchema,
 *  include: IncludeSchema,
 *  where: WhereSchema,
 * })
 * ````
 */
export function printQueryOneSchema(model: DMMF.Model) {
  const schemaName = toQueryOneSchemaName(model.name);

  const selectName = toJsonProcessorSchemaName(
    toOwnSelectSchemaName(model.name)
  );
  const omitName = toJsonProcessorSchemaName(toOmitSchemaName(model.name));
  const whereName = toJsonProcessorSchemaName(toOwnWhereSchemaName(model.name));
  const includeName = toJsonProcessorSchemaName(
    toIncludeSchemaName(model.name)
  );

  const fields = [
    `select: ${selectName}.optional()`,
    `omit: ${omitName}.optional()`,
    `include: ${includeName}.optional()`,
    `where: ${whereName}.optional()`,
  ].join(',');

  return [`export const ${schemaName} = z.object({`, fields, `})`].join('');
}

/**
 * Print complete query one schema
 * @param model
 * @returns
 * @group Query
 *
 * @example
 * ````ts
 * export const ModelNameCompleteQueryOneSchema = z.object({
 *  select: SelectSchema,
 *  omit: OmitSchema,
 *  include: IncludeSchema,
 *  where: WhereSchema,
 * })
 * ````
 */
export function printCompleteQueryOneSchema(model: DMMF.Model) {
  const schemaName = toCompleteQueryOneSchemaName(model.name);
  const selectName = toJsonProcessorSchemaName(toSelectSchemaName(model.name));
  const omitName = toJsonProcessorSchemaName(toOmitSchemaName(model.name));
  const whereName = toJsonProcessorSchemaName(toWhereSchemaName(model.name));
  const includeName = toJsonProcessorSchemaName(
    toIncludeSchemaName(model.name)
  );

  const fields = [
    `select: ${selectName}.optional()`,
    `omit: ${omitName}.optional()`,
    `include: ${includeName}.optional()`,
    `where: ${whereName}.optional()`,
  ].join(',');

  return [`export const ${schemaName} = z.object({`, fields, `})`].join('');
}

/**
 * Print complete query schema
 * @param model
 * @returns
 * @group Query
 *
 * @example
 * ````ts
 * export const ModelNameQuerySchema = z.object({
 *  take: _take,
 *  skip: _skip,
 *  orderBy: OrderBySchema,
 *  select: SelectSchema,
 *  omit: OmitSchema,
 *  where: WhereSchema,
 *  distinct: DistinctSchema
 * })
 * ````
 */
export function printCompleteQuerySchema(model: DMMF.Model) {
  const schemaName = toCompleteQuerySchemaName(model.name);

  const selectName = toJsonProcessorSchemaName(
    toCompleteSelectSchemaName(model.name)
  );
  const omitName = toJsonProcessorSchemaName(toOmitSchemaName(model.name));
  const whereName = toJsonProcessorSchemaName(toWhereSchemaName(model.name));
  const orderByName = toJsonProcessorSchemaName(
    toOrderBySchemaName(model.name)
  );
  const includeName = toJsonProcessorSchemaName(
    toIncludeSchemaName(model.name)
  );

  const distictName = toDistictSchemaName(model.name);

  const fields = [
    `take: _take`,
    `skip: _skip`,
    `distinct: ${distictName}.optional()`,
    `select: ${selectName}.optional()`,
    `omit: ${omitName}.optional()`,
    `include: ${includeName}.optional()`,
    `where: ${whereName}.optional()`,
    `orderBy: ${orderByName}.optional()`,
  ].join(',');

  return [`export const ${schemaName} = z.object({`, fields, `})`].join('');
}

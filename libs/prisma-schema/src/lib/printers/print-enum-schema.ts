import type { DMMF } from '@prisma/client/runtime/library';
import type { NameFn } from '../common/types.js';
import {
  toEnumArrayFilterSchemaName,
  toEnumArraySchemaName,
  toEnumFilterSchemaName,
  toEnumSchemaName,
} from '../helpers/to-schema-name.js';

/**
 * Print enum schema such as `z.enum(['DONE', 'IN_PROGRESS', 'NEW'])`
 * @param model DMMF.Model
 * @param toSchemaNameFn {@link NameFn}
 * @returns
 */
export function printEnumSchema(
  model: DMMF.DatamodelEnum,
  toSchemaNameFn: (modelName: string) => string = toEnumSchemaName
) {
  const schemaName = toSchemaNameFn(model.name);
  const schemaFields = model.values.map((e) => `"${e.name}"`).join(',');
  return [`export const ${schemaName} = z.enum([`, schemaFields, `])`].join('');
}

export function printEnumArraySchema(
  model: DMMF.DatamodelEnum,
  toSchemaNameFn: (modelName: string) => string = toEnumArraySchemaName
) {
  return `${printEnumSchema(model, toSchemaNameFn)}.array()`;
}

/**
 * Print a dedicated enum filter schema from the given model
 * @param model DMMF.Model
 * @param filterSchemaNameFn Function to create the name of the generated schema
 * @param enumSchemaNameFn Function to create the name of the target schema
 * @returns string
 *
 * @example
 * ````ts
 *
 * export const _FilterSchemaName = z.object({
 *  equals: EnumSchemaName.optional(),
 *  in: EnumSchemaName.optional(),
 *  notIn: EnumSchemaName.optional(),
 * })
 *
 * export const FilterSchemaName = z.object({
 *  equals: EnumSchemaName.optional(),
 *  in: EnumSchemaName.optional(),
 *  notIn: EnumSchemaName.optional(),
 *  not: EnumSchemaName.or(_FilterSchemaName).optional()
 * })
 *
 * ````
 */
export function printEnumFilterSchema(
  model: DMMF.DatamodelEnum,
  filterSchemaNameFn: NameFn = toEnumFilterSchemaName,
  enumSchemaNameFn: NameFn = toEnumSchemaName
) {
  const modelName = filterSchemaNameFn(model.name);
  const enumSchemaName = enumSchemaNameFn(model.name);

  const _filterSchema = [
    `export const __${modelName} = z.object({`,
    `equals: ${enumSchemaName}.optional(),`,
    `in: ${enumSchemaName}.array().optional(),`,
    `notIn: ${enumSchemaName}.array().optional()`,
    `})`,
  ].join('\n');

  const filterSchema = [
    `export const ${modelName} = z.object({`,
    `equals: ${enumSchemaName}.optional(),`,
    `in: ${enumSchemaName}.array().optional(),`,
    `notIn: ${enumSchemaName}.array().optional(),`,
    `not:  ${enumSchemaName}.or(__${modelName}).optional()`,
    `})`,
  ].join('\n');

  return [_filterSchema, filterSchema].join('\n');
}

/**
 * Print a dedicated enum-array filter for the given enum model
 * @param model DMMF.Model
 * @param filterSchemaNameFn Function to create the name of the generated schema
 * @param enumSchemaNameFn Function to create the name of the target schema
 * @returns string
 *
 * @example
 * ````ts
 * export const FilterSchemaName = z.object({
 *  equals: EnumSchemaName.array().optional(),
 *  has: EnumSchemaName.optional(),
 *  hasEvery: EnumSchemaName.array().optional(),
 *  hasSome: EnumSchemaName.array().optional(),
 *  isEmpty: _bool.optional()
 * })
 * ````
 */
export function printEnumArrayFilterSchema(
  model: DMMF.DatamodelEnum,
  filterSchemaNameFn: NameFn = toEnumArrayFilterSchemaName,
  enumSchemaNameFn: NameFn = toEnumSchemaName
) {
  const modelName = filterSchemaNameFn(model.name);
  const enumSchemaName = enumSchemaNameFn(model.name);

  const _filterSchema = [
    `export const ${modelName} = z.object({`,
    `equals: ${enumSchemaName}.array().optional(),`,
    `has: ${enumSchemaName}.optional(),`,
    `hasEvery: ${enumSchemaName}.array().optional(),`,
    `hasSome: ${enumSchemaName}.array().optional(),`,
    `isEmpty: _bool.optional()`,
    `})`,
  ].join('\n');

  return _filterSchema;
}

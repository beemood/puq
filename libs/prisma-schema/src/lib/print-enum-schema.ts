import type { DMMF } from '@prisma/client/runtime/library';
import {
  toEnumArrayFilterSchemaName,
  toEnumFilterSchemaName,
  toEnumSchemaName,
} from './to-schema-names.js';

export function printEnumSchema(model: DMMF.DatamodelEnum) {
  const modelName = toEnumSchemaName(model.name);
  return `export const ${modelName} = z.enum([${model.values
    .map((e) => `'${e.name}'`)
    .join(',')}])`;
}

export function printEnumFilterSchema(model: DMMF.DatamodelEnum) {
  const modelName = toEnumFilterSchemaName(model.name);
  const enumSchemaName = toEnumSchemaName(model.name);

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

export function printEnumArrayFilterSchema(model: DMMF.DatamodelEnum) {
  const modelName = toEnumArrayFilterSchemaName(model.name);
  const enumSchemaName = toEnumSchemaName(model.name);

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

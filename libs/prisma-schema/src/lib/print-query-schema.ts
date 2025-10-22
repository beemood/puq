import type { DMMF } from '@prisma/client/runtime/library';
import {
  toDistictSchemaName,
  toOmitSchemaName,
  toOwnQueryOneSchemaName,
  toOwnQuerySchemaName,
  toOwnSelectSchemaName,
  toOwnWhereSchemaName,
} from './to-schema-names.js';

export function printOwnQueryOneSchema(model: DMMF.Model) {
  const schemaName = toOwnQueryOneSchemaName(model.name);

  const selectName = toOwnSelectSchemaName(model.name);
  const omitName = toOmitSchemaName(model.name);
  const whereName = toOwnWhereSchemaName(model.name);

  const fields = [
    `select: ${selectName}.optional()`,
    `omit: ${omitName}.optional()`,
    `where: ${whereName}.optional()`,
  ].join(',');

  return [`export const ${schemaName} = z.object({`, fields, `})`].join('');
}

export function printOwnQuerySchema(model: DMMF.Model) {
  const schemaName = toOwnQuerySchemaName(model.name);

  const selectName = toOwnSelectSchemaName(model.name);
  const omitName = toOmitSchemaName(model.name);
  const whereName = toOwnWhereSchemaName(model.name);

  const fields = [
    `take: _take`,
    `skip: _skip`,
    `distinct: ${toDistictSchemaName(model.name)}.optional()`,
    `select: ${selectName}.optional()`,
    `omit: ${omitName}.optional()`,
    `where: ${whereName}.optional()`,
  ].join(',');

  return [`export const ${schemaName} = z.object({`, fields, `})`].join('');
}

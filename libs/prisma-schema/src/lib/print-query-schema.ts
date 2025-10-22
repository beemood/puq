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
} from './to-schema-names.js';

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

  const fields = [
    `take: _take`,
    `skip: _skip`,
    `distinct: ${toDistictSchemaName(model.name)}.optional()`,
    `select: ${selectName}.optional()`,
    `omit: ${omitName}.optional()`,
    `where: ${whereName}.optional()`,
    `orderBy: ${orderByName}.optional()`,
  ].join(',');

  return [`export const ${schemaName} = z.object({`, fields, `})`].join('');
}

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

import { type DMMF } from '@prisma/client/runtime/library';
import { printPredefinedSchemas } from '../common/print-pre-defiend-schemas.js';
import { printDistictSchemas } from './print-distinct-schemas.js';
import { printEnumSchemas } from './print-enum-schemas.js';
import { printIncludeSchema } from './print-include-schema.js';
import { printOmitSchema } from './print-omit-schema.js';
import { printOrderBySchema } from './print-order-by-schema.js';
import { printProjectionSchema } from './print-projection-schema.js';
import { printQueryOneSchema } from './print-query-one-schema.js';
import { printQuerySchema } from './print-query-schema.js';
import { printSelectSchema } from './print-select-schema.js';
import { printWhereSchema } from './print-where-schema.js';

export function printSchemas(datamodel: Omit<DMMF.Datamodel, 'indexes'>) {
  const commonCode = [`import z from 'zod';`, printPredefinedSchemas()].join(
    '\n'
  );

  const models = datamodel.models;
  const enumSchemas = printEnumSchemas(datamodel);
  const distinctSchmeas = printDistictSchemas(datamodel);

  const schemaTypes = models
    .map((m) => {
      return `
    export type ${m.name}Select = z.infer<typeof ${m.name}SelectSchema>;
    export type ${m.name}Omit = z.infer<typeof ${m.name}OmitSchema>;
    export type ${m.name}Include = z.infer<typeof ${m.name}IncludeSchema>; 
    export type ${m.name}OrderBy = z.infer<typeof ${m.name}OrderBySchema>; 
    export type ${m.name}Where = z.infer<typeof ${m.name}WhereSchema>; 
    export type ${m.name}QueryOne = z.infer<typeof ${m.name}QueryOneSchema>; 
    export type ${m.name}Query = z.infer<typeof ${m.name}QuerySchema>; 
    export type ${m.name}Distinct = z.infer<typeof ${m.name}DistinctSchema>;
    export type ${m.name}Projection = z.infer<typeof ${m.name}ProjectionSchema>;
    `;
    })
    .join('\n');

  const modelSchemas = models
    .map((m) => {
      const _select = [
        `export const ${m.name}SelectSchema =`,
        printSelectSchema(datamodel, m),
      ].join('');

      const _omit = [
        `export const ${m.name}OmitSchema =`,
        printOmitSchema(datamodel, m),
      ].join('');

      const _orderBy = [
        `export const ${m.name}OrderBySchema = `,
        printOrderBySchema(datamodel, m),
      ].join('');

      const _where = [
        `export const ${m.name}WhereSchema = `,
        printWhereSchema(datamodel, m),
      ].join('');

      const _include = [
        `export const ${m.name}IncludeSchema = `,
        printIncludeSchema(datamodel, m),
      ].join('');

      const _queryOne = [
        `export const ${m.name}QueryOneSchema = `,
        printQueryOneSchema(datamodel, m),
      ].join('');

      const _query = [
        `export const ${m.name}QuerySchema = `,
        printQuerySchema(datamodel, m),
      ].join('');

      return [
        _where,
        _omit,
        _select,
        _orderBy,
        _include,
        _queryOne,
        _query,
      ].join('\n');
    })
    .join('\n');

  const projectionscheams = models
    .map((m) => {
      return `export const ${m.name}ProjectionSchema = ${printProjectionSchema(
        datamodel,
        m
      )}`;
    })
    .join('\n');

  return [
    commonCode,
    enumSchemas,
    distinctSchmeas,
    modelSchemas,
    projectionscheams,
    schemaTypes,
  ].join('\n');
}

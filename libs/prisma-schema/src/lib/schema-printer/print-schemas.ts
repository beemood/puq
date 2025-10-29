/* eslint-disable @typescript-eslint/no-unused-vars */
import { type DMMF } from '@prisma/client/runtime/library';
import { printPredefinedSchemas } from '../common/print-pre-defiend-schemas.js';
import { printDistictSchemas } from './print-distinct-schemas.js';
import { printEnumSchemas } from './print-enum-schemas.js';
import { printOmitSchema } from './print-omit-schema.js';
import { printOrderBySchema } from './print-order-by-schema.js';
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
    export type ${m.name}Projection = z.infer<typeof ${m.name}ProjectionSchema>;
    `;
    })
    .join('\n');

  const firstSchemas = models
    .map((m) => {
      const _select = `export const ${m.name}SelectSchema = ${printSelectSchema(
        datamodel,
        m
      )}`;

      const _omit = `export const ${m.name}OmitSchema = ${printOmitSchema(
        datamodel,
        m
      )}`;

      const _orderBy = `export const ${
        m.name
      }OrderBySchema = ${printOrderBySchema(datamodel, m)}`;

      const _where = `export const ${m.name}WhereSchema = ${printWhereSchema(
        datamodel,
        m
      )}`;

      return [_select, _omit, _orderBy, _where].join('\n');
    })
    .join('\n');

  return [
    commonCode,
    enumSchemas,
    distinctSchmeas,
    firstSchemas,
    schemaTypes,
  ].join('\n');
}

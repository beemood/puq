import type { Datamodel } from './common/dmmf.js';
import {
  toArrayFilter,
  toCreate,
  toCreateOwn,
  toEnum,
  toField,
  toFilter,
  toInclude,
  toOmit,
  toOrderBy,
  toOrderByOwn,
  toProjection,
  toQuery,
  toQueryOne,
  toQueryOwn,
  toSelect,
  toSelectOwn,
  toUpdate,
  toWhere,
  toWhereOwn,
} from './common/names.js';
import { importZod } from './common/pre.js';
import { constDef } from './object-printers/const-def.js';
import {
  createModel,
  createModelOwn,
  updateModel,
} from './object-printers/create-model.js';
import {
  enumArrayFilterModel,
  enumFilterModel,
} from './object-printers/enum-filter-model.js';
import { enumModel } from './object-printers/enum-model.js';
import { fieldModel } from './object-printers/field-model.js';
import { includeModel } from './object-printers/include-model.js';
import { omitModel } from './object-printers/omit-model.js';
import {
  orderByModel,
  orderByModelOwn,
} from './object-printers/order-by-model.js';
import { projectionModel } from './object-printers/projection-model.js';
import {
  queryModel,
  queryModelOwn,
  queryOneModel,
} from './object-printers/query-model.js';
import { selectModel, selectModelOwn } from './object-printers/select-model.js';
import { typeDef } from './object-printers/type-def.js';
import { whereModel, whereModelOwn } from './object-printers/where-model.js';

const comment = (cmt: string) => {
  return `
  /**
   * ${cmt}
   */`;
};

export function printSchemas(datamodel: Datamodel): string {
  const timestamp = new Date().toDateString();

  const enums = datamodel.enums;
  const models = datamodel.models;

  const content = new Set<string>();
  const schemas = new Map<string, string>();

  // Add requried imports
  content.add(importZod());

  // Print enum model schemas if defiend such as `export const Status = z.enum([ 'Active', 'Passive' ])`
  for (const m of enums) {
    schemas.set(toEnum(m.name), enumModel(m));
  }

  // Print model's field enum schema such as `export const CategoryField =  z.enum([ 'id', 'name' ])`
  for (const m of models) {
    schemas.set(toField(m.name), fieldModel(m));
  }

  for (const m of enums) {
    schemas.set(toFilter(m.name), enumFilterModel(m.name));
    schemas.set(toArrayFilter(m.name), enumArrayFilterModel(m.name));
  }

  // Omit Schemas
  for (const m of models) {
    schemas.set(toOmit(m.name), omitModel(m));
  }

  // Select Own Schemas
  for (const m of models) {
    schemas.set(toSelectOwn(m.name), selectModelOwn(m));
  }

  // Order-by Own Schemas
  for (const m of models) {
    schemas.set(toOrderByOwn(m.name), orderByModelOwn(m));
  }

  // Order-by Schemas
  for (const m of models) {
    schemas.set(toOrderBy(m.name), orderByModel(m));
  }

  // Where Own Schemas
  for (const m of models) {
    schemas.set(toWhereOwn(m.name), whereModelOwn(m));
  }

  // Where Schemas
  for (const m of models) {
    schemas.set(toWhere(m.name), whereModel(m));
  }

  // Query without projection
  for (const m of models) {
    schemas.set(toQueryOwn(m.name), queryModelOwn(m));
  }

  // Query One schema
  for (const m of models) {
    schemas.set(toQueryOne(m.name), queryOneModel(m));
  }

  // Include
  for (const m of models) {
    schemas.set(toInclude(m.name), includeModel(m));
  }

  // Query schema
  for (const m of models) {
    schemas.set(toQuery(m.name), queryModel(m));
  }

  // Query no projection schema
  for (const m of models) {
    schemas.set(toQuery(m.name), queryModel(m));
  }

  // Select schema
  for (const m of models) {
    schemas.set(toSelect(m.name), selectModel(m));
  }

  // Projection schema
  for (const m of models) {
    schemas.set(toProjection(m.name), projectionModel(m));
  }

  // Create/Update schema
  for (const m of models) {
    schemas.set(toCreateOwn(m.name), createModelOwn(m));
  }

  for (const m of models) {
    schemas.set(toCreate(m.name), createModel(m));
    schemas.set(toUpdate(m.name), updateModel(m));
  }
  // Print schemas
  for (const [name, value] of schemas) {
    content.add(comment(`${name} schema (${timestamp})`));
    content.add(constDef(name, value));
    content.add(typeDef(name));
  }

  return [...content].join('\n');
}

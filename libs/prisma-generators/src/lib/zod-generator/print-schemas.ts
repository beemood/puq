import type { Datamodel } from './common/dmmf.js';
import {
  toArrayFilter,
  toEnum,
  toField,
  toFilter,
  toOmit,
} from './common/names.js';
import { importZod } from './common/pre.js';
import { constDef } from './object-printers/const-def.js';
import {
  enumArrayFilterModel,
  enumFilterModel,
} from './object-printers/enum-filter-model.js';
import { enumModel } from './object-printers/enum-model.js';
import { fieldModel } from './object-printers/field-model.js';
import { omitModel } from './object-printers/omit-model.js';
import { typeDef } from './object-printers/type-def.js';

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

  // Addind schemas to the schemas map `export const CategoryOmit = z.object({ id: bool })`
  for (const m of models) {
    schemas.set(toOmit(m.name), omitModel(m));
  }

  // Print schemas
  for (const [name, value] of schemas) {
    content.add(comment(`${name} schema (${timestamp})`));
    content.add(constDef(name, value));
  }

  // Print types
  for (const [name] of schemas) {
    content.add(typeDef(name));
  }

  return [...content].join('\n');
}

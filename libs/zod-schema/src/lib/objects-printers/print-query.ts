import type { Datamodel, Model } from '../dmmf.js';
import {
  toDistinctSelectName,
  toIncludeName,
  toOmitName,
  toOrderByName,
  toQueryName,
  toSelectName,
  toWhereName,
} from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';

export function printQuery(datamodel: Datamodel, model: Model): string {
  const schemaName = toQueryName(model.name);
  if (registry.has(schemaName)) {
    return `${schemaName}`;
  }

  const modelName = model.name;

  const whereName = toWhereName(modelName);
  const orderByName = toOrderByName(modelName);
  const selectName = toSelectName(modelName);
  const omitName = toOmitName(modelName);
  const includeName = toIncludeName(modelName);
  const distinctSelectName = toDistinctSelectName(modelName);

  const schema = `z.object({ 
    take: _take, 
    skip: _skip, 
    distinct: ${distinctSelectName}.optional(),
    where: z.preprocess(_parseJsonOrReturn, ${whereName}).optional(),
    orderBy: z.preprocess(_parseJsonOrReturn, ${orderByName}).optional(),
    select:  z.preprocess(_parseJsonOrReturn, ${selectName}).optional(),
    omit: z.preprocess(_parseJsonOrReturn, ${omitName}).optional(),
    include:  z.preprocess(_parseJsonOrReturn, ${includeName}).optional()
  })`;

  registry.set(schemaName, schema);

  return schema;
}

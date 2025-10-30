import type { Datamodel, Model } from '../dmmf.js';
import {
  toDistinctSelectName,
  toOrderByName,
  toQueryName,
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
  const distinctSelectName = toDistinctSelectName(modelName);

  const schema = `z.object({ 
    distinct: ${distinctSelectName}.optional(),
    where: z.preprocess(_parseJsonOrReturn, ${whereName}).optional(),
    orderBy: z.preprocess(_parseJsonOrReturn, ${orderByName}).optional(),
  })`;

  registry.set(schemaName, schema);

  return schema;
}

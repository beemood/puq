import type { Datamodel, Model } from '../dmmf.js';
import { toQueryOneName, toWhereName } from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';

export function printQueryOne(datamodel: Datamodel, model: Model): string {
  const schemaName = toQueryOneName(model.name);

  if (registry.has(schemaName)) {
    return `${schemaName}`;
  }

  const modelName = model.name;
  const whereName = toWhereName(modelName);

  const schema = `z.object({
    where: z.preprocess(_parseJsonOrReturn, ${whereName}).optional()
  })`;

  registry.set(schemaName, schema);

  return schema;
}

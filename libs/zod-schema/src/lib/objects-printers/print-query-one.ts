import type { Datamodel, Model } from '../dmmf.js';
import {
  toIncludeName,
  toOmitName,
  toQueryOneName,
  toSelectName,
  toWhereName,
} from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';

export function printQueryOne(datamodel: Datamodel, model: Model): string {
  const schemaName = toQueryOneName(model.name);

  if (registry.has(schemaName)) {
    return `${schemaName}`;
  }

  const modelName = model.name;
  const whereName = toWhereName(modelName);
  const selectName = toSelectName(modelName);
  const omitName = toOmitName(modelName);
  const includeName = toIncludeName(modelName);

  const schema = `z.object({
    where: z.preprocess(_parseJsonOrReturn, ${whereName}).optional(),
    select: z.preprocess(_parseJsonOrReturn, ${selectName}).optional(),
    omit: z.preprocess(_parseJsonOrReturn, ${omitName}).optional(),
    include: z.preprocess(_parseJsonOrReturn, ${includeName}).optional(),
  })`;

  registry.set(schemaName, schema);

  return schema;
}

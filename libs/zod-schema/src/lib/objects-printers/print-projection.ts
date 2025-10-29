import type { Datamodel, Model } from '../dmmf.js';
import {
  toIncludeName,
  toOmitName,
  toProjectionName,
  toSelectName,
} from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';

export function printProjection(datamodel: Datamodel, model: Model): string {
  const schemaName = toProjectionName(model.name);

  if (registry.has(schemaName)) {
    return schemaName;
  }

  const modelName = model.name;
  const selectName = toSelectName(modelName);
  const omitName = toOmitName(modelName);
  const includeName = toIncludeName(modelName);

  const schema = `z.union([ 
    z.object({ select: z.preprocess(_parseJsonOrReturn, ${selectName}).optional() }),
    z.object({ omit: z.preprocess(_parseJsonOrReturn, ${omitName}).optional() }),
    z.object({ include: z.preprocess(_parseJsonOrReturn, ${includeName}).optional() }),
    z.object({ }).optional()
  ])`;

  registry.set(schemaName, schema);

  return schema;
}

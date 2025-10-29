import type { DMMF } from '@prisma/client/runtime/library';
import { registry } from './registry.js';

export function printProjectionSchema(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  model: DMMF.Model,
  count = 0
) {
  const schemaName = `${model.name}ProjectionSchema`;

  if (registry.get(schemaName)) {
    return schemaName;
  }

  const schema = `z.union([ 
    z.object({ select: ${model.name}SelectSchema.optional() }),
    z.object({ omit: ${model.name}OmitSchema.optional() }),
    z.object({ include:  ${model.name}IncludeSchema.optional( })), 
    z.object({})
    ])`;

  registry.set(schemaName, schema);

  return schema;
}

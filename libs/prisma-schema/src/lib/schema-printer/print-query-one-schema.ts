import type { DMMF } from '@prisma/client/runtime/library';
import { printIncludeSchema } from './print-include-schema.js';
import { printOmitSchema } from './print-omit-schema.js';
import { printSelectSchema } from './print-select-schema.js';
import { printWhereSchema } from './print-where-schema.js';
import { registry } from './registry.js';

export function printQueryOneSchema(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  model: DMMF.Model,
  count = 0
): string {
  count++;

  const schemaName = `${model.name}QueryOneSchema`;

  if (registry.get(schemaName)) {
    return schemaName;
  }
  const schema = `z.object({ 
        select: ${printSelectSchema(datamodel, model, count)}.optional(),
        omit:${printOmitSchema(datamodel, model)}.optional(),
        include: ${printIncludeSchema(datamodel, model, count)}.optional(),
        where: ${printWhereSchema(datamodel, model, count)}.optional()
    })`;

  registry.set(schemaName, schema);

  return schema;
}

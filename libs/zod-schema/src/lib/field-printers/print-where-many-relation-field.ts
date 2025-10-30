import type { Datamodel, Model } from '../dmmf.js';
import { toWhereName } from '../names/to-schema-name.js';
import { printWhere } from '../objects-printers/print-where.js';
import { registry } from '../registry/registry.js';

export function printWhereManyRelationField(
  datamodel: Datamodel,
  model: Model,
  limit = 0
) {
  const modelName = model.name;
  const whereSchemaName = toWhereName(modelName);

  let whereSchema = '';

  if (registry.has(whereSchemaName)) {
    whereSchema = whereSchemaName;
  } else {
    whereSchema = printWhere(datamodel, model, limit+1);
  }

  return `z.object({ 
            some: ${whereSchema}.optional(),
            every: ${whereSchema}.optional(),
            none: ${whereSchema}.optional(),
        })`;
}

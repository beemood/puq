import type { Datamodel, Model } from '../dmmf.js';
import { toQueryOneName } from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';
import { printInclude } from './print-include.js';
import { printOmit } from './print-omit.js';
import { printSelect } from './print-select.js';
import { printWhere } from './print-where.js';

export function printQueryOne(datamodel: Datamodel, model: Model): string {
  const schemaName = toQueryOneName(model.name);

  if (registry.has(schemaName)) {
    return `${schemaName}`;
  }

  const schema = `z.object({
    select: ${printSelect(datamodel, model)}.optinoal(), 
    omit: ${printOmit(datamodel, model)}.optinoal(), 
    include: ${printInclude(datamodel, model)}.optinoal(), 
    where: ${printWhere(datamodel, model)}.optional()
  })`;

  registry.set(schemaName, schema);

  return schema;
}

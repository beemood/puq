import type { Datamodel, Model } from '../dmmf.js';
import { toQueryName } from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';
import { printSelect } from './print-select.js';
import { printWhere } from './print-where.js';

export function printQuery(datamodel: Datamodel, model: Model): string {
  const schemaName = toQueryName(model.name);

  if (registry.has(schemaName)) {
    return `${schemaName}`;
  }

  const schema = `z.object({ 
    take: _take, 
    skip: _skip, 
    where: ${printWhere(datamodel, model)}
    select:${printSelect(datamodel, model)}
    omit:${printSelect(datamodel, model)}
    Include:${printSelect(datamodel, model)}
  })`;

  registry.set(schemaName, schema);

  return schema;
}

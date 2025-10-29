import type { Datamodel, Field, Model } from '../dmmf.js';
import { toOmitName } from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';

export function printOmit(
  datamodel: Datamodel,
  model: Model,
  fieldFilter: (field: Field) => boolean = () => true
) {
  const schemaName = toOmitName(model.name);

  if (registry.has(schemaName)) {
    return `${schemaName}`;
  }

  const fields = model.fields
    .filter(fieldFilter)
    .filter((e) => e.relationName == undefined)
    .map((e) => `${e.name}: _select`)
    .join(',');

  const schema = `z.object({ ${fields}})`;

  registry.set(schemaName, schema);

  return schema;
}

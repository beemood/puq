import type { Datamodel, Model } from '../dmmf.js';
import { printOrderByField } from '../field-printers/print-order-by-field.js';
import { hasOrderMark } from '../markers/has-markers.js';
import { toOmitName } from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';

export function printOrderBy(datamodel: Datamodel, model: Model) {
  const schemaName = toOmitName(model.name);

  if (registry.has(schemaName)) {
    return schemaName;
  }

  const fields = model.fields
    .filter(hasOrderMark)
    .map(
      (field) => `${field.name}: ${printOrderByField(datamodel, model, field)}`
    )
    .join(',');

  const schema = `z.object({ ${fields}})`;

  registry.set(schemaName, schema);

  return schema;
}

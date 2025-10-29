import type { Datamodel, Model } from '../dmmf.js';
import { printOrderByField } from '../field-printers/print-order-by-field.js';
import { hasOrderMark } from '../markers/has-markers.js';
import { toOrderByName } from '../names/to-schema-name.js';
import { isMaxLevel } from '../registry/is-max-level.js';
import { registry } from '../registry/registry.js';

export function printOrderBy(datamodel: Datamodel, model: Model, limit = 0) {
  const schemaName = toOrderByName(model.name);

  if (registry.has(schemaName)) {
    return schemaName;
  }

  if (isMaxLevel(limit)) {
    return `z.any()`;
  }

  const fields = model.fields
    .filter((field) => {
      if (field.relationName != undefined) {
        return hasOrderMark(field);
      }
      return true;
    })
    .map(
      (field) => `${field.name}: ${printOrderByField(datamodel, model, field)}`
    )
    .join(',');

  const schema = `z.object({ ${fields} })`;

  registry.set(schemaName, schema);

  return schema;
}

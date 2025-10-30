import type { Datamodel, Model } from '../dmmf.js';
import { printSelectField } from '../field-printers/print-select-field.js';
import { hasSelectMark } from '../markers/has-markers.js';
import { toSelectName } from '../names/to-schema-name.js';
import { isMaxLevel } from '../registry/is-max-level.js';
import { registry } from '../registry/registry.js';

export function printSelect(datamodel: Datamodel, model: Model, limit = 0) {
  const schemaName = toSelectName(model.name);

  if (registry.has(schemaName)) {
    return `${schemaName}`;
  }

  if (isMaxLevel(limit)) {
    return `z.any()`;
  }

  const fields = model.fields
    .filter((field) => {
      if (field.relationName) {
        return hasSelectMark(field);
      }
      return true;
    })
    .map((field) => {
      return `${field.name}: ${printSelectField(
        datamodel,
        model,
        field,
        limit
      )}.optional()`;
    })
    .join(',');

  const schema = `z.object({ ${fields} })`;

  registry.set(schemaName, schema);

  return schema;
}

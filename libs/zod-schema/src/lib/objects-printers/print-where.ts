import type { Datamodel, Field, Model } from '../dmmf.js';
import { printWhereField } from '../field-printers/print-where-field.js';
import { toWhereName } from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';

export function printWhere(
  datamodel: Datamodel,
  model: Model,
  fieldFilter: (field: Field) => boolean = () => true
) {
  const schemaName = toWhereName(model.name);

  if (registry.has(schemaName)) {
    return `${schemaName}`;
  }

  const fields = model.fields
    .filter(fieldFilter)
    .map((e) => {
      return `${e.name}: ${printWhereField(datamodel, model, e)}`;
    })
    .join(',');

  const schema = `z.object({ ${fields}})`;

  registry.set(schemaName, schema);

  return schema;
}

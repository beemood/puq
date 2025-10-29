import type { Datamodel, Field, Model } from '../dmmf.js';
import { printSelectField } from '../field-printers/print-select-field.js';
import { toSelectName } from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';

export function printSelect(
  datamodel: Datamodel,
  model: Model,
  fieldFilter: (field: Field) => boolean = () => true
) {
  const schemaName = toSelectName(model.name);

  if (registry.has(schemaName)) {
    return `${schemaName}`;
  }

  const fields = model.fields
    .filter(fieldFilter)
    .map((e) => {
      return `${e.name}: ${printSelectField(datamodel, model, e)}`;
    })
    .join(',');

  const schema = `z.object({ ${fields}})`;

  registry.set(schemaName, schema);

  return schema;
}

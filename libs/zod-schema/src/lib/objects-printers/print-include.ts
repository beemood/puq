import type { Datamodel, Field, Model } from '../dmmf.js';
import { toIncludeName } from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';
import { printQueryOne } from './print-query-one.js';
import { printQuery } from './print-query.js';

export function printInclude(
  datamodel: Datamodel,
  model: Model,
  fieldFilter: (field: Field) => boolean = () => true
) {
  const schemaName = toIncludeName(model.name);

  if (registry.has(schemaName)) {
    return `${schemaName}`;
  }

  const fields = model.fields
    .filter((e) => fieldFilter(e))
    .filter((e) => e.relationName != undefined)
    .map((e) => {
      const relationModel = datamodel.models.find((r) => r.name === e.type);
      if (!relationModel) throw new Error(`${e.type} is not found in models`);

      if (e.isList) {
        return `${e.name}: ${printQuery(datamodel, relationModel)}`;
      }
      return `${e.name}: ${printQueryOne(datamodel, relationModel)}`;
    })
    .join(',');

  const schema = `z.object({ ${fields}})`;

  registry.set(schemaName, schema);

  return schema;
}

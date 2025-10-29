import type { Datamodel, Model } from '../dmmf.js';
import { printWhereOwnField } from '../field-printers/print-where-own-field.js';
import { hasWhereMark } from '../markers/has-markers.js';
import { toWhereOwnName } from '../names/to-schema-name.js';
import { isMaxLevel } from '../registry/is-max-level.js';
import { registry } from '../registry/registry.js';

export function printWhereOwn(datamodel: Datamodel, model: Model, limit = 0) {
  limit++;
  const modelName = model.name;

  const schemaName = toWhereOwnName(modelName);

  if (registry.has(schemaName)) {
    return schemaName;
  }

  if (isMaxLevel(limit)) {
    return 'z.any()';
  }

  const fields = model.fields
    .filter((e) => {
      if (e.relationName != undefined) {
        return hasWhereMark(e);
      }
      return true;
    })
    .map((field) => {
      return `${field.name}: ${printWhereOwnField(
        datamodel,
        model,
        field,
        limit
      )}.optional()`;
    });

  const schema = `z.object({ ${fields} })`;

  registry.set(schemaName, schema);

  return schema;
}

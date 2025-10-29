import type { Datamodel, Model } from '../dmmf.js';
import { hasIncludeMark } from '../markers/has-markers.js';
import { toIncludeName } from '../names/to-schema-name.js';
import { registry } from '../registry/registry.js';
import { printSelect } from './print-select.js';
import { printWhere } from './print-where.js';

export function printInclude(datamodel: Datamodel, model: Model) {
  const schemaName = toIncludeName(model.name);

  if (registry.has(schemaName)) {
    return `${schemaName}`;
  }

  const fields = model.fields
    .filter((field) => field.relationName != undefined)
    .filter((field) => {
      if (hasIncludeMark(field)) {
        return true;
      }
      return false;
    })
    .map((e) => {
      const relationModel = datamodel.models.find((r) => r.name === e.type);
      if (!relationModel) throw new Error(`${e.type} is not found in models`);

      if (e.isList) {
        return `${e.name}: z.object({
            select: ${printSelect(datamodel, relationModel)}.optional(),
            where: ${printWhere(datamodel, relationModel)}.optional(),
         }).optional()`;
      }
      return `${e.name}: z.object({
            select: ${printSelect(datamodel, relationModel)}.optional(),
            where: ${printWhere(datamodel, relationModel)}.optional(),
         }).optional()`;
    })
    .join(',');

  const schema = `z.object({ ${fields}})`;

  registry.set(schemaName, schema);

  return schema;
}

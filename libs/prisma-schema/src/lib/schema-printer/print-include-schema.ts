import type { DMMF } from '@prisma/client/runtime/library';
import { printQueryOneSchema } from './print-query-one-schema.js';
import { printQuerySchema } from './print-query-schema.js';
import { registry } from './registry.js';

export function printIncludeSchema(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  model: DMMF.Model,
  count = 0
) {
  count++;

  const schemaName = `${model.name}IncludeSchema`;
  if (registry.get(schemaName)) {
    return schemaName;
  }

  const fields: string = model.fields
    .filter((e) => e.relationName != undefined)
    .map((field) => {
      const found = datamodel.models.find((m) => m.name === field.type);
      if (!found) {
        throw new Error(`${field.type} is not found!`);
      }

      if (count > 4) {
        return undefined;
      }
      if (field.isList) {
        if (registry.get(`${found.name}QuerySchema`)) {
          return `${field.name}: ${model.name}QuerySchema`;
        }
        return `${field.name}: ${printQuerySchema(datamodel, found, count)}`;
      }

      if (registry.get(`${found.name}QueryOneSchema`)) {
        return `${field.name}: ${model.name}QueryOneSchema`;
      }

      return `${field.name}: ${printQueryOneSchema(datamodel, found, count)}`;
    })
    .filter((e) => e)
    .join(',\n');

  const schema = `z.object({ ${fields} })`;
  registry.set(schemaName, schema);
  return schema;
}

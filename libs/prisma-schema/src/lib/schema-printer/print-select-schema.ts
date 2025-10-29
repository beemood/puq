import type { DMMF } from '@prisma/client/runtime/library';
import { printQueryOneSchema } from './print-query-one-schema.js';
import { printQuerySchema } from './print-query-schema.js';
import { registry } from './registry.js';

export function printSelectSchema(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  model: DMMF.Model,
  count = 0
) {
  count++;

  const schemaName = `${model.name}SelectSchema`;

  if (registry.get(schemaName)) {
    return schemaName;
  }

  const fields = model.fields
    .map((field) => {
      if (field.relationName != undefined) {
        const foundModel = datamodel.models.find((e) => e.name === field.type);
        if (!foundModel) {
          throw new Error(`${field.type} is not found!`);
        }

        if (count > 4) {
          return undefined;
        }

        if (field.isList) {
          return `${field.name}: ${printQuerySchema(
            datamodel,
            foundModel,
            count
          )}.optional()`;
        } else {
          return `${field.name}: ${printQueryOneSchema(
            datamodel,
            foundModel,
            count
          )}.optional()`;
        }
      }
      return `${field.name}: _select`;
    })
    .filter((e) => e)
    .join(',\n');

  const schema = `z.object({ ${fields} })`;

  registry.set(schemaName, schema);

  return schema;
}

import type { DMMF } from '@prisma/client/runtime/library';
import { printQueryOneSchema } from './print-query-one-schema.js';
import { printQuerySchema } from './print-query-schema.js';

export function printIncludeSchema(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  model: DMMF.Model,
  count = 0
) {
  count++;

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
        return `${field.name}: ${printQuerySchema(datamodel, found, count)}`;
      }
      return `${field.name}: ${printQueryOneSchema(datamodel, found, count)}`;
    })
    .filter((e) => e)
    .join(',\n');

  return `z.object({ ${fields} })`;
}

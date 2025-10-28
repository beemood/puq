import type { DMMF } from '@prisma/client/runtime/library';
import { printQueryOneSchema } from './print-query-one-schema.js';
import { printQuerySchema } from './print-query-schema.js';

export function printSelectSchema(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  model: DMMF.Model,
  count = 0
) {
  count++;

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

  return `z.object({ ${fields} })`;
}

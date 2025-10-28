import type { DMMF } from '@prisma/client/runtime/library';
import { printWhereFieldSchema } from './print-where-field-schmea.js';

export function printWhereSchema(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  model: DMMF.Model,
  count = 0
): string {
  count++;
  const fields = model.fields
    .map((field) => {
      if (count > 3) {
        return undefined;
      }

      return `${field.name}: ${printWhereFieldSchema(
        datamodel,
        model,
        field,
        count
      )}.optional()`;
    })
    .filter((e) => e)
    .join(',\n');
  return `z.object({ ${fields} })`;
}

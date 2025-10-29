import type { DMMF } from '@prisma/client/runtime/library';
import { printWhereFieldSchema } from './print-where-field-schmea.js';
import { registry } from './registry.js';

export function printWhereSchema(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  model: DMMF.Model,
  count = 0
): string {
  const schemaName = `${model.name}WhereSchema`;

  if (registry.get(schemaName)) {
    return schemaName;
  }

  const fields = model.fields
    .map((field) => {
      return `${field.name}: ${printWhereFieldSchema(
        datamodel,
        model,
        field,
        count
      )}.optional()`;
    })
    .filter((e) => e)
    .join(',\n');

  const schema = `z.object({ ${fields} })`;

  registry.set(schemaName, schema);

  return schema;
}

import type { DMMF } from '@prisma/client/runtime/library';
import { registry } from './registry.js';

export function printOmitSchema(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  model: DMMF.Model
) {
  const schemaName = `${model.name}OmitSchema`;

  if (registry.get(schemaName)) {
    return schemaName;
  }

  const fields = model.fields
    .filter((field) => field.relationName == undefined)
    .map((field) => {
      return `${field.name}: _select`;
    })
    .join(',\n');

  const schema = `z.object({ ${fields} })`;

  registry.set(schemaName, schema);
  return schema;
}

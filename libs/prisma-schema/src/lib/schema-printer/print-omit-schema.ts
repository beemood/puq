import type { DMMF } from '@prisma/client/runtime/library';

export function printOmitSchema(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  model: DMMF.Model
) {
  const fields = model.fields
    .filter((field) => field.relationName == undefined)
    .map((field) => {
      return `${field.name}: _select`;
    })
    .join(',\n');

  return `z.object({ ${fields} })`;
}

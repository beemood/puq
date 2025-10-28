import type { DMMF } from '@prisma/client/runtime/library';

export function printOrderBySchema(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  model: DMMF.Model,
  counter = 0
): string {
  counter++;

  const fields = model.fields
    .map((field) => {
      if (field.relationName != undefined) {
        const found = datamodel.models.find((m) => m.name === field.type);

        if (!found) {
          throw new Error(`${field.type} is not found!`);
        }

        if (counter > 3) {
          return undefined;
        }

        if (field.isList) {
          return `${field.name}: _orderByCount`;
        } else {
          return `${field.name}: ${printOrderBySchema(
            datamodel,
            found,
            counter
          )}`;
        }
      }
      return `${field.name}: _direction`;
    })
    .filter((e) => e)
    .join(',\n');

  return `z.object({ ${fields} })`;
}

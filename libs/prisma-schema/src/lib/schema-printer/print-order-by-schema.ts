import type { DMMF } from '@prisma/client/runtime/library';
import { registry } from './registry.js';

export function printOrderBySchema(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  model: DMMF.Model,
  counter = 0
): string {
  counter++;

  const schemaName = `${model.name}OrderBySchema`;

  if (registry.get(schemaName)) {
    return schemaName;
  }

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
          if (registry.get(found.name + 'OrderBySchema')) {
            return `${found.name}OrderBySchema`;
          }
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

  const schema = `z.object({ ${fields} })`;

  registry.set(schemaName, schema);

  return schema;
}

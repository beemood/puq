import type { DMMF } from '@prisma/client/runtime/library';

export function printDistictSchemas(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>
) {
  return datamodel.models
    .map((m) => {
      const fields = m.fields
        .filter((e) => e.relationName == undefined)
        .map((e) => `"${e.name}"`)
        .join(',');
      return [
        `export const ${m.name}DistinctSchema = z.enum([ ${fields} ]);`,
      ].join('\n');
    })
    .join('\n');
}

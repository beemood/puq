import type { DMMF } from '@prisma/client/runtime/library';

export function printEnumSchemas(datamodel: Omit<DMMF.Datamodel, 'indexes'>) {
  return datamodel.enums
    .map((e) => {
      const values = e.values.map((v) => `"${v.name}"`).join(',');
      return `
      export const ${e.name} = z.enum([ ${values} ]);
      export type ${e.name}Type = z.infer< typeof ${e.name}>;
      `;
    })
    .join('\n');
}

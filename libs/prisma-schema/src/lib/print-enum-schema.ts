import type { DMMF } from '@prisma/client/runtime/library';

export function printEnumSchema(model: DMMF.DatamodelEnum) {
  return `export const ${model.name}Schema = z.enum([${model.values
    .map((e) => `'${e.name}'`)
    .join(',')}])`;
}

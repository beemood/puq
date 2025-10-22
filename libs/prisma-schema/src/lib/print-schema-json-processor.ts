import type { DMMF } from '@prisma/client/runtime/library';
import { toJsonProcessorSchemaName } from './to-schema-names.js';

export function printSchemaJsonProcessor(
  nameFn: (modelName: string) => string
) {
  return (model: DMMF.Model) => {
    const schemaName = nameFn(model.name);
    return [
      `export const ${toJsonProcessorSchemaName(
        schemaName
      )} = z.preprocess(_jsonPreprocessor,`,
      schemaName,
      `)`,
    ].join('');
  };
}

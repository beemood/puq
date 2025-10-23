import type { DMMF } from '@prisma/client/runtime/library';
import type { NameFn } from '../common/types.js';
import { toJsonProcessorSchemaName } from '../helpers/to-schema-name.js';

export function printJsonProcessorSchema(
  model: DMMF.Model,
  toSchemaNameFn: NameFn,
  toJsonProcessorNameFn: NameFn = toJsonProcessorSchemaName
) {
  const schemaName = toSchemaNameFn(model.name);
  return [
    `export const ${toJsonProcessorNameFn(
      schemaName
    )} = z.preprocess(_jsonPreprocessor,`,
    schemaName,
    `)`,
  ].join('');
}
/**
 * Create a function to print a json-processor for the given model
 * @param toSchemaNameFn {@link NameFn}
 * @returns
 */
export function createJsonProcessorSchemaPrinter(toSchemaNameFn: NameFn) {
  return (model: DMMF.Model) => {
    return printJsonProcessorSchema(
      model,
      toSchemaNameFn,
      toJsonProcessorSchemaName
    );
  };
}

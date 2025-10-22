import type { DMMF } from '@prisma/client/runtime/library';

export function printSchemaPreprocessors(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  schemaNameFns: ((modelName: string) => string)[],
  processorNames: string[]
) {
  const content = new Set<string>();

  for (const nameFn of schemaNameFns) {
    for (const m of datamodel.models) {
      if (m.name !== 'Sample') continue;

      const schemaName = nameFn(m.name);
      const preprocessorName = schemaName + 'Processed';

      content.add(
        [
          `export const ${preprocessorName} = z.preprocess((value)=>{`,
          processorNames.map((e) => `value = ${e}(value)`).join('\n'),
          `return value;`,
          `}, ${schemaName})`,
        ].join('\n')
      );
    }
  }
  return [...content].join('\n\n');
}

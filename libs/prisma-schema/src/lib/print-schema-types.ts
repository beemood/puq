import type { DMMF } from '@prisma/client/runtime/library';
import {
  toCreateSchemaName,
  toOwnOrderBySchemaName,
  toOwnSelectSchemaName,
  toSelectSchemaName,
  toUpdateSchemaName,
} from './to-schema-names.js';

export function printSchemaTypes(datamodel: Omit<DMMF.Datamodel, 'indexes'>) {
  const nameFns = new Set<(modelName: string) => string>();
  const content = new Set<string>();

  nameFns.add(toOwnSelectSchemaName);
  nameFns.add(toOwnOrderBySchemaName);
  nameFns.add(toCreateSchemaName);
  nameFns.add(toUpdateSchemaName);
  nameFns.add(toSelectSchemaName);
  //   nameFns.add(toOwnOmitSchemaName);
  //   nameFns.add(toOmitSchemaName);
  //   nameFns.add(toIncludeSchemaName);
  //   nameFns.add(toOrderBySchemaName);

  for (const fn of nameFns) {
    for (const m of datamodel.models) {
      if (m.name !== 'Sample') continue;

      const schemaName = fn(m.name);
      const typeName = schemaName.replace('Schema', '');

      content.add(`export type ${typeName} = z.infer<typeof ${schemaName}>`);
    }
  }
  return [...content].join('\n\n');
}

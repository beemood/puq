/**
 * Print schema type from schema name.
 * @param schemaName
 * @returns string
 */
export function printSchemaType(schemaName: string) {
  const typeName = schemaName.replace('Schema', '');
  return `export type ${typeName} = z.infer<typeof ${schemaName}>;`;
}

// export function printSchemaTypes(
//   datamodel: Omit<DMMF.Datamodel, 'indexes'>,
//   schemaNameFns: Set<(modelName: string) => string>
// ) {
//   const content = new Set<string>();

//   for (const fn of schemaNameFns) {
//     for (const m of datamodel.models) {
//       if (m.name !== 'Sample') continue;
//       const schemaName = fn(m.name);
//       const schemaType = printSchemaType(schemaName);
//       content.add(schemaType);
//     }
//   }
//   return [...content].join('\n\n');
// }

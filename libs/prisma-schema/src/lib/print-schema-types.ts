/**
 * Print schema type from schema name.
 * @param schemaName
 * @returns string
 */
export function printSchemaType(schemaName: string) {
  const typeName = schemaName.replace('Schema', '');
  return `export type ${typeName} = z.infer<typeof ${schemaName}>;`;
}

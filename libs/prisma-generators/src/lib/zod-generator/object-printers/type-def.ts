/**
 * Print type definition such as `export type <name> = z.infer<typeof <name>>`;
 * @param name
 * @returns type definition
 */
export const typeDef = (name: string) => {
  return `export type ${name}Type = z.infer<typeof ${name}>; `;
};

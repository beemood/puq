/**
 * Make the given {@link schema} partial
 *
 * @param schema string
 * @returns string
 */
export const makePartial = (schema: string): string => {
  return `${schema}.partial()`;
};

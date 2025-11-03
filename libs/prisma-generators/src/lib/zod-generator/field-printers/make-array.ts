/**
 * Make the given {@link schema} array schema
 *
 * @param schema string
 * @returns
 */
export const makeArray = (schema: string): string => {
  return `${schema}.array()`;
};

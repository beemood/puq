/**
 * Make the given {@link schema} optional
 *
 * @param schema string
 * @returns string
 */
export const makeOptional = (schema: string): string => {
  return `${schema}.optional()`;
};

export const makeOptional = (schema: string): string => {
  return `${schema}.optional()`;
};

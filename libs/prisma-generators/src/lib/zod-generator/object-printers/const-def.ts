/**
 * Print constant definition such as `export const <name> = <value>`;
 * @param name constant name
 * @param value constant value
 * @returns constant definition
 */
export const constDef = (name: string, value: string): string => {
  return `export const ${name} = ${value}`;
};

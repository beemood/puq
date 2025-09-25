/**
 * Return a function that check {@link source} includes the function's parameter
 * 
 * @group Strings
 * @param source
 * @returns
 */
export function includesFn(source: string) {
  return (prefix: string) => source.includes(prefix);
}

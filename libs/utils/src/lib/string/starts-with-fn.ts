/**
 * Return a function that check {@link source} starts with the function's parameter
 *
 * @group Strings
 * @param source
 * @returns
 */
export function startsWithFn(source: string) {
  return (prefix: string) => source.startsWith(prefix);
}

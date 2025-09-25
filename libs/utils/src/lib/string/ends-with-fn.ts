/**
 * Return a function that check {@link source} ends with the function's parameter
 *
 * @group Strings
 * @param source
 * @returns
 */
export function endsWithFn(source: string) {
  return (prefix: string) => source.endsWith(prefix);
}

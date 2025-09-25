/**
 * Return a function that check {@link source} equqls to the function's parameter
 * 
 * @group Strings
 * @param source
 * @returns
 */
export function equalsFn(source: string) {
  return (value: string) => source === value;
}

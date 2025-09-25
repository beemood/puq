/**
 * Check that some values in the given {@link array} returns true by the given {@link handler}
 *
 * @group Arrays
 * @param array
 * @param handler
 * @returns
 */
export function some<T>(array: T[], handler: (value: T) => boolean): boolean {
  return array.some(handler);
}

/**
 * Check that all values in the given {@link array} returns true by the given {@link handler}
 *
 * @group Arrays
 * @param array
 * @param handler
 * @returns
 */
export function every<T>(array: T[], handler: (value: T) => boolean): boolean {
  return array.every(handler);
}

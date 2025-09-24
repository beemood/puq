/**
 * Wrapper around the Array.every method
 *
 * @group Array
 * @param array
 * @param handler
 * @returns
 */
export function every<T>(array: T[], handler: (value: T) => boolean): boolean {
  return array.every(handler);
}

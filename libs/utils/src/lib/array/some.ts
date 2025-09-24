/**
 * Wrapper around Array.some method
 *
 * @param array
 * @param handler
 * @returns
 */
export function some<T>(array: T[], handler: (value: T) => boolean): boolean {
  return array.some(handler);
}

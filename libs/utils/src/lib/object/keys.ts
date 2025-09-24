/**
 * Get the keys/properties of an object/class-instance
 *
 * @param value
 * @returns
 */
export function keys<T extends object>(value: T): Array<string> {
  return Object.keys(value);
}

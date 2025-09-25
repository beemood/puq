/**
 * Get the keys/properties of an object/class-instance
 *
 * @group Objects
 * @param value
 * @returns
 */
export function keys<T extends object>(value: T): Array<string> {
  return Object.keys(value);
}

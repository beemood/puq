/**
 * Omit some properties of the given {@link object}
 * 
 * @group Objects
 * @param value
 * @param keys
 * @returns
 */
export function omit<T extends object, K extends keyof T>(
  value: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...value };

  for (const key of keys) {
    delete result[key];
  }

  return result as Omit<T, K>;
}

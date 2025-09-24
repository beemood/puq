export function pick<T extends object, K extends keyof T>(
  value: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>; // Initialize an empty object with the correct type

  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      result[key] = value[key];
    }
  }

  return result;
}

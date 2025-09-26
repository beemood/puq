/**
 * Try to parse the {@link value} if it is string or return it.
 *
 * @group Preprocessers
 * @param value
 * @returns
 */
export function jsonPreprocessor<T>(value: T) {
  if (typeof value === 'string') {
    return JSON.parse(value);
  }
  return value;
}

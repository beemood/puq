import { keys } from './keys.js';

/**
 * Create {@link delimeter} seperated property names of the given {@link object}.
 *
 * @group Objects
 * @param object
 * @param delimeter
 * @returns
 */
export function keysAsString<T extends object>(
  object: T,
  delimeter = ','
): string {
  return keys(object).join(delimeter);
}

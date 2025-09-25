import type { Any } from '@puq/types';

/**
 * Get the list of values of the given {@link object}
 *
 * @group Objects
 * @param value
 * @returns
 */
export function values<T extends object>(value: T): Array<Any> {
  return Object.values(value);
}

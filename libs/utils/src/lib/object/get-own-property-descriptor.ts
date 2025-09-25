import type { Any } from '@puq/types';

/**
 *
 * @group Objects
 *
 * @param targetClass
 * @param propertykey
 * @returns
 */
export function getOwnPropertyDescriptor(
  targetClass: Any,
  propertykey: string
) {
  return Object.getOwnPropertyDescriptor(targetClass.prototype, propertykey);
}

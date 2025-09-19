import type { Any } from '@puq/types';

export function getOwnPropertyDescriptor(
  targetClass: Any,
  propertykey: string
) {
  return Object.getOwnPropertyDescriptor(targetClass.prototype, propertykey);
}

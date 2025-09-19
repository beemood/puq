import type { Any } from '@puq/types';

export function values<T extends object>(value: T): Array<Any> {
  return Object.values(value);
}

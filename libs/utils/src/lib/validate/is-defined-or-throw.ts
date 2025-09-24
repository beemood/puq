import { UndefinedError } from '@puq/errors';
import type { Optional } from '@puq/types';

export function isDefinedOrThrow<T>(value: Optional<T>): asserts value is T {
  if (value != undefined) {
    return;
  }
  throw new UndefinedError();
}

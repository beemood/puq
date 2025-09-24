import { UndefinedError } from '@puq/errors';
import type { Optional } from '@puq/types';

export function definedOrThrow<T>(value: Optional<T>): T {
  if (value != undefined) {
    return value;
  }
  throw new UndefinedError();
}

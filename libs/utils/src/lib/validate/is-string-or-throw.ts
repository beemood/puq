import { NotStringError } from '@puq/errors';
import type { Unkown } from '@puq/types';

export function isStringOrThrow<T extends string>(
  value: Unkown<T>
): asserts value is T {
  if (typeof value === 'string') {
    return;
  }

  throw new NotStringError(value);
}

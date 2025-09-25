import { UndefinedError } from '@puq/errors';
import type { Optional } from '@puq/types';

/**
 * Assert the {@link value} is defined or throw {@link UndefinedError}
 * @group Validations
 * @param value
 * @returns
 */
export function isDefinedOrThrow<T>(value: Optional<T>): asserts value is T {
  if (value != undefined) {
    return;
  }
  throw new UndefinedError();
}

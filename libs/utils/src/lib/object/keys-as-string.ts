import { keys } from './keys.js';

export function keysAsString<T extends object>(
  object: T,
  delimeter = ','
): string {
  return keys(object).join(delimeter);
}

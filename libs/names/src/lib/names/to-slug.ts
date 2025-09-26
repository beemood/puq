import { normalizeName } from './normalize-name.js';

/**
 * Convert the given {@link name} into slag URL friendly string
 * @param name
 * @returns
 */
export function toSlug(name: string) {
  return normalizeName(name).split(' ').join('-');
}

import { normalizeName } from './normalize-name.js';
/**
 * Pluralize string value by adding s,ies, es suffix.
 * @param name
 * @returns
 */
export function pluralize(name: string): string {
  name = normalizeName(name);

  if (/[^aeiou]y$/.test(name)) {
    name = name.slice(0, -1) + 'ies';
  } else if (/(s|x|z|ch|sh)$/.test(name)) {
    name = name + 'es';
  } else if (/(hero|potato|tomato|echo)$/.test(name)) {
    name = name + 'es';
    // Replace the 'f' or 'fe' with 'v' and add 'es'.
  } else if (/(fe?)$/.test(name)) {
    name = name.replace(/fe?$/, 'ves');
  } else {
    name = name + 's';
  }

  return name;
}

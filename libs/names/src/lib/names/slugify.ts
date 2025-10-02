import { normalizeName } from './normalize-name.js';

export function slugify(value: string): string {
  value = value.replace(/[^a-zA-Z _-]/g, ' ');
  return normalizeName(value).split(' ').join('-');
}

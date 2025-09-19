import type { DataModelName } from './data-model-name.js';
import {
  DtoClassNamePrefixes,
  DtoClassNameSuffixes,
} from './dto-class-name.js';
import { ResourceClassNameSuffixes } from './resource-class-name.js';

/**
 * Extract the resource name from {@link className}, such as ProductController to Product, CategoryService to Category
 * @param className string
 * @returns string
 */
export function extractResourceName<T extends DataModelName>(
  className: T | string
): T {
  const placeholders = [
    ...Object.values(DtoClassNamePrefixes),
    ...Object.values(DtoClassNameSuffixes),
    ...Object.values(ResourceClassNameSuffixes),
  ];

  for (const p of placeholders) {
    className = className.replaceAll(p, '');
  }

  return className as T;
}

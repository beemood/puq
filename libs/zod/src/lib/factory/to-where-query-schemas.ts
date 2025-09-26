import type { Any, EmptyObject } from '@puq/types';
import type { ZodObject, ZodType } from 'zod';
import { z } from 'zod';
import type { FilterType } from '../filters/filter-type.js';
import { toFilterSchema } from './to-filter-schema.js';
/**
 * Create where query schema of the given {@link schema}
 *
 * @param schema
 * @returns
 */
export function toWhereQuerySchema<T extends EmptyObject>(
  schema: ZodObject<T>
): ZodObject<Record<keyof T, FilterType>> {
  const entries = Object.entries(schema.shape) as [keyof T, ZodType][];

  const updatedEntries = entries.map(([key, value]) => {
    return [key, toFilterSchema(value)];
  });

  const shape = Object.fromEntries(updatedEntries) as Record<
    keyof T,
    ZodType<Any>
  >;

  return z.object(shape) as ZodObject<Record<keyof T, FilterType>>;
}

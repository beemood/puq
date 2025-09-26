import type { ZodObject } from 'zod';
import { z } from 'zod';
import { toFilterSchema } from './to-filter-schema.js';

/**
 * Create where query schema of the given {@link schema}
 *
 * @param schema
 * @returns
 */
export function toWhereQuerySchema(schema: ZodObject) {
  const entries = Object.entries(schema.shape);

  const updatedEntries = entries.map(([key, value]) => {
    return [key, toFilterSchema(value)];
  });

  const shape = Object.fromEntries(updatedEntries);

  return z.object(shape);
}

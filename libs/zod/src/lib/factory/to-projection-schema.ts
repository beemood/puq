import type { Any } from '@puq/types';
import type { ZodObject } from 'zod';
import z from 'zod';

/**
 * Create the projection schema of the given {@link schema}
 *
 * @param schema
 * @returns
 */
export function toProjectionSchema(schema: ZodObject<Any>) {
  const entries = Object.entries(schema.shape).map(([key]) => {
    return [key, z.boolean()];
  });
  const shape = Object.fromEntries(entries);

  return z.object(shape);
}

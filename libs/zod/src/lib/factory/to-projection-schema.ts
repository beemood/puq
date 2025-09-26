import type { EmptyObject } from '@puq/types';
import type { ZodBoolean, ZodObject } from 'zod';
import z from 'zod';

/**
 * Create the projection schema of the given {@link schema}
 *
 * @param schema
 * @returns
 */
export function toProjectionSchema<T extends EmptyObject>(
  schema: ZodObject<T>
) {
  const entries = Object.entries(schema.shape).map(([key]) => {
    return [key, z.boolean()];
  });
  const shape = Object.fromEntries(entries);

  return z.object(shape) as ZodObject<Record<keyof T, ZodBoolean>>;
}

import type { EmptyObject } from '@puq/types';
import type { ZodObject } from 'zod';
import { z } from 'zod';
import { OrderDirectionSchema } from '../literals/order-direction-schema.js';
/**
 * Create order-by schema of the given {@link schema}.
 * Order-by-schema is an object schema that every property is {@link OrderDirectionSchema}
 *
 * @param schema
 * @returns
 */
export function toOrderBySchema<T extends EmptyObject>(
  schema: ZodObject<T>
): ZodObject<T> {
  const entires = Object.entries(schema.shape);

  const updatedEntries = entires.map(([key]) => {
    return [key, OrderDirectionSchema];
  });
  const shape = Object.fromEntries(updatedEntries);

  return z.object(shape);
}

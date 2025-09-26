import type { EmptyObject } from '@puq/types';
import { z, type ZodObject } from 'zod';
import { preprocessJson } from '../preprocessors/preprocess-json.js';

import { toInputSchema } from './to-input-schema.js';
import { toOrderBySchema } from './to-order-by-schema.js';
import { toProjectionSchema } from './to-projection-schema.js';
import { toWhereQuerySchema } from './to-where-query-schemas.js';

export function createResourceSchemas<T extends EmptyObject>(
  schema: ZodObject<T>
) {
  const create = toInputSchema<T>(schema.clone());

  const update = create.clone().partial();

  const ____projectionSchema = toProjectionSchema<T>(schema.clone());
  const __projectionSchema = preprocessJson(
    ____projectionSchema
  ) as unknown as typeof ____projectionSchema;

  const projection = z
    .object({
      select: __projectionSchema,
      omit: __projectionSchema,
    })
    .partial();

  const where = preprocessJson(toWhereQuerySchema(schema.clone()).partial());

  const order = preprocessJson(toOrderBySchema<T>(schema.clone()).partial());

  return {
    create,
    update,
    projection,
    where,
    order,
  };
}

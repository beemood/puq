import type { Any } from '@puq/types';
import { z, type ZodObject } from 'zod';
import { preprocessJson } from '../preprocessors/preprocess-json.js';

import { createInputSchema } from './create-input-schema.js';
import { toOrderBySchema } from './to-order-by-schema.js';
import { toProjectionSchema } from './to-projection-schema.js';
import { toWhereQuerySchema } from './to-where-query-schemas.js';

export function createResourceSchemas(schema: ZodObject<Any>) {
  const create = createInputSchema(schema.clone());

  const update = create.clone().partial();

  const __projectionSchema = preprocessJson(toProjectionSchema(schema.clone()));

  const projection = z
    .object({
      select: __projectionSchema,
      omit: __projectionSchema,
    })
    .partial();

  const where = preprocessJson(toWhereQuerySchema(schema.clone()));

  const order = preprocessJson(toOrderBySchema(schema.clone()));

  return {
    create,
    update,
    projection,
    where,
    order,
  };
}

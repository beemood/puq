import type { Any } from '@puq/types';
import { z, type ZodObject } from 'zod';
import { preprocessJson } from '../preprocessors/preprocess-json.js';
import { toOrderBySchema } from './to-order-by-schema.js';
import { toProjectionSchema } from './to-projection-schema.js';
import { toWhereQuerySchema } from './to-where-query-schemas.js';

export function createResourceSchemas(schema: ZodObject<Any>) {
  const create = schema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
  });

  const update = create.partial();

  const __projectionSchema = preprocessJson(toProjectionSchema(schema));

  const projection = z
    .object({
      select: __projectionSchema,
      omit: __projectionSchema,
    })
    .partial();

  const where = preprocessJson(toWhereQuerySchema(schema));

  const order = preprocessJson(toOrderBySchema(schema));

  return {
    create,
    update,
    projection,
    where,
    order,
  };
}

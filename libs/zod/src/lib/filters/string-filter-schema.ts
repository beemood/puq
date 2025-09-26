import z from 'zod';

const shape = {
  equals: z.string(),
  contains: z.string(),
  endsWith: z.string(),
  gt: z.string(),
  gte: z.string(),
  lt: z.string(),
  lte: z.string(),
  startsWith: z.string(),
  in: z.string().array(),
  notIn: z.string().array(),
};

export const StringFilterSchema = z
  .object({ ...shape, not: z.object(shape) })
  .partial()
  .describe('StringFilterSchema');

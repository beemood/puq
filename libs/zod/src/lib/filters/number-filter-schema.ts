import z from 'zod';

const shape = {
  equals: z.coerce.number(),
  lt: z.coerce.number(),
  lte: z.coerce.number(),
  gt: z.coerce.number(),
  gte: z.coerce.number(),
  in: z.coerce.number().array(),
  notIn: z.coerce.number().array(),
};

export const NumberFilterSchema = z
  .object({ ...shape, not: z.object(shape) })
  .partial()
  .describe('NumberFilterSchema');

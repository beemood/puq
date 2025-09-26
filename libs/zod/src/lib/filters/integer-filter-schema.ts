import z from 'zod';

const shape = {
  equals: z.coerce.number().int(),
  lt: z.coerce.number().int(),
  lte: z.coerce.number().int(),
  gt: z.coerce.number().int(),
  gte: z.coerce.number().int(),
  in: z.coerce.number().int().array(),
  notIn: z.coerce.number().int().array(),
};

export const IntegerFilterSchema = z
  .object({ ...shape, not: z.object(shape) })
  .partial()
  .describe('IntegerFilterSchema');

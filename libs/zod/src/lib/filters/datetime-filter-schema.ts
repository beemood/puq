import z from 'zod';

const shape = {
  equals: z.iso.datetime(),
  lt: z.iso.datetime(),
  lte: z.iso.datetime(),
  gt: z.iso.datetime(),
  gte: z.iso.datetime(),
  in: z.iso.datetime().array(),
  notIn: z.iso.datetime().array(),
};

export const DatetimeFilterSchema = z
  .object({ ...shape, not: z.object(shape) })
  .partial();

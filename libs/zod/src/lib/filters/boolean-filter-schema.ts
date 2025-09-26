import z from 'zod';

const shape = {
  equals: z.coerce.boolean(),
};

export const BooleanFilterSchema = z
  .object({
    ...shape,
    not: z.object(shape),
  })
  .partial();

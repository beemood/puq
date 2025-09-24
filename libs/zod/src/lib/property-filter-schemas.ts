import z from 'zod';

export const StringFilterSchema = z
  .object({
    equals: z.string(),
  })
  .partial()
  .optional();

export const IntegerFilterSchema = z
  .object({
    equals: z.int(),
  })
  .partial()
  .optional();

export const NumberFilterSchema = z
  .object({
    equals: z.int(),
  })
  .partial()
  .optional();

export const DateFilterSchema = z
  .object({
    equals: z.iso.datetime(),
  })
  .partial()
  .optional();

export const BooleanFilterSchema = z
  .object({
    equals: z.boolean(),
  })
  .partial()
  .optional();

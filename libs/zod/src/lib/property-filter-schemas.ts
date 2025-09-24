import z from 'zod';

export const __StringFilterSchema = {
  contains: z.string(),
  endsWith: z.string(),
  equals: z.string(),
  gt: z.string(),
  gte: z.string(),
  in: z.string().array(),
  lt: z.string(),
  lte: z.string(),
  notIn: z.string().array(),
  startsWith: z.string(),
};

export const StringFilterSchema = z
  .object({
    ...__StringFilterSchema,
    not: z.object(__StringFilterSchema).partial().partial(),
  })
  .partial();

export const __IntegerFilterSchema = {
  equals: z.coerce.number().int(),
  in: z.coerce.number().int(),
  notIn: z.coerce.number().int(),
  lt: z.coerce.number().int(),
  lte: z.coerce.number().int(),
  gt: z.coerce.number().int(),
  gte: z.coerce.number().int(),
};

export const IntegerFilterSchema = z
  .object({
    ...__IntegerFilterSchema,
    not: z.object(__IntegerFilterSchema).partial(),
  })
  .partial();

export const __NumberFilterSchema = {
  equals: z.coerce.number(),
  in: z.coerce.number(),
  notIn: z.coerce.number(),
  lt: z.coerce.number(),
  lte: z.coerce.number(),
  gt: z.coerce.number(),
  gte: z.coerce.number(),
};

export const NumberFilterSchema = z
  .object({
    ...__NumberFilterSchema,
    not: z.object(__NumberFilterSchema).partial(),
  })
  .partial();

export const __DateTimeFilterSchema = {
  equals: z.iso.datetime(),
  in: z.iso.datetime(),
  notIn: z.iso.datetime(),
  lt: z.iso.datetime(),
  lte: z.iso.datetime(),
  gt: z.iso.datetime(),
  gte: z.iso.datetime(),
};
export const DateTimeFilterSchema = z
  .object({
    ...__DateTimeFilterSchema,
    not: z.object(__DateTimeFilterSchema).partial(),
  })
  .partial();

export const __BooleanFilterSchema = {
  equals: z.coerce.boolean(),
};

export const BooleanFilterSchema = z
  .object({
    ...__BooleanFilterSchema,
    not: z.object(__BooleanFilterSchema).partial(),
  })
  .partial();

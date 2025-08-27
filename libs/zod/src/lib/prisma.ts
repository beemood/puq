import z from 'zod';
import { quantity } from './number.js';

export const DirectionSchema = z.literal(['asc', 'desc']);

export const StrModeSchema = z.literal(['default', 'insensitive']);

export const __StrFilterSchema = z.object({
  equals: z.string(),
  in: z.string().array(),
  notIn: z.string().array(),
  lt: z.string(),
  lte: z.string(),
  gt: z.string(),
  gte: z.string(),
  contains: z.string(),
  startsWith: z.string(),
  endsWith: z.string(),
  mode: StrModeSchema,
});

export const StrFilterSchema = __StrFilterSchema
  .extend({ not: __StrFilterSchema.partial() })
  .partial();

export type StrFilter = z.infer<typeof StrFilterSchema>;

export const __IntFilterSchema = z.object({
  equals: z.int(),
  in: z.int().array(),
  notIn: z.int().array(),
  lt: z.int(),
  lte: z.int(),
  gt: z.int(),
  gte: z.int(),
});

export const IntFilterSchema = __IntFilterSchema
  .extend({ not: __IntFilterSchema.partial() })
  .partial();

export type IntFilter = z.infer<typeof IntFilterSchema>;

export const __NumFilterSchema = z.object({
  equals: z.number(),
  in: z.number().array(),
  notIn: z.number().array(),
  lt: z.number(),
  lte: z.number(),
  gt: z.number(),
  gte: z.number(),
});

export const NumFilterSchema = __NumFilterSchema
  .extend({ not: __NumFilterSchema.partial() })
  .partial();

export type NumFilter = z.infer<typeof NumFilterSchema>;

export const __DateTimeFilterSchema = z.object({
  equals: z.iso.datetime(),
  in: z.iso.datetime().array(),
  notIn: z.iso.datetime().array(),
  lt: z.iso.datetime(),
  lte: z.iso.datetime(),
  gt: z.iso.datetime(),
  gte: z.iso.datetime(),
});

export const DateTimeFilterSchema = __DateTimeFilterSchema
  .extend({ not: __DateTimeFilterSchema.partial() })
  .partial();

export type DateTimeFilter = z.infer<typeof DateTimeFilterSchema>;

export const BasePaginatorSchema = {
  take: quantity,
  skip: quantity,
};

export const BaseSelectIdSchema = {
  id: z.boolean(),
};

export const BaseOrderIdSchema = {
  id: DirectionSchema,
};

export const BaseSelectTimestampSchema = {
  createdAt: z.boolean(),
  updatedAt: z.boolean(),
  deletedAt: z.boolean(),
};

export const BaseOrderTimestampSchema = {
  createdAt: DirectionSchema,
  updatedAt: DirectionSchema,
  deletedAt: DirectionSchema,
};

export const BaseLimitSchema = {
  limit: quantity,
};

export type Selection<T> = {
  select?: Record<keyof T, boolean>;
  omit?: Record<keyof T, boolean>;
  include?: Record<keyof T, boolean>;
};

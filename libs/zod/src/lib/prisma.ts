import z from 'zod';
import { quantity } from './number.js';

export const Direction = z.literal(['asc', 'desc']);

export const StrMode = z.literal(['default', 'insensitive']);

export const __StrFilter = z.object({
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
  mode: StrMode,
});

export const StrFilter = __StrFilter
  .extend({ not: __StrFilter.partial() })
  .partial();

export const __IntFilter = z.object({
  equals: z.int(),
  in: z.int().array(),
  notIn: z.int().array(),
  lt: z.int(),
  lte: z.int(),
  gt: z.int(),
  gte: z.int(),
});

export const IntFilter = __IntFilter
  .extend({ not: __IntFilter.partial() })
  .partial();

export const __NumFilter = z.object({
  equals: z.number(),
  in: z.number().array(),
  notIn: z.number().array(),
  lt: z.number(),
  lte: z.number(),
  gt: z.number(),
  gte: z.number(),
});

export const NumFilter = __NumFilter
  .extend({ not: __NumFilter.partial() })
  .partial();

export const __DateTimeFilterSchema = z.object({
  equals: z.iso.datetime(),
  in: z.iso.datetime().array(),
  notIn: z.iso.datetime().array(),
  lt: z.iso.datetime(),
  lte: z.iso.datetime(),
  gt: z.iso.datetime(),
  gte: z.iso.datetime(),
});

export const DateTimeFilter = __DateTimeFilterSchema
  .extend({ not: __DateTimeFilterSchema.partial() })
  .partial();

export const Page = {
  take: quantity,
  skip: quantity,
};

/**
 * Object including id field as direction schema which is used to order response body such as { id : 'asc' | 'desc' }
 */
export const OrderId = {
  id: Direction,
};

export const OrderTimestamp = {
  createdAt: Direction,
  updatedAt: Direction,
  deletedAt: Direction,
};

/**
 * Object including id field as boolean schema which is used to select response body such as { id :true }
 */
export const SelectId = {
  id: z.boolean(),
};

/**
 * Object including timestamp fields as boolean schema which is used to select response body such as { createdAt :true }
 */
export const SelectTimestamp = {
  createdAt: z.boolean(),
  updatedAt: z.boolean(),
  deletedAt: z.boolean(),
};
/**
 * Object including id and timestamp fields as boolean schema which is used to select response body such as {id :true }
 */
export const BaseSelectable = {
  ...SelectId,
  ...SelectTimestamp,
};

export const BaseOrder = {
  ...OrderId,
  ...OrderTimestamp,
};

export const Limit = {
  limit: quantity,
};

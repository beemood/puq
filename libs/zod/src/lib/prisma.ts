import z from 'zod';
import { int, num, quantity } from './number.js';
import { datetime, str } from './text.js';

export const SortOrder = z.literal(['asc', 'desc']).optional();

export type SortOrder = z.infer<typeof SortOrder>;

export const StringMode = z.literal(['default', 'insensitive']).optional();

export type StringMode = z.infer<typeof StringMode>;

export const __StrFilter = z.object({
  equals: str.optional(),
  in: z.array(z.string()).optional(),
  notIn: z.array(z.string()).optional(),
  lt: str.optional(),
  lte: str.optional(),
  gt: str.optional(),
  gte: str.optional(),
  contains: str.optional(),
  startsWith: str.optional(),
  endsWith: str.optional(),
  mode: StringMode,
});

export const StrFilter = __StrFilter.extend({
  not: __StrFilter.optional(),
});

export type StrFilter = z.infer<typeof StrFilter>;

export const __IntFilter = z.object({
  equals: int.optional(),
  in: int.array(),
  notIn: z.array(int),
  lt: int.optional(),
  lte: int.optional(),
  gt: int.optional(),
  gte: int.optional(),
});

export const IntFilter = __IntFilter.extend({
  not: __IntFilter.optional(),
});

export type IntFilter = z.infer<typeof IntFilter>;

export const __NumFilter = z.object({
  equals: num.optional(),
  in: num.array(),
  notIn: num.array(),
  lt: num.optional(),
  lte: num.optional(),
  gt: num.optional(),
  gte: num.optional(),
});

export const NumFilter = __NumFilter.extend({
  not: __NumFilter.optional(),
});

export type NumFilter = z.infer<typeof NumFilter>;

export const __DateTimeFilter = z.object({
  equals: datetime,
  in: datetime.array(),
  notIn: datetime.array(),
  lt: datetime,
  lte: datetime,
  gt: datetime,
  gte: datetime,
});

export const DateTimeFilter = __DateTimeFilter.extend({
  not: __DateTimeFilter.optional(),
});

export type DateTimeFilter = z.infer<typeof DateTimeFilter>;

export const Paginator = z.object({
  take: quantity.optional(),
  skip: quantity.optional(),
});

export type Paginator = z.infer<typeof Paginator>;

import z from 'zod';
import { bool } from './boolean.js';
import { num, quantity } from './number.js';
import { datetime, str } from './text.js';

export const SortOrderSchema = z.literal(['asc', 'desc']).optional();

export type SortOrder = z.infer<typeof SortOrderSchema>;

export const StringModeSchema = z
  .literal(['default', 'insensitive'])
  .optional();

export type StringMode = z.infer<typeof StringModeSchema>;

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
  mode: StringModeSchema,
});

export const StrFilterSchema = __StrFilter.extend({
  not: __StrFilter.optional(),
});

export type StrFilter = z.infer<typeof StrFilterSchema>;

export const __IntFilter = z.object({
  equals: z.int().optional(),
  in: z.int().array().optional(),
  notIn: z.int().array().optional(),
  lt: z.int().optional(),
  lte: z.int().optional(),
  gt: z.int().optional(),
  gte: z.int().optional(),
});

export const IntFilterSchema = __IntFilter.extend({
  not: __IntFilter.optional(),
});

export type IntFilter = z.infer<typeof IntFilterSchema>;

export const __NumFilter = z.object({
  equals: num.optional(),
  in: num.array(),
  notIn: num.array(),
  lt: num.optional(),
  lte: num.optional(),
  gt: num.optional(),
  gte: num.optional(),
});

export const NumFilterSchema = __NumFilter.extend({
  not: __NumFilter.optional(),
});

export type NumFilter = z.infer<typeof NumFilterSchema>;

export const __DateTimeFilter = z.object({
  equals: datetime,
  in: datetime.array(),
  notIn: datetime.array(),
  lt: datetime,
  lte: datetime,
  gt: datetime,
  gte: datetime,
});

export const DateTimeFilterSchema = __DateTimeFilter.extend({
  not: __DateTimeFilter.optional(),
});

export type DateTimeFilter = z.infer<typeof DateTimeFilterSchema>;

export const PaginatorSchema = z.object({
  take: quantity.optional(),
  skip: quantity.optional(),
});

export type Paginator = z.infer<typeof PaginatorSchema>;

export const SelectIdSchema = z.object({
  id: bool.optional(),
});

export const OrderIdSchema = z.object({
  id: SortOrderSchema.optional(),
});

export const SelectTimestampSchema = SelectIdSchema.extend({
  createdAt: bool.optional(),
  updatedAt: bool.optional(),
  deletedAt: bool.optional(),
});

export const OrderTimestampSchema = OrderIdSchema.extend({
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
});

export const LimitSchema = z.object({
  limit: quantity.optional(),
});

export type Limit = z.infer<typeof LimitSchema>;

import z from 'zod';
import { id } from './number.js';
import { DateTimeFilterSchema, IntFilterSchema } from './prisma.js';
import { datetime } from './text.js';

export const IdSchema = z.object({
  id: id,
});

export type Id = z.infer<typeof IdSchema>;

export const TimestampSchema = IdSchema.extend({
  createdAt: datetime.optional(),
  updatedAt: datetime.optional(),
  deletedAt: datetime.optional(),
});

export type Timestamp = z.infer<typeof TimestampSchema>;

export const WhereIdSchema = z.object({
  id: IntFilterSchema.optional(),
});

export type WhereId = z.infer<typeof WhereIdSchema>;

export const WhereTimestampSchema = WhereIdSchema.extend({
  createdAt: DateTimeFilterSchema.optional(),
  updatedAt: DateTimeFilterSchema.optional(),
  deletedAt: DateTimeFilterSchema.optional(),
});

export type WhereTimestamp = z.infer<typeof WhereTimestampSchema>;

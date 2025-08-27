import z from 'zod';
import { id } from './number.js';
import { DateTimeFilterSchema, IntFilterSchema } from './prisma.js';

export const BaseIdSchema = {
  id: id,
};

export const BaseTimestsampSchema = {
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  deletedAt: z.iso.datetime(),
};

export const BaseWhereIdSchema = { id: IntFilterSchema };

export const BaseWhereTimestampSchema = {
  createdAt: DateTimeFilterSchema,
  updatedAt: DateTimeFilterSchema,
  deletedAt: DateTimeFilterSchema,
};

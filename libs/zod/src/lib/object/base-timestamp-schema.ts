import z from 'zod';
import { DatetimeSchema } from '../literals/datetime-schema.js';
import { IdSchema } from '../literals/id-schema.js';
import { Generated } from '../types/generated-type.js';

export const BaseTimestampSchema = z.object({
  id: Generated(IdSchema.clone()),
  createdAt: Generated(DatetimeSchema.clone()),
  updatedAt: Generated(DatetimeSchema.clone()),
  deletedAt: Generated(DatetimeSchema.clone()),
});

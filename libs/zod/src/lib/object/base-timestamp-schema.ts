import z from 'zod';
import { DateTimeSchema } from '../literals/date-time-schema.js';
import { IdSchema } from '../literals/id-schema.js';
import { Generated } from '../types/generated-type.js';

export const BaseTimestampSchema = z.object({
  id: Generated(IdSchema.clone()),
  createdAt: Generated(DateTimeSchema.clone()),
  updatedAt: Generated(DateTimeSchema.clone()),
  deletedAt: Generated(DateTimeSchema.clone()),
});

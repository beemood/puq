import z from 'zod';
import { GENERATED_VALUE } from '../constants/constants.js';
import { DatetimeSchema } from '../literals/datetime-schema.js';
import { IdSchema } from '../literals/id-schema.js';

export const BaseTimestampSchema = z.object({
  id: IdSchema.clone().describe(GENERATED_VALUE),
  createdAt: DatetimeSchema.clone().describe(GENERATED_VALUE),
  updatedAt: DatetimeSchema.clone().describe(GENERATED_VALUE),
  deletedAt: DatetimeSchema.clone().describe(GENERATED_VALUE),
});

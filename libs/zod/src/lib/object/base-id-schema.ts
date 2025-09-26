import z from 'zod';
import { IdSchema } from '../literals/id-schema.js';
import { Generated } from '../types/generated-type.js';

export const BaseIdSchema = z.object({
  id: Generated(IdSchema.clone()),
});

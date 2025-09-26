import z from 'zod';
import { toGeneratedSchema } from '../factory/to-generated-schema.js';
import { IdSchema } from '../literals/id-schema.js';

export const BaseIdSchema = z.object({
  id: toGeneratedSchema(IdSchema.clone()),
});

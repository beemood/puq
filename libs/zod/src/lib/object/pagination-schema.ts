import z from 'zod';
import { PageSkipSchema } from '../literals/page-skip-schema.js';
import { PageTakeSchema } from '../literals/page-take-schema.js';

export const PaginationSchema = z.object({
  take: PageTakeSchema,
  skip: PageSkipSchema,
});

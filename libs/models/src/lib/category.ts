import {
  name,
  StrFilter,
  TimestampSchema,
  WhereTimestampSchema,
} from '@puq/zod';
import type z from 'zod';

export const CategorySchema = TimestampSchema.extend({
  name: name.optional(),
});

export type Category = z.infer<typeof CategorySchema>;

export const CreateCategorySchema = CategorySchema.pick({
  name: true,
}).required();

export type CreateCategory = z.infer<typeof CreateCategorySchema>;

export const UpdateCategorySchema = CreateCategorySchema.partial();

export type UpdateCategory = z.infer<typeof UpdateCategorySchema>;

export const WhereCategorySchema = WhereTimestampSchema.extend({
  name: StrFilter.optional(),
});

export type WhereCategory = z.infer<typeof WhereCategorySchema>;


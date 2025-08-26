import {
  bool,
  name,
  quantity,
  SelectTimestampSchema,
  StrFilterSchema,
  TimestampSchema,
  WhereTimestampSchema,
} from '@puq/zod';
import z from 'zod';

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
  name: StrFilterSchema.optional(),
});

export type WhereCategory = z.infer<typeof WhereCategorySchema>;

export const SelectCategoryFieldsSchema = SelectTimestampSchema.extend({
  name: bool.optional(),
});
export type SelectCategoryFields = z.infer<typeof SelectCategoryFieldsSchema>;

export const CategoryFieldsSchema = z.object({
  select: SelectCategoryFieldsSchema.optional(),
  omit: SelectCategoryFieldsSchema.optional(),
});

export type CategoryFields = z.infer<typeof CategoryFieldsSchema>;

export const QueryCategorySchema = CategoryFieldsSchema.extend({
  where: WhereCategorySchema,
});

export type QueryCategory = z.infer<typeof QueryCategorySchema>;

export const DeleteManyCategorySchema = z.object({
  where: WhereCategorySchema,
  limit: quantity.optional(),
});

export type DeleteManyCategory = z.infer<typeof DeleteManyCategorySchema>;

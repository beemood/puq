import {
  createResourceSchemas,
  Generated,
  IdSchema,
  NameSchema,
} from '@puq/zod';
import z from 'zod';

export const CategorySchema = z.object({
  id: Generated(IdSchema),
  name: NameSchema,
  departmentId: IdSchema,
});

export const CategoryCreateSchema = CategorySchema.omit({
  id: true,
}).partial({ departmentId: true });

export const CategoryUpdateSchema = CategoryCreateSchema.clone().partial();

export const {
  order: CategoryOrderSchema,
  projection: CategoryProjectionSchema,
  where: CategoryWhereSchema,
} = createResourceSchemas(CategorySchema);

export type Category = z.infer<typeof CategorySchema>;

export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;
export type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;
export type CategoryOrder = z.infer<typeof CategoryOrderSchema>;
export type CategoryProjection = z.infer<typeof CategoryProjectionSchema>;
export type CategoryWhere = z.infer<typeof CategoryWhereSchema>;

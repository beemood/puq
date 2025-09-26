import {
  createResourceSchemas,
  Generated,
  IdSchema,
  NameSchema,
} from '@puq/zod';
import type { ZodType } from 'zod';
import z from 'zod';
import type { Prisma } from '../../../generated';

export const {
  create: CategoryCreateSchema,
  update: CategoryUpdateSchema,
  order: CategoryOrderSchema,
  projection: CategoryProjectionSchema,
  where: CategoryWhereSchema,
} = createResourceSchemas(
  z.object<Record<Prisma.CategoryScalarFieldEnum, ZodType>>({
    id: Generated(IdSchema),
    name: NameSchema,
    departmentId: IdSchema,
  })
);
export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;
export type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;
export type CategoryOrder = z.infer<typeof CategoryOrderSchema>;
export type CategoryProjection = z.infer<typeof CategoryProjectionSchema>;
export type CategoryWhere = z.infer<typeof CategoryWhereSchema>;

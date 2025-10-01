
import { toOrderBySchema, toWhereQuerySchema } from '@puq/zod';
import {z} from 'zod';
    

// ---------- Department Schemas ----------


export const DepartmentSchema = z.object({
  id: z.number().int(),
  name: z.string(),
});

export const DepartmentCreateSchema = z.object({
  name: z.string(),
});

export const DepartmentUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});

export const DepartmentWhereSchema = toWhereQuerySchema(DepartmentSchema);

export const DepartmentOrderSchema =  toOrderBySchema(DepartmentSchema);

export const DepartmentSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
});

export const DepartmentQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: DepartmentWhereSchema.optional(),
  orderBy: DepartmentOrderSchema.optional(),
  select: DepartmentSelectSchema.optional()
});

export type Department = z.infer<typeof DepartmentSchema>;
export type DepartmentCreate = z.infer<typeof DepartmentCreateSchema>;
export type DepartmentUpdate = z.infer<typeof DepartmentUpdateSchema>;
export type DepartmentWhere = z.infer<typeof DepartmentWhereSchema>;
export type DepartmentOrder = z.infer<typeof DepartmentOrderSchema>;
export type DepartmentSelect = z.infer<typeof DepartmentSelectSchema>;
export type DepartmentQuery = z.infer<typeof DepartmentQuerySchema>;



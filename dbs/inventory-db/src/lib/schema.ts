
import { toOrderBySchema, toWhereQuerySchema } from '@puq/zod';
import {z} from 'zod';
    

// ---------- Some Schemas ----------


export const SomeSchema = z.object({
  int: z.number().int(),
  num: z.number(),
  date: z.date(),
  boolean: z.boolean(),
});

export const SomeCreateSchema = z.object({
  num: z.number(),
  date: z.date(),
  boolean: z.boolean(),
});

export const SomeUpdateSchema = z.object({
  int: z.number().int().optional(),
  num: z.number().optional(),
  date: z.date().optional(),
  boolean: z.boolean().optional(),
});

export const SomeWhereSchema = toWhereQuerySchema(SomeSchema);

export const SomeOrderSchema =  toOrderBySchema(SomeSchema);

export const SomeSelectSchema = z.object({
  int: z.boolean().optional(),
  num: z.boolean().optional(),
  date: z.boolean().optional(),
  boolean: z.boolean().optional(),
});

export const SomeQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: SomeWhereSchema.optional(),
  orderBy: SomeOrderSchema.optional(),
  select: SomeSelectSchema.optional()
});

export type Some = z.infer<typeof SomeSchema>;
export type SomeCreate = z.infer<typeof SomeCreateSchema>;
export type SomeUpdate = z.infer<typeof SomeUpdateSchema>;
export type SomeWhere = z.infer<typeof SomeWhereSchema>;
export type SomeOrder = z.infer<typeof SomeOrderSchema>;
export type SomeSelect = z.infer<typeof SomeSelectSchema>;
export type SomeQuery = z.infer<typeof SomeQuerySchema>;




// ---------- Department Schemas ----------


export const DepartmentSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
});

export const DepartmentCreateSchema = z.object({
  name: z.string(),
  slug: z.string(),
});

export const DepartmentUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
});

export const DepartmentWhereSchema = toWhereQuerySchema(DepartmentSchema);

export const DepartmentOrderSchema =  toOrderBySchema(DepartmentSchema);

export const DepartmentSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  categories: z.boolean().optional(),
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




// ---------- Category Schemas ----------


export const CategorySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  departmentId: z.number().int().nullish(),
});

export const CategoryCreateSchema = z.object({
  name: z.string(),
  slug: z.string(),
  departmentId: z.number().int().nullish(),
});

export const CategoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  departmentId: z.number().int().nullish().optional(),
});

export const CategoryWhereSchema = toWhereQuerySchema(CategorySchema);

export const CategoryOrderSchema =  toOrderBySchema(CategorySchema);

export const CategorySelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  departmentId: z.boolean().optional(),
  department: z.boolean().optional(),
  categories: z.boolean().optional(),
});

export const CategoryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: CategoryWhereSchema.optional(),
  orderBy: CategoryOrderSchema.optional(),
  select: CategorySelectSchema.optional()
});

export type Category = z.infer<typeof CategorySchema>;
export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;
export type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;
export type CategoryWhere = z.infer<typeof CategoryWhereSchema>;
export type CategoryOrder = z.infer<typeof CategoryOrderSchema>;
export type CategorySelect = z.infer<typeof CategorySelectSchema>;
export type CategoryQuery = z.infer<typeof CategoryQuerySchema>;




// ---------- Product Schemas ----------


export const ProductSchema = z.object({
  id: z.number().int(),
  uuid: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  active: z.boolean().nullish(),
  name: z.string(),
  description: z.string().nullish(),
  slug: z.string(),
});

export const ProductCreateSchema = z.object({
  active: z.boolean().nullish(),
  name: z.string(),
  description: z.string().nullish(),
  slug: z.string(),
});

export const ProductUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  active: z.boolean().nullish().optional(),
  name: z.string().optional(),
  description: z.string().nullish().optional(),
  slug: z.string().optional(),
});

export const ProductWhereSchema = toWhereQuerySchema(ProductSchema);

export const ProductOrderSchema =  toOrderBySchema(ProductSchema);

export const ProductSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  active: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  slug: z.boolean().optional(),
  variants: z.boolean().optional(),
  images: z.boolean().optional(),
  categories: z.boolean().optional(),
});

export const ProductQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ProductWhereSchema.optional(),
  orderBy: ProductOrderSchema.optional(),
  select: ProductSelectSchema.optional()
});

export type Product = z.infer<typeof ProductSchema>;
export type ProductCreate = z.infer<typeof ProductCreateSchema>;
export type ProductUpdate = z.infer<typeof ProductUpdateSchema>;
export type ProductWhere = z.infer<typeof ProductWhereSchema>;
export type ProductOrder = z.infer<typeof ProductOrderSchema>;
export type ProductSelect = z.infer<typeof ProductSelectSchema>;
export type ProductQuery = z.infer<typeof ProductQuerySchema>;




// ---------- ProductCategory Schemas ----------


export const ProductCategorySchema = z.object({
  id: z.number().int(),
  productId: z.number().int(),
  categoryId: z.number().int(),
});

export const ProductCategoryCreateSchema = z.object({
  productId: z.number().int(),
  categoryId: z.number().int(),
});

export const ProductCategoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  productId: z.number().int().optional(),
  categoryId: z.number().int().optional(),
});

export const ProductCategoryWhereSchema = toWhereQuerySchema(ProductCategorySchema);

export const ProductCategoryOrderSchema =  toOrderBySchema(ProductCategorySchema);

export const ProductCategorySelectSchema = z.object({
  id: z.boolean().optional(),
  productId: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  product: z.boolean().optional(),
  category: z.boolean().optional(),
});

export const ProductCategoryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ProductCategoryWhereSchema.optional(),
  orderBy: ProductCategoryOrderSchema.optional(),
  select: ProductCategorySelectSchema.optional()
});

export type ProductCategory = z.infer<typeof ProductCategorySchema>;
export type ProductCategoryCreate = z.infer<typeof ProductCategoryCreateSchema>;
export type ProductCategoryUpdate = z.infer<typeof ProductCategoryUpdateSchema>;
export type ProductCategoryWhere = z.infer<typeof ProductCategoryWhereSchema>;
export type ProductCategoryOrder = z.infer<typeof ProductCategoryOrderSchema>;
export type ProductCategorySelect = z.infer<typeof ProductCategorySelectSchema>;
export type ProductCategoryQuery = z.infer<typeof ProductCategoryQuerySchema>;




// ---------- Variant Schemas ----------


export const VariantSchema = z.object({
  id: z.number().int(),
  uuid: z.string(),
  productId: z.number().int(),
  sku: z.string(),
  upc: z.string(),
  barcode: z.string(),
});

export const VariantCreateSchema = z.object({
  productId: z.number().int(),
  sku: z.string(),
  upc: z.string(),
  barcode: z.string(),
});

export const VariantUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
  productId: z.number().int().optional(),
  sku: z.string().optional(),
  upc: z.string().optional(),
  barcode: z.string().optional(),
});

export const VariantWhereSchema = toWhereQuerySchema(VariantSchema);

export const VariantOrderSchema =  toOrderBySchema(VariantSchema);

export const VariantSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  product: z.boolean().optional(),
  productId: z.boolean().optional(),
  sku: z.boolean().optional(),
  upc: z.boolean().optional(),
  barcode: z.boolean().optional(),
  attributes: z.boolean().optional(),
  images: z.boolean().optional(),
});

export const VariantQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: VariantWhereSchema.optional(),
  orderBy: VariantOrderSchema.optional(),
  select: VariantSelectSchema.optional()
});

export type Variant = z.infer<typeof VariantSchema>;
export type VariantCreate = z.infer<typeof VariantCreateSchema>;
export type VariantUpdate = z.infer<typeof VariantUpdateSchema>;
export type VariantWhere = z.infer<typeof VariantWhereSchema>;
export type VariantOrder = z.infer<typeof VariantOrderSchema>;
export type VariantSelect = z.infer<typeof VariantSelectSchema>;
export type VariantQuery = z.infer<typeof VariantQuerySchema>;




// ---------- Attribute Schemas ----------


export const AttributeSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  unit: z.string(),
});

export const AttributeCreateSchema = z.object({
  name: z.string(),
  unit: z.string(),
});

export const AttributeUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  unit: z.string().optional(),
});

export const AttributeWhereSchema = toWhereQuerySchema(AttributeSchema);

export const AttributeOrderSchema =  toOrderBySchema(AttributeSchema);

export const AttributeSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  unit: z.boolean().optional(),
  values: z.boolean().optional(),
});

export const AttributeQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: AttributeWhereSchema.optional(),
  orderBy: AttributeOrderSchema.optional(),
  select: AttributeSelectSchema.optional()
});

export type Attribute = z.infer<typeof AttributeSchema>;
export type AttributeCreate = z.infer<typeof AttributeCreateSchema>;
export type AttributeUpdate = z.infer<typeof AttributeUpdateSchema>;
export type AttributeWhere = z.infer<typeof AttributeWhereSchema>;
export type AttributeOrder = z.infer<typeof AttributeOrderSchema>;
export type AttributeSelect = z.infer<typeof AttributeSelectSchema>;
export type AttributeQuery = z.infer<typeof AttributeQuerySchema>;




// ---------- AttributeValue Schemas ----------


export const AttributeValueSchema = z.object({
  id: z.number().int(),
  variantId: z.number().int(),
  attributeId: z.number().int(),
  value: z.string(),
});

export const AttributeValueCreateSchema = z.object({
  variantId: z.number().int(),
  attributeId: z.number().int(),
  value: z.string(),
});

export const AttributeValueUpdateSchema = z.object({
  id: z.number().int().optional(),
  variantId: z.number().int().optional(),
  attributeId: z.number().int().optional(),
  value: z.string().optional(),
});

export const AttributeValueWhereSchema = toWhereQuerySchema(AttributeValueSchema);

export const AttributeValueOrderSchema =  toOrderBySchema(AttributeValueSchema);

export const AttributeValueSelectSchema = z.object({
  id: z.boolean().optional(),
  variant: z.boolean().optional(),
  variantId: z.boolean().optional(),
  attribute: z.boolean().optional(),
  attributeId: z.boolean().optional(),
  value: z.boolean().optional(),
});

export const AttributeValueQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: AttributeValueWhereSchema.optional(),
  orderBy: AttributeValueOrderSchema.optional(),
  select: AttributeValueSelectSchema.optional()
});

export type AttributeValue = z.infer<typeof AttributeValueSchema>;
export type AttributeValueCreate = z.infer<typeof AttributeValueCreateSchema>;
export type AttributeValueUpdate = z.infer<typeof AttributeValueUpdateSchema>;
export type AttributeValueWhere = z.infer<typeof AttributeValueWhereSchema>;
export type AttributeValueOrder = z.infer<typeof AttributeValueOrderSchema>;
export type AttributeValueSelect = z.infer<typeof AttributeValueSelectSchema>;
export type AttributeValueQuery = z.infer<typeof AttributeValueQuerySchema>;




// ---------- VariantImage Schemas ----------


export const VariantImageSchema = z.object({
  id: z.number().int(),
  description: z.string().nullish(),
  url: z.string(),
  order: z.number().int(),
  variantId: z.number().int(),
});

export const VariantImageCreateSchema = z.object({
  description: z.string().nullish(),
  url: z.string(),
  order: z.number().int(),
  variantId: z.number().int(),
});

export const VariantImageUpdateSchema = z.object({
  id: z.number().int().optional(),
  description: z.string().nullish().optional(),
  url: z.string().optional(),
  order: z.number().int().optional(),
  variantId: z.number().int().optional(),
});

export const VariantImageWhereSchema = toWhereQuerySchema(VariantImageSchema);

export const VariantImageOrderSchema =  toOrderBySchema(VariantImageSchema);

export const VariantImageSelectSchema = z.object({
  id: z.boolean().optional(),
  description: z.boolean().optional(),
  url: z.boolean().optional(),
  order: z.boolean().optional(),
  variant: z.boolean().optional(),
  variantId: z.boolean().optional(),
});

export const VariantImageQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: VariantImageWhereSchema.optional(),
  orderBy: VariantImageOrderSchema.optional(),
  select: VariantImageSelectSchema.optional()
});

export type VariantImage = z.infer<typeof VariantImageSchema>;
export type VariantImageCreate = z.infer<typeof VariantImageCreateSchema>;
export type VariantImageUpdate = z.infer<typeof VariantImageUpdateSchema>;
export type VariantImageWhere = z.infer<typeof VariantImageWhereSchema>;
export type VariantImageOrder = z.infer<typeof VariantImageOrderSchema>;
export type VariantImageSelect = z.infer<typeof VariantImageSelectSchema>;
export type VariantImageQuery = z.infer<typeof VariantImageQuerySchema>;




// ---------- ProductImage Schemas ----------


export const ProductImageSchema = z.object({
  id: z.number().int(),
  description: z.string().nullish(),
  url: z.string(),
  order: z.number().int(),
  productId: z.number().int(),
});

export const ProductImageCreateSchema = z.object({
  description: z.string().nullish(),
  url: z.string(),
  order: z.number().int(),
  productId: z.number().int(),
});

export const ProductImageUpdateSchema = z.object({
  id: z.number().int().optional(),
  description: z.string().nullish().optional(),
  url: z.string().optional(),
  order: z.number().int().optional(),
  productId: z.number().int().optional(),
});

export const ProductImageWhereSchema = toWhereQuerySchema(ProductImageSchema);

export const ProductImageOrderSchema =  toOrderBySchema(ProductImageSchema);

export const ProductImageSelectSchema = z.object({
  id: z.boolean().optional(),
  description: z.boolean().optional(),
  url: z.boolean().optional(),
  order: z.boolean().optional(),
  product: z.boolean().optional(),
  productId: z.boolean().optional(),
});

export const ProductImageQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ProductImageWhereSchema.optional(),
  orderBy: ProductImageOrderSchema.optional(),
  select: ProductImageSelectSchema.optional()
});

export type ProductImage = z.infer<typeof ProductImageSchema>;
export type ProductImageCreate = z.infer<typeof ProductImageCreateSchema>;
export type ProductImageUpdate = z.infer<typeof ProductImageUpdateSchema>;
export type ProductImageWhere = z.infer<typeof ProductImageWhereSchema>;
export type ProductImageOrder = z.infer<typeof ProductImageOrderSchema>;
export type ProductImageSelect = z.infer<typeof ProductImageSelectSchema>;
export type ProductImageQuery = z.infer<typeof ProductImageQuerySchema>;



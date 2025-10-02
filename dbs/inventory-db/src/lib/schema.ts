
import { toOrderBySchema, toWhereQuerySchema } from '@puq/zod';
import {z} from 'zod';
    

// ---------- Category Schemas ----------


export const CategorySchema = z.object({
  id: z.number().int(),
  parentId: z.number().int().nullish(),
  name: z.string(),
  slug: z.string(),
});

export const CategoryCreateSchema = z.object({
  parentId: z.number().int().nullish(),
  name: z.string(),
  slug: z.string(),
});

export const CategoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  parentId: z.number().int().nullish().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
});

export const CategoryWhereSchema = toWhereQuerySchema(CategorySchema);

export const CategoryOrderSchema =  toOrderBySchema(CategorySchema);

export const CategorySelectSchema = z.object({
  id: z.boolean().optional(),
  parentId: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  parent: z.boolean().optional(),
  children: z.boolean().optional(),
  products: z.boolean().optional(),
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
  warrantyId: z.number().int().nullish(),
  uuid: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const ProductCreateSchema = z.object({
  warrantyId: z.number().int().nullish(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const ProductUpdateSchema = z.object({
  id: z.number().int().optional(),
  warrantyId: z.number().int().nullish().optional(),
  uuid: z.string().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().nullish().optional(),
});

export const ProductWhereSchema = toWhereQuerySchema(ProductSchema);

export const ProductOrderSchema =  toOrderBySchema(ProductSchema);

export const ProductSelectSchema = z.object({
  id: z.boolean().optional(),
  warrantyId: z.boolean().optional(),
  uuid: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  variants: z.boolean().optional(),
  categories: z.boolean().optional(),
  images: z.boolean().optional(),
  suppliers: z.boolean().optional(),
  discounts: z.boolean().optional(),
  warranty: z.boolean().optional(),
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




// ---------- Image Schemas ----------


export const ImageSchema = z.object({
  id: z.number().int(),
  productId: z.number().int(),
  url: z.string(),
  order: z.number().int(),
  description: z.string().nullish(),
});

export const ImageCreateSchema = z.object({
  productId: z.number().int(),
  url: z.string(),
  order: z.number().int(),
  description: z.string().nullish(),
});

export const ImageUpdateSchema = z.object({
  id: z.number().int().optional(),
  productId: z.number().int().optional(),
  url: z.string().optional(),
  order: z.number().int().optional(),
  description: z.string().nullish().optional(),
});

export const ImageWhereSchema = toWhereQuerySchema(ImageSchema);

export const ImageOrderSchema =  toOrderBySchema(ImageSchema);

export const ImageSelectSchema = z.object({
  id: z.boolean().optional(),
  productId: z.boolean().optional(),
  url: z.boolean().optional(),
  order: z.boolean().optional(),
  description: z.boolean().optional(),
  product: z.boolean().optional(),
});

export const ImageQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ImageWhereSchema.optional(),
  orderBy: ImageOrderSchema.optional(),
  select: ImageSelectSchema.optional()
});

export type Image = z.infer<typeof ImageSchema>;
export type ImageCreate = z.infer<typeof ImageCreateSchema>;
export type ImageUpdate = z.infer<typeof ImageUpdateSchema>;
export type ImageWhere = z.infer<typeof ImageWhereSchema>;
export type ImageOrder = z.infer<typeof ImageOrderSchema>;
export type ImageSelect = z.infer<typeof ImageSelectSchema>;
export type ImageQuery = z.infer<typeof ImageQuerySchema>;




// ---------- Supplier Schemas ----------


export const SupplierSchema = z.object({
  id: z.number().int(),
  orgId: z.string(),
  productId: z.number().int(),
  supplierSku: z.string(),
  supplierCost: z.number().nullish(),
  leadTimeDays: z.number().int().nullish(),
});

export const SupplierCreateSchema = z.object({
  orgId: z.string(),
  productId: z.number().int(),
  supplierSku: z.string(),
  supplierCost: z.number().nullish(),
  leadTimeDays: z.number().int().nullish(),
});

export const SupplierUpdateSchema = z.object({
  id: z.number().int().optional(),
  orgId: z.string().optional(),
  productId: z.number().int().optional(),
  supplierSku: z.string().optional(),
  supplierCost: z.number().nullish().optional(),
  leadTimeDays: z.number().int().nullish().optional(),
});

export const SupplierWhereSchema = toWhereQuerySchema(SupplierSchema);

export const SupplierOrderSchema =  toOrderBySchema(SupplierSchema);

export const SupplierSelectSchema = z.object({
  id: z.boolean().optional(),
  orgId: z.boolean().optional(),
  productId: z.boolean().optional(),
  supplierSku: z.boolean().optional(),
  supplierCost: z.boolean().optional(),
  leadTimeDays: z.boolean().optional(),
  product: z.boolean().optional(),
});

export const SupplierQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: SupplierWhereSchema.optional(),
  orderBy: SupplierOrderSchema.optional(),
  select: SupplierSelectSchema.optional()
});

export type Supplier = z.infer<typeof SupplierSchema>;
export type SupplierCreate = z.infer<typeof SupplierCreateSchema>;
export type SupplierUpdate = z.infer<typeof SupplierUpdateSchema>;
export type SupplierWhere = z.infer<typeof SupplierWhereSchema>;
export type SupplierOrder = z.infer<typeof SupplierOrderSchema>;
export type SupplierSelect = z.infer<typeof SupplierSelectSchema>;
export type SupplierQuery = z.infer<typeof SupplierQuerySchema>;




// ---------- PaymentTerm Schemas ----------


export const PaymentTermSchema = z.object({
  id: z.number().int(),
  code: z.string(),
  description: z.string(),
  daysDue: z.number().int(),
  discountDays: z.number().int(),
  discountPercent: z.number(),
});

export const PaymentTermCreateSchema = z.object({
  code: z.string(),
  description: z.string(),
  daysDue: z.number().int(),
  discountDays: z.number().int(),
  discountPercent: z.number(),
});

export const PaymentTermUpdateSchema = z.object({
  id: z.number().int().optional(),
  code: z.string().optional(),
  description: z.string().optional(),
  daysDue: z.number().int().optional(),
  discountDays: z.number().int().optional(),
  discountPercent: z.number().optional(),
});

export const PaymentTermWhereSchema = toWhereQuerySchema(PaymentTermSchema);

export const PaymentTermOrderSchema =  toOrderBySchema(PaymentTermSchema);

export const PaymentTermSelectSchema = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  description: z.boolean().optional(),
  daysDue: z.boolean().optional(),
  discountDays: z.boolean().optional(),
  discountPercent: z.boolean().optional(),
});

export const PaymentTermQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PaymentTermWhereSchema.optional(),
  orderBy: PaymentTermOrderSchema.optional(),
  select: PaymentTermSelectSchema.optional()
});

export type PaymentTerm = z.infer<typeof PaymentTermSchema>;
export type PaymentTermCreate = z.infer<typeof PaymentTermCreateSchema>;
export type PaymentTermUpdate = z.infer<typeof PaymentTermUpdateSchema>;
export type PaymentTermWhere = z.infer<typeof PaymentTermWhereSchema>;
export type PaymentTermOrder = z.infer<typeof PaymentTermOrderSchema>;
export type PaymentTermSelect = z.infer<typeof PaymentTermSelectSchema>;
export type PaymentTermQuery = z.infer<typeof PaymentTermQuerySchema>;




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
  warrantyId: z.number().int().nullish(),
  sku: z.string(),
  upc: z.string(),
});

export const VariantCreateSchema = z.object({
  productId: z.number().int(),
  warrantyId: z.number().int().nullish(),
  sku: z.string(),
  upc: z.string(),
});

export const VariantUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
  productId: z.number().int().optional(),
  warrantyId: z.number().int().nullish().optional(),
  sku: z.string().optional(),
  upc: z.string().optional(),
});

export const VariantWhereSchema = toWhereQuerySchema(VariantSchema);

export const VariantOrderSchema =  toOrderBySchema(VariantSchema);

export const VariantSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  productId: z.boolean().optional(),
  warrantyId: z.boolean().optional(),
  sku: z.boolean().optional(),
  upc: z.boolean().optional(),
  product: z.boolean().optional(),
  attributes: z.boolean().optional(),
  prices: z.boolean().optional(),
  quantities: z.boolean().optional(),
  discounts: z.boolean().optional(),
  serrialNumbers: z.boolean().optional(),
  warranty: z.boolean().optional(),
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




// ---------- Currency Schemas ----------


export const CurrencySchema = z.object({
  id: z.number().int(),
  name: z.string(),
});

export const CurrencyCreateSchema = z.object({
  name: z.string(),
});

export const CurrencyUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});

export const CurrencyWhereSchema = toWhereQuerySchema(CurrencySchema);

export const CurrencyOrderSchema =  toOrderBySchema(CurrencySchema);

export const CurrencySelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  priceLevels: z.boolean().optional(),
});

export const CurrencyQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: CurrencyWhereSchema.optional(),
  orderBy: CurrencyOrderSchema.optional(),
  select: CurrencySelectSchema.optional()
});

export type Currency = z.infer<typeof CurrencySchema>;
export type CurrencyCreate = z.infer<typeof CurrencyCreateSchema>;
export type CurrencyUpdate = z.infer<typeof CurrencyUpdateSchema>;
export type CurrencyWhere = z.infer<typeof CurrencyWhereSchema>;
export type CurrencyOrder = z.infer<typeof CurrencyOrderSchema>;
export type CurrencySelect = z.infer<typeof CurrencySelectSchema>;
export type CurrencyQuery = z.infer<typeof CurrencyQuerySchema>;




// ---------- PriceLevel Schemas ----------


export const PriceLevelSchema = z.object({
  id: z.number().int(),
  currencyId: z.number().int(),
  name: z.string(),
  taxrate: z.number(),
});

export const PriceLevelCreateSchema = z.object({
  currencyId: z.number().int(),
  name: z.string(),
  taxrate: z.number(),
});

export const PriceLevelUpdateSchema = z.object({
  id: z.number().int().optional(),
  currencyId: z.number().int().optional(),
  name: z.string().optional(),
  taxrate: z.number().optional(),
});

export const PriceLevelWhereSchema = toWhereQuerySchema(PriceLevelSchema);

export const PriceLevelOrderSchema =  toOrderBySchema(PriceLevelSchema);

export const PriceLevelSelectSchema = z.object({
  id: z.boolean().optional(),
  currencyId: z.boolean().optional(),
  name: z.boolean().optional(),
  taxrate: z.boolean().optional(),
  currency: z.boolean().optional(),
  stores: z.boolean().optional(),
  prices: z.boolean().optional(),
  discounts: z.boolean().optional(),
});

export const PriceLevelQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PriceLevelWhereSchema.optional(),
  orderBy: PriceLevelOrderSchema.optional(),
  select: PriceLevelSelectSchema.optional()
});

export type PriceLevel = z.infer<typeof PriceLevelSchema>;
export type PriceLevelCreate = z.infer<typeof PriceLevelCreateSchema>;
export type PriceLevelUpdate = z.infer<typeof PriceLevelUpdateSchema>;
export type PriceLevelWhere = z.infer<typeof PriceLevelWhereSchema>;
export type PriceLevelOrder = z.infer<typeof PriceLevelOrderSchema>;
export type PriceLevelSelect = z.infer<typeof PriceLevelSelectSchema>;
export type PriceLevelQuery = z.infer<typeof PriceLevelQuerySchema>;




// ---------- Price Schemas ----------


export const PriceSchema = z.object({
  id: z.number().int(),
  variantId: z.number().int(),
  priceLevelId: z.number().int(),
  price: z.number(),
  cost: z.number(),
  description: z.string().nullish(),
});

export const PriceCreateSchema = z.object({
  variantId: z.number().int(),
  priceLevelId: z.number().int(),
  price: z.number(),
  cost: z.number(),
  description: z.string().nullish(),
});

export const PriceUpdateSchema = z.object({
  id: z.number().int().optional(),
  variantId: z.number().int().optional(),
  priceLevelId: z.number().int().optional(),
  price: z.number().optional(),
  cost: z.number().optional(),
  description: z.string().nullish().optional(),
});

export const PriceWhereSchema = toWhereQuerySchema(PriceSchema);

export const PriceOrderSchema =  toOrderBySchema(PriceSchema);

export const PriceSelectSchema = z.object({
  id: z.boolean().optional(),
  variantId: z.boolean().optional(),
  priceLevelId: z.boolean().optional(),
  price: z.boolean().optional(),
  cost: z.boolean().optional(),
  description: z.boolean().optional(),
  variant: z.boolean().optional(),
  priceLevel: z.boolean().optional(),
});

export const PriceQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PriceWhereSchema.optional(),
  orderBy: PriceOrderSchema.optional(),
  select: PriceSelectSchema.optional()
});

export type Price = z.infer<typeof PriceSchema>;
export type PriceCreate = z.infer<typeof PriceCreateSchema>;
export type PriceUpdate = z.infer<typeof PriceUpdateSchema>;
export type PriceWhere = z.infer<typeof PriceWhereSchema>;
export type PriceOrder = z.infer<typeof PriceOrderSchema>;
export type PriceSelect = z.infer<typeof PriceSelectSchema>;
export type PriceQuery = z.infer<typeof PriceQuerySchema>;




// ---------- Quantity Schemas ----------


export const QuantitySchema = z.object({
  id: z.number().int(),
  variantId: z.number().int(),
  storeId: z.number().int(),
  quantity: z.number().int(),
  alertThreshold: z.number().int().nullish(),
});

export const QuantityCreateSchema = z.object({
  variantId: z.number().int(),
  storeId: z.number().int(),
  quantity: z.number().int(),
  alertThreshold: z.number().int().nullish(),
});

export const QuantityUpdateSchema = z.object({
  id: z.number().int().optional(),
  variantId: z.number().int().optional(),
  storeId: z.number().int().optional(),
  quantity: z.number().int().optional(),
  alertThreshold: z.number().int().nullish().optional(),
});

export const QuantityWhereSchema = toWhereQuerySchema(QuantitySchema);

export const QuantityOrderSchema =  toOrderBySchema(QuantitySchema);

export const QuantitySelectSchema = z.object({
  id: z.boolean().optional(),
  variantId: z.boolean().optional(),
  storeId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  alertThreshold: z.boolean().optional(),
  variant: z.boolean().optional(),
  store: z.boolean().optional(),
});

export const QuantityQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: QuantityWhereSchema.optional(),
  orderBy: QuantityOrderSchema.optional(),
  select: QuantitySelectSchema.optional()
});

export type Quantity = z.infer<typeof QuantitySchema>;
export type QuantityCreate = z.infer<typeof QuantityCreateSchema>;
export type QuantityUpdate = z.infer<typeof QuantityUpdateSchema>;
export type QuantityWhere = z.infer<typeof QuantityWhereSchema>;
export type QuantityOrder = z.infer<typeof QuantityOrderSchema>;
export type QuantitySelect = z.infer<typeof QuantitySelectSchema>;
export type QuantityQuery = z.infer<typeof QuantityQuerySchema>;




// ---------- SerialNumber Schemas ----------


export const SerialNumberSchema = z.object({
  id: z.number().int(),
  variantId: z.number().int(),
  storeId: z.number().int(),
  serialNumber: z.string(),
  inStock: z.boolean(),
});

export const SerialNumberCreateSchema = z.object({
  variantId: z.number().int(),
  storeId: z.number().int(),
  serialNumber: z.string(),
  inStock: z.boolean(),
});

export const SerialNumberUpdateSchema = z.object({
  id: z.number().int().optional(),
  variantId: z.number().int().optional(),
  storeId: z.number().int().optional(),
  serialNumber: z.string().optional(),
  inStock: z.boolean().optional(),
});

export const SerialNumberWhereSchema = toWhereQuerySchema(SerialNumberSchema);

export const SerialNumberOrderSchema =  toOrderBySchema(SerialNumberSchema);

export const SerialNumberSelectSchema = z.object({
  id: z.boolean().optional(),
  variantId: z.boolean().optional(),
  storeId: z.boolean().optional(),
  serialNumber: z.boolean().optional(),
  inStock: z.boolean().optional(),
  variant: z.boolean().optional(),
  store: z.boolean().optional(),
});

export const SerialNumberQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: SerialNumberWhereSchema.optional(),
  orderBy: SerialNumberOrderSchema.optional(),
  select: SerialNumberSelectSchema.optional()
});

export type SerialNumber = z.infer<typeof SerialNumberSchema>;
export type SerialNumberCreate = z.infer<typeof SerialNumberCreateSchema>;
export type SerialNumberUpdate = z.infer<typeof SerialNumberUpdateSchema>;
export type SerialNumberWhere = z.infer<typeof SerialNumberWhereSchema>;
export type SerialNumberOrder = z.infer<typeof SerialNumberOrderSchema>;
export type SerialNumberSelect = z.infer<typeof SerialNumberSelectSchema>;
export type SerialNumberQuery = z.infer<typeof SerialNumberQuerySchema>;




// ---------- Discount Schemas ----------


export const DiscountSchema = z.object({
  id: z.number().int(),
  code: z.string(),
  type: z.any(),
  value: z.number(),
  minQuantity: z.number().int().nullish(),
  startDate: z.date(),
  endDate: z.date(),
  maxUses: z.number().int().nullish(),
});

export const DiscountCreateSchema = z.object({
  code: z.string(),
  type: z.any(),
  value: z.number(),
  minQuantity: z.number().int().nullish(),
  startDate: z.date(),
  endDate: z.date(),
  maxUses: z.number().int().nullish(),
});

export const DiscountUpdateSchema = z.object({
  id: z.number().int().optional(),
  code: z.string().optional(),
  type: z.any().optional(),
  value: z.number().optional(),
  minQuantity: z.number().int().nullish().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  maxUses: z.number().int().nullish().optional(),
});

export const DiscountWhereSchema = toWhereQuerySchema(DiscountSchema);

export const DiscountOrderSchema =  toOrderBySchema(DiscountSchema);

export const DiscountSelectSchema = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  type: z.boolean().optional(),
  value: z.boolean().optional(),
  minQuantity: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  maxUses: z.boolean().optional(),
  targets: z.boolean().optional(),
});

export const DiscountQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: DiscountWhereSchema.optional(),
  orderBy: DiscountOrderSchema.optional(),
  select: DiscountSelectSchema.optional()
});

export type Discount = z.infer<typeof DiscountSchema>;
export type DiscountCreate = z.infer<typeof DiscountCreateSchema>;
export type DiscountUpdate = z.infer<typeof DiscountUpdateSchema>;
export type DiscountWhere = z.infer<typeof DiscountWhereSchema>;
export type DiscountOrder = z.infer<typeof DiscountOrderSchema>;
export type DiscountSelect = z.infer<typeof DiscountSelectSchema>;
export type DiscountQuery = z.infer<typeof DiscountQuerySchema>;




// ---------- DiscountTarget Schemas ----------


export const DiscountTargetSchema = z.object({
  id: z.number().int(),
  discountId: z.number().int(),
  productId: z.number().int().nullish(),
  variantId: z.number().int().nullish(),
  storeId: z.number().int().nullish(),
  priceLevelId: z.number().int().nullish(),
});

export const DiscountTargetCreateSchema = z.object({
  discountId: z.number().int(),
  productId: z.number().int().nullish(),
  variantId: z.number().int().nullish(),
  storeId: z.number().int().nullish(),
  priceLevelId: z.number().int().nullish(),
});

export const DiscountTargetUpdateSchema = z.object({
  id: z.number().int().optional(),
  discountId: z.number().int().optional(),
  productId: z.number().int().nullish().optional(),
  variantId: z.number().int().nullish().optional(),
  storeId: z.number().int().nullish().optional(),
  priceLevelId: z.number().int().nullish().optional(),
});

export const DiscountTargetWhereSchema = toWhereQuerySchema(DiscountTargetSchema);

export const DiscountTargetOrderSchema =  toOrderBySchema(DiscountTargetSchema);

export const DiscountTargetSelectSchema = z.object({
  id: z.boolean().optional(),
  discountId: z.boolean().optional(),
  productId: z.boolean().optional(),
  variantId: z.boolean().optional(),
  storeId: z.boolean().optional(),
  priceLevelId: z.boolean().optional(),
  discount: z.boolean().optional(),
  product: z.boolean().optional(),
  variant: z.boolean().optional(),
  store: z.boolean().optional(),
  priceLevel: z.boolean().optional(),
});

export const DiscountTargetQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: DiscountTargetWhereSchema.optional(),
  orderBy: DiscountTargetOrderSchema.optional(),
  select: DiscountTargetSelectSchema.optional()
});

export type DiscountTarget = z.infer<typeof DiscountTargetSchema>;
export type DiscountTargetCreate = z.infer<typeof DiscountTargetCreateSchema>;
export type DiscountTargetUpdate = z.infer<typeof DiscountTargetUpdateSchema>;
export type DiscountTargetWhere = z.infer<typeof DiscountTargetWhereSchema>;
export type DiscountTargetOrder = z.infer<typeof DiscountTargetOrderSchema>;
export type DiscountTargetSelect = z.infer<typeof DiscountTargetSelectSchema>;
export type DiscountTargetQuery = z.infer<typeof DiscountTargetQuerySchema>;




// ---------- Store Schemas ----------


export const StoreSchema = z.object({
  id: z.number().int(),
  priceLevelId: z.number().int(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const StoreCreateSchema = z.object({
  priceLevelId: z.number().int(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const StoreUpdateSchema = z.object({
  id: z.number().int().optional(),
  priceLevelId: z.number().int().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().nullish().optional(),
});

export const StoreWhereSchema = toWhereQuerySchema(StoreSchema);

export const StoreOrderSchema =  toOrderBySchema(StoreSchema);

export const StoreSelectSchema = z.object({
  id: z.boolean().optional(),
  priceLevelId: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  priceLevel: z.boolean().optional(),
  quantities: z.boolean().optional(),
  discounts: z.boolean().optional(),
  serialNumbers: z.boolean().optional(),
});

export const StoreQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: StoreWhereSchema.optional(),
  orderBy: StoreOrderSchema.optional(),
  select: StoreSelectSchema.optional()
});

export type Store = z.infer<typeof StoreSchema>;
export type StoreCreate = z.infer<typeof StoreCreateSchema>;
export type StoreUpdate = z.infer<typeof StoreUpdateSchema>;
export type StoreWhere = z.infer<typeof StoreWhereSchema>;
export type StoreOrder = z.infer<typeof StoreOrderSchema>;
export type StoreSelect = z.infer<typeof StoreSelectSchema>;
export type StoreQuery = z.infer<typeof StoreQuerySchema>;




// ---------- WarrantyPolicy Schemas ----------


export const WarrantyPolicySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullish(),
  durationDays: z.number().int(),
});

export const WarrantyPolicyCreateSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
  durationDays: z.number().int(),
});

export const WarrantyPolicyUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  description: z.string().nullish().optional(),
  durationDays: z.number().int().optional(),
});

export const WarrantyPolicyWhereSchema = toWhereQuerySchema(WarrantyPolicySchema);

export const WarrantyPolicyOrderSchema =  toOrderBySchema(WarrantyPolicySchema);

export const WarrantyPolicySelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  durationDays: z.boolean().optional(),
  products: z.boolean().optional(),
  variants: z.boolean().optional(),
});

export const WarrantyPolicyQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: WarrantyPolicyWhereSchema.optional(),
  orderBy: WarrantyPolicyOrderSchema.optional(),
  select: WarrantyPolicySelectSchema.optional()
});

export type WarrantyPolicy = z.infer<typeof WarrantyPolicySchema>;
export type WarrantyPolicyCreate = z.infer<typeof WarrantyPolicyCreateSchema>;
export type WarrantyPolicyUpdate = z.infer<typeof WarrantyPolicyUpdateSchema>;
export type WarrantyPolicyWhere = z.infer<typeof WarrantyPolicyWhereSchema>;
export type WarrantyPolicyOrder = z.infer<typeof WarrantyPolicyOrderSchema>;
export type WarrantyPolicySelect = z.infer<typeof WarrantyPolicySelectSchema>;
export type WarrantyPolicyQuery = z.infer<typeof WarrantyPolicyQuerySchema>;



/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PZ from '@puq/zod';
import { z } from 'zod';
import { slugify } from '@puq/names';

export const takeSchema = z.coerce.number().int().min(1).default(20).optional();
export const skipSchema = z.coerce.number().int().min(0).default(0).optional();
export const PaginationSchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
  })
  .partial();

export const nameSchema = z.string().min(2).max(30);
export const descriptionSchema = z.string().max(1000);
export const currencySchema = z.coerce.number().positive();
export const positiveIntegerSchema = z.coerce.number().int().positive();
export const emailSchema = z.email();
export const dateSchema = z.iso.datetime();
export const slugSchema = z.string().regex(/^[a-z-]{2,}$/);

export function jsonParser<T>(value: T) {
  if (typeof value === 'string') {
    return JSON.parse(value);
  }
  return value;
}

export function slugTransformer(key: string) {
  return (value: any) => {
    if (value.slug == undefined && value[key] != undefined) {
      return {
        ...value,
        slug: value[key] ? slugify(value[key].toString()) : null,
      };
    }
    return value;
  };
}

export const DiscountTargetTypeSchema = z.enum([
  'STORE',
  'PRICE_LEVEL',
  'CATEGORY',
  'PRODUCT',
  'VARIANT',
  'STORE_CATEGORY',
  'STORE_PRODUCT',
  'STORE_VARIANT',
  'PRICE_LEVEL_CATEGORY',
  'PRICE_LEVEL_PRODUCT',
  'PRICE_LEVEL_VARIANT',
]);

export const ValueTypeSchema = z.enum(['PERCENT', 'FIXED']);

export const DiscountTypeSchema = z.enum([
  'SIMPLE',
  'VOLUME',
  'FREE_SHIPPING',
  'ORDER_TOTAL',
]);

export const TimeUnitSchema = z.enum([
  'SECOND',
  'MINUTE',
  'HOUR',
  'DAY',
  'MONTH',
  'YEAR',
  'DECADE',
  'LIFE_TIME',
]);

export const CategoryOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    parentId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    parent: z.boolean(),
    children: z.boolean(),
    products: z.boolean(),
    discountTargets: z.boolean(),
  })
  .partial();

export const CategoryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CategoryOwnSelectFieldsSchema
);

export const CategoryDistinctFieldsSchema = z.enum([
  'id',
  'parentId',
  'name',
  'slug',
  'parent',
  'children',
  'products',
  'discountTargets',
]);

export const ProductOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    isActive: z.boolean(),
    uuid: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    variants: z.boolean(),
    categories: z.boolean(),
    discounts: z.boolean(),
    warranties: z.boolean(),
  })
  .partial();

export const ProductOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ProductOwnSelectFieldsSchema
);

export const ProductDistinctFieldsSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isActive',
  'uuid',
  'name',
  'slug',
  'description',
  'variants',
  'categories',
  'discounts',
  'warranties',
]);

export const ProductCategoryOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    productId: z.boolean(),
    categoryId: z.boolean(),
    product: z.boolean(),
    category: z.boolean(),
  })
  .partial();

export const ProductCategoryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ProductCategoryOwnSelectFieldsSchema
);

export const ProductCategoryDistinctFieldsSchema = z.enum([
  'id',
  'productId',
  'categoryId',
  'product',
  'category',
]);

export const VariantOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    productId: z.boolean(),
    sku: z.boolean(),
    upc: z.boolean(),
    product: z.boolean(),
    attributes: z.boolean(),
    prices: z.boolean(),
    quantities: z.boolean(),
    discounts: z.boolean(),
    serrialNumbers: z.boolean(),
    warranties: z.boolean(),
  })
  .partial();

export const VariantOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  VariantOwnSelectFieldsSchema
);

export const VariantDistinctFieldsSchema = z.enum([
  'id',
  'uuid',
  'productId',
  'sku',
  'upc',
  'product',
  'attributes',
  'prices',
  'quantities',
  'discounts',
  'serrialNumbers',
  'warranties',
]);

export const AttributeCategoryOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    attributes: z.boolean(),
  })
  .partial();

export const AttributeCategoryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AttributeCategoryOwnSelectFieldsSchema
);

export const AttributeCategoryDistinctFieldsSchema = z.enum([
  'id',
  'name',
  'slug',
  'attributes',
]);

export const AttributeOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    categoryId: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    category: z.boolean(),
    unites: z.boolean(),
    values: z.boolean(),
  })
  .partial();

export const AttributeOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AttributeOwnSelectFieldsSchema
);

export const AttributeDistinctFieldsSchema = z.enum([
  'id',
  'categoryId',
  'name',
  'description',
  'category',
  'unites',
  'values',
]);

export const UnitOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    symbol: z.boolean(),
    attributes: z.boolean(),
  })
  .partial();

export const UnitOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  UnitOwnSelectFieldsSchema
);

export const UnitDistinctFieldsSchema = z.enum([
  'id',
  'name',
  'symbol',
  'attributes',
]);

export const AttributeUnitOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    attributeId: z.boolean(),
    unitId: z.boolean(),
    attribute: z.boolean(),
    unit: z.boolean(),
  })
  .partial();

export const AttributeUnitOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AttributeUnitOwnSelectFieldsSchema
);

export const AttributeUnitDistinctFieldsSchema = z.enum([
  'id',
  'attributeId',
  'unitId',
  'attribute',
  'unit',
]);

export const AttributeValueOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    attributeId: z.boolean(),
    variantId: z.boolean(),
    textValue: z.boolean(),
    booleanValue: z.boolean(),
    floatValue: z.boolean(),
    variant: z.boolean(),
    attribute: z.boolean(),
  })
  .partial();

export const AttributeValueOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AttributeValueOwnSelectFieldsSchema
);

export const AttributeValueDistinctFieldsSchema = z.enum([
  'id',
  'attributeId',
  'variantId',
  'textValue',
  'booleanValue',
  'floatValue',
  'variant',
  'attribute',
]);

export const CurrencyOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    symbol: z.boolean(),
    priceLevels: z.boolean(),
  })
  .partial();

export const CurrencyOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CurrencyOwnSelectFieldsSchema
);

export const CurrencyDistinctFieldsSchema = z.enum([
  'id',
  'name',
  'code',
  'symbol',
  'priceLevels',
]);

export const PriceLevelOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    currencyId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    taxrate: z.boolean(),
    notes: z.boolean(),
    currency: z.boolean(),
    stores: z.boolean(),
    prices: z.boolean(),
    discounts: z.boolean(),
  })
  .partial();

export const PriceLevelOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PriceLevelOwnSelectFieldsSchema
);

export const PriceLevelDistinctFieldsSchema = z.enum([
  'id',
  'currencyId',
  'name',
  'slug',
  'taxrate',
  'notes',
  'currency',
  'stores',
  'prices',
  'discounts',
]);

export const PriceOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    variantId: z.boolean(),
    priceLevelId: z.boolean(),
    price: z.boolean(),
    cost: z.boolean(),
    description: z.boolean(),
    variant: z.boolean(),
    priceLevel: z.boolean(),
  })
  .partial();

export const PriceOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PriceOwnSelectFieldsSchema
);

export const PriceDistinctFieldsSchema = z.enum([
  'id',
  'variantId',
  'priceLevelId',
  'price',
  'cost',
  'description',
  'variant',
  'priceLevel',
]);

export const QuantityOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    variantId: z.boolean(),
    storeId: z.boolean(),
    quantity: z.boolean(),
    alertThreshold: z.boolean(),
    variant: z.boolean(),
    store: z.boolean(),
  })
  .partial();

export const QuantityOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  QuantityOwnSelectFieldsSchema
);

export const QuantityDistinctFieldsSchema = z.enum([
  'id',
  'variantId',
  'storeId',
  'quantity',
  'alertThreshold',
  'variant',
  'store',
]);

export const SerialNumberOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    variantId: z.boolean(),
    storeId: z.boolean(),
    serialNumber: z.boolean(),
    inStock: z.boolean(),
    variant: z.boolean(),
    store: z.boolean(),
  })
  .partial();

export const SerialNumberOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberOwnSelectFieldsSchema
);

export const SerialNumberDistinctFieldsSchema = z.enum([
  'id',
  'variantId',
  'storeId',
  'serialNumber',
  'inStock',
  'variant',
  'store',
]);

export const DiscountOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    code: z.boolean(),
    type: z.boolean(),
    valueType: z.boolean(),
    value: z.boolean(),
    minQuantity: z.boolean(),
    maxQuantity: z.boolean(),
    minOrderTotal: z.boolean(),
    maxOrderTotal: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    usageLimit: z.boolean(),
    usageCount: z.boolean(),
    targets: z.boolean(),
  })
  .partial();

export const DiscountOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  DiscountOwnSelectFieldsSchema
);

export const DiscountDistinctFieldsSchema = z.enum([
  'id',
  'code',
  'type',
  'valueType',
  'value',
  'minQuantity',
  'maxQuantity',
  'minOrderTotal',
  'maxOrderTotal',
  'startDate',
  'endDate',
  'usageLimit',
  'usageCount',
  'targets',
]);

export const DiscountTargetOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    discountId: z.boolean(),
    storeId: z.boolean(),
    productId: z.boolean(),
    variantId: z.boolean(),
    priceLevelId: z.boolean(),
    categoryId: z.boolean(),
    discount: z.boolean(),
    store: z.boolean(),
    category: z.boolean(),
    priceLevel: z.boolean(),
    product: z.boolean(),
    variant: z.boolean(),
  })
  .partial();

export const DiscountTargetOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  DiscountTargetOwnSelectFieldsSchema
);

export const DiscountTargetDistinctFieldsSchema = z.enum([
  'id',
  'type',
  'discountId',
  'storeId',
  'productId',
  'variantId',
  'priceLevelId',
  'categoryId',
  'discount',
  'store',
  'category',
  'priceLevel',
  'product',
  'variant',
]);

export const StoreOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    priceLevelId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    priceLevel: z.boolean(),
    quantities: z.boolean(),
    discounts: z.boolean(),
    serialNumbers: z.boolean(),
  })
  .partial();

export const StoreOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  StoreOwnSelectFieldsSchema
);

export const StoreDistinctFieldsSchema = z.enum([
  'id',
  'priceLevelId',
  'name',
  'slug',
  'description',
  'priceLevel',
  'quantities',
  'discounts',
  'serialNumbers',
]);

export const WarrantyPolicyOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    duration: z.boolean(),
    durationUnit: z.boolean(),
    products: z.boolean(),
  })
  .partial();

export const WarrantyPolicyOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  WarrantyPolicyOwnSelectFieldsSchema
);

export const WarrantyPolicyDistinctFieldsSchema = z.enum([
  'id',
  'name',
  'description',
  'duration',
  'durationUnit',
  'products',
]);

export const ProductWarrantyOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    productId: z.boolean(),
    variantId: z.boolean(),
    policyId: z.boolean(),
    product: z.boolean(),
    variant: z.boolean(),
    policy: z.boolean(),
  })
  .partial();

export const ProductWarrantyOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ProductWarrantyOwnSelectFieldsSchema
);

export const ProductWarrantyDistinctFieldsSchema = z.enum([
  'id',
  'productId',
  'variantId',
  'policyId',
  'product',
  'variant',
  'policy',
]);

export const CategoryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const CategoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  CategoryOwnWhereSchema
);

export const ProductOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    isActive: z.coerce.boolean().or(PZ.BooleanFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const ProductOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ProductOwnWhereSchema
);

export const ProductCategoryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    productId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    categoryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const ProductCategoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ProductCategoryOwnWhereSchema
);

export const VariantOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    productId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    sku: z.string().or(PZ.StringFilterSchema),
    upc: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const VariantOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  VariantOwnWhereSchema
);

export const AttributeCategoryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const AttributeCategoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AttributeCategoryOwnWhereSchema
);

export const AttributeOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    categoryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const AttributeOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AttributeOwnWhereSchema
);

export const UnitOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    symbol: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const UnitOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  UnitOwnWhereSchema
);

export const AttributeUnitOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    attributeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    unitId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const AttributeUnitOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AttributeUnitOwnWhereSchema
);

export const AttributeValueOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    attributeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    variantId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    textValue: z.string().or(PZ.StringFilterSchema),
    booleanValue: z.coerce.boolean().or(PZ.BooleanFilterSchema),
    floatValue: z.coerce.number().or(PZ.NumberFilterSchema),
  })
  .partial();

export const AttributeValueOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AttributeValueOwnWhereSchema
);

export const CurrencyOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
    symbol: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const CurrencyOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  CurrencyOwnWhereSchema
);

export const PriceLevelOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    currencyId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    taxrate: z.coerce.number().or(PZ.NumberFilterSchema),
    notes: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const PriceLevelOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PriceLevelOwnWhereSchema
);

export const PriceOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    variantId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    priceLevelId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    price: z.coerce.number().or(PZ.NumberFilterSchema),
    cost: z.coerce.number().or(PZ.NumberFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const PriceOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PriceOwnWhereSchema
);

export const QuantityOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    variantId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    storeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    quantity: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    alertThreshold: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const QuantityOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  QuantityOwnWhereSchema
);

export const SerialNumberOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    variantId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    storeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    serialNumber: z.string().or(PZ.StringFilterSchema),
    inStock: z.coerce.boolean().or(PZ.BooleanFilterSchema),
  })
  .partial();

export const SerialNumberOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberOwnWhereSchema
);

export const DiscountOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
    type: DiscountTypeSchema,
    valueType: ValueTypeSchema,
    value: z.coerce.number().or(PZ.NumberFilterSchema),
    minQuantity: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    maxQuantity: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    minOrderTotal: z.coerce.number().or(PZ.NumberFilterSchema),
    maxOrderTotal: z.coerce.number().or(PZ.NumberFilterSchema),
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
    usageLimit: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    usageCount: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const DiscountOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  DiscountOwnWhereSchema
);

export const DiscountTargetOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: DiscountTargetTypeSchema,
    discountId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    storeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    productId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    variantId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    priceLevelId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    categoryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const DiscountTargetOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  DiscountTargetOwnWhereSchema
);

export const StoreOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    priceLevelId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const StoreOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  StoreOwnWhereSchema
);

export const WarrantyPolicyOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    duration: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    durationUnit: TimeUnitSchema,
  })
  .partial();

export const WarrantyPolicyOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  WarrantyPolicyOwnWhereSchema
);

export const ProductWarrantyOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    productId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    variantId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    policyId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const ProductWarrantyOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ProductWarrantyOwnWhereSchema
);

export const CategoryOwnIncludeSchema = z
  .object({
    parent: z.boolean(),
    children: z.boolean(),
    products: z.boolean(),
    discountTargets: z.boolean(),
  })
  .partial();

export const CategoryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  CategoryOwnIncludeSchema
);

export const CategoryOwnQueryOneSchema = z
  .object({
    where: CategoryOwnWhereSchemaJson,
    distinct: CategoryDistinctFieldsSchema,
  })
  .partial();

export const CategoryOwnQuerySchema = z
  .object({
    where: CategoryOwnWhereSchemaJson,
    distinct: CategoryDistinctFieldsSchema,
  })
  .partial();

export const ProductOwnIncludeSchema = z
  .object({
    variants: z.boolean(),
    categories: z.boolean(),
    discounts: z.boolean(),
    warranties: z.boolean(),
  })
  .partial();

export const ProductOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  ProductOwnIncludeSchema
);

export const ProductOwnQueryOneSchema = z
  .object({
    where: ProductOwnWhereSchemaJson,
    distinct: ProductDistinctFieldsSchema,
  })
  .partial();

export const ProductOwnQuerySchema = z
  .object({
    where: ProductOwnWhereSchemaJson,
    distinct: ProductDistinctFieldsSchema,
  })
  .partial();

export const ProductCategoryOwnIncludeSchema = z
  .object({
    product: z.boolean(),
    category: z.boolean(),
  })
  .partial();

export const ProductCategoryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  ProductCategoryOwnIncludeSchema
);

export const ProductCategoryOwnQueryOneSchema = z
  .object({
    where: ProductCategoryOwnWhereSchemaJson,
    distinct: ProductCategoryDistinctFieldsSchema,
  })
  .partial();

export const ProductCategoryOwnQuerySchema = z
  .object({
    where: ProductCategoryOwnWhereSchemaJson,
    distinct: ProductCategoryDistinctFieldsSchema,
  })
  .partial();

export const VariantOwnIncludeSchema = z
  .object({
    product: z.boolean(),
    attributes: z.boolean(),
    prices: z.boolean(),
    quantities: z.boolean(),
    discounts: z.boolean(),
    serrialNumbers: z.boolean(),
    warranties: z.boolean(),
  })
  .partial();

export const VariantOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  VariantOwnIncludeSchema
);

export const VariantOwnQueryOneSchema = z
  .object({
    where: VariantOwnWhereSchemaJson,
    distinct: VariantDistinctFieldsSchema,
  })
  .partial();

export const VariantOwnQuerySchema = z
  .object({
    where: VariantOwnWhereSchemaJson,
    distinct: VariantDistinctFieldsSchema,
  })
  .partial();

export const AttributeCategoryOwnIncludeSchema = z
  .object({
    attributes: z.boolean(),
  })
  .partial();

export const AttributeCategoryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  AttributeCategoryOwnIncludeSchema
);

export const AttributeCategoryOwnQueryOneSchema = z
  .object({
    where: AttributeCategoryOwnWhereSchemaJson,
    distinct: AttributeCategoryDistinctFieldsSchema,
  })
  .partial();

export const AttributeCategoryOwnQuerySchema = z
  .object({
    where: AttributeCategoryOwnWhereSchemaJson,
    distinct: AttributeCategoryDistinctFieldsSchema,
  })
  .partial();

export const AttributeOwnIncludeSchema = z
  .object({
    category: z.boolean(),
    unites: z.boolean(),
    values: z.boolean(),
  })
  .partial();

export const AttributeOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  AttributeOwnIncludeSchema
);

export const AttributeOwnQueryOneSchema = z
  .object({
    where: AttributeOwnWhereSchemaJson,
    distinct: AttributeDistinctFieldsSchema,
  })
  .partial();

export const AttributeOwnQuerySchema = z
  .object({
    where: AttributeOwnWhereSchemaJson,
    distinct: AttributeDistinctFieldsSchema,
  })
  .partial();

export const UnitOwnIncludeSchema = z
  .object({
    attributes: z.boolean(),
  })
  .partial();

export const UnitOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  UnitOwnIncludeSchema
);

export const UnitOwnQueryOneSchema = z
  .object({
    where: UnitOwnWhereSchemaJson,
    distinct: UnitDistinctFieldsSchema,
  })
  .partial();

export const UnitOwnQuerySchema = z
  .object({
    where: UnitOwnWhereSchemaJson,
    distinct: UnitDistinctFieldsSchema,
  })
  .partial();

export const AttributeUnitOwnIncludeSchema = z
  .object({
    attribute: z.boolean(),
    unit: z.boolean(),
  })
  .partial();

export const AttributeUnitOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  AttributeUnitOwnIncludeSchema
);

export const AttributeUnitOwnQueryOneSchema = z
  .object({
    where: AttributeUnitOwnWhereSchemaJson,
    distinct: AttributeUnitDistinctFieldsSchema,
  })
  .partial();

export const AttributeUnitOwnQuerySchema = z
  .object({
    where: AttributeUnitOwnWhereSchemaJson,
    distinct: AttributeUnitDistinctFieldsSchema,
  })
  .partial();

export const AttributeValueOwnIncludeSchema = z
  .object({
    variant: z.boolean(),
    attribute: z.boolean(),
  })
  .partial();

export const AttributeValueOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  AttributeValueOwnIncludeSchema
);

export const AttributeValueOwnQueryOneSchema = z
  .object({
    where: AttributeValueOwnWhereSchemaJson,
    distinct: AttributeValueDistinctFieldsSchema,
  })
  .partial();

export const AttributeValueOwnQuerySchema = z
  .object({
    where: AttributeValueOwnWhereSchemaJson,
    distinct: AttributeValueDistinctFieldsSchema,
  })
  .partial();

export const CurrencyOwnIncludeSchema = z
  .object({
    priceLevels: z.boolean(),
  })
  .partial();

export const CurrencyOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  CurrencyOwnIncludeSchema
);

export const CurrencyOwnQueryOneSchema = z
  .object({
    where: CurrencyOwnWhereSchemaJson,
    distinct: CurrencyDistinctFieldsSchema,
  })
  .partial();

export const CurrencyOwnQuerySchema = z
  .object({
    where: CurrencyOwnWhereSchemaJson,
    distinct: CurrencyDistinctFieldsSchema,
  })
  .partial();

export const PriceLevelOwnIncludeSchema = z
  .object({
    currency: z.boolean(),
    stores: z.boolean(),
    prices: z.boolean(),
    discounts: z.boolean(),
  })
  .partial();

export const PriceLevelOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  PriceLevelOwnIncludeSchema
);

export const PriceLevelOwnQueryOneSchema = z
  .object({
    where: PriceLevelOwnWhereSchemaJson,
    distinct: PriceLevelDistinctFieldsSchema,
  })
  .partial();

export const PriceLevelOwnQuerySchema = z
  .object({
    where: PriceLevelOwnWhereSchemaJson,
    distinct: PriceLevelDistinctFieldsSchema,
  })
  .partial();

export const PriceOwnIncludeSchema = z
  .object({
    variant: z.boolean(),
    priceLevel: z.boolean(),
  })
  .partial();

export const PriceOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  PriceOwnIncludeSchema
);

export const PriceOwnQueryOneSchema = z
  .object({
    where: PriceOwnWhereSchemaJson,
    distinct: PriceDistinctFieldsSchema,
  })
  .partial();

export const PriceOwnQuerySchema = z
  .object({
    where: PriceOwnWhereSchemaJson,
    distinct: PriceDistinctFieldsSchema,
  })
  .partial();

export const QuantityOwnIncludeSchema = z
  .object({
    variant: z.boolean(),
    store: z.boolean(),
  })
  .partial();

export const QuantityOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  QuantityOwnIncludeSchema
);

export const QuantityOwnQueryOneSchema = z
  .object({
    where: QuantityOwnWhereSchemaJson,
    distinct: QuantityDistinctFieldsSchema,
  })
  .partial();

export const QuantityOwnQuerySchema = z
  .object({
    where: QuantityOwnWhereSchemaJson,
    distinct: QuantityDistinctFieldsSchema,
  })
  .partial();

export const SerialNumberOwnIncludeSchema = z
  .object({
    variant: z.boolean(),
    store: z.boolean(),
  })
  .partial();

export const SerialNumberOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberOwnIncludeSchema
);

export const SerialNumberOwnQueryOneSchema = z
  .object({
    where: SerialNumberOwnWhereSchemaJson,
    distinct: SerialNumberDistinctFieldsSchema,
  })
  .partial();

export const SerialNumberOwnQuerySchema = z
  .object({
    where: SerialNumberOwnWhereSchemaJson,
    distinct: SerialNumberDistinctFieldsSchema,
  })
  .partial();

export const DiscountOwnIncludeSchema = z
  .object({
    targets: z.boolean(),
  })
  .partial();

export const DiscountOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  DiscountOwnIncludeSchema
);

export const DiscountOwnQueryOneSchema = z
  .object({
    where: DiscountOwnWhereSchemaJson,
    distinct: DiscountDistinctFieldsSchema,
  })
  .partial();

export const DiscountOwnQuerySchema = z
  .object({
    where: DiscountOwnWhereSchemaJson,
    distinct: DiscountDistinctFieldsSchema,
  })
  .partial();

export const DiscountTargetOwnIncludeSchema = z
  .object({
    discount: z.boolean(),
    store: z.boolean(),
    category: z.boolean(),
    priceLevel: z.boolean(),
    product: z.boolean(),
    variant: z.boolean(),
  })
  .partial();

export const DiscountTargetOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  DiscountTargetOwnIncludeSchema
);

export const DiscountTargetOwnQueryOneSchema = z
  .object({
    where: DiscountTargetOwnWhereSchemaJson,
    distinct: DiscountTargetDistinctFieldsSchema,
  })
  .partial();

export const DiscountTargetOwnQuerySchema = z
  .object({
    where: DiscountTargetOwnWhereSchemaJson,
    distinct: DiscountTargetDistinctFieldsSchema,
  })
  .partial();

export const StoreOwnIncludeSchema = z
  .object({
    priceLevel: z.boolean(),
    quantities: z.boolean(),
    discounts: z.boolean(),
    serialNumbers: z.boolean(),
  })
  .partial();

export const StoreOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  StoreOwnIncludeSchema
);

export const StoreOwnQueryOneSchema = z
  .object({
    where: StoreOwnWhereSchemaJson,
    distinct: StoreDistinctFieldsSchema,
  })
  .partial();

export const StoreOwnQuerySchema = z
  .object({
    where: StoreOwnWhereSchemaJson,
    distinct: StoreDistinctFieldsSchema,
  })
  .partial();

export const WarrantyPolicyOwnIncludeSchema = z
  .object({
    products: z.boolean(),
  })
  .partial();

export const WarrantyPolicyOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  WarrantyPolicyOwnIncludeSchema
);

export const WarrantyPolicyOwnQueryOneSchema = z
  .object({
    where: WarrantyPolicyOwnWhereSchemaJson,
    distinct: WarrantyPolicyDistinctFieldsSchema,
  })
  .partial();

export const WarrantyPolicyOwnQuerySchema = z
  .object({
    where: WarrantyPolicyOwnWhereSchemaJson,
    distinct: WarrantyPolicyDistinctFieldsSchema,
  })
  .partial();

export const ProductWarrantyOwnIncludeSchema = z
  .object({
    product: z.boolean(),
    variant: z.boolean(),
    policy: z.boolean(),
  })
  .partial();

export const ProductWarrantyOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  ProductWarrantyOwnIncludeSchema
);

export const ProductWarrantyOwnQueryOneSchema = z
  .object({
    where: ProductWarrantyOwnWhereSchemaJson,
    distinct: ProductWarrantyDistinctFieldsSchema,
  })
  .partial();

export const ProductWarrantyOwnQuerySchema = z
  .object({
    where: ProductWarrantyOwnWhereSchemaJson,
    distinct: ProductWarrantyDistinctFieldsSchema,
  })
  .partial();

export const CategoryCreateSchema = z
  .object({
    parentId: z.coerce.number().int().optional(),
    name: nameSchema.clone(),
    slug: slugSchema.clone().optional(),
  })
  .transform(slugTransformer('name'));

export const CategoryUpdateSchema = z
  .object({
    parentId: z.coerce.number().int().optional().optional(),
    name: nameSchema.clone().optional(),
    slug: slugSchema.clone().optional().optional(),
  })
  .transform(slugTransformer('name'));

export const CategoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    parentId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
  })
  .partial();

export const CategoryOrderBySchemaJson = z.preprocess(
  jsonParser,
  CategoryOrderBySchema
);

export const CategoryWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    parent: CategoryOwnWhereSchema,
    children: z
      .object({
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      })
      .partial(),
    products: z
      .object({
        some: ProductCategoryOwnWhereSchema,
        every: ProductCategoryOwnWhereSchema,
        none: ProductCategoryOwnWhereSchema,
      })
      .partial(),
    discountTargets: z
      .object({
        some: DiscountTargetOwnWhereSchema,
        every: DiscountTargetOwnWhereSchema,
        none: DiscountTargetOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const CategoryWhereSchemaJson = z.preprocess(
  jsonParser,
  CategoryWhereSchema
);

export const CategorySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    parentId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    parent: z.boolean().or(CategoryOwnQueryOneSchema),
    children: z.boolean().or(CategoryOwnQuerySchema),
    products: z.boolean().or(ProductCategoryOwnQuerySchema),
    discountTargets: z.boolean().or(DiscountTargetOwnQuerySchema),
  })
  .partial();

export const CategorySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CategorySelectFieldsSchema
);

export const CategoryIncludeSchema = z
  .object({
    parent: z.boolean().or(CategoryOwnQueryOneSchema),
    children: z.boolean().or(CategoryOwnQuerySchema),
    products: z.boolean().or(ProductCategoryOwnQuerySchema),
    discountTargets: z.boolean().or(DiscountTargetOwnQuerySchema),
  })
  .partial();

export const CategoryIncludeSchemaJson = z.preprocess(
  jsonParser,
  CategoryIncludeSchema
);

export const CategoryProjectionSchema = z.union([
  z
    .object({
      omit: CategorySelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: CategorySelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: CategoryIncludeSchemaJson,
    })
    .optional(),
]);

export const ProductCreateSchema = z
  .object({
    isActive: z.boolean().optional(),
    name: nameSchema.clone(),
    slug: slugSchema.clone().optional(),
    description: descriptionSchema.clone().optional(),
  })
  .transform(slugTransformer('name'));

export const ProductUpdateSchema = z
  .object({
    isActive: z.boolean().optional().optional(),
    name: nameSchema.clone().optional(),
    slug: slugSchema.clone().optional().optional(),
    description: descriptionSchema.clone().optional().optional(),
  })
  .transform(slugTransformer('name'));

export const ProductOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    updatedAt: PZ.OrderDirectionSchema,
    isActive: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
  })
  .partial();

export const ProductOrderBySchemaJson = z.preprocess(
  jsonParser,
  ProductOrderBySchema
);

export const ProductWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    isActive: z.coerce.boolean().or(PZ.BooleanFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    variants: z
      .object({
        some: VariantOwnWhereSchema,
        every: VariantOwnWhereSchema,
        none: VariantOwnWhereSchema,
      })
      .partial(),
    categories: z
      .object({
        some: ProductCategoryOwnWhereSchema,
        every: ProductCategoryOwnWhereSchema,
        none: ProductCategoryOwnWhereSchema,
      })
      .partial(),
    discounts: z
      .object({
        some: DiscountTargetOwnWhereSchema,
        every: DiscountTargetOwnWhereSchema,
        none: DiscountTargetOwnWhereSchema,
      })
      .partial(),
    warranties: z
      .object({
        some: ProductWarrantyOwnWhereSchema,
        every: ProductWarrantyOwnWhereSchema,
        none: ProductWarrantyOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ProductWhereSchemaJson = z.preprocess(
  jsonParser,
  ProductWhereSchema
);

export const ProductSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    isActive: z.boolean(),
    uuid: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    variants: z.boolean().or(VariantOwnQuerySchema),
    categories: z.boolean().or(ProductCategoryOwnQuerySchema),
    discounts: z.boolean().or(DiscountTargetOwnQuerySchema),
    warranties: z.boolean().or(ProductWarrantyOwnQuerySchema),
  })
  .partial();

export const ProductSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ProductSelectFieldsSchema
);

export const ProductIncludeSchema = z
  .object({
    variants: z.boolean().or(VariantOwnQuerySchema),
    categories: z.boolean().or(ProductCategoryOwnQuerySchema),
    discounts: z.boolean().or(DiscountTargetOwnQuerySchema),
    warranties: z.boolean().or(ProductWarrantyOwnQuerySchema),
  })
  .partial();

export const ProductIncludeSchemaJson = z.preprocess(
  jsonParser,
  ProductIncludeSchema
);

export const ProductProjectionSchema = z.union([
  z
    .object({
      omit: ProductSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: ProductSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: ProductIncludeSchemaJson,
    })
    .optional(),
]);

export const ProductCategoryCreateSchema = z.object({
  productId: z.coerce.number().int(),
  categoryId: z.coerce.number().int(),
});

export const ProductCategoryUpdateSchema = z.object({
  productId: z.coerce.number().int().optional(),
  categoryId: z.coerce.number().int().optional(),
});

export const ProductCategoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    productId: PZ.OrderDirectionSchema,
    categoryId: PZ.OrderDirectionSchema,
  })
  .partial();

export const ProductCategoryOrderBySchemaJson = z.preprocess(
  jsonParser,
  ProductCategoryOrderBySchema
);

export const ProductCategoryWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    productId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    categoryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    product: ProductOwnWhereSchema,
    category: CategoryOwnWhereSchema,
  })
  .partial();

export const ProductCategoryWhereSchemaJson = z.preprocess(
  jsonParser,
  ProductCategoryWhereSchema
);

export const ProductCategorySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    productId: z.boolean(),
    categoryId: z.boolean(),
    product: z.boolean().or(ProductOwnQueryOneSchema),
    category: z.boolean().or(CategoryOwnQueryOneSchema),
  })
  .partial();

export const ProductCategorySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ProductCategorySelectFieldsSchema
);

export const ProductCategoryIncludeSchema = z
  .object({
    product: z.boolean().or(ProductOwnQueryOneSchema),
    category: z.boolean().or(CategoryOwnQueryOneSchema),
  })
  .partial();

export const ProductCategoryIncludeSchemaJson = z.preprocess(
  jsonParser,
  ProductCategoryIncludeSchema
);

export const ProductCategoryProjectionSchema = z.union([
  z
    .object({
      omit: ProductCategorySelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: ProductCategorySelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: ProductCategoryIncludeSchemaJson,
    })
    .optional(),
]);

export const VariantCreateSchema = z.object({
  productId: z.coerce.number().int(),
  sku: z.string(),
  upc: z.string(),
});

export const VariantUpdateSchema = z.object({
  productId: z.coerce.number().int().optional(),
  sku: z.string().optional(),
  upc: z.string().optional(),
});

export const VariantOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    productId: PZ.OrderDirectionSchema,
    sku: PZ.OrderDirectionSchema,
    upc: PZ.OrderDirectionSchema,
  })
  .partial();

export const VariantOrderBySchemaJson = z.preprocess(
  jsonParser,
  VariantOrderBySchema
);

export const VariantWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    productId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    sku: z.string().or(PZ.StringFilterSchema),
    upc: z.string().or(PZ.StringFilterSchema),
    product: ProductOwnWhereSchema,
    attributes: z
      .object({
        some: AttributeValueOwnWhereSchema,
        every: AttributeValueOwnWhereSchema,
        none: AttributeValueOwnWhereSchema,
      })
      .partial(),
    prices: z
      .object({
        some: PriceOwnWhereSchema,
        every: PriceOwnWhereSchema,
        none: PriceOwnWhereSchema,
      })
      .partial(),
    quantities: z
      .object({
        some: QuantityOwnWhereSchema,
        every: QuantityOwnWhereSchema,
        none: QuantityOwnWhereSchema,
      })
      .partial(),
    discounts: z
      .object({
        some: DiscountTargetOwnWhereSchema,
        every: DiscountTargetOwnWhereSchema,
        none: DiscountTargetOwnWhereSchema,
      })
      .partial(),
    serrialNumbers: z
      .object({
        some: SerialNumberOwnWhereSchema,
        every: SerialNumberOwnWhereSchema,
        none: SerialNumberOwnWhereSchema,
      })
      .partial(),
    warranties: z
      .object({
        some: ProductWarrantyOwnWhereSchema,
        every: ProductWarrantyOwnWhereSchema,
        none: ProductWarrantyOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const VariantWhereSchemaJson = z.preprocess(
  jsonParser,
  VariantWhereSchema
);

export const VariantSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    productId: z.boolean(),
    sku: z.boolean(),
    upc: z.boolean(),
    product: z.boolean().or(ProductOwnQueryOneSchema),
    attributes: z.boolean().or(AttributeValueOwnQuerySchema),
    prices: z.boolean().or(PriceOwnQuerySchema),
    quantities: z.boolean().or(QuantityOwnQuerySchema),
    discounts: z.boolean().or(DiscountTargetOwnQuerySchema),
    serrialNumbers: z.boolean().or(SerialNumberOwnQuerySchema),
    warranties: z.boolean().or(ProductWarrantyOwnQuerySchema),
  })
  .partial();

export const VariantSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  VariantSelectFieldsSchema
);

export const VariantIncludeSchema = z
  .object({
    product: z.boolean().or(ProductOwnQueryOneSchema),
    attributes: z.boolean().or(AttributeValueOwnQuerySchema),
    prices: z.boolean().or(PriceOwnQuerySchema),
    quantities: z.boolean().or(QuantityOwnQuerySchema),
    discounts: z.boolean().or(DiscountTargetOwnQuerySchema),
    serrialNumbers: z.boolean().or(SerialNumberOwnQuerySchema),
    warranties: z.boolean().or(ProductWarrantyOwnQuerySchema),
  })
  .partial();

export const VariantIncludeSchemaJson = z.preprocess(
  jsonParser,
  VariantIncludeSchema
);

export const VariantProjectionSchema = z.union([
  z
    .object({
      omit: VariantSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: VariantSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: VariantIncludeSchemaJson,
    })
    .optional(),
]);

export const AttributeCategoryCreateSchema = z
  .object({
    name: nameSchema.clone(),
    slug: slugSchema.clone().optional(),
  })
  .transform(slugTransformer('name'));

export const AttributeCategoryUpdateSchema = z
  .object({
    name: nameSchema.clone().optional(),
    slug: slugSchema.clone().optional().optional(),
  })
  .transform(slugTransformer('name'));

export const AttributeCategoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
  })
  .partial();

export const AttributeCategoryOrderBySchemaJson = z.preprocess(
  jsonParser,
  AttributeCategoryOrderBySchema
);

export const AttributeCategoryWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    attributes: z
      .object({
        some: AttributeOwnWhereSchema,
        every: AttributeOwnWhereSchema,
        none: AttributeOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const AttributeCategoryWhereSchemaJson = z.preprocess(
  jsonParser,
  AttributeCategoryWhereSchema
);

export const AttributeCategorySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    attributes: z.boolean().or(AttributeOwnQuerySchema),
  })
  .partial();

export const AttributeCategorySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AttributeCategorySelectFieldsSchema
);

export const AttributeCategoryIncludeSchema = z
  .object({
    attributes: z.boolean().or(AttributeOwnQuerySchema),
  })
  .partial();

export const AttributeCategoryIncludeSchemaJson = z.preprocess(
  jsonParser,
  AttributeCategoryIncludeSchema
);

export const AttributeCategoryProjectionSchema = z.union([
  z
    .object({
      omit: AttributeCategorySelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: AttributeCategorySelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: AttributeCategoryIncludeSchemaJson,
    })
    .optional(),
]);

export const AttributeCreateSchema = z.object({
  categoryId: z.coerce.number().int().optional(),
  name: nameSchema.clone(),
  description: descriptionSchema.clone().optional(),
});

export const AttributeUpdateSchema = z.object({
  categoryId: z.coerce.number().int().optional().optional(),
  name: nameSchema.clone().optional(),
  description: descriptionSchema.clone().optional().optional(),
});

export const AttributeOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    categoryId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
  })
  .partial();

export const AttributeOrderBySchemaJson = z.preprocess(
  jsonParser,
  AttributeOrderBySchema
);

export const AttributeWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    categoryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    category: AttributeCategoryOwnWhereSchema,
    unites: z
      .object({
        some: AttributeUnitOwnWhereSchema,
        every: AttributeUnitOwnWhereSchema,
        none: AttributeUnitOwnWhereSchema,
      })
      .partial(),
    values: z
      .object({
        some: AttributeValueOwnWhereSchema,
        every: AttributeValueOwnWhereSchema,
        none: AttributeValueOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const AttributeWhereSchemaJson = z.preprocess(
  jsonParser,
  AttributeWhereSchema
);

export const AttributeSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    categoryId: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    category: z.boolean().or(AttributeCategoryOwnQueryOneSchema),
    unites: z.boolean().or(AttributeUnitOwnQuerySchema),
    values: z.boolean().or(AttributeValueOwnQuerySchema),
  })
  .partial();

export const AttributeSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AttributeSelectFieldsSchema
);

export const AttributeIncludeSchema = z
  .object({
    category: z.boolean().or(AttributeCategoryOwnQueryOneSchema),
    unites: z.boolean().or(AttributeUnitOwnQuerySchema),
    values: z.boolean().or(AttributeValueOwnQuerySchema),
  })
  .partial();

export const AttributeIncludeSchemaJson = z.preprocess(
  jsonParser,
  AttributeIncludeSchema
);

export const AttributeProjectionSchema = z.union([
  z
    .object({
      omit: AttributeSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: AttributeSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: AttributeIncludeSchemaJson,
    })
    .optional(),
]);

export const UnitCreateSchema = z.object({
  name: nameSchema.clone(),
  symbol: z.string(),
});

export const UnitUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
  symbol: z.string().optional(),
});

export const UnitOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    symbol: PZ.OrderDirectionSchema,
  })
  .partial();

export const UnitOrderBySchemaJson = z.preprocess(
  jsonParser,
  UnitOrderBySchema
);

export const UnitWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    symbol: z.string().or(PZ.StringFilterSchema),
    attributes: z
      .object({
        some: AttributeUnitOwnWhereSchema,
        every: AttributeUnitOwnWhereSchema,
        none: AttributeUnitOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const UnitWhereSchemaJson = z.preprocess(jsonParser, UnitWhereSchema);

export const UnitSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    symbol: z.boolean(),
    attributes: z.boolean().or(AttributeUnitOwnQuerySchema),
  })
  .partial();

export const UnitSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  UnitSelectFieldsSchema
);

export const UnitIncludeSchema = z
  .object({
    attributes: z.boolean().or(AttributeUnitOwnQuerySchema),
  })
  .partial();

export const UnitIncludeSchemaJson = z.preprocess(
  jsonParser,
  UnitIncludeSchema
);

export const UnitProjectionSchema = z.union([
  z
    .object({
      omit: UnitSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: UnitSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: UnitIncludeSchemaJson,
    })
    .optional(),
]);

export const AttributeUnitCreateSchema = z.object({
  attributeId: z.coerce.number().int(),
  unitId: z.coerce.number().int(),
});

export const AttributeUnitUpdateSchema = z.object({
  attributeId: z.coerce.number().int().optional(),
  unitId: z.coerce.number().int().optional(),
});

export const AttributeUnitOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    attributeId: PZ.OrderDirectionSchema,
    unitId: PZ.OrderDirectionSchema,
  })
  .partial();

export const AttributeUnitOrderBySchemaJson = z.preprocess(
  jsonParser,
  AttributeUnitOrderBySchema
);

export const AttributeUnitWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    attributeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    unitId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    attribute: AttributeOwnWhereSchema,
    unit: UnitOwnWhereSchema,
  })
  .partial();

export const AttributeUnitWhereSchemaJson = z.preprocess(
  jsonParser,
  AttributeUnitWhereSchema
);

export const AttributeUnitSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    attributeId: z.boolean(),
    unitId: z.boolean(),
    attribute: z.boolean().or(AttributeOwnQueryOneSchema),
    unit: z.boolean().or(UnitOwnQueryOneSchema),
  })
  .partial();

export const AttributeUnitSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AttributeUnitSelectFieldsSchema
);

export const AttributeUnitIncludeSchema = z
  .object({
    attribute: z.boolean().or(AttributeOwnQueryOneSchema),
    unit: z.boolean().or(UnitOwnQueryOneSchema),
  })
  .partial();

export const AttributeUnitIncludeSchemaJson = z.preprocess(
  jsonParser,
  AttributeUnitIncludeSchema
);

export const AttributeUnitProjectionSchema = z.union([
  z
    .object({
      omit: AttributeUnitSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: AttributeUnitSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: AttributeUnitIncludeSchemaJson,
    })
    .optional(),
]);

export const AttributeValueCreateSchema = z.object({
  attributeId: z.coerce.number().int(),
  variantId: z.coerce.number().int(),
  textValue: z.string().optional(),
  booleanValue: z.boolean().optional(),
  floatValue: z.coerce.number().optional(),
});

export const AttributeValueUpdateSchema = z.object({
  attributeId: z.coerce.number().int().optional(),
  variantId: z.coerce.number().int().optional(),
  textValue: z.string().optional().optional(),
  booleanValue: z.boolean().optional().optional(),
  floatValue: z.coerce.number().optional().optional(),
});

export const AttributeValueOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    attributeId: PZ.OrderDirectionSchema,
    variantId: PZ.OrderDirectionSchema,
    textValue: PZ.OrderDirectionSchema,
    booleanValue: PZ.OrderDirectionSchema,
    floatValue: PZ.OrderDirectionSchema,
  })
  .partial();

export const AttributeValueOrderBySchemaJson = z.preprocess(
  jsonParser,
  AttributeValueOrderBySchema
);

export const AttributeValueWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    attributeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    variantId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    textValue: z.string().or(PZ.StringFilterSchema),
    booleanValue: z.coerce.boolean().or(PZ.BooleanFilterSchema),
    floatValue: z.coerce.number().or(PZ.NumberFilterSchema),
    variant: VariantOwnWhereSchema,
    attribute: AttributeOwnWhereSchema,
  })
  .partial();

export const AttributeValueWhereSchemaJson = z.preprocess(
  jsonParser,
  AttributeValueWhereSchema
);

export const AttributeValueSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    attributeId: z.boolean(),
    variantId: z.boolean(),
    textValue: z.boolean(),
    booleanValue: z.boolean(),
    floatValue: z.boolean(),
    variant: z.boolean().or(VariantOwnQueryOneSchema),
    attribute: z.boolean().or(AttributeOwnQueryOneSchema),
  })
  .partial();

export const AttributeValueSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AttributeValueSelectFieldsSchema
);

export const AttributeValueIncludeSchema = z
  .object({
    variant: z.boolean().or(VariantOwnQueryOneSchema),
    attribute: z.boolean().or(AttributeOwnQueryOneSchema),
  })
  .partial();

export const AttributeValueIncludeSchemaJson = z.preprocess(
  jsonParser,
  AttributeValueIncludeSchema
);

export const AttributeValueProjectionSchema = z.union([
  z
    .object({
      omit: AttributeValueSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: AttributeValueSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: AttributeValueIncludeSchemaJson,
    })
    .optional(),
]);

export const CurrencyCreateSchema = z.object({
  name: nameSchema.clone(),
  code: z.string(),
  symbol: z.string().optional(),
});

export const CurrencyUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
  code: z.string().optional(),
  symbol: z.string().optional().optional(),
});

export const CurrencyOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    code: PZ.OrderDirectionSchema,
    symbol: PZ.OrderDirectionSchema,
  })
  .partial();

export const CurrencyOrderBySchemaJson = z.preprocess(
  jsonParser,
  CurrencyOrderBySchema
);

export const CurrencyWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
    symbol: z.string().or(PZ.StringFilterSchema),
    priceLevels: z
      .object({
        some: PriceLevelOwnWhereSchema,
        every: PriceLevelOwnWhereSchema,
        none: PriceLevelOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const CurrencyWhereSchemaJson = z.preprocess(
  jsonParser,
  CurrencyWhereSchema
);

export const CurrencySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    symbol: z.boolean(),
    priceLevels: z.boolean().or(PriceLevelOwnQuerySchema),
  })
  .partial();

export const CurrencySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CurrencySelectFieldsSchema
);

export const CurrencyIncludeSchema = z
  .object({
    priceLevels: z.boolean().or(PriceLevelOwnQuerySchema),
  })
  .partial();

export const CurrencyIncludeSchemaJson = z.preprocess(
  jsonParser,
  CurrencyIncludeSchema
);

export const CurrencyProjectionSchema = z.union([
  z
    .object({
      omit: CurrencySelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: CurrencySelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: CurrencyIncludeSchemaJson,
    })
    .optional(),
]);

export const PriceLevelCreateSchema = z
  .object({
    currencyId: z.coerce.number().int(),
    name: nameSchema.clone(),
    slug: slugSchema.clone().optional(),
    taxrate: z.coerce.number(),
    notes: z.string().optional(),
  })
  .transform(slugTransformer('name'));

export const PriceLevelUpdateSchema = z
  .object({
    currencyId: z.coerce.number().int().optional(),
    name: nameSchema.clone().optional(),
    slug: slugSchema.clone().optional().optional(),
    taxrate: z.coerce.number().optional(),
    notes: z.string().optional().optional(),
  })
  .transform(slugTransformer('name'));

export const PriceLevelOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    currencyId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    taxrate: PZ.OrderDirectionSchema,
    notes: PZ.OrderDirectionSchema,
  })
  .partial();

export const PriceLevelOrderBySchemaJson = z.preprocess(
  jsonParser,
  PriceLevelOrderBySchema
);

export const PriceLevelWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    currencyId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    taxrate: z.coerce.number().or(PZ.NumberFilterSchema),
    notes: z.string().or(PZ.StringFilterSchema),
    currency: CurrencyOwnWhereSchema,
    stores: z
      .object({
        some: StoreOwnWhereSchema,
        every: StoreOwnWhereSchema,
        none: StoreOwnWhereSchema,
      })
      .partial(),
    prices: z
      .object({
        some: PriceOwnWhereSchema,
        every: PriceOwnWhereSchema,
        none: PriceOwnWhereSchema,
      })
      .partial(),
    discounts: z
      .object({
        some: DiscountTargetOwnWhereSchema,
        every: DiscountTargetOwnWhereSchema,
        none: DiscountTargetOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PriceLevelWhereSchemaJson = z.preprocess(
  jsonParser,
  PriceLevelWhereSchema
);

export const PriceLevelSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    currencyId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    taxrate: z.boolean(),
    notes: z.boolean(),
    currency: z.boolean().or(CurrencyOwnQueryOneSchema),
    stores: z.boolean().or(StoreOwnQuerySchema),
    prices: z.boolean().or(PriceOwnQuerySchema),
    discounts: z.boolean().or(DiscountTargetOwnQuerySchema),
  })
  .partial();

export const PriceLevelSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PriceLevelSelectFieldsSchema
);

export const PriceLevelIncludeSchema = z
  .object({
    currency: z.boolean().or(CurrencyOwnQueryOneSchema),
    stores: z.boolean().or(StoreOwnQuerySchema),
    prices: z.boolean().or(PriceOwnQuerySchema),
    discounts: z.boolean().or(DiscountTargetOwnQuerySchema),
  })
  .partial();

export const PriceLevelIncludeSchemaJson = z.preprocess(
  jsonParser,
  PriceLevelIncludeSchema
);

export const PriceLevelProjectionSchema = z.union([
  z
    .object({
      omit: PriceLevelSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: PriceLevelSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: PriceLevelIncludeSchemaJson,
    })
    .optional(),
]);

export const PriceCreateSchema = z.object({
  variantId: z.coerce.number().int(),
  priceLevelId: z.coerce.number().int(),
  price: currencySchema.clone(),
  cost: currencySchema.clone(),
  description: descriptionSchema.clone().optional(),
});

export const PriceUpdateSchema = z.object({
  variantId: z.coerce.number().int().optional(),
  priceLevelId: z.coerce.number().int().optional(),
  price: currencySchema.clone().optional(),
  cost: currencySchema.clone().optional(),
  description: descriptionSchema.clone().optional().optional(),
});

export const PriceOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    variantId: PZ.OrderDirectionSchema,
    priceLevelId: PZ.OrderDirectionSchema,
    price: PZ.OrderDirectionSchema,
    cost: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
  })
  .partial();

export const PriceOrderBySchemaJson = z.preprocess(
  jsonParser,
  PriceOrderBySchema
);

export const PriceWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    variantId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    priceLevelId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    price: z.coerce.number().or(PZ.NumberFilterSchema),
    cost: z.coerce.number().or(PZ.NumberFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    variant: VariantOwnWhereSchema,
    priceLevel: PriceLevelOwnWhereSchema,
  })
  .partial();

export const PriceWhereSchemaJson = z.preprocess(jsonParser, PriceWhereSchema);

export const PriceSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    variantId: z.boolean(),
    priceLevelId: z.boolean(),
    price: z.boolean(),
    cost: z.boolean(),
    description: z.boolean(),
    variant: z.boolean().or(VariantOwnQueryOneSchema),
    priceLevel: z.boolean().or(PriceLevelOwnQueryOneSchema),
  })
  .partial();

export const PriceSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PriceSelectFieldsSchema
);

export const PriceIncludeSchema = z
  .object({
    variant: z.boolean().or(VariantOwnQueryOneSchema),
    priceLevel: z.boolean().or(PriceLevelOwnQueryOneSchema),
  })
  .partial();

export const PriceIncludeSchemaJson = z.preprocess(
  jsonParser,
  PriceIncludeSchema
);

export const PriceProjectionSchema = z.union([
  z
    .object({
      omit: PriceSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: PriceSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: PriceIncludeSchemaJson,
    })
    .optional(),
]);

export const QuantityCreateSchema = z.object({
  variantId: z.coerce.number().int(),
  storeId: z.coerce.number().int(),
  quantity: positiveIntegerSchema.clone(),
  alertThreshold: z.coerce.number().int().optional(),
});

export const QuantityUpdateSchema = z.object({
  variantId: z.coerce.number().int().optional(),
  storeId: z.coerce.number().int().optional(),
  quantity: positiveIntegerSchema.clone().optional(),
  alertThreshold: z.coerce.number().int().optional().optional(),
});

export const QuantityOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    variantId: PZ.OrderDirectionSchema,
    storeId: PZ.OrderDirectionSchema,
    quantity: PZ.OrderDirectionSchema,
    alertThreshold: PZ.OrderDirectionSchema,
  })
  .partial();

export const QuantityOrderBySchemaJson = z.preprocess(
  jsonParser,
  QuantityOrderBySchema
);

export const QuantityWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    variantId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    storeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    quantity: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    alertThreshold: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    variant: VariantOwnWhereSchema,
    store: StoreOwnWhereSchema,
  })
  .partial();

export const QuantityWhereSchemaJson = z.preprocess(
  jsonParser,
  QuantityWhereSchema
);

export const QuantitySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    variantId: z.boolean(),
    storeId: z.boolean(),
    quantity: z.boolean(),
    alertThreshold: z.boolean(),
    variant: z.boolean().or(VariantOwnQueryOneSchema),
    store: z.boolean().or(StoreOwnQueryOneSchema),
  })
  .partial();

export const QuantitySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  QuantitySelectFieldsSchema
);

export const QuantityIncludeSchema = z
  .object({
    variant: z.boolean().or(VariantOwnQueryOneSchema),
    store: z.boolean().or(StoreOwnQueryOneSchema),
  })
  .partial();

export const QuantityIncludeSchemaJson = z.preprocess(
  jsonParser,
  QuantityIncludeSchema
);

export const QuantityProjectionSchema = z.union([
  z
    .object({
      omit: QuantitySelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: QuantitySelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: QuantityIncludeSchemaJson,
    })
    .optional(),
]);

export const SerialNumberCreateSchema = z.object({
  variantId: z.coerce.number().int(),
  storeId: z.coerce.number().int(),
  serialNumber: z.string(),
  inStock: z.boolean(),
});

export const SerialNumberUpdateSchema = z.object({
  variantId: z.coerce.number().int().optional(),
  storeId: z.coerce.number().int().optional(),
  serialNumber: z.string().optional(),
  inStock: z.boolean().optional(),
});

export const SerialNumberOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    variantId: PZ.OrderDirectionSchema,
    storeId: PZ.OrderDirectionSchema,
    serialNumber: PZ.OrderDirectionSchema,
    inStock: PZ.OrderDirectionSchema,
  })
  .partial();

export const SerialNumberOrderBySchemaJson = z.preprocess(
  jsonParser,
  SerialNumberOrderBySchema
);

export const SerialNumberWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    variantId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    storeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    serialNumber: z.string().or(PZ.StringFilterSchema),
    inStock: z.coerce.boolean().or(PZ.BooleanFilterSchema),
    variant: VariantOwnWhereSchema,
    store: StoreOwnWhereSchema,
  })
  .partial();

export const SerialNumberWhereSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberWhereSchema
);

export const SerialNumberSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    variantId: z.boolean(),
    storeId: z.boolean(),
    serialNumber: z.boolean(),
    inStock: z.boolean(),
    variant: z.boolean().or(VariantOwnQueryOneSchema),
    store: z.boolean().or(StoreOwnQueryOneSchema),
  })
  .partial();

export const SerialNumberSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberSelectFieldsSchema
);

export const SerialNumberIncludeSchema = z
  .object({
    variant: z.boolean().or(VariantOwnQueryOneSchema),
    store: z.boolean().or(StoreOwnQueryOneSchema),
  })
  .partial();

export const SerialNumberIncludeSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberIncludeSchema
);

export const SerialNumberProjectionSchema = z.union([
  z
    .object({
      omit: SerialNumberSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: SerialNumberSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: SerialNumberIncludeSchemaJson,
    })
    .optional(),
]);

export const DiscountCreateSchema = z.object({
  code: z.string(),
  type: DiscountTypeSchema,
  valueType: ValueTypeSchema,
  value: z.coerce.number().optional(),
  minQuantity: z.coerce.number().int().optional(),
  maxQuantity: z.coerce.number().int().optional(),
  minOrderTotal: z.coerce.number().optional(),
  maxOrderTotal: z.coerce.number().optional(),
  startDate: dateSchema.clone().optional(),
  endDate: dateSchema.clone().optional(),
  usageLimit: z.coerce.number().int().optional(),
  usageCount: z.coerce.number().int().optional(),
});

export const DiscountUpdateSchema = z.object({
  code: z.string().optional(),
  type: DiscountTypeSchema.optional(),
  valueType: ValueTypeSchema.optional(),
  value: z.coerce.number().optional().optional(),
  minQuantity: z.coerce.number().int().optional().optional(),
  maxQuantity: z.coerce.number().int().optional().optional(),
  minOrderTotal: z.coerce.number().optional().optional(),
  maxOrderTotal: z.coerce.number().optional().optional(),
  startDate: dateSchema.clone().optional().optional(),
  endDate: dateSchema.clone().optional().optional(),
  usageLimit: z.coerce.number().int().optional().optional(),
  usageCount: z.coerce.number().int().optional().optional(),
});

export const DiscountOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    code: PZ.OrderDirectionSchema,
    value: PZ.OrderDirectionSchema,
    minQuantity: PZ.OrderDirectionSchema,
    maxQuantity: PZ.OrderDirectionSchema,
    minOrderTotal: PZ.OrderDirectionSchema,
    maxOrderTotal: PZ.OrderDirectionSchema,
    startDate: PZ.OrderDirectionSchema,
    endDate: PZ.OrderDirectionSchema,
    usageLimit: PZ.OrderDirectionSchema,
    usageCount: PZ.OrderDirectionSchema,
  })
  .partial();

export const DiscountOrderBySchemaJson = z.preprocess(
  jsonParser,
  DiscountOrderBySchema
);

export const DiscountWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
    type: DiscountTypeSchema,
    valueType: ValueTypeSchema,
    value: z.coerce.number().or(PZ.NumberFilterSchema),
    minQuantity: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    maxQuantity: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    minOrderTotal: z.coerce.number().or(PZ.NumberFilterSchema),
    maxOrderTotal: z.coerce.number().or(PZ.NumberFilterSchema),
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
    usageLimit: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    usageCount: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    targets: z
      .object({
        some: DiscountTargetOwnWhereSchema,
        every: DiscountTargetOwnWhereSchema,
        none: DiscountTargetOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const DiscountWhereSchemaJson = z.preprocess(
  jsonParser,
  DiscountWhereSchema
);

export const DiscountSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    code: z.boolean(),
    type: z.boolean(),
    valueType: z.boolean(),
    value: z.boolean(),
    minQuantity: z.boolean(),
    maxQuantity: z.boolean(),
    minOrderTotal: z.boolean(),
    maxOrderTotal: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    usageLimit: z.boolean(),
    usageCount: z.boolean(),
    targets: z.boolean().or(DiscountTargetOwnQuerySchema),
  })
  .partial();

export const DiscountSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  DiscountSelectFieldsSchema
);

export const DiscountIncludeSchema = z
  .object({
    targets: z.boolean().or(DiscountTargetOwnQuerySchema),
  })
  .partial();

export const DiscountIncludeSchemaJson = z.preprocess(
  jsonParser,
  DiscountIncludeSchema
);

export const DiscountProjectionSchema = z.union([
  z
    .object({
      omit: DiscountSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: DiscountSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: DiscountIncludeSchemaJson,
    })
    .optional(),
]);

export const DiscountTargetCreateSchema = z.object({
  type: DiscountTargetTypeSchema,
  discountId: z.coerce.number().int(),
  storeId: z.coerce.number().int().optional(),
  productId: z.coerce.number().int().optional(),
  variantId: z.coerce.number().int().optional(),
  priceLevelId: z.coerce.number().int().optional(),
  categoryId: z.coerce.number().int().optional(),
});

export const DiscountTargetUpdateSchema = z.object({
  type: DiscountTargetTypeSchema.optional(),
  discountId: z.coerce.number().int().optional(),
  storeId: z.coerce.number().int().optional().optional(),
  productId: z.coerce.number().int().optional().optional(),
  variantId: z.coerce.number().int().optional().optional(),
  priceLevelId: z.coerce.number().int().optional().optional(),
  categoryId: z.coerce.number().int().optional().optional(),
});

export const DiscountTargetOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    discountId: PZ.OrderDirectionSchema,
    storeId: PZ.OrderDirectionSchema,
    productId: PZ.OrderDirectionSchema,
    variantId: PZ.OrderDirectionSchema,
    priceLevelId: PZ.OrderDirectionSchema,
    categoryId: PZ.OrderDirectionSchema,
  })
  .partial();

export const DiscountTargetOrderBySchemaJson = z.preprocess(
  jsonParser,
  DiscountTargetOrderBySchema
);

export const DiscountTargetWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: DiscountTargetTypeSchema,
    discountId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    storeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    productId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    variantId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    priceLevelId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    categoryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    discount: DiscountOwnWhereSchema,
    store: StoreOwnWhereSchema,
    category: CategoryOwnWhereSchema,
    priceLevel: PriceLevelOwnWhereSchema,
    product: ProductOwnWhereSchema,
    variant: VariantOwnWhereSchema,
  })
  .partial();

export const DiscountTargetWhereSchemaJson = z.preprocess(
  jsonParser,
  DiscountTargetWhereSchema
);

export const DiscountTargetSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    discountId: z.boolean(),
    storeId: z.boolean(),
    productId: z.boolean(),
    variantId: z.boolean(),
    priceLevelId: z.boolean(),
    categoryId: z.boolean(),
    discount: z.boolean().or(DiscountOwnQueryOneSchema),
    store: z.boolean().or(StoreOwnQueryOneSchema),
    category: z.boolean().or(CategoryOwnQueryOneSchema),
    priceLevel: z.boolean().or(PriceLevelOwnQueryOneSchema),
    product: z.boolean().or(ProductOwnQueryOneSchema),
    variant: z.boolean().or(VariantOwnQueryOneSchema),
  })
  .partial();

export const DiscountTargetSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  DiscountTargetSelectFieldsSchema
);

export const DiscountTargetIncludeSchema = z
  .object({
    discount: z.boolean().or(DiscountOwnQueryOneSchema),
    store: z.boolean().or(StoreOwnQueryOneSchema),
    category: z.boolean().or(CategoryOwnQueryOneSchema),
    priceLevel: z.boolean().or(PriceLevelOwnQueryOneSchema),
    product: z.boolean().or(ProductOwnQueryOneSchema),
    variant: z.boolean().or(VariantOwnQueryOneSchema),
  })
  .partial();

export const DiscountTargetIncludeSchemaJson = z.preprocess(
  jsonParser,
  DiscountTargetIncludeSchema
);

export const DiscountTargetProjectionSchema = z.union([
  z
    .object({
      omit: DiscountTargetSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: DiscountTargetSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: DiscountTargetIncludeSchemaJson,
    })
    .optional(),
]);

export const StoreCreateSchema = z
  .object({
    priceLevelId: z.coerce.number().int(),
    name: nameSchema.clone(),
    slug: slugSchema.clone().optional(),
    description: descriptionSchema.clone().optional(),
  })
  .transform(slugTransformer('name'));

export const StoreUpdateSchema = z
  .object({
    priceLevelId: z.coerce.number().int().optional(),
    name: nameSchema.clone().optional(),
    slug: slugSchema.clone().optional().optional(),
    description: descriptionSchema.clone().optional().optional(),
  })
  .transform(slugTransformer('name'));

export const StoreOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    priceLevelId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
  })
  .partial();

export const StoreOrderBySchemaJson = z.preprocess(
  jsonParser,
  StoreOrderBySchema
);

export const StoreWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    priceLevelId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    priceLevel: PriceLevelOwnWhereSchema,
    quantities: z
      .object({
        some: QuantityOwnWhereSchema,
        every: QuantityOwnWhereSchema,
        none: QuantityOwnWhereSchema,
      })
      .partial(),
    discounts: z
      .object({
        some: DiscountTargetOwnWhereSchema,
        every: DiscountTargetOwnWhereSchema,
        none: DiscountTargetOwnWhereSchema,
      })
      .partial(),
    serialNumbers: z
      .object({
        some: SerialNumberOwnWhereSchema,
        every: SerialNumberOwnWhereSchema,
        none: SerialNumberOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const StoreWhereSchemaJson = z.preprocess(jsonParser, StoreWhereSchema);

export const StoreSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    priceLevelId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    priceLevel: z.boolean().or(PriceLevelOwnQueryOneSchema),
    quantities: z.boolean().or(QuantityOwnQuerySchema),
    discounts: z.boolean().or(DiscountTargetOwnQuerySchema),
    serialNumbers: z.boolean().or(SerialNumberOwnQuerySchema),
  })
  .partial();

export const StoreSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  StoreSelectFieldsSchema
);

export const StoreIncludeSchema = z
  .object({
    priceLevel: z.boolean().or(PriceLevelOwnQueryOneSchema),
    quantities: z.boolean().or(QuantityOwnQuerySchema),
    discounts: z.boolean().or(DiscountTargetOwnQuerySchema),
    serialNumbers: z.boolean().or(SerialNumberOwnQuerySchema),
  })
  .partial();

export const StoreIncludeSchemaJson = z.preprocess(
  jsonParser,
  StoreIncludeSchema
);

export const StoreProjectionSchema = z.union([
  z
    .object({
      omit: StoreSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: StoreSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: StoreIncludeSchemaJson,
    })
    .optional(),
]);

export const WarrantyPolicyCreateSchema = z.object({
  name: nameSchema.clone(),
  description: descriptionSchema.clone().optional(),
  duration: z.coerce.number().int(),
  durationUnit: TimeUnitSchema.optional(),
});

export const WarrantyPolicyUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
  description: descriptionSchema.clone().optional().optional(),
  duration: z.coerce.number().int().optional(),
  durationUnit: TimeUnitSchema.optional().optional(),
});

export const WarrantyPolicyOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    duration: PZ.OrderDirectionSchema,
  })
  .partial();

export const WarrantyPolicyOrderBySchemaJson = z.preprocess(
  jsonParser,
  WarrantyPolicyOrderBySchema
);

export const WarrantyPolicyWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    duration: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    durationUnit: TimeUnitSchema,
    products: z
      .object({
        some: ProductWarrantyOwnWhereSchema,
        every: ProductWarrantyOwnWhereSchema,
        none: ProductWarrantyOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const WarrantyPolicyWhereSchemaJson = z.preprocess(
  jsonParser,
  WarrantyPolicyWhereSchema
);

export const WarrantyPolicySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    duration: z.boolean(),
    durationUnit: z.boolean(),
    products: z.boolean().or(ProductWarrantyOwnQuerySchema),
  })
  .partial();

export const WarrantyPolicySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  WarrantyPolicySelectFieldsSchema
);

export const WarrantyPolicyIncludeSchema = z
  .object({
    products: z.boolean().or(ProductWarrantyOwnQuerySchema),
  })
  .partial();

export const WarrantyPolicyIncludeSchemaJson = z.preprocess(
  jsonParser,
  WarrantyPolicyIncludeSchema
);

export const WarrantyPolicyProjectionSchema = z.union([
  z
    .object({
      omit: WarrantyPolicySelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: WarrantyPolicySelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: WarrantyPolicyIncludeSchemaJson,
    })
    .optional(),
]);

export const ProductWarrantyCreateSchema = z.object({
  productId: z.coerce.number().int().optional(),
  variantId: z.coerce.number().int().optional(),
  policyId: z.coerce.number().int(),
});

export const ProductWarrantyUpdateSchema = z.object({
  productId: z.coerce.number().int().optional().optional(),
  variantId: z.coerce.number().int().optional().optional(),
  policyId: z.coerce.number().int().optional(),
});

export const ProductWarrantyOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    productId: PZ.OrderDirectionSchema,
    variantId: PZ.OrderDirectionSchema,
    policyId: PZ.OrderDirectionSchema,
  })
  .partial();

export const ProductWarrantyOrderBySchemaJson = z.preprocess(
  jsonParser,
  ProductWarrantyOrderBySchema
);

export const ProductWarrantyWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    productId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    variantId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    policyId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    product: ProductOwnWhereSchema,
    variant: VariantOwnWhereSchema,
    policy: WarrantyPolicyOwnWhereSchema,
  })
  .partial();

export const ProductWarrantyWhereSchemaJson = z.preprocess(
  jsonParser,
  ProductWarrantyWhereSchema
);

export const ProductWarrantySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    productId: z.boolean(),
    variantId: z.boolean(),
    policyId: z.boolean(),
    product: z.boolean().or(ProductOwnQueryOneSchema),
    variant: z.boolean().or(VariantOwnQueryOneSchema),
    policy: z.boolean().or(WarrantyPolicyOwnQueryOneSchema),
  })
  .partial();

export const ProductWarrantySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ProductWarrantySelectFieldsSchema
);

export const ProductWarrantyIncludeSchema = z
  .object({
    product: z.boolean().or(ProductOwnQueryOneSchema),
    variant: z.boolean().or(VariantOwnQueryOneSchema),
    policy: z.boolean().or(WarrantyPolicyOwnQueryOneSchema),
  })
  .partial();

export const ProductWarrantyIncludeSchemaJson = z.preprocess(
  jsonParser,
  ProductWarrantyIncludeSchema
);

export const ProductWarrantyProjectionSchema = z.union([
  z
    .object({
      omit: ProductWarrantySelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: ProductWarrantySelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: ProductWarrantyIncludeSchemaJson,
    })
    .optional(),
]);

export const CategoryQueryOneSchema = z
  .object({
    where: CategoryWhereSchemaJson,
    distinct: CategoryDistinctFieldsSchema,
  })
  .partial();

export const CategoryQuerySchema = z
  .object({
    where: CategoryWhereSchemaJson,
    distinct: CategoryDistinctFieldsSchema,
  })
  .partial();

export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;

export type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;

export type CategoryOrderBy = z.infer<typeof CategoryOrderBySchema>;

export type CategoryOwnSelectFields = z.infer<
  typeof CategoryOwnSelectFieldsSchema
>;

export type CategoryOwnWhere = z.infer<typeof CategoryOwnWhereSchema>;

export type CategoryOwnQuery = z.infer<typeof CategoryOwnQuerySchema>;

export type CategoryOwnQueryOne = z.infer<typeof CategoryOwnQueryOneSchema>;

export type CategoryWhere = z.infer<typeof CategoryWhereSchema>;

export type CategoryInclude = z.infer<typeof CategoryIncludeSchema>;

export type CategoryQueryOne = z.infer<typeof CategoryQueryOneSchema>;

export type CategoryQuery = z.infer<typeof CategoryQuerySchema>;

export type CategorySelectFields = z.infer<typeof CategorySelectFieldsSchema>;

export type CategoryProjection = z.infer<typeof CategoryProjectionSchema>;

export const ProductQueryOneSchema = z
  .object({
    where: ProductWhereSchemaJson,
    distinct: ProductDistinctFieldsSchema,
  })
  .partial();

export const ProductQuerySchema = z
  .object({
    where: ProductWhereSchemaJson,
    distinct: ProductDistinctFieldsSchema,
  })
  .partial();

export type ProductCreate = z.infer<typeof ProductCreateSchema>;

export type ProductUpdate = z.infer<typeof ProductUpdateSchema>;

export type ProductOrderBy = z.infer<typeof ProductOrderBySchema>;

export type ProductOwnSelectFields = z.infer<
  typeof ProductOwnSelectFieldsSchema
>;

export type ProductOwnWhere = z.infer<typeof ProductOwnWhereSchema>;

export type ProductOwnQuery = z.infer<typeof ProductOwnQuerySchema>;

export type ProductOwnQueryOne = z.infer<typeof ProductOwnQueryOneSchema>;

export type ProductWhere = z.infer<typeof ProductWhereSchema>;

export type ProductInclude = z.infer<typeof ProductIncludeSchema>;

export type ProductQueryOne = z.infer<typeof ProductQueryOneSchema>;

export type ProductQuery = z.infer<typeof ProductQuerySchema>;

export type ProductSelectFields = z.infer<typeof ProductSelectFieldsSchema>;

export type ProductProjection = z.infer<typeof ProductProjectionSchema>;

export const ProductCategoryQueryOneSchema = z
  .object({
    where: ProductCategoryWhereSchemaJson,
    distinct: ProductCategoryDistinctFieldsSchema,
  })
  .partial();

export const ProductCategoryQuerySchema = z
  .object({
    where: ProductCategoryWhereSchemaJson,
    distinct: ProductCategoryDistinctFieldsSchema,
  })
  .partial();

export type ProductCategoryCreate = z.infer<typeof ProductCategoryCreateSchema>;

export type ProductCategoryUpdate = z.infer<typeof ProductCategoryUpdateSchema>;

export type ProductCategoryOrderBy = z.infer<
  typeof ProductCategoryOrderBySchema
>;

export type ProductCategoryOwnSelectFields = z.infer<
  typeof ProductCategoryOwnSelectFieldsSchema
>;

export type ProductCategoryOwnWhere = z.infer<
  typeof ProductCategoryOwnWhereSchema
>;

export type ProductCategoryOwnQuery = z.infer<
  typeof ProductCategoryOwnQuerySchema
>;

export type ProductCategoryOwnQueryOne = z.infer<
  typeof ProductCategoryOwnQueryOneSchema
>;

export type ProductCategoryWhere = z.infer<typeof ProductCategoryWhereSchema>;

export type ProductCategoryInclude = z.infer<
  typeof ProductCategoryIncludeSchema
>;

export type ProductCategoryQueryOne = z.infer<
  typeof ProductCategoryQueryOneSchema
>;

export type ProductCategoryQuery = z.infer<typeof ProductCategoryQuerySchema>;

export type ProductCategorySelectFields = z.infer<
  typeof ProductCategorySelectFieldsSchema
>;

export type ProductCategoryProjection = z.infer<
  typeof ProductCategoryProjectionSchema
>;

export const VariantQueryOneSchema = z
  .object({
    where: VariantWhereSchemaJson,
    distinct: VariantDistinctFieldsSchema,
  })
  .partial();

export const VariantQuerySchema = z
  .object({
    where: VariantWhereSchemaJson,
    distinct: VariantDistinctFieldsSchema,
  })
  .partial();

export type VariantCreate = z.infer<typeof VariantCreateSchema>;

export type VariantUpdate = z.infer<typeof VariantUpdateSchema>;

export type VariantOrderBy = z.infer<typeof VariantOrderBySchema>;

export type VariantOwnSelectFields = z.infer<
  typeof VariantOwnSelectFieldsSchema
>;

export type VariantOwnWhere = z.infer<typeof VariantOwnWhereSchema>;

export type VariantOwnQuery = z.infer<typeof VariantOwnQuerySchema>;

export type VariantOwnQueryOne = z.infer<typeof VariantOwnQueryOneSchema>;

export type VariantWhere = z.infer<typeof VariantWhereSchema>;

export type VariantInclude = z.infer<typeof VariantIncludeSchema>;

export type VariantQueryOne = z.infer<typeof VariantQueryOneSchema>;

export type VariantQuery = z.infer<typeof VariantQuerySchema>;

export type VariantSelectFields = z.infer<typeof VariantSelectFieldsSchema>;

export type VariantProjection = z.infer<typeof VariantProjectionSchema>;

export const AttributeCategoryQueryOneSchema = z
  .object({
    where: AttributeCategoryWhereSchemaJson,
    distinct: AttributeCategoryDistinctFieldsSchema,
  })
  .partial();

export const AttributeCategoryQuerySchema = z
  .object({
    where: AttributeCategoryWhereSchemaJson,
    distinct: AttributeCategoryDistinctFieldsSchema,
  })
  .partial();

export type AttributeCategoryCreate = z.infer<
  typeof AttributeCategoryCreateSchema
>;

export type AttributeCategoryUpdate = z.infer<
  typeof AttributeCategoryUpdateSchema
>;

export type AttributeCategoryOrderBy = z.infer<
  typeof AttributeCategoryOrderBySchema
>;

export type AttributeCategoryOwnSelectFields = z.infer<
  typeof AttributeCategoryOwnSelectFieldsSchema
>;

export type AttributeCategoryOwnWhere = z.infer<
  typeof AttributeCategoryOwnWhereSchema
>;

export type AttributeCategoryOwnQuery = z.infer<
  typeof AttributeCategoryOwnQuerySchema
>;

export type AttributeCategoryOwnQueryOne = z.infer<
  typeof AttributeCategoryOwnQueryOneSchema
>;

export type AttributeCategoryWhere = z.infer<
  typeof AttributeCategoryWhereSchema
>;

export type AttributeCategoryInclude = z.infer<
  typeof AttributeCategoryIncludeSchema
>;

export type AttributeCategoryQueryOne = z.infer<
  typeof AttributeCategoryQueryOneSchema
>;

export type AttributeCategoryQuery = z.infer<
  typeof AttributeCategoryQuerySchema
>;

export type AttributeCategorySelectFields = z.infer<
  typeof AttributeCategorySelectFieldsSchema
>;

export type AttributeCategoryProjection = z.infer<
  typeof AttributeCategoryProjectionSchema
>;

export const AttributeQueryOneSchema = z
  .object({
    where: AttributeWhereSchemaJson,
    distinct: AttributeDistinctFieldsSchema,
  })
  .partial();

export const AttributeQuerySchema = z
  .object({
    where: AttributeWhereSchemaJson,
    distinct: AttributeDistinctFieldsSchema,
  })
  .partial();

export type AttributeCreate = z.infer<typeof AttributeCreateSchema>;

export type AttributeUpdate = z.infer<typeof AttributeUpdateSchema>;

export type AttributeOrderBy = z.infer<typeof AttributeOrderBySchema>;

export type AttributeOwnSelectFields = z.infer<
  typeof AttributeOwnSelectFieldsSchema
>;

export type AttributeOwnWhere = z.infer<typeof AttributeOwnWhereSchema>;

export type AttributeOwnQuery = z.infer<typeof AttributeOwnQuerySchema>;

export type AttributeOwnQueryOne = z.infer<typeof AttributeOwnQueryOneSchema>;

export type AttributeWhere = z.infer<typeof AttributeWhereSchema>;

export type AttributeInclude = z.infer<typeof AttributeIncludeSchema>;

export type AttributeQueryOne = z.infer<typeof AttributeQueryOneSchema>;

export type AttributeQuery = z.infer<typeof AttributeQuerySchema>;

export type AttributeSelectFields = z.infer<typeof AttributeSelectFieldsSchema>;

export type AttributeProjection = z.infer<typeof AttributeProjectionSchema>;

export const UnitQueryOneSchema = z
  .object({
    where: UnitWhereSchemaJson,
    distinct: UnitDistinctFieldsSchema,
  })
  .partial();

export const UnitQuerySchema = z
  .object({
    where: UnitWhereSchemaJson,
    distinct: UnitDistinctFieldsSchema,
  })
  .partial();

export type UnitCreate = z.infer<typeof UnitCreateSchema>;

export type UnitUpdate = z.infer<typeof UnitUpdateSchema>;

export type UnitOrderBy = z.infer<typeof UnitOrderBySchema>;

export type UnitOwnSelectFields = z.infer<typeof UnitOwnSelectFieldsSchema>;

export type UnitOwnWhere = z.infer<typeof UnitOwnWhereSchema>;

export type UnitOwnQuery = z.infer<typeof UnitOwnQuerySchema>;

export type UnitOwnQueryOne = z.infer<typeof UnitOwnQueryOneSchema>;

export type UnitWhere = z.infer<typeof UnitWhereSchema>;

export type UnitInclude = z.infer<typeof UnitIncludeSchema>;

export type UnitQueryOne = z.infer<typeof UnitQueryOneSchema>;

export type UnitQuery = z.infer<typeof UnitQuerySchema>;

export type UnitSelectFields = z.infer<typeof UnitSelectFieldsSchema>;

export type UnitProjection = z.infer<typeof UnitProjectionSchema>;

export const AttributeUnitQueryOneSchema = z
  .object({
    where: AttributeUnitWhereSchemaJson,
    distinct: AttributeUnitDistinctFieldsSchema,
  })
  .partial();

export const AttributeUnitQuerySchema = z
  .object({
    where: AttributeUnitWhereSchemaJson,
    distinct: AttributeUnitDistinctFieldsSchema,
  })
  .partial();

export type AttributeUnitCreate = z.infer<typeof AttributeUnitCreateSchema>;

export type AttributeUnitUpdate = z.infer<typeof AttributeUnitUpdateSchema>;

export type AttributeUnitOrderBy = z.infer<typeof AttributeUnitOrderBySchema>;

export type AttributeUnitOwnSelectFields = z.infer<
  typeof AttributeUnitOwnSelectFieldsSchema
>;

export type AttributeUnitOwnWhere = z.infer<typeof AttributeUnitOwnWhereSchema>;

export type AttributeUnitOwnQuery = z.infer<typeof AttributeUnitOwnQuerySchema>;

export type AttributeUnitOwnQueryOne = z.infer<
  typeof AttributeUnitOwnQueryOneSchema
>;

export type AttributeUnitWhere = z.infer<typeof AttributeUnitWhereSchema>;

export type AttributeUnitInclude = z.infer<typeof AttributeUnitIncludeSchema>;

export type AttributeUnitQueryOne = z.infer<typeof AttributeUnitQueryOneSchema>;

export type AttributeUnitQuery = z.infer<typeof AttributeUnitQuerySchema>;

export type AttributeUnitSelectFields = z.infer<
  typeof AttributeUnitSelectFieldsSchema
>;

export type AttributeUnitProjection = z.infer<
  typeof AttributeUnitProjectionSchema
>;

export const AttributeValueQueryOneSchema = z
  .object({
    where: AttributeValueWhereSchemaJson,
    distinct: AttributeValueDistinctFieldsSchema,
  })
  .partial();

export const AttributeValueQuerySchema = z
  .object({
    where: AttributeValueWhereSchemaJson,
    distinct: AttributeValueDistinctFieldsSchema,
  })
  .partial();

export type AttributeValueCreate = z.infer<typeof AttributeValueCreateSchema>;

export type AttributeValueUpdate = z.infer<typeof AttributeValueUpdateSchema>;

export type AttributeValueOrderBy = z.infer<typeof AttributeValueOrderBySchema>;

export type AttributeValueOwnSelectFields = z.infer<
  typeof AttributeValueOwnSelectFieldsSchema
>;

export type AttributeValueOwnWhere = z.infer<
  typeof AttributeValueOwnWhereSchema
>;

export type AttributeValueOwnQuery = z.infer<
  typeof AttributeValueOwnQuerySchema
>;

export type AttributeValueOwnQueryOne = z.infer<
  typeof AttributeValueOwnQueryOneSchema
>;

export type AttributeValueWhere = z.infer<typeof AttributeValueWhereSchema>;

export type AttributeValueInclude = z.infer<typeof AttributeValueIncludeSchema>;

export type AttributeValueQueryOne = z.infer<
  typeof AttributeValueQueryOneSchema
>;

export type AttributeValueQuery = z.infer<typeof AttributeValueQuerySchema>;

export type AttributeValueSelectFields = z.infer<
  typeof AttributeValueSelectFieldsSchema
>;

export type AttributeValueProjection = z.infer<
  typeof AttributeValueProjectionSchema
>;

export const CurrencyQueryOneSchema = z
  .object({
    where: CurrencyWhereSchemaJson,
    distinct: CurrencyDistinctFieldsSchema,
  })
  .partial();

export const CurrencyQuerySchema = z
  .object({
    where: CurrencyWhereSchemaJson,
    distinct: CurrencyDistinctFieldsSchema,
  })
  .partial();

export type CurrencyCreate = z.infer<typeof CurrencyCreateSchema>;

export type CurrencyUpdate = z.infer<typeof CurrencyUpdateSchema>;

export type CurrencyOrderBy = z.infer<typeof CurrencyOrderBySchema>;

export type CurrencyOwnSelectFields = z.infer<
  typeof CurrencyOwnSelectFieldsSchema
>;

export type CurrencyOwnWhere = z.infer<typeof CurrencyOwnWhereSchema>;

export type CurrencyOwnQuery = z.infer<typeof CurrencyOwnQuerySchema>;

export type CurrencyOwnQueryOne = z.infer<typeof CurrencyOwnQueryOneSchema>;

export type CurrencyWhere = z.infer<typeof CurrencyWhereSchema>;

export type CurrencyInclude = z.infer<typeof CurrencyIncludeSchema>;

export type CurrencyQueryOne = z.infer<typeof CurrencyQueryOneSchema>;

export type CurrencyQuery = z.infer<typeof CurrencyQuerySchema>;

export type CurrencySelectFields = z.infer<typeof CurrencySelectFieldsSchema>;

export type CurrencyProjection = z.infer<typeof CurrencyProjectionSchema>;

export const PriceLevelQueryOneSchema = z
  .object({
    where: PriceLevelWhereSchemaJson,
    distinct: PriceLevelDistinctFieldsSchema,
  })
  .partial();

export const PriceLevelQuerySchema = z
  .object({
    where: PriceLevelWhereSchemaJson,
    distinct: PriceLevelDistinctFieldsSchema,
  })
  .partial();

export type PriceLevelCreate = z.infer<typeof PriceLevelCreateSchema>;

export type PriceLevelUpdate = z.infer<typeof PriceLevelUpdateSchema>;

export type PriceLevelOrderBy = z.infer<typeof PriceLevelOrderBySchema>;

export type PriceLevelOwnSelectFields = z.infer<
  typeof PriceLevelOwnSelectFieldsSchema
>;

export type PriceLevelOwnWhere = z.infer<typeof PriceLevelOwnWhereSchema>;

export type PriceLevelOwnQuery = z.infer<typeof PriceLevelOwnQuerySchema>;

export type PriceLevelOwnQueryOne = z.infer<typeof PriceLevelOwnQueryOneSchema>;

export type PriceLevelWhere = z.infer<typeof PriceLevelWhereSchema>;

export type PriceLevelInclude = z.infer<typeof PriceLevelIncludeSchema>;

export type PriceLevelQueryOne = z.infer<typeof PriceLevelQueryOneSchema>;

export type PriceLevelQuery = z.infer<typeof PriceLevelQuerySchema>;

export type PriceLevelSelectFields = z.infer<
  typeof PriceLevelSelectFieldsSchema
>;

export type PriceLevelProjection = z.infer<typeof PriceLevelProjectionSchema>;

export const PriceQueryOneSchema = z
  .object({
    where: PriceWhereSchemaJson,
    distinct: PriceDistinctFieldsSchema,
  })
  .partial();

export const PriceQuerySchema = z
  .object({
    where: PriceWhereSchemaJson,
    distinct: PriceDistinctFieldsSchema,
  })
  .partial();

export type PriceCreate = z.infer<typeof PriceCreateSchema>;

export type PriceUpdate = z.infer<typeof PriceUpdateSchema>;

export type PriceOrderBy = z.infer<typeof PriceOrderBySchema>;

export type PriceOwnSelectFields = z.infer<typeof PriceOwnSelectFieldsSchema>;

export type PriceOwnWhere = z.infer<typeof PriceOwnWhereSchema>;

export type PriceOwnQuery = z.infer<typeof PriceOwnQuerySchema>;

export type PriceOwnQueryOne = z.infer<typeof PriceOwnQueryOneSchema>;

export type PriceWhere = z.infer<typeof PriceWhereSchema>;

export type PriceInclude = z.infer<typeof PriceIncludeSchema>;

export type PriceQueryOne = z.infer<typeof PriceQueryOneSchema>;

export type PriceQuery = z.infer<typeof PriceQuerySchema>;

export type PriceSelectFields = z.infer<typeof PriceSelectFieldsSchema>;

export type PriceProjection = z.infer<typeof PriceProjectionSchema>;

export const QuantityQueryOneSchema = z
  .object({
    where: QuantityWhereSchemaJson,
    distinct: QuantityDistinctFieldsSchema,
  })
  .partial();

export const QuantityQuerySchema = z
  .object({
    where: QuantityWhereSchemaJson,
    distinct: QuantityDistinctFieldsSchema,
  })
  .partial();

export type QuantityCreate = z.infer<typeof QuantityCreateSchema>;

export type QuantityUpdate = z.infer<typeof QuantityUpdateSchema>;

export type QuantityOrderBy = z.infer<typeof QuantityOrderBySchema>;

export type QuantityOwnSelectFields = z.infer<
  typeof QuantityOwnSelectFieldsSchema
>;

export type QuantityOwnWhere = z.infer<typeof QuantityOwnWhereSchema>;

export type QuantityOwnQuery = z.infer<typeof QuantityOwnQuerySchema>;

export type QuantityOwnQueryOne = z.infer<typeof QuantityOwnQueryOneSchema>;

export type QuantityWhere = z.infer<typeof QuantityWhereSchema>;

export type QuantityInclude = z.infer<typeof QuantityIncludeSchema>;

export type QuantityQueryOne = z.infer<typeof QuantityQueryOneSchema>;

export type QuantityQuery = z.infer<typeof QuantityQuerySchema>;

export type QuantitySelectFields = z.infer<typeof QuantitySelectFieldsSchema>;

export type QuantityProjection = z.infer<typeof QuantityProjectionSchema>;

export const SerialNumberQueryOneSchema = z
  .object({
    where: SerialNumberWhereSchemaJson,
    distinct: SerialNumberDistinctFieldsSchema,
  })
  .partial();

export const SerialNumberQuerySchema = z
  .object({
    where: SerialNumberWhereSchemaJson,
    distinct: SerialNumberDistinctFieldsSchema,
  })
  .partial();

export type SerialNumberCreate = z.infer<typeof SerialNumberCreateSchema>;

export type SerialNumberUpdate = z.infer<typeof SerialNumberUpdateSchema>;

export type SerialNumberOrderBy = z.infer<typeof SerialNumberOrderBySchema>;

export type SerialNumberOwnSelectFields = z.infer<
  typeof SerialNumberOwnSelectFieldsSchema
>;

export type SerialNumberOwnWhere = z.infer<typeof SerialNumberOwnWhereSchema>;

export type SerialNumberOwnQuery = z.infer<typeof SerialNumberOwnQuerySchema>;

export type SerialNumberOwnQueryOne = z.infer<
  typeof SerialNumberOwnQueryOneSchema
>;

export type SerialNumberWhere = z.infer<typeof SerialNumberWhereSchema>;

export type SerialNumberInclude = z.infer<typeof SerialNumberIncludeSchema>;

export type SerialNumberQueryOne = z.infer<typeof SerialNumberQueryOneSchema>;

export type SerialNumberQuery = z.infer<typeof SerialNumberQuerySchema>;

export type SerialNumberSelectFields = z.infer<
  typeof SerialNumberSelectFieldsSchema
>;

export type SerialNumberProjection = z.infer<
  typeof SerialNumberProjectionSchema
>;

export const DiscountQueryOneSchema = z
  .object({
    where: DiscountWhereSchemaJson,
    distinct: DiscountDistinctFieldsSchema,
  })
  .partial();

export const DiscountQuerySchema = z
  .object({
    where: DiscountWhereSchemaJson,
    distinct: DiscountDistinctFieldsSchema,
  })
  .partial();

export type DiscountCreate = z.infer<typeof DiscountCreateSchema>;

export type DiscountUpdate = z.infer<typeof DiscountUpdateSchema>;

export type DiscountOrderBy = z.infer<typeof DiscountOrderBySchema>;

export type DiscountOwnSelectFields = z.infer<
  typeof DiscountOwnSelectFieldsSchema
>;

export type DiscountOwnWhere = z.infer<typeof DiscountOwnWhereSchema>;

export type DiscountOwnQuery = z.infer<typeof DiscountOwnQuerySchema>;

export type DiscountOwnQueryOne = z.infer<typeof DiscountOwnQueryOneSchema>;

export type DiscountWhere = z.infer<typeof DiscountWhereSchema>;

export type DiscountInclude = z.infer<typeof DiscountIncludeSchema>;

export type DiscountQueryOne = z.infer<typeof DiscountQueryOneSchema>;

export type DiscountQuery = z.infer<typeof DiscountQuerySchema>;

export type DiscountSelectFields = z.infer<typeof DiscountSelectFieldsSchema>;

export type DiscountProjection = z.infer<typeof DiscountProjectionSchema>;

export const DiscountTargetQueryOneSchema = z
  .object({
    where: DiscountTargetWhereSchemaJson,
    distinct: DiscountTargetDistinctFieldsSchema,
  })
  .partial();

export const DiscountTargetQuerySchema = z
  .object({
    where: DiscountTargetWhereSchemaJson,
    distinct: DiscountTargetDistinctFieldsSchema,
  })
  .partial();

export type DiscountTargetCreate = z.infer<typeof DiscountTargetCreateSchema>;

export type DiscountTargetUpdate = z.infer<typeof DiscountTargetUpdateSchema>;

export type DiscountTargetOrderBy = z.infer<typeof DiscountTargetOrderBySchema>;

export type DiscountTargetOwnSelectFields = z.infer<
  typeof DiscountTargetOwnSelectFieldsSchema
>;

export type DiscountTargetOwnWhere = z.infer<
  typeof DiscountTargetOwnWhereSchema
>;

export type DiscountTargetOwnQuery = z.infer<
  typeof DiscountTargetOwnQuerySchema
>;

export type DiscountTargetOwnQueryOne = z.infer<
  typeof DiscountTargetOwnQueryOneSchema
>;

export type DiscountTargetWhere = z.infer<typeof DiscountTargetWhereSchema>;

export type DiscountTargetInclude = z.infer<typeof DiscountTargetIncludeSchema>;

export type DiscountTargetQueryOne = z.infer<
  typeof DiscountTargetQueryOneSchema
>;

export type DiscountTargetQuery = z.infer<typeof DiscountTargetQuerySchema>;

export type DiscountTargetSelectFields = z.infer<
  typeof DiscountTargetSelectFieldsSchema
>;

export type DiscountTargetProjection = z.infer<
  typeof DiscountTargetProjectionSchema
>;

export const StoreQueryOneSchema = z
  .object({
    where: StoreWhereSchemaJson,
    distinct: StoreDistinctFieldsSchema,
  })
  .partial();

export const StoreQuerySchema = z
  .object({
    where: StoreWhereSchemaJson,
    distinct: StoreDistinctFieldsSchema,
  })
  .partial();

export type StoreCreate = z.infer<typeof StoreCreateSchema>;

export type StoreUpdate = z.infer<typeof StoreUpdateSchema>;

export type StoreOrderBy = z.infer<typeof StoreOrderBySchema>;

export type StoreOwnSelectFields = z.infer<typeof StoreOwnSelectFieldsSchema>;

export type StoreOwnWhere = z.infer<typeof StoreOwnWhereSchema>;

export type StoreOwnQuery = z.infer<typeof StoreOwnQuerySchema>;

export type StoreOwnQueryOne = z.infer<typeof StoreOwnQueryOneSchema>;

export type StoreWhere = z.infer<typeof StoreWhereSchema>;

export type StoreInclude = z.infer<typeof StoreIncludeSchema>;

export type StoreQueryOne = z.infer<typeof StoreQueryOneSchema>;

export type StoreQuery = z.infer<typeof StoreQuerySchema>;

export type StoreSelectFields = z.infer<typeof StoreSelectFieldsSchema>;

export type StoreProjection = z.infer<typeof StoreProjectionSchema>;

export const WarrantyPolicyQueryOneSchema = z
  .object({
    where: WarrantyPolicyWhereSchemaJson,
    distinct: WarrantyPolicyDistinctFieldsSchema,
  })
  .partial();

export const WarrantyPolicyQuerySchema = z
  .object({
    where: WarrantyPolicyWhereSchemaJson,
    distinct: WarrantyPolicyDistinctFieldsSchema,
  })
  .partial();

export type WarrantyPolicyCreate = z.infer<typeof WarrantyPolicyCreateSchema>;

export type WarrantyPolicyUpdate = z.infer<typeof WarrantyPolicyUpdateSchema>;

export type WarrantyPolicyOrderBy = z.infer<typeof WarrantyPolicyOrderBySchema>;

export type WarrantyPolicyOwnSelectFields = z.infer<
  typeof WarrantyPolicyOwnSelectFieldsSchema
>;

export type WarrantyPolicyOwnWhere = z.infer<
  typeof WarrantyPolicyOwnWhereSchema
>;

export type WarrantyPolicyOwnQuery = z.infer<
  typeof WarrantyPolicyOwnQuerySchema
>;

export type WarrantyPolicyOwnQueryOne = z.infer<
  typeof WarrantyPolicyOwnQueryOneSchema
>;

export type WarrantyPolicyWhere = z.infer<typeof WarrantyPolicyWhereSchema>;

export type WarrantyPolicyInclude = z.infer<typeof WarrantyPolicyIncludeSchema>;

export type WarrantyPolicyQueryOne = z.infer<
  typeof WarrantyPolicyQueryOneSchema
>;

export type WarrantyPolicyQuery = z.infer<typeof WarrantyPolicyQuerySchema>;

export type WarrantyPolicySelectFields = z.infer<
  typeof WarrantyPolicySelectFieldsSchema
>;

export type WarrantyPolicyProjection = z.infer<
  typeof WarrantyPolicyProjectionSchema
>;

export const ProductWarrantyQueryOneSchema = z
  .object({
    where: ProductWarrantyWhereSchemaJson,
    distinct: ProductWarrantyDistinctFieldsSchema,
  })
  .partial();

export const ProductWarrantyQuerySchema = z
  .object({
    where: ProductWarrantyWhereSchemaJson,
    distinct: ProductWarrantyDistinctFieldsSchema,
  })
  .partial();

export type ProductWarrantyCreate = z.infer<typeof ProductWarrantyCreateSchema>;

export type ProductWarrantyUpdate = z.infer<typeof ProductWarrantyUpdateSchema>;

export type ProductWarrantyOrderBy = z.infer<
  typeof ProductWarrantyOrderBySchema
>;

export type ProductWarrantyOwnSelectFields = z.infer<
  typeof ProductWarrantyOwnSelectFieldsSchema
>;

export type ProductWarrantyOwnWhere = z.infer<
  typeof ProductWarrantyOwnWhereSchema
>;

export type ProductWarrantyOwnQuery = z.infer<
  typeof ProductWarrantyOwnQuerySchema
>;

export type ProductWarrantyOwnQueryOne = z.infer<
  typeof ProductWarrantyOwnQueryOneSchema
>;

export type ProductWarrantyWhere = z.infer<typeof ProductWarrantyWhereSchema>;

export type ProductWarrantyInclude = z.infer<
  typeof ProductWarrantyIncludeSchema
>;

export type ProductWarrantyQueryOne = z.infer<
  typeof ProductWarrantyQueryOneSchema
>;

export type ProductWarrantyQuery = z.infer<typeof ProductWarrantyQuerySchema>;

export type ProductWarrantySelectFields = z.infer<
  typeof ProductWarrantySelectFieldsSchema
>;

export type ProductWarrantyProjection = z.infer<
  typeof ProductWarrantyProjectionSchema
>;

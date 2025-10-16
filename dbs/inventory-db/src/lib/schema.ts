/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PZ from '@puq/zod';
import { z } from 'zod';
import { slugify } from '@puq/names';

export const takeSchema = z.coerce.number().int().min(1).default(20).optional();
export const skipSchema = z.coerce.number().int().min(0).default(0).optional();

export const PaginationSchema = z
  .object({
    take: takeSchema,
    skip: skipSchema,
  })
  .partial();

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

export const CategoryOwnProjectionSchema = z
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

export const CategoryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  CategoryOwnProjectionSchema
);

export const ProductOwnProjectionSchema = z
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

export const ProductOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ProductOwnProjectionSchema
);

export const ProductCategoryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    productId: z.boolean(),
    categoryId: z.boolean(),
    product: z.boolean(),
    category: z.boolean(),
  })
  .partial();

export const ProductCategoryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ProductCategoryOwnProjectionSchema
);

export const VariantOwnProjectionSchema = z
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

export const VariantOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  VariantOwnProjectionSchema
);

export const AttributeCategoryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    attributes: z.boolean(),
  })
  .partial();

export const AttributeCategoryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  AttributeCategoryOwnProjectionSchema
);

export const AttributeOwnProjectionSchema = z
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

export const AttributeOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  AttributeOwnProjectionSchema
);

export const UnitOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    symbol: z.boolean(),
    attributes: z.boolean(),
  })
  .partial();

export const UnitOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  UnitOwnProjectionSchema
);

export const AttributeUnitOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    attributeId: z.boolean(),
    unitId: z.boolean(),
    attribute: z.boolean(),
    unit: z.boolean(),
  })
  .partial();

export const AttributeUnitOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  AttributeUnitOwnProjectionSchema
);

export const AttributeValueOwnProjectionSchema = z
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

export const AttributeValueOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  AttributeValueOwnProjectionSchema
);

export const CurrencyOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    symbol: z.boolean(),
    priceLevels: z.boolean(),
  })
  .partial();

export const CurrencyOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  CurrencyOwnProjectionSchema
);

export const PriceLevelOwnProjectionSchema = z
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

export const PriceLevelOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PriceLevelOwnProjectionSchema
);

export const PriceOwnProjectionSchema = z
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

export const PriceOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PriceOwnProjectionSchema
);

export const QuantityOwnProjectionSchema = z
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

export const QuantityOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  QuantityOwnProjectionSchema
);

export const SerialNumberOwnProjectionSchema = z
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

export const SerialNumberOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberOwnProjectionSchema
);

export const DiscountOwnProjectionSchema = z
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

export const DiscountOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  DiscountOwnProjectionSchema
);

export const DiscountTargetOwnProjectionSchema = z
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

export const DiscountTargetOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  DiscountTargetOwnProjectionSchema
);

export const StoreOwnProjectionSchema = z
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

export const StoreOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  StoreOwnProjectionSchema
);

export const WarrantyPolicyOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    duration: z.boolean(),
    durationUnit: z.boolean(),
    products: z.boolean(),
  })
  .partial();

export const WarrantyPolicyOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  WarrantyPolicyOwnProjectionSchema
);

export const ProductWarrantyOwnProjectionSchema = z
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

export const ProductWarrantyOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ProductWarrantyOwnProjectionSchema
);

export const CategoryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
  })
  .partial();

export const CategoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  CategoryOwnWhereSchema
);

export const ProductOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    isActive: PZ.BooleanFilterSchema,
    uuid: PZ.StringFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
  })
  .partial();

export const ProductOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ProductOwnWhereSchema
);

export const ProductCategoryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    productId: PZ.IntegerFilterSchema,
    categoryId: PZ.IntegerFilterSchema,
  })
  .partial();

export const ProductCategoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ProductCategoryOwnWhereSchema
);

export const VariantOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    productId: PZ.IntegerFilterSchema,
    sku: PZ.StringFilterSchema,
    upc: PZ.StringFilterSchema,
  })
  .partial();

export const VariantOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  VariantOwnWhereSchema
);

export const AttributeCategoryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
  })
  .partial();

export const AttributeCategoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AttributeCategoryOwnWhereSchema
);

export const AttributeOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    categoryId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
  })
  .partial();

export const AttributeOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AttributeOwnWhereSchema
);

export const UnitOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    symbol: PZ.StringFilterSchema,
  })
  .partial();

export const UnitOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  UnitOwnWhereSchema
);

export const AttributeUnitOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    attributeId: PZ.IntegerFilterSchema,
    unitId: PZ.IntegerFilterSchema,
  })
  .partial();

export const AttributeUnitOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AttributeUnitOwnWhereSchema
);

export const AttributeValueOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    attributeId: PZ.IntegerFilterSchema,
    variantId: PZ.IntegerFilterSchema,
    textValue: PZ.StringFilterSchema,
    booleanValue: PZ.BooleanFilterSchema,
    floatValue: PZ.NumberFilterSchema,
  })
  .partial();

export const AttributeValueOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AttributeValueOwnWhereSchema
);

export const CurrencyOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
    symbol: PZ.StringFilterSchema,
  })
  .partial();

export const CurrencyOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  CurrencyOwnWhereSchema
);

export const PriceLevelOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    currencyId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    taxrate: PZ.NumberFilterSchema,
    notes: PZ.StringFilterSchema,
  })
  .partial();

export const PriceLevelOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PriceLevelOwnWhereSchema
);

export const PriceOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    variantId: PZ.IntegerFilterSchema,
    priceLevelId: PZ.IntegerFilterSchema,
    price: PZ.NumberFilterSchema,
    cost: PZ.NumberFilterSchema,
    description: PZ.StringFilterSchema,
  })
  .partial();

export const PriceOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PriceOwnWhereSchema
);

export const QuantityOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    variantId: PZ.IntegerFilterSchema,
    storeId: PZ.IntegerFilterSchema,
    quantity: PZ.IntegerFilterSchema,
    alertThreshold: PZ.IntegerFilterSchema,
  })
  .partial();

export const QuantityOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  QuantityOwnWhereSchema
);

export const SerialNumberOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    variantId: PZ.IntegerFilterSchema,
    storeId: PZ.IntegerFilterSchema,
    serialNumber: PZ.StringFilterSchema,
    inStock: PZ.BooleanFilterSchema,
  })
  .partial();

export const SerialNumberOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberOwnWhereSchema
);

export const DiscountOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    code: PZ.StringFilterSchema,
    type: DiscountTypeSchema,
    valueType: ValueTypeSchema,
    value: PZ.NumberFilterSchema,
    minQuantity: PZ.IntegerFilterSchema,
    maxQuantity: PZ.IntegerFilterSchema,
    minOrderTotal: PZ.NumberFilterSchema,
    maxOrderTotal: PZ.NumberFilterSchema,
    startDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
    usageLimit: PZ.IntegerFilterSchema,
    usageCount: PZ.IntegerFilterSchema,
  })
  .partial();

export const DiscountOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  DiscountOwnWhereSchema
);

export const DiscountTargetOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    type: DiscountTargetTypeSchema,
    discountId: PZ.IntegerFilterSchema,
    storeId: PZ.IntegerFilterSchema,
    productId: PZ.IntegerFilterSchema,
    variantId: PZ.IntegerFilterSchema,
    priceLevelId: PZ.IntegerFilterSchema,
    categoryId: PZ.IntegerFilterSchema,
  })
  .partial();

export const DiscountTargetOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  DiscountTargetOwnWhereSchema
);

export const StoreOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    priceLevelId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
  })
  .partial();

export const StoreOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  StoreOwnWhereSchema
);

export const WarrantyPolicyOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    duration: PZ.IntegerFilterSchema,
    durationUnit: TimeUnitSchema,
  })
  .partial();

export const WarrantyPolicyOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  WarrantyPolicyOwnWhereSchema
);

export const ProductWarrantyOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    productId: PZ.IntegerFilterSchema,
    variantId: PZ.IntegerFilterSchema,
    policyId: PZ.IntegerFilterSchema,
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
    select: CategoryOwnProjectionSchemaJson,
    omit: CategoryOwnProjectionSchemaJson,
    include: CategoryOwnIncludeSchemaJson,
  })
  .partial();

export const CategoryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CategoryOwnWhereSchemaJson,
    select: CategoryOwnProjectionSchemaJson,
    omit: CategoryOwnProjectionSchemaJson,
    include: CategoryOwnIncludeSchemaJson,
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
    select: ProductOwnProjectionSchemaJson,
    omit: ProductOwnProjectionSchemaJson,
    include: ProductOwnIncludeSchemaJson,
  })
  .partial();

export const ProductOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ProductOwnWhereSchemaJson,
    select: ProductOwnProjectionSchemaJson,
    omit: ProductOwnProjectionSchemaJson,
    include: ProductOwnIncludeSchemaJson,
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
    select: ProductCategoryOwnProjectionSchemaJson,
    omit: ProductCategoryOwnProjectionSchemaJson,
    include: ProductCategoryOwnIncludeSchemaJson,
  })
  .partial();

export const ProductCategoryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ProductCategoryOwnWhereSchemaJson,
    select: ProductCategoryOwnProjectionSchemaJson,
    omit: ProductCategoryOwnProjectionSchemaJson,
    include: ProductCategoryOwnIncludeSchemaJson,
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
    select: VariantOwnProjectionSchemaJson,
    omit: VariantOwnProjectionSchemaJson,
    include: VariantOwnIncludeSchemaJson,
  })
  .partial();

export const VariantOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: VariantOwnWhereSchemaJson,
    select: VariantOwnProjectionSchemaJson,
    omit: VariantOwnProjectionSchemaJson,
    include: VariantOwnIncludeSchemaJson,
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
    select: AttributeCategoryOwnProjectionSchemaJson,
    omit: AttributeCategoryOwnProjectionSchemaJson,
    include: AttributeCategoryOwnIncludeSchemaJson,
  })
  .partial();

export const AttributeCategoryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AttributeCategoryOwnWhereSchemaJson,
    select: AttributeCategoryOwnProjectionSchemaJson,
    omit: AttributeCategoryOwnProjectionSchemaJson,
    include: AttributeCategoryOwnIncludeSchemaJson,
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
    select: AttributeOwnProjectionSchemaJson,
    omit: AttributeOwnProjectionSchemaJson,
    include: AttributeOwnIncludeSchemaJson,
  })
  .partial();

export const AttributeOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AttributeOwnWhereSchemaJson,
    select: AttributeOwnProjectionSchemaJson,
    omit: AttributeOwnProjectionSchemaJson,
    include: AttributeOwnIncludeSchemaJson,
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
    select: UnitOwnProjectionSchemaJson,
    omit: UnitOwnProjectionSchemaJson,
    include: UnitOwnIncludeSchemaJson,
  })
  .partial();

export const UnitOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: UnitOwnWhereSchemaJson,
    select: UnitOwnProjectionSchemaJson,
    omit: UnitOwnProjectionSchemaJson,
    include: UnitOwnIncludeSchemaJson,
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
    select: AttributeUnitOwnProjectionSchemaJson,
    omit: AttributeUnitOwnProjectionSchemaJson,
    include: AttributeUnitOwnIncludeSchemaJson,
  })
  .partial();

export const AttributeUnitOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AttributeUnitOwnWhereSchemaJson,
    select: AttributeUnitOwnProjectionSchemaJson,
    omit: AttributeUnitOwnProjectionSchemaJson,
    include: AttributeUnitOwnIncludeSchemaJson,
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
    select: AttributeValueOwnProjectionSchemaJson,
    omit: AttributeValueOwnProjectionSchemaJson,
    include: AttributeValueOwnIncludeSchemaJson,
  })
  .partial();

export const AttributeValueOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AttributeValueOwnWhereSchemaJson,
    select: AttributeValueOwnProjectionSchemaJson,
    omit: AttributeValueOwnProjectionSchemaJson,
    include: AttributeValueOwnIncludeSchemaJson,
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
    select: CurrencyOwnProjectionSchemaJson,
    omit: CurrencyOwnProjectionSchemaJson,
    include: CurrencyOwnIncludeSchemaJson,
  })
  .partial();

export const CurrencyOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CurrencyOwnWhereSchemaJson,
    select: CurrencyOwnProjectionSchemaJson,
    omit: CurrencyOwnProjectionSchemaJson,
    include: CurrencyOwnIncludeSchemaJson,
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
    select: PriceLevelOwnProjectionSchemaJson,
    omit: PriceLevelOwnProjectionSchemaJson,
    include: PriceLevelOwnIncludeSchemaJson,
  })
  .partial();

export const PriceLevelOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PriceLevelOwnWhereSchemaJson,
    select: PriceLevelOwnProjectionSchemaJson,
    omit: PriceLevelOwnProjectionSchemaJson,
    include: PriceLevelOwnIncludeSchemaJson,
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
    select: PriceOwnProjectionSchemaJson,
    omit: PriceOwnProjectionSchemaJson,
    include: PriceOwnIncludeSchemaJson,
  })
  .partial();

export const PriceOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PriceOwnWhereSchemaJson,
    select: PriceOwnProjectionSchemaJson,
    omit: PriceOwnProjectionSchemaJson,
    include: PriceOwnIncludeSchemaJson,
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
    select: QuantityOwnProjectionSchemaJson,
    omit: QuantityOwnProjectionSchemaJson,
    include: QuantityOwnIncludeSchemaJson,
  })
  .partial();

export const QuantityOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: QuantityOwnWhereSchemaJson,
    select: QuantityOwnProjectionSchemaJson,
    omit: QuantityOwnProjectionSchemaJson,
    include: QuantityOwnIncludeSchemaJson,
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
    select: SerialNumberOwnProjectionSchemaJson,
    omit: SerialNumberOwnProjectionSchemaJson,
    include: SerialNumberOwnIncludeSchemaJson,
  })
  .partial();

export const SerialNumberOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SerialNumberOwnWhereSchemaJson,
    select: SerialNumberOwnProjectionSchemaJson,
    omit: SerialNumberOwnProjectionSchemaJson,
    include: SerialNumberOwnIncludeSchemaJson,
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
    select: DiscountOwnProjectionSchemaJson,
    omit: DiscountOwnProjectionSchemaJson,
    include: DiscountOwnIncludeSchemaJson,
  })
  .partial();

export const DiscountOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: DiscountOwnWhereSchemaJson,
    select: DiscountOwnProjectionSchemaJson,
    omit: DiscountOwnProjectionSchemaJson,
    include: DiscountOwnIncludeSchemaJson,
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
    select: DiscountTargetOwnProjectionSchemaJson,
    omit: DiscountTargetOwnProjectionSchemaJson,
    include: DiscountTargetOwnIncludeSchemaJson,
  })
  .partial();

export const DiscountTargetOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: DiscountTargetOwnWhereSchemaJson,
    select: DiscountTargetOwnProjectionSchemaJson,
    omit: DiscountTargetOwnProjectionSchemaJson,
    include: DiscountTargetOwnIncludeSchemaJson,
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
    select: StoreOwnProjectionSchemaJson,
    omit: StoreOwnProjectionSchemaJson,
    include: StoreOwnIncludeSchemaJson,
  })
  .partial();

export const StoreOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: StoreOwnWhereSchemaJson,
    select: StoreOwnProjectionSchemaJson,
    omit: StoreOwnProjectionSchemaJson,
    include: StoreOwnIncludeSchemaJson,
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
    select: WarrantyPolicyOwnProjectionSchemaJson,
    omit: WarrantyPolicyOwnProjectionSchemaJson,
    include: WarrantyPolicyOwnIncludeSchemaJson,
  })
  .partial();

export const WarrantyPolicyOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: WarrantyPolicyOwnWhereSchemaJson,
    select: WarrantyPolicyOwnProjectionSchemaJson,
    omit: WarrantyPolicyOwnProjectionSchemaJson,
    include: WarrantyPolicyOwnIncludeSchemaJson,
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
    select: ProductWarrantyOwnProjectionSchemaJson,
    omit: ProductWarrantyOwnProjectionSchemaJson,
    include: ProductWarrantyOwnIncludeSchemaJson,
  })
  .partial();

export const ProductWarrantyOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ProductWarrantyOwnWhereSchemaJson,
    select: ProductWarrantyOwnProjectionSchemaJson,
    omit: ProductWarrantyOwnProjectionSchemaJson,
    include: ProductWarrantyOwnIncludeSchemaJson,
  })
  .partial();

export const CategoryCreateSchema = z
  .object({
    parentId: z.int().optional(),
    name: z.string(),
    slug: z.string().optional(),
  })
  .transform(slugTransformer('name'));

export const CategoryUpdateSchema = z
  .object({
    parentId: z.int().optional().optional(),
    name: z.string().optional(),
    slug: z.string().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    parent: z
      .object({
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      })
      .partial(),
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

export const CategoryProjectionSchema = z
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

export const CategoryProjectionSchemaJson = z.preprocess(
  jsonParser,
  CategoryProjectionSchema
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

export const ProductCreateSchema = z
  .object({
    isActive: z.boolean().optional(),
    name: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
  })
  .transform(slugTransformer('name'));

export const ProductUpdateSchema = z
  .object({
    isActive: z.boolean().optional().optional(),
    name: z.string().optional(),
    slug: z.string().optional().optional(),
    description: z.string().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    isActive: PZ.BooleanFilterSchema,
    uuid: PZ.StringFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
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

export const ProductProjectionSchema = z
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

export const ProductProjectionSchemaJson = z.preprocess(
  jsonParser,
  ProductProjectionSchema
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

export const ProductCategoryCreateSchema = z.object({
  productId: z.int(),
  categoryId: z.int(),
});

export const ProductCategoryUpdateSchema = z.object({
  productId: z.int().optional(),
  categoryId: z.int().optional(),
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
    id: PZ.IntegerFilterSchema,
    productId: PZ.IntegerFilterSchema,
    categoryId: PZ.IntegerFilterSchema,
    product: z
      .object({
        some: ProductOwnWhereSchema,
        every: ProductOwnWhereSchema,
        none: ProductOwnWhereSchema,
      })
      .partial(),
    category: z
      .object({
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ProductCategoryWhereSchemaJson = z.preprocess(
  jsonParser,
  ProductCategoryWhereSchema
);

export const ProductCategoryProjectionSchema = z
  .object({
    id: z.boolean(),
    productId: z.boolean(),
    categoryId: z.boolean(),
    product: z.boolean().or(ProductOwnQueryOneSchema),
    category: z.boolean().or(CategoryOwnQueryOneSchema),
  })
  .partial();

export const ProductCategoryProjectionSchemaJson = z.preprocess(
  jsonParser,
  ProductCategoryProjectionSchema
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

export const VariantCreateSchema = z.object({
  productId: z.int(),
  sku: z.string(),
  upc: z.string(),
});

export const VariantUpdateSchema = z.object({
  productId: z.int().optional(),
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
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    productId: PZ.IntegerFilterSchema,
    sku: PZ.StringFilterSchema,
    upc: PZ.StringFilterSchema,
    product: z
      .object({
        some: ProductOwnWhereSchema,
        every: ProductOwnWhereSchema,
        none: ProductOwnWhereSchema,
      })
      .partial(),
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

export const VariantProjectionSchema = z
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

export const VariantProjectionSchemaJson = z.preprocess(
  jsonParser,
  VariantProjectionSchema
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

export const AttributeCategoryCreateSchema = z
  .object({
    name: z.string(),
    slug: z.string().optional(),
  })
  .transform(slugTransformer('name'));

export const AttributeCategoryUpdateSchema = z
  .object({
    name: z.string().optional(),
    slug: z.string().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
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

export const AttributeCategoryProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    attributes: z.boolean().or(AttributeOwnQuerySchema),
  })
  .partial();

export const AttributeCategoryProjectionSchemaJson = z.preprocess(
  jsonParser,
  AttributeCategoryProjectionSchema
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

export const AttributeCreateSchema = z.object({
  categoryId: z.int().optional(),
  name: z.string(),
  description: z.string().optional(),
});

export const AttributeUpdateSchema = z.object({
  categoryId: z.int().optional().optional(),
  name: z.string().optional(),
  description: z.string().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    categoryId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    category: z
      .object({
        some: AttributeCategoryOwnWhereSchema,
        every: AttributeCategoryOwnWhereSchema,
        none: AttributeCategoryOwnWhereSchema,
      })
      .partial(),
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

export const AttributeProjectionSchema = z
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

export const AttributeProjectionSchemaJson = z.preprocess(
  jsonParser,
  AttributeProjectionSchema
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

export const UnitCreateSchema = z.object({
  name: z.string(),
  symbol: z.string(),
});

export const UnitUpdateSchema = z.object({
  name: z.string().optional(),
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
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    symbol: PZ.StringFilterSchema,
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

export const UnitProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    symbol: z.boolean(),
    attributes: z.boolean().or(AttributeUnitOwnQuerySchema),
  })
  .partial();

export const UnitProjectionSchemaJson = z.preprocess(
  jsonParser,
  UnitProjectionSchema
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

export const AttributeUnitCreateSchema = z.object({
  attributeId: z.int(),
  unitId: z.int(),
});

export const AttributeUnitUpdateSchema = z.object({
  attributeId: z.int().optional(),
  unitId: z.int().optional(),
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
    id: PZ.IntegerFilterSchema,
    attributeId: PZ.IntegerFilterSchema,
    unitId: PZ.IntegerFilterSchema,
    attribute: z
      .object({
        some: AttributeOwnWhereSchema,
        every: AttributeOwnWhereSchema,
        none: AttributeOwnWhereSchema,
      })
      .partial(),
    unit: z
      .object({
        some: UnitOwnWhereSchema,
        every: UnitOwnWhereSchema,
        none: UnitOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const AttributeUnitWhereSchemaJson = z.preprocess(
  jsonParser,
  AttributeUnitWhereSchema
);

export const AttributeUnitProjectionSchema = z
  .object({
    id: z.boolean(),
    attributeId: z.boolean(),
    unitId: z.boolean(),
    attribute: z.boolean().or(AttributeOwnQueryOneSchema),
    unit: z.boolean().or(UnitOwnQueryOneSchema),
  })
  .partial();

export const AttributeUnitProjectionSchemaJson = z.preprocess(
  jsonParser,
  AttributeUnitProjectionSchema
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

export const AttributeValueCreateSchema = z.object({
  attributeId: z.int(),
  variantId: z.int(),
  textValue: z.string().optional(),
  booleanValue: z.boolean().optional(),
  floatValue: z.number().optional(),
});

export const AttributeValueUpdateSchema = z.object({
  attributeId: z.int().optional(),
  variantId: z.int().optional(),
  textValue: z.string().optional().optional(),
  booleanValue: z.boolean().optional().optional(),
  floatValue: z.number().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    attributeId: PZ.IntegerFilterSchema,
    variantId: PZ.IntegerFilterSchema,
    textValue: PZ.StringFilterSchema,
    booleanValue: PZ.BooleanFilterSchema,
    floatValue: PZ.NumberFilterSchema,
    variant: z
      .object({
        some: VariantOwnWhereSchema,
        every: VariantOwnWhereSchema,
        none: VariantOwnWhereSchema,
      })
      .partial(),
    attribute: z
      .object({
        some: AttributeOwnWhereSchema,
        every: AttributeOwnWhereSchema,
        none: AttributeOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const AttributeValueWhereSchemaJson = z.preprocess(
  jsonParser,
  AttributeValueWhereSchema
);

export const AttributeValueProjectionSchema = z
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

export const AttributeValueProjectionSchemaJson = z.preprocess(
  jsonParser,
  AttributeValueProjectionSchema
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

export const CurrencyCreateSchema = z.object({
  name: z.string(),
  code: z.string(),
  symbol: z.string().optional(),
});

export const CurrencyUpdateSchema = z.object({
  name: z.string().optional(),
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
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
    symbol: PZ.StringFilterSchema,
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

export const CurrencyProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    symbol: z.boolean(),
    priceLevels: z.boolean().or(PriceLevelOwnQuerySchema),
  })
  .partial();

export const CurrencyProjectionSchemaJson = z.preprocess(
  jsonParser,
  CurrencyProjectionSchema
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

export const PriceLevelCreateSchema = z
  .object({
    currencyId: z.int(),
    name: z.string(),
    slug: z.string().optional(),
    taxrate: z.number(),
    notes: z.string().optional(),
  })
  .transform(slugTransformer('name'));

export const PriceLevelUpdateSchema = z
  .object({
    currencyId: z.int().optional(),
    name: z.string().optional(),
    slug: z.string().optional().optional(),
    taxrate: z.number().optional(),
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
    id: PZ.IntegerFilterSchema,
    currencyId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    taxrate: PZ.NumberFilterSchema,
    notes: PZ.StringFilterSchema,
    currency: z
      .object({
        some: CurrencyOwnWhereSchema,
        every: CurrencyOwnWhereSchema,
        none: CurrencyOwnWhereSchema,
      })
      .partial(),
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

export const PriceLevelProjectionSchema = z
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

export const PriceLevelProjectionSchemaJson = z.preprocess(
  jsonParser,
  PriceLevelProjectionSchema
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

export const PriceCreateSchema = z.object({
  variantId: z.int(),
  priceLevelId: z.int(),
  price: z.number(),
  cost: z.number(),
  description: z.string().optional(),
});

export const PriceUpdateSchema = z.object({
  variantId: z.int().optional(),
  priceLevelId: z.int().optional(),
  price: z.number().optional(),
  cost: z.number().optional(),
  description: z.string().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    variantId: PZ.IntegerFilterSchema,
    priceLevelId: PZ.IntegerFilterSchema,
    price: PZ.NumberFilterSchema,
    cost: PZ.NumberFilterSchema,
    description: PZ.StringFilterSchema,
    variant: z
      .object({
        some: VariantOwnWhereSchema,
        every: VariantOwnWhereSchema,
        none: VariantOwnWhereSchema,
      })
      .partial(),
    priceLevel: z
      .object({
        some: PriceLevelOwnWhereSchema,
        every: PriceLevelOwnWhereSchema,
        none: PriceLevelOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PriceWhereSchemaJson = z.preprocess(jsonParser, PriceWhereSchema);

export const PriceProjectionSchema = z
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

export const PriceProjectionSchemaJson = z.preprocess(
  jsonParser,
  PriceProjectionSchema
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

export const QuantityCreateSchema = z.object({
  variantId: z.int(),
  storeId: z.int(),
  quantity: z.int(),
  alertThreshold: z.int().optional(),
});

export const QuantityUpdateSchema = z.object({
  variantId: z.int().optional(),
  storeId: z.int().optional(),
  quantity: z.int().optional(),
  alertThreshold: z.int().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    variantId: PZ.IntegerFilterSchema,
    storeId: PZ.IntegerFilterSchema,
    quantity: PZ.IntegerFilterSchema,
    alertThreshold: PZ.IntegerFilterSchema,
    variant: z
      .object({
        some: VariantOwnWhereSchema,
        every: VariantOwnWhereSchema,
        none: VariantOwnWhereSchema,
      })
      .partial(),
    store: z
      .object({
        some: StoreOwnWhereSchema,
        every: StoreOwnWhereSchema,
        none: StoreOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const QuantityWhereSchemaJson = z.preprocess(
  jsonParser,
  QuantityWhereSchema
);

export const QuantityProjectionSchema = z
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

export const QuantityProjectionSchemaJson = z.preprocess(
  jsonParser,
  QuantityProjectionSchema
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

export const SerialNumberCreateSchema = z.object({
  variantId: z.int(),
  storeId: z.int(),
  serialNumber: z.string(),
  inStock: z.boolean(),
});

export const SerialNumberUpdateSchema = z.object({
  variantId: z.int().optional(),
  storeId: z.int().optional(),
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
    id: PZ.IntegerFilterSchema,
    variantId: PZ.IntegerFilterSchema,
    storeId: PZ.IntegerFilterSchema,
    serialNumber: PZ.StringFilterSchema,
    inStock: PZ.BooleanFilterSchema,
    variant: z
      .object({
        some: VariantOwnWhereSchema,
        every: VariantOwnWhereSchema,
        none: VariantOwnWhereSchema,
      })
      .partial(),
    store: z
      .object({
        some: StoreOwnWhereSchema,
        every: StoreOwnWhereSchema,
        none: StoreOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const SerialNumberWhereSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberWhereSchema
);

export const SerialNumberProjectionSchema = z
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

export const SerialNumberProjectionSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberProjectionSchema
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

export const DiscountCreateSchema = z.object({
  code: z.string(),
  type: DiscountTypeSchema,
  valueType: ValueTypeSchema,
  value: z.number().optional(),
  minQuantity: z.int().optional(),
  maxQuantity: z.int().optional(),
  minOrderTotal: z.number().optional(),
  maxOrderTotal: z.number().optional(),
  startDate: z.iso.datetime().optional(),
  endDate: z.iso.datetime().optional(),
  usageLimit: z.int().optional(),
  usageCount: z.int().optional(),
});

export const DiscountUpdateSchema = z.object({
  code: z.string().optional(),
  type: DiscountTypeSchema.optional(),
  valueType: ValueTypeSchema.optional(),
  value: z.number().optional().optional(),
  minQuantity: z.int().optional().optional(),
  maxQuantity: z.int().optional().optional(),
  minOrderTotal: z.number().optional().optional(),
  maxOrderTotal: z.number().optional().optional(),
  startDate: z.iso.datetime().optional().optional(),
  endDate: z.iso.datetime().optional().optional(),
  usageLimit: z.int().optional().optional(),
  usageCount: z.int().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    code: PZ.StringFilterSchema,
    type: DiscountTypeSchema,
    valueType: ValueTypeSchema,
    value: PZ.NumberFilterSchema,
    minQuantity: PZ.IntegerFilterSchema,
    maxQuantity: PZ.IntegerFilterSchema,
    minOrderTotal: PZ.NumberFilterSchema,
    maxOrderTotal: PZ.NumberFilterSchema,
    startDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
    usageLimit: PZ.IntegerFilterSchema,
    usageCount: PZ.IntegerFilterSchema,
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

export const DiscountProjectionSchema = z
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

export const DiscountProjectionSchemaJson = z.preprocess(
  jsonParser,
  DiscountProjectionSchema
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

export const DiscountTargetCreateSchema = z.object({
  type: DiscountTargetTypeSchema,
  discountId: z.int(),
  storeId: z.int().optional(),
  productId: z.int().optional(),
  variantId: z.int().optional(),
  priceLevelId: z.int().optional(),
  categoryId: z.int().optional(),
});

export const DiscountTargetUpdateSchema = z.object({
  type: DiscountTargetTypeSchema.optional(),
  discountId: z.int().optional(),
  storeId: z.int().optional().optional(),
  productId: z.int().optional().optional(),
  variantId: z.int().optional().optional(),
  priceLevelId: z.int().optional().optional(),
  categoryId: z.int().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    type: DiscountTargetTypeSchema,
    discountId: PZ.IntegerFilterSchema,
    storeId: PZ.IntegerFilterSchema,
    productId: PZ.IntegerFilterSchema,
    variantId: PZ.IntegerFilterSchema,
    priceLevelId: PZ.IntegerFilterSchema,
    categoryId: PZ.IntegerFilterSchema,
    discount: z
      .object({
        some: DiscountOwnWhereSchema,
        every: DiscountOwnWhereSchema,
        none: DiscountOwnWhereSchema,
      })
      .partial(),
    store: z
      .object({
        some: StoreOwnWhereSchema,
        every: StoreOwnWhereSchema,
        none: StoreOwnWhereSchema,
      })
      .partial(),
    category: z
      .object({
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      })
      .partial(),
    priceLevel: z
      .object({
        some: PriceLevelOwnWhereSchema,
        every: PriceLevelOwnWhereSchema,
        none: PriceLevelOwnWhereSchema,
      })
      .partial(),
    product: z
      .object({
        some: ProductOwnWhereSchema,
        every: ProductOwnWhereSchema,
        none: ProductOwnWhereSchema,
      })
      .partial(),
    variant: z
      .object({
        some: VariantOwnWhereSchema,
        every: VariantOwnWhereSchema,
        none: VariantOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const DiscountTargetWhereSchemaJson = z.preprocess(
  jsonParser,
  DiscountTargetWhereSchema
);

export const DiscountTargetProjectionSchema = z
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

export const DiscountTargetProjectionSchemaJson = z.preprocess(
  jsonParser,
  DiscountTargetProjectionSchema
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

export const StoreCreateSchema = z
  .object({
    priceLevelId: z.int(),
    name: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
  })
  .transform(slugTransformer('name'));

export const StoreUpdateSchema = z
  .object({
    priceLevelId: z.int().optional(),
    name: z.string().optional(),
    slug: z.string().optional().optional(),
    description: z.string().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    priceLevelId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    priceLevel: z
      .object({
        some: PriceLevelOwnWhereSchema,
        every: PriceLevelOwnWhereSchema,
        none: PriceLevelOwnWhereSchema,
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

export const StoreProjectionSchema = z
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

export const StoreProjectionSchemaJson = z.preprocess(
  jsonParser,
  StoreProjectionSchema
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

export const WarrantyPolicyCreateSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  duration: z.int(),
  durationUnit: TimeUnitSchema.optional(),
});

export const WarrantyPolicyUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional().optional(),
  duration: z.int().optional(),
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
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    duration: PZ.IntegerFilterSchema,
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

export const WarrantyPolicyProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    duration: z.boolean(),
    durationUnit: z.boolean(),
    products: z.boolean().or(ProductWarrantyOwnQuerySchema),
  })
  .partial();

export const WarrantyPolicyProjectionSchemaJson = z.preprocess(
  jsonParser,
  WarrantyPolicyProjectionSchema
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

export const ProductWarrantyCreateSchema = z.object({
  productId: z.int().optional(),
  variantId: z.int().optional(),
  policyId: z.int(),
});

export const ProductWarrantyUpdateSchema = z.object({
  productId: z.int().optional().optional(),
  variantId: z.int().optional().optional(),
  policyId: z.int().optional(),
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
    id: PZ.IntegerFilterSchema,
    productId: PZ.IntegerFilterSchema,
    variantId: PZ.IntegerFilterSchema,
    policyId: PZ.IntegerFilterSchema,
    product: z
      .object({
        some: ProductOwnWhereSchema,
        every: ProductOwnWhereSchema,
        none: ProductOwnWhereSchema,
      })
      .partial(),
    variant: z
      .object({
        some: VariantOwnWhereSchema,
        every: VariantOwnWhereSchema,
        none: VariantOwnWhereSchema,
      })
      .partial(),
    policy: z
      .object({
        some: WarrantyPolicyOwnWhereSchema,
        every: WarrantyPolicyOwnWhereSchema,
        none: WarrantyPolicyOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ProductWarrantyWhereSchemaJson = z.preprocess(
  jsonParser,
  ProductWarrantyWhereSchema
);

export const ProductWarrantyProjectionSchema = z
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

export const ProductWarrantyProjectionSchemaJson = z.preprocess(
  jsonParser,
  ProductWarrantyProjectionSchema
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

export const CategoryQueryOneSchema = z
  .object({
    where: CategoryWhereSchemaJson,
    select: CategoryProjectionSchemaJson,
    omit: CategoryProjectionSchemaJson,
    include: CategoryIncludeSchemaJson,
  })
  .partial();

export const CategoryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CategoryWhereSchemaJson,
    select: CategoryProjectionSchemaJson,
    omit: CategoryProjectionSchemaJson,
    include: CategoryIncludeSchemaJson,
  })
  .partial();

export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;

export type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;

export type CategoryOrderBy = z.infer<typeof CategoryOrderBySchema>;

export type CategoryOwnProjection = z.infer<typeof CategoryOwnProjectionSchema>;

export type CategoryOwnWhere = z.infer<typeof CategoryOwnWhereSchema>;

export type CategoryOwnQuery = z.infer<typeof CategoryOwnQuerySchema>;

export type CategoryOwnQueryOne = z.infer<typeof CategoryOwnQueryOneSchema>;

export type CategoryWhere = z.infer<typeof CategoryWhereSchema>;

export type CategoryInclude = z.infer<typeof CategoryIncludeSchema>;

export type CategoryQueryOne = z.infer<typeof CategoryQueryOneSchema>;

export type CategoryQuery = z.infer<typeof CategoryQuerySchema>;

export type CategoryProjection = z.infer<typeof CategoryProjectionSchema>;

export const ProductQueryOneSchema = z
  .object({
    where: ProductWhereSchemaJson,
    select: ProductProjectionSchemaJson,
    omit: ProductProjectionSchemaJson,
    include: ProductIncludeSchemaJson,
  })
  .partial();

export const ProductQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ProductWhereSchemaJson,
    select: ProductProjectionSchemaJson,
    omit: ProductProjectionSchemaJson,
    include: ProductIncludeSchemaJson,
  })
  .partial();

export type ProductCreate = z.infer<typeof ProductCreateSchema>;

export type ProductUpdate = z.infer<typeof ProductUpdateSchema>;

export type ProductOrderBy = z.infer<typeof ProductOrderBySchema>;

export type ProductOwnProjection = z.infer<typeof ProductOwnProjectionSchema>;

export type ProductOwnWhere = z.infer<typeof ProductOwnWhereSchema>;

export type ProductOwnQuery = z.infer<typeof ProductOwnQuerySchema>;

export type ProductOwnQueryOne = z.infer<typeof ProductOwnQueryOneSchema>;

export type ProductWhere = z.infer<typeof ProductWhereSchema>;

export type ProductInclude = z.infer<typeof ProductIncludeSchema>;

export type ProductQueryOne = z.infer<typeof ProductQueryOneSchema>;

export type ProductQuery = z.infer<typeof ProductQuerySchema>;

export type ProductProjection = z.infer<typeof ProductProjectionSchema>;

export const ProductCategoryQueryOneSchema = z
  .object({
    where: ProductCategoryWhereSchemaJson,
    select: ProductCategoryProjectionSchemaJson,
    omit: ProductCategoryProjectionSchemaJson,
    include: ProductCategoryIncludeSchemaJson,
  })
  .partial();

export const ProductCategoryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ProductCategoryWhereSchemaJson,
    select: ProductCategoryProjectionSchemaJson,
    omit: ProductCategoryProjectionSchemaJson,
    include: ProductCategoryIncludeSchemaJson,
  })
  .partial();

export type ProductCategoryCreate = z.infer<typeof ProductCategoryCreateSchema>;

export type ProductCategoryUpdate = z.infer<typeof ProductCategoryUpdateSchema>;

export type ProductCategoryOrderBy = z.infer<
  typeof ProductCategoryOrderBySchema
>;

export type ProductCategoryOwnProjection = z.infer<
  typeof ProductCategoryOwnProjectionSchema
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

export type ProductCategoryProjection = z.infer<
  typeof ProductCategoryProjectionSchema
>;

export const VariantQueryOneSchema = z
  .object({
    where: VariantWhereSchemaJson,
    select: VariantProjectionSchemaJson,
    omit: VariantProjectionSchemaJson,
    include: VariantIncludeSchemaJson,
  })
  .partial();

export const VariantQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: VariantWhereSchemaJson,
    select: VariantProjectionSchemaJson,
    omit: VariantProjectionSchemaJson,
    include: VariantIncludeSchemaJson,
  })
  .partial();

export type VariantCreate = z.infer<typeof VariantCreateSchema>;

export type VariantUpdate = z.infer<typeof VariantUpdateSchema>;

export type VariantOrderBy = z.infer<typeof VariantOrderBySchema>;

export type VariantOwnProjection = z.infer<typeof VariantOwnProjectionSchema>;

export type VariantOwnWhere = z.infer<typeof VariantOwnWhereSchema>;

export type VariantOwnQuery = z.infer<typeof VariantOwnQuerySchema>;

export type VariantOwnQueryOne = z.infer<typeof VariantOwnQueryOneSchema>;

export type VariantWhere = z.infer<typeof VariantWhereSchema>;

export type VariantInclude = z.infer<typeof VariantIncludeSchema>;

export type VariantQueryOne = z.infer<typeof VariantQueryOneSchema>;

export type VariantQuery = z.infer<typeof VariantQuerySchema>;

export type VariantProjection = z.infer<typeof VariantProjectionSchema>;

export const AttributeCategoryQueryOneSchema = z
  .object({
    where: AttributeCategoryWhereSchemaJson,
    select: AttributeCategoryProjectionSchemaJson,
    omit: AttributeCategoryProjectionSchemaJson,
    include: AttributeCategoryIncludeSchemaJson,
  })
  .partial();

export const AttributeCategoryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AttributeCategoryWhereSchemaJson,
    select: AttributeCategoryProjectionSchemaJson,
    omit: AttributeCategoryProjectionSchemaJson,
    include: AttributeCategoryIncludeSchemaJson,
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

export type AttributeCategoryOwnProjection = z.infer<
  typeof AttributeCategoryOwnProjectionSchema
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

export type AttributeCategoryProjection = z.infer<
  typeof AttributeCategoryProjectionSchema
>;

export const AttributeQueryOneSchema = z
  .object({
    where: AttributeWhereSchemaJson,
    select: AttributeProjectionSchemaJson,
    omit: AttributeProjectionSchemaJson,
    include: AttributeIncludeSchemaJson,
  })
  .partial();

export const AttributeQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AttributeWhereSchemaJson,
    select: AttributeProjectionSchemaJson,
    omit: AttributeProjectionSchemaJson,
    include: AttributeIncludeSchemaJson,
  })
  .partial();

export type AttributeCreate = z.infer<typeof AttributeCreateSchema>;

export type AttributeUpdate = z.infer<typeof AttributeUpdateSchema>;

export type AttributeOrderBy = z.infer<typeof AttributeOrderBySchema>;

export type AttributeOwnProjection = z.infer<
  typeof AttributeOwnProjectionSchema
>;

export type AttributeOwnWhere = z.infer<typeof AttributeOwnWhereSchema>;

export type AttributeOwnQuery = z.infer<typeof AttributeOwnQuerySchema>;

export type AttributeOwnQueryOne = z.infer<typeof AttributeOwnQueryOneSchema>;

export type AttributeWhere = z.infer<typeof AttributeWhereSchema>;

export type AttributeInclude = z.infer<typeof AttributeIncludeSchema>;

export type AttributeQueryOne = z.infer<typeof AttributeQueryOneSchema>;

export type AttributeQuery = z.infer<typeof AttributeQuerySchema>;

export type AttributeProjection = z.infer<typeof AttributeProjectionSchema>;

export const UnitQueryOneSchema = z
  .object({
    where: UnitWhereSchemaJson,
    select: UnitProjectionSchemaJson,
    omit: UnitProjectionSchemaJson,
    include: UnitIncludeSchemaJson,
  })
  .partial();

export const UnitQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: UnitWhereSchemaJson,
    select: UnitProjectionSchemaJson,
    omit: UnitProjectionSchemaJson,
    include: UnitIncludeSchemaJson,
  })
  .partial();

export type UnitCreate = z.infer<typeof UnitCreateSchema>;

export type UnitUpdate = z.infer<typeof UnitUpdateSchema>;

export type UnitOrderBy = z.infer<typeof UnitOrderBySchema>;

export type UnitOwnProjection = z.infer<typeof UnitOwnProjectionSchema>;

export type UnitOwnWhere = z.infer<typeof UnitOwnWhereSchema>;

export type UnitOwnQuery = z.infer<typeof UnitOwnQuerySchema>;

export type UnitOwnQueryOne = z.infer<typeof UnitOwnQueryOneSchema>;

export type UnitWhere = z.infer<typeof UnitWhereSchema>;

export type UnitInclude = z.infer<typeof UnitIncludeSchema>;

export type UnitQueryOne = z.infer<typeof UnitQueryOneSchema>;

export type UnitQuery = z.infer<typeof UnitQuerySchema>;

export type UnitProjection = z.infer<typeof UnitProjectionSchema>;

export const AttributeUnitQueryOneSchema = z
  .object({
    where: AttributeUnitWhereSchemaJson,
    select: AttributeUnitProjectionSchemaJson,
    omit: AttributeUnitProjectionSchemaJson,
    include: AttributeUnitIncludeSchemaJson,
  })
  .partial();

export const AttributeUnitQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AttributeUnitWhereSchemaJson,
    select: AttributeUnitProjectionSchemaJson,
    omit: AttributeUnitProjectionSchemaJson,
    include: AttributeUnitIncludeSchemaJson,
  })
  .partial();

export type AttributeUnitCreate = z.infer<typeof AttributeUnitCreateSchema>;

export type AttributeUnitUpdate = z.infer<typeof AttributeUnitUpdateSchema>;

export type AttributeUnitOrderBy = z.infer<typeof AttributeUnitOrderBySchema>;

export type AttributeUnitOwnProjection = z.infer<
  typeof AttributeUnitOwnProjectionSchema
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

export type AttributeUnitProjection = z.infer<
  typeof AttributeUnitProjectionSchema
>;

export const AttributeValueQueryOneSchema = z
  .object({
    where: AttributeValueWhereSchemaJson,
    select: AttributeValueProjectionSchemaJson,
    omit: AttributeValueProjectionSchemaJson,
    include: AttributeValueIncludeSchemaJson,
  })
  .partial();

export const AttributeValueQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AttributeValueWhereSchemaJson,
    select: AttributeValueProjectionSchemaJson,
    omit: AttributeValueProjectionSchemaJson,
    include: AttributeValueIncludeSchemaJson,
  })
  .partial();

export type AttributeValueCreate = z.infer<typeof AttributeValueCreateSchema>;

export type AttributeValueUpdate = z.infer<typeof AttributeValueUpdateSchema>;

export type AttributeValueOrderBy = z.infer<typeof AttributeValueOrderBySchema>;

export type AttributeValueOwnProjection = z.infer<
  typeof AttributeValueOwnProjectionSchema
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

export type AttributeValueProjection = z.infer<
  typeof AttributeValueProjectionSchema
>;

export const CurrencyQueryOneSchema = z
  .object({
    where: CurrencyWhereSchemaJson,
    select: CurrencyProjectionSchemaJson,
    omit: CurrencyProjectionSchemaJson,
    include: CurrencyIncludeSchemaJson,
  })
  .partial();

export const CurrencyQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CurrencyWhereSchemaJson,
    select: CurrencyProjectionSchemaJson,
    omit: CurrencyProjectionSchemaJson,
    include: CurrencyIncludeSchemaJson,
  })
  .partial();

export type CurrencyCreate = z.infer<typeof CurrencyCreateSchema>;

export type CurrencyUpdate = z.infer<typeof CurrencyUpdateSchema>;

export type CurrencyOrderBy = z.infer<typeof CurrencyOrderBySchema>;

export type CurrencyOwnProjection = z.infer<typeof CurrencyOwnProjectionSchema>;

export type CurrencyOwnWhere = z.infer<typeof CurrencyOwnWhereSchema>;

export type CurrencyOwnQuery = z.infer<typeof CurrencyOwnQuerySchema>;

export type CurrencyOwnQueryOne = z.infer<typeof CurrencyOwnQueryOneSchema>;

export type CurrencyWhere = z.infer<typeof CurrencyWhereSchema>;

export type CurrencyInclude = z.infer<typeof CurrencyIncludeSchema>;

export type CurrencyQueryOne = z.infer<typeof CurrencyQueryOneSchema>;

export type CurrencyQuery = z.infer<typeof CurrencyQuerySchema>;

export type CurrencyProjection = z.infer<typeof CurrencyProjectionSchema>;

export const PriceLevelQueryOneSchema = z
  .object({
    where: PriceLevelWhereSchemaJson,
    select: PriceLevelProjectionSchemaJson,
    omit: PriceLevelProjectionSchemaJson,
    include: PriceLevelIncludeSchemaJson,
  })
  .partial();

export const PriceLevelQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PriceLevelWhereSchemaJson,
    select: PriceLevelProjectionSchemaJson,
    omit: PriceLevelProjectionSchemaJson,
    include: PriceLevelIncludeSchemaJson,
  })
  .partial();

export type PriceLevelCreate = z.infer<typeof PriceLevelCreateSchema>;

export type PriceLevelUpdate = z.infer<typeof PriceLevelUpdateSchema>;

export type PriceLevelOrderBy = z.infer<typeof PriceLevelOrderBySchema>;

export type PriceLevelOwnProjection = z.infer<
  typeof PriceLevelOwnProjectionSchema
>;

export type PriceLevelOwnWhere = z.infer<typeof PriceLevelOwnWhereSchema>;

export type PriceLevelOwnQuery = z.infer<typeof PriceLevelOwnQuerySchema>;

export type PriceLevelOwnQueryOne = z.infer<typeof PriceLevelOwnQueryOneSchema>;

export type PriceLevelWhere = z.infer<typeof PriceLevelWhereSchema>;

export type PriceLevelInclude = z.infer<typeof PriceLevelIncludeSchema>;

export type PriceLevelQueryOne = z.infer<typeof PriceLevelQueryOneSchema>;

export type PriceLevelQuery = z.infer<typeof PriceLevelQuerySchema>;

export type PriceLevelProjection = z.infer<typeof PriceLevelProjectionSchema>;

export const PriceQueryOneSchema = z
  .object({
    where: PriceWhereSchemaJson,
    select: PriceProjectionSchemaJson,
    omit: PriceProjectionSchemaJson,
    include: PriceIncludeSchemaJson,
  })
  .partial();

export const PriceQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PriceWhereSchemaJson,
    select: PriceProjectionSchemaJson,
    omit: PriceProjectionSchemaJson,
    include: PriceIncludeSchemaJson,
  })
  .partial();

export type PriceCreate = z.infer<typeof PriceCreateSchema>;

export type PriceUpdate = z.infer<typeof PriceUpdateSchema>;

export type PriceOrderBy = z.infer<typeof PriceOrderBySchema>;

export type PriceOwnProjection = z.infer<typeof PriceOwnProjectionSchema>;

export type PriceOwnWhere = z.infer<typeof PriceOwnWhereSchema>;

export type PriceOwnQuery = z.infer<typeof PriceOwnQuerySchema>;

export type PriceOwnQueryOne = z.infer<typeof PriceOwnQueryOneSchema>;

export type PriceWhere = z.infer<typeof PriceWhereSchema>;

export type PriceInclude = z.infer<typeof PriceIncludeSchema>;

export type PriceQueryOne = z.infer<typeof PriceQueryOneSchema>;

export type PriceQuery = z.infer<typeof PriceQuerySchema>;

export type PriceProjection = z.infer<typeof PriceProjectionSchema>;

export const QuantityQueryOneSchema = z
  .object({
    where: QuantityWhereSchemaJson,
    select: QuantityProjectionSchemaJson,
    omit: QuantityProjectionSchemaJson,
    include: QuantityIncludeSchemaJson,
  })
  .partial();

export const QuantityQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: QuantityWhereSchemaJson,
    select: QuantityProjectionSchemaJson,
    omit: QuantityProjectionSchemaJson,
    include: QuantityIncludeSchemaJson,
  })
  .partial();

export type QuantityCreate = z.infer<typeof QuantityCreateSchema>;

export type QuantityUpdate = z.infer<typeof QuantityUpdateSchema>;

export type QuantityOrderBy = z.infer<typeof QuantityOrderBySchema>;

export type QuantityOwnProjection = z.infer<typeof QuantityOwnProjectionSchema>;

export type QuantityOwnWhere = z.infer<typeof QuantityOwnWhereSchema>;

export type QuantityOwnQuery = z.infer<typeof QuantityOwnQuerySchema>;

export type QuantityOwnQueryOne = z.infer<typeof QuantityOwnQueryOneSchema>;

export type QuantityWhere = z.infer<typeof QuantityWhereSchema>;

export type QuantityInclude = z.infer<typeof QuantityIncludeSchema>;

export type QuantityQueryOne = z.infer<typeof QuantityQueryOneSchema>;

export type QuantityQuery = z.infer<typeof QuantityQuerySchema>;

export type QuantityProjection = z.infer<typeof QuantityProjectionSchema>;

export const SerialNumberQueryOneSchema = z
  .object({
    where: SerialNumberWhereSchemaJson,
    select: SerialNumberProjectionSchemaJson,
    omit: SerialNumberProjectionSchemaJson,
    include: SerialNumberIncludeSchemaJson,
  })
  .partial();

export const SerialNumberQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SerialNumberWhereSchemaJson,
    select: SerialNumberProjectionSchemaJson,
    omit: SerialNumberProjectionSchemaJson,
    include: SerialNumberIncludeSchemaJson,
  })
  .partial();

export type SerialNumberCreate = z.infer<typeof SerialNumberCreateSchema>;

export type SerialNumberUpdate = z.infer<typeof SerialNumberUpdateSchema>;

export type SerialNumberOrderBy = z.infer<typeof SerialNumberOrderBySchema>;

export type SerialNumberOwnProjection = z.infer<
  typeof SerialNumberOwnProjectionSchema
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

export type SerialNumberProjection = z.infer<
  typeof SerialNumberProjectionSchema
>;

export const DiscountQueryOneSchema = z
  .object({
    where: DiscountWhereSchemaJson,
    select: DiscountProjectionSchemaJson,
    omit: DiscountProjectionSchemaJson,
    include: DiscountIncludeSchemaJson,
  })
  .partial();

export const DiscountQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: DiscountWhereSchemaJson,
    select: DiscountProjectionSchemaJson,
    omit: DiscountProjectionSchemaJson,
    include: DiscountIncludeSchemaJson,
  })
  .partial();

export type DiscountCreate = z.infer<typeof DiscountCreateSchema>;

export type DiscountUpdate = z.infer<typeof DiscountUpdateSchema>;

export type DiscountOrderBy = z.infer<typeof DiscountOrderBySchema>;

export type DiscountOwnProjection = z.infer<typeof DiscountOwnProjectionSchema>;

export type DiscountOwnWhere = z.infer<typeof DiscountOwnWhereSchema>;

export type DiscountOwnQuery = z.infer<typeof DiscountOwnQuerySchema>;

export type DiscountOwnQueryOne = z.infer<typeof DiscountOwnQueryOneSchema>;

export type DiscountWhere = z.infer<typeof DiscountWhereSchema>;

export type DiscountInclude = z.infer<typeof DiscountIncludeSchema>;

export type DiscountQueryOne = z.infer<typeof DiscountQueryOneSchema>;

export type DiscountQuery = z.infer<typeof DiscountQuerySchema>;

export type DiscountProjection = z.infer<typeof DiscountProjectionSchema>;

export const DiscountTargetQueryOneSchema = z
  .object({
    where: DiscountTargetWhereSchemaJson,
    select: DiscountTargetProjectionSchemaJson,
    omit: DiscountTargetProjectionSchemaJson,
    include: DiscountTargetIncludeSchemaJson,
  })
  .partial();

export const DiscountTargetQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: DiscountTargetWhereSchemaJson,
    select: DiscountTargetProjectionSchemaJson,
    omit: DiscountTargetProjectionSchemaJson,
    include: DiscountTargetIncludeSchemaJson,
  })
  .partial();

export type DiscountTargetCreate = z.infer<typeof DiscountTargetCreateSchema>;

export type DiscountTargetUpdate = z.infer<typeof DiscountTargetUpdateSchema>;

export type DiscountTargetOrderBy = z.infer<typeof DiscountTargetOrderBySchema>;

export type DiscountTargetOwnProjection = z.infer<
  typeof DiscountTargetOwnProjectionSchema
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

export type DiscountTargetProjection = z.infer<
  typeof DiscountTargetProjectionSchema
>;

export const StoreQueryOneSchema = z
  .object({
    where: StoreWhereSchemaJson,
    select: StoreProjectionSchemaJson,
    omit: StoreProjectionSchemaJson,
    include: StoreIncludeSchemaJson,
  })
  .partial();

export const StoreQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: StoreWhereSchemaJson,
    select: StoreProjectionSchemaJson,
    omit: StoreProjectionSchemaJson,
    include: StoreIncludeSchemaJson,
  })
  .partial();

export type StoreCreate = z.infer<typeof StoreCreateSchema>;

export type StoreUpdate = z.infer<typeof StoreUpdateSchema>;

export type StoreOrderBy = z.infer<typeof StoreOrderBySchema>;

export type StoreOwnProjection = z.infer<typeof StoreOwnProjectionSchema>;

export type StoreOwnWhere = z.infer<typeof StoreOwnWhereSchema>;

export type StoreOwnQuery = z.infer<typeof StoreOwnQuerySchema>;

export type StoreOwnQueryOne = z.infer<typeof StoreOwnQueryOneSchema>;

export type StoreWhere = z.infer<typeof StoreWhereSchema>;

export type StoreInclude = z.infer<typeof StoreIncludeSchema>;

export type StoreQueryOne = z.infer<typeof StoreQueryOneSchema>;

export type StoreQuery = z.infer<typeof StoreQuerySchema>;

export type StoreProjection = z.infer<typeof StoreProjectionSchema>;

export const WarrantyPolicyQueryOneSchema = z
  .object({
    where: WarrantyPolicyWhereSchemaJson,
    select: WarrantyPolicyProjectionSchemaJson,
    omit: WarrantyPolicyProjectionSchemaJson,
    include: WarrantyPolicyIncludeSchemaJson,
  })
  .partial();

export const WarrantyPolicyQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: WarrantyPolicyWhereSchemaJson,
    select: WarrantyPolicyProjectionSchemaJson,
    omit: WarrantyPolicyProjectionSchemaJson,
    include: WarrantyPolicyIncludeSchemaJson,
  })
  .partial();

export type WarrantyPolicyCreate = z.infer<typeof WarrantyPolicyCreateSchema>;

export type WarrantyPolicyUpdate = z.infer<typeof WarrantyPolicyUpdateSchema>;

export type WarrantyPolicyOrderBy = z.infer<typeof WarrantyPolicyOrderBySchema>;

export type WarrantyPolicyOwnProjection = z.infer<
  typeof WarrantyPolicyOwnProjectionSchema
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

export type WarrantyPolicyProjection = z.infer<
  typeof WarrantyPolicyProjectionSchema
>;

export const ProductWarrantyQueryOneSchema = z
  .object({
    where: ProductWarrantyWhereSchemaJson,
    select: ProductWarrantyProjectionSchemaJson,
    omit: ProductWarrantyProjectionSchemaJson,
    include: ProductWarrantyIncludeSchemaJson,
  })
  .partial();

export const ProductWarrantyQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ProductWarrantyWhereSchemaJson,
    select: ProductWarrantyProjectionSchemaJson,
    omit: ProductWarrantyProjectionSchemaJson,
    include: ProductWarrantyIncludeSchemaJson,
  })
  .partial();

export type ProductWarrantyCreate = z.infer<typeof ProductWarrantyCreateSchema>;

export type ProductWarrantyUpdate = z.infer<typeof ProductWarrantyUpdateSchema>;

export type ProductWarrantyOrderBy = z.infer<
  typeof ProductWarrantyOrderBySchema
>;

export type ProductWarrantyOwnProjection = z.infer<
  typeof ProductWarrantyOwnProjectionSchema
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

export type ProductWarrantyProjection = z.infer<
  typeof ProductWarrantyProjectionSchema
>;

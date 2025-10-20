/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PZ from '@puq/zod';
import { z } from 'zod';

export const PaginationSchema = z
  .object({
    take: PZ.Scalar.take(),
    skip: PZ.Scalar.skip(),
  })
  .partial();

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
    id: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool(),
    children: PZ.Scalar.bool(),
    products: PZ.Scalar.bool(),
    discountTargets: PZ.Scalar.bool(),
  })
  .partial();

export const CategoryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CategoryOwnSelectFieldsSchema
);

export const CategoryDistinctFieldsSchema = z
  .enum(['id', 'parentId', 'name', 'slug'])
  .array();

export const ProductOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    isActive: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    variants: PZ.Scalar.bool(),
    categories: PZ.Scalar.bool(),
    discounts: PZ.Scalar.bool(),
    warranties: PZ.Scalar.bool(),
  })
  .partial();

export const ProductOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProductOwnSelectFieldsSchema
);

export const ProductDistinctFieldsSchema = z
  .enum([
    'id',
    'createdAt',
    'updatedAt',
    'isActive',
    'uuid',
    'name',
    'slug',
    'description',
  ])
  .array();

export const ProductCategoryOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    productId: PZ.Scalar.bool(),
    categoryId: PZ.Scalar.bool(),
    product: PZ.Scalar.bool(),
    category: PZ.Scalar.bool(),
  })
  .partial();

export const ProductCategoryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProductCategoryOwnSelectFieldsSchema
);

export const ProductCategoryDistinctFieldsSchema = z
  .enum(['id', 'productId', 'categoryId'])
  .array();

export const VariantOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    productId: PZ.Scalar.bool(),
    sku: PZ.Scalar.bool(),
    upc: PZ.Scalar.bool(),
    product: PZ.Scalar.bool(),
    attributes: PZ.Scalar.bool(),
    prices: PZ.Scalar.bool(),
    quantities: PZ.Scalar.bool(),
    discounts: PZ.Scalar.bool(),
    serrialNumbers: PZ.Scalar.bool(),
    warranties: PZ.Scalar.bool(),
  })
  .partial();

export const VariantOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  VariantOwnSelectFieldsSchema
);

export const VariantDistinctFieldsSchema = z
  .enum(['id', 'uuid', 'productId', 'sku', 'upc'])
  .array();

export const AttributeCategoryOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    attributes: PZ.Scalar.bool(),
  })
  .partial();

export const AttributeCategoryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeCategoryOwnSelectFieldsSchema
);

export const AttributeCategoryDistinctFieldsSchema = z
  .enum(['id', 'name', 'slug'])
  .array();

export const AttributeOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    categoryId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    category: PZ.Scalar.bool(),
    unites: PZ.Scalar.bool(),
    values: PZ.Scalar.bool(),
  })
  .partial();

export const AttributeOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeOwnSelectFieldsSchema
);

export const AttributeDistinctFieldsSchema = z
  .enum(['id', 'categoryId', 'name', 'description'])
  .array();

export const UnitOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    symbol: PZ.Scalar.bool(),
    attributes: PZ.Scalar.bool(),
  })
  .partial();

export const UnitOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UnitOwnSelectFieldsSchema
);

export const UnitDistinctFieldsSchema = z
  .enum(['id', 'name', 'symbol'])
  .array();

export const AttributeUnitOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    attributeId: PZ.Scalar.bool(),
    unitId: PZ.Scalar.bool(),
    attribute: PZ.Scalar.bool(),
    unit: PZ.Scalar.bool(),
  })
  .partial();

export const AttributeUnitOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeUnitOwnSelectFieldsSchema
);

export const AttributeUnitDistinctFieldsSchema = z
  .enum(['id', 'attributeId', 'unitId'])
  .array();

export const AttributeValueOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    attributeId: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    textValue: PZ.Scalar.bool(),
    booleanValue: PZ.Scalar.bool(),
    floatValue: PZ.Scalar.bool(),
    variant: PZ.Scalar.bool(),
    attribute: PZ.Scalar.bool(),
  })
  .partial();

export const AttributeValueOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeValueOwnSelectFieldsSchema
);

export const AttributeValueDistinctFieldsSchema = z
  .enum([
    'id',
    'attributeId',
    'variantId',
    'textValue',
    'booleanValue',
    'floatValue',
  ])
  .array();

export const CurrencyOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    symbol: PZ.Scalar.bool(),
    priceLevels: PZ.Scalar.bool(),
  })
  .partial();

export const CurrencyOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CurrencyOwnSelectFieldsSchema
);

export const CurrencyDistinctFieldsSchema = z
  .enum(['id', 'name', 'code', 'symbol'])
  .array();

export const PriceLevelOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    currencyId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    taxrate: PZ.Scalar.bool(),
    notes: PZ.Scalar.bool(),
    currency: PZ.Scalar.bool(),
    stores: PZ.Scalar.bool(),
    prices: PZ.Scalar.bool(),
    discounts: PZ.Scalar.bool(),
  })
  .partial();

export const PriceLevelOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PriceLevelOwnSelectFieldsSchema
);

export const PriceLevelDistinctFieldsSchema = z
  .enum(['id', 'currencyId', 'name', 'slug', 'taxrate', 'notes'])
  .array();

export const PriceOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    priceLevelId: PZ.Scalar.bool(),
    price: PZ.Scalar.bool(),
    cost: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    variant: PZ.Scalar.bool(),
    priceLevel: PZ.Scalar.bool(),
  })
  .partial();

export const PriceOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PriceOwnSelectFieldsSchema
);

export const PriceDistinctFieldsSchema = z
  .enum(['id', 'variantId', 'priceLevelId', 'price', 'cost', 'description'])
  .array();

export const QuantityOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    storeId: PZ.Scalar.bool(),
    quantity: PZ.Scalar.bool(),
    alertThreshold: PZ.Scalar.bool(),
    variant: PZ.Scalar.bool(),
    store: PZ.Scalar.bool(),
  })
  .partial();

export const QuantityOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  QuantityOwnSelectFieldsSchema
);

export const QuantityDistinctFieldsSchema = z
  .enum(['id', 'variantId', 'storeId', 'quantity', 'alertThreshold'])
  .array();

export const SerialNumberOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    storeId: PZ.Scalar.bool(),
    serialNumber: PZ.Scalar.bool(),
    inStock: PZ.Scalar.bool(),
    variant: PZ.Scalar.bool(),
    store: PZ.Scalar.bool(),
  })
  .partial();

export const SerialNumberOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SerialNumberOwnSelectFieldsSchema
);

export const SerialNumberDistinctFieldsSchema = z
  .enum(['id', 'variantId', 'storeId', 'serialNumber', 'inStock'])
  .array();

export const DiscountOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    valueType: PZ.Scalar.bool(),
    value: PZ.Scalar.bool(),
    minQuantity: PZ.Scalar.bool(),
    maxQuantity: PZ.Scalar.bool(),
    minOrderTotal: PZ.Scalar.bool(),
    maxOrderTotal: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    usageLimit: PZ.Scalar.bool(),
    usageCount: PZ.Scalar.bool(),
    targets: PZ.Scalar.bool(),
  })
  .partial();

export const DiscountOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DiscountOwnSelectFieldsSchema
);

export const DiscountDistinctFieldsSchema = z
  .enum([
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
  ])
  .array();

export const DiscountTargetOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    discountId: PZ.Scalar.bool(),
    storeId: PZ.Scalar.bool(),
    productId: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    priceLevelId: PZ.Scalar.bool(),
    categoryId: PZ.Scalar.bool(),
    discount: PZ.Scalar.bool(),
    store: PZ.Scalar.bool(),
    category: PZ.Scalar.bool(),
    priceLevel: PZ.Scalar.bool(),
    product: PZ.Scalar.bool(),
    variant: PZ.Scalar.bool(),
  })
  .partial();

export const DiscountTargetOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DiscountTargetOwnSelectFieldsSchema
);

export const DiscountTargetDistinctFieldsSchema = z
  .enum([
    'id',
    'type',
    'discountId',
    'storeId',
    'productId',
    'variantId',
    'priceLevelId',
    'categoryId',
  ])
  .array();

export const StoreOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    priceLevelId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    priceLevel: PZ.Scalar.bool(),
    quantities: PZ.Scalar.bool(),
    discounts: PZ.Scalar.bool(),
    serialNumbers: PZ.Scalar.bool(),
  })
  .partial();

export const StoreOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StoreOwnSelectFieldsSchema
);

export const StoreDistinctFieldsSchema = z
  .enum(['id', 'priceLevelId', 'name', 'slug', 'description'])
  .array();

export const WarrantyPolicyOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    duration: PZ.Scalar.bool(),
    durationUnit: PZ.Scalar.bool(),
    products: PZ.Scalar.bool(),
  })
  .partial();

export const WarrantyPolicyOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  WarrantyPolicyOwnSelectFieldsSchema
);

export const WarrantyPolicyDistinctFieldsSchema = z
  .enum(['id', 'name', 'description', 'duration', 'durationUnit'])
  .array();

export const ProductWarrantyOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    productId: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    policyId: PZ.Scalar.bool(),
    product: PZ.Scalar.bool(),
    variant: PZ.Scalar.bool(),
    policy: PZ.Scalar.bool(),
  })
  .partial();

export const ProductWarrantyOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProductWarrantyOwnSelectFieldsSchema
);

export const ProductWarrantyDistinctFieldsSchema = z
  .enum(['id', 'productId', 'variantId', 'policyId'])
  .array();

export const CategoryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const CategoryOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  ProductWarrantyOwnWhereSchema
);

export const CategoryOwnIncludeSchema = z
  .object({
    parent: PZ.Scalar.bool(),
    children: PZ.Scalar.bool(),
    products: PZ.Scalar.bool(),
    discountTargets: PZ.Scalar.bool(),
  })
  .partial();

export const CategoryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    variants: PZ.Scalar.bool(),
    categories: PZ.Scalar.bool(),
    discounts: PZ.Scalar.bool(),
    warranties: PZ.Scalar.bool(),
  })
  .partial();

export const ProductOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    product: PZ.Scalar.bool(),
    category: PZ.Scalar.bool(),
  })
  .partial();

export const ProductCategoryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    product: PZ.Scalar.bool(),
    attributes: PZ.Scalar.bool(),
    prices: PZ.Scalar.bool(),
    quantities: PZ.Scalar.bool(),
    discounts: PZ.Scalar.bool(),
    serrialNumbers: PZ.Scalar.bool(),
    warranties: PZ.Scalar.bool(),
  })
  .partial();

export const VariantOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    attributes: PZ.Scalar.bool(),
  })
  .partial();

export const AttributeCategoryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    category: PZ.Scalar.bool(),
    unites: PZ.Scalar.bool(),
    values: PZ.Scalar.bool(),
  })
  .partial();

export const AttributeOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    attributes: PZ.Scalar.bool(),
  })
  .partial();

export const UnitOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    attribute: PZ.Scalar.bool(),
    unit: PZ.Scalar.bool(),
  })
  .partial();

export const AttributeUnitOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    variant: PZ.Scalar.bool(),
    attribute: PZ.Scalar.bool(),
  })
  .partial();

export const AttributeValueOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    priceLevels: PZ.Scalar.bool(),
  })
  .partial();

export const CurrencyOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    currency: PZ.Scalar.bool(),
    stores: PZ.Scalar.bool(),
    prices: PZ.Scalar.bool(),
    discounts: PZ.Scalar.bool(),
  })
  .partial();

export const PriceLevelOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    variant: PZ.Scalar.bool(),
    priceLevel: PZ.Scalar.bool(),
  })
  .partial();

export const PriceOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    variant: PZ.Scalar.bool(),
    store: PZ.Scalar.bool(),
  })
  .partial();

export const QuantityOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    variant: PZ.Scalar.bool(),
    store: PZ.Scalar.bool(),
  })
  .partial();

export const SerialNumberOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    targets: PZ.Scalar.bool(),
  })
  .partial();

export const DiscountOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    discount: PZ.Scalar.bool(),
    store: PZ.Scalar.bool(),
    category: PZ.Scalar.bool(),
    priceLevel: PZ.Scalar.bool(),
    product: PZ.Scalar.bool(),
    variant: PZ.Scalar.bool(),
  })
  .partial();

export const DiscountTargetOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    priceLevel: PZ.Scalar.bool(),
    quantities: PZ.Scalar.bool(),
    discounts: PZ.Scalar.bool(),
    serialNumbers: PZ.Scalar.bool(),
  })
  .partial();

export const StoreOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    products: PZ.Scalar.bool(),
  })
  .partial();

export const WarrantyPolicyOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    product: PZ.Scalar.bool(),
    variant: PZ.Scalar.bool(),
    policy: PZ.Scalar.bool(),
  })
  .partial();

export const ProductWarrantyOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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

export const CategoryRawCreateSchema = z.object({
  parentId: PZ.Scalar.id().optional(),
  name: PZ.Scalar.name(),
  slug: PZ.Scalar.slug().optional(),
});

export const CategoryCreateSchema = CategoryRawCreateSchema.clone().transform(
  PZ.slugTransformer('name')
);

export const CategoryRawUpdateSchema = z.object({
  parentId: PZ.Scalar.id().optional().optional(),
  name: PZ.Scalar.name().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
});

export const CategoryUpdateSchema = CategoryRawUpdateSchema.clone().transform(
  PZ.slugTransformer('name')
);

export const CategoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    parentId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const CategoryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  CategoryWhereSchema
);

export const CategorySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool().or(CategoryOwnQueryOneSchema),
    children: PZ.Scalar.bool().or(CategoryOwnQuerySchema),
    products: PZ.Scalar.bool().or(ProductCategoryOwnQuerySchema),
    discountTargets: PZ.Scalar.bool().or(DiscountTargetOwnQuerySchema),
  })
  .partial();

export const CategorySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CategorySelectFieldsSchema
);

export const CategoryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'parentId', 'name', 'slug'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const CategoryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CategoryOmitFieldsSchema
);

export const CategoryIncludeSchema = z
  .object({
    parent: PZ.Scalar.bool().or(CategoryOwnQueryOneSchema),
    children: PZ.Scalar.bool().or(CategoryOwnQuerySchema),
    products: PZ.Scalar.bool().or(ProductCategoryOwnQuerySchema),
    discountTargets: PZ.Scalar.bool().or(DiscountTargetOwnQuerySchema),
  })
  .partial();

export const CategoryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CategoryIncludeSchema
);

export const CategoryProjectionSchema = z.union([
  z.object({ omit: CategoryOmitFieldsSchemaJson }),
  z.object({ select: CategorySelectFieldsSchemaJson }),
  z.object({ include: CategoryIncludeSchemaJson }),
  z.object({}),
]);

export const ProductRawCreateSchema = z.object({
  isActive: PZ.Scalar.bool().optional(),
  name: PZ.Scalar.name(),
  slug: PZ.Scalar.slug().optional(),
  description: PZ.Scalar.description().optional(),
});

export const ProductCreateSchema = ProductRawCreateSchema.clone().transform(
  PZ.slugTransformer('name')
);

export const ProductRawUpdateSchema = z.object({
  isActive: PZ.Scalar.bool().optional().optional(),
  name: PZ.Scalar.name().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
  description: PZ.Scalar.description().optional().optional(),
});

export const ProductUpdateSchema = ProductRawUpdateSchema.clone().transform(
  PZ.slugTransformer('name')
);

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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ProductOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  ProductWhereSchema
);

export const ProductSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    isActive: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    variants: PZ.Scalar.bool().or(VariantOwnQuerySchema),
    categories: PZ.Scalar.bool().or(ProductCategoryOwnQuerySchema),
    discounts: PZ.Scalar.bool().or(DiscountTargetOwnQuerySchema),
    warranties: PZ.Scalar.bool().or(ProductWarrantyOwnQuerySchema),
  })
  .partial();

export const ProductSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProductSelectFieldsSchema
);

export const ProductOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    isActive: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'createdAt',
        'updatedAt',
        'isActive',
        'uuid',
        'name',
        'slug',
        'description',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const ProductOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProductOmitFieldsSchema
);

export const ProductIncludeSchema = z
  .object({
    variants: PZ.Scalar.bool().or(VariantOwnQuerySchema),
    categories: PZ.Scalar.bool().or(ProductCategoryOwnQuerySchema),
    discounts: PZ.Scalar.bool().or(DiscountTargetOwnQuerySchema),
    warranties: PZ.Scalar.bool().or(ProductWarrantyOwnQuerySchema),
  })
  .partial();

export const ProductIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProductIncludeSchema
);

export const ProductProjectionSchema = z.union([
  z.object({ omit: ProductOmitFieldsSchemaJson }),
  z.object({ select: ProductSelectFieldsSchemaJson }),
  z.object({ include: ProductIncludeSchemaJson }),
  z.object({}),
]);

export const ProductCategoryRawCreateSchema = z.object({
  productId: PZ.Scalar.id(),
  categoryId: PZ.Scalar.id(),
});

export const ProductCategoryCreateSchema =
  ProductCategoryRawCreateSchema.clone();

export const ProductCategoryRawUpdateSchema = z.object({
  productId: PZ.Scalar.id().optional(),
  categoryId: PZ.Scalar.id().optional(),
});

export const ProductCategoryUpdateSchema =
  ProductCategoryRawUpdateSchema.clone();

export const ProductCategoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    productId: PZ.OrderDirectionSchema,
    categoryId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ProductCategoryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  ProductCategoryWhereSchema
);

export const ProductCategorySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    productId: PZ.Scalar.bool(),
    categoryId: PZ.Scalar.bool(),
    product: PZ.Scalar.bool().or(ProductOwnQueryOneSchema),
    category: PZ.Scalar.bool().or(CategoryOwnQueryOneSchema),
  })
  .partial();

export const ProductCategorySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProductCategorySelectFieldsSchema
);

export const ProductCategoryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    productId: PZ.Scalar.bool(),
    categoryId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'productId', 'categoryId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const ProductCategoryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProductCategoryOmitFieldsSchema
);

export const ProductCategoryIncludeSchema = z
  .object({
    product: PZ.Scalar.bool().or(ProductOwnQueryOneSchema),
    category: PZ.Scalar.bool().or(CategoryOwnQueryOneSchema),
  })
  .partial();

export const ProductCategoryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProductCategoryIncludeSchema
);

export const ProductCategoryProjectionSchema = z.union([
  z.object({ omit: ProductCategoryOmitFieldsSchemaJson }),
  z.object({ select: ProductCategorySelectFieldsSchemaJson }),
  z.object({ include: ProductCategoryIncludeSchemaJson }),
  z.object({}),
]);

export const VariantRawCreateSchema = z.object({
  productId: PZ.Scalar.id(),
  sku: PZ.Scalar.string(),
  upc: PZ.Scalar.string(),
});

export const VariantCreateSchema = VariantRawCreateSchema.clone();

export const VariantRawUpdateSchema = z.object({
  productId: PZ.Scalar.id().optional(),
  sku: PZ.Scalar.string().optional(),
  upc: PZ.Scalar.string().optional(),
});

export const VariantUpdateSchema = VariantRawUpdateSchema.clone();

export const VariantOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    productId: PZ.OrderDirectionSchema,
    sku: PZ.OrderDirectionSchema,
    upc: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const VariantOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  VariantWhereSchema
);

export const VariantSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    productId: PZ.Scalar.bool(),
    sku: PZ.Scalar.bool(),
    upc: PZ.Scalar.bool(),
    product: PZ.Scalar.bool().or(ProductOwnQueryOneSchema),
    attributes: PZ.Scalar.bool().or(AttributeValueOwnQuerySchema),
    prices: PZ.Scalar.bool().or(PriceOwnQuerySchema),
    quantities: PZ.Scalar.bool().or(QuantityOwnQuerySchema),
    discounts: PZ.Scalar.bool().or(DiscountTargetOwnQuerySchema),
    serrialNumbers: PZ.Scalar.bool().or(SerialNumberOwnQuerySchema),
    warranties: PZ.Scalar.bool().or(ProductWarrantyOwnQuerySchema),
  })
  .partial();

export const VariantSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  VariantSelectFieldsSchema
);

export const VariantOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    productId: PZ.Scalar.bool(),
    sku: PZ.Scalar.bool(),
    upc: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'uuid', 'productId', 'sku', 'upc'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const VariantOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  VariantOmitFieldsSchema
);

export const VariantIncludeSchema = z
  .object({
    product: PZ.Scalar.bool().or(ProductOwnQueryOneSchema),
    attributes: PZ.Scalar.bool().or(AttributeValueOwnQuerySchema),
    prices: PZ.Scalar.bool().or(PriceOwnQuerySchema),
    quantities: PZ.Scalar.bool().or(QuantityOwnQuerySchema),
    discounts: PZ.Scalar.bool().or(DiscountTargetOwnQuerySchema),
    serrialNumbers: PZ.Scalar.bool().or(SerialNumberOwnQuerySchema),
    warranties: PZ.Scalar.bool().or(ProductWarrantyOwnQuerySchema),
  })
  .partial();

export const VariantIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  VariantIncludeSchema
);

export const VariantProjectionSchema = z.union([
  z.object({ omit: VariantOmitFieldsSchemaJson }),
  z.object({ select: VariantSelectFieldsSchemaJson }),
  z.object({ include: VariantIncludeSchemaJson }),
  z.object({}),
]);

export const AttributeCategoryRawCreateSchema = z.object({
  name: PZ.Scalar.name(),
  slug: PZ.Scalar.slug().optional(),
});

export const AttributeCategoryCreateSchema =
  AttributeCategoryRawCreateSchema.clone().transform(
    PZ.slugTransformer('name')
  );

export const AttributeCategoryRawUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
});

export const AttributeCategoryUpdateSchema =
  AttributeCategoryRawUpdateSchema.clone().transform(
    PZ.slugTransformer('name')
  );

export const AttributeCategoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const AttributeCategoryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  AttributeCategoryWhereSchema
);

export const AttributeCategorySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    attributes: PZ.Scalar.bool().or(AttributeOwnQuerySchema),
  })
  .partial();

export const AttributeCategorySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeCategorySelectFieldsSchema
);

export const AttributeCategoryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) => !['id', 'name', 'slug'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const AttributeCategoryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeCategoryOmitFieldsSchema
);

export const AttributeCategoryIncludeSchema = z
  .object({
    attributes: PZ.Scalar.bool().or(AttributeOwnQuerySchema),
  })
  .partial();

export const AttributeCategoryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeCategoryIncludeSchema
);

export const AttributeCategoryProjectionSchema = z.union([
  z.object({ omit: AttributeCategoryOmitFieldsSchemaJson }),
  z.object({ select: AttributeCategorySelectFieldsSchemaJson }),
  z.object({ include: AttributeCategoryIncludeSchemaJson }),
  z.object({}),
]);

export const AttributeRawCreateSchema = z.object({
  categoryId: PZ.Scalar.id().optional(),
  name: PZ.Scalar.name(),
  description: PZ.Scalar.description().optional(),
});

export const AttributeCreateSchema = AttributeRawCreateSchema.clone();

export const AttributeRawUpdateSchema = z.object({
  categoryId: PZ.Scalar.id().optional().optional(),
  name: PZ.Scalar.name().optional(),
  description: PZ.Scalar.description().optional().optional(),
});

export const AttributeUpdateSchema = AttributeRawUpdateSchema.clone();

export const AttributeOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    categoryId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const AttributeOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  AttributeWhereSchema
);

export const AttributeSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    categoryId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    category: PZ.Scalar.bool().or(AttributeCategoryOwnQueryOneSchema),
    unites: PZ.Scalar.bool().or(AttributeUnitOwnQuerySchema),
    values: PZ.Scalar.bool().or(AttributeValueOwnQuerySchema),
  })
  .partial();

export const AttributeSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeSelectFieldsSchema
);

export const AttributeOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    categoryId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'categoryId', 'name', 'description'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const AttributeOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeOmitFieldsSchema
);

export const AttributeIncludeSchema = z
  .object({
    category: PZ.Scalar.bool().or(AttributeCategoryOwnQueryOneSchema),
    unites: PZ.Scalar.bool().or(AttributeUnitOwnQuerySchema),
    values: PZ.Scalar.bool().or(AttributeValueOwnQuerySchema),
  })
  .partial();

export const AttributeIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeIncludeSchema
);

export const AttributeProjectionSchema = z.union([
  z.object({ omit: AttributeOmitFieldsSchemaJson }),
  z.object({ select: AttributeSelectFieldsSchemaJson }),
  z.object({ include: AttributeIncludeSchemaJson }),
  z.object({}),
]);

export const UnitRawCreateSchema = z.object({
  name: PZ.Scalar.name(),
  symbol: PZ.Scalar.string(),
});

export const UnitCreateSchema = UnitRawCreateSchema.clone();

export const UnitRawUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  symbol: PZ.Scalar.string().optional(),
});

export const UnitUpdateSchema = UnitRawUpdateSchema.clone();

export const UnitOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    symbol: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const UnitOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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

export const UnitWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UnitWhereSchema
);

export const UnitSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    symbol: PZ.Scalar.bool(),
    attributes: PZ.Scalar.bool().or(AttributeUnitOwnQuerySchema),
  })
  .partial();

export const UnitSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UnitSelectFieldsSchema
);

export const UnitOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    symbol: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) => !['id', 'name', 'symbol'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const UnitOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UnitOmitFieldsSchema
);

export const UnitIncludeSchema = z
  .object({
    attributes: PZ.Scalar.bool().or(AttributeUnitOwnQuerySchema),
  })
  .partial();

export const UnitIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UnitIncludeSchema
);

export const UnitProjectionSchema = z.union([
  z.object({ omit: UnitOmitFieldsSchemaJson }),
  z.object({ select: UnitSelectFieldsSchemaJson }),
  z.object({ include: UnitIncludeSchemaJson }),
  z.object({}),
]);

export const AttributeUnitRawCreateSchema = z.object({
  attributeId: PZ.Scalar.id(),
  unitId: PZ.Scalar.id(),
});

export const AttributeUnitCreateSchema = AttributeUnitRawCreateSchema.clone();

export const AttributeUnitRawUpdateSchema = z.object({
  attributeId: PZ.Scalar.id().optional(),
  unitId: PZ.Scalar.id().optional(),
});

export const AttributeUnitUpdateSchema = AttributeUnitRawUpdateSchema.clone();

export const AttributeUnitOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    attributeId: PZ.OrderDirectionSchema,
    unitId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const AttributeUnitOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  AttributeUnitWhereSchema
);

export const AttributeUnitSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    attributeId: PZ.Scalar.bool(),
    unitId: PZ.Scalar.bool(),
    attribute: PZ.Scalar.bool().or(AttributeOwnQueryOneSchema),
    unit: PZ.Scalar.bool().or(UnitOwnQueryOneSchema),
  })
  .partial();

export const AttributeUnitSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeUnitSelectFieldsSchema
);

export const AttributeUnitOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    attributeId: PZ.Scalar.bool(),
    unitId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'attributeId', 'unitId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const AttributeUnitOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeUnitOmitFieldsSchema
);

export const AttributeUnitIncludeSchema = z
  .object({
    attribute: PZ.Scalar.bool().or(AttributeOwnQueryOneSchema),
    unit: PZ.Scalar.bool().or(UnitOwnQueryOneSchema),
  })
  .partial();

export const AttributeUnitIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeUnitIncludeSchema
);

export const AttributeUnitProjectionSchema = z.union([
  z.object({ omit: AttributeUnitOmitFieldsSchemaJson }),
  z.object({ select: AttributeUnitSelectFieldsSchemaJson }),
  z.object({ include: AttributeUnitIncludeSchemaJson }),
  z.object({}),
]);

export const AttributeValueRawCreateSchema = z.object({
  attributeId: PZ.Scalar.id(),
  variantId: PZ.Scalar.id(),
  textValue: PZ.Scalar.string().optional(),
  booleanValue: PZ.Scalar.bool().optional(),
  floatValue: PZ.Scalar.number().optional(),
});

export const AttributeValueCreateSchema = AttributeValueRawCreateSchema.clone();

export const AttributeValueRawUpdateSchema = z.object({
  attributeId: PZ.Scalar.id().optional(),
  variantId: PZ.Scalar.id().optional(),
  textValue: PZ.Scalar.string().optional().optional(),
  booleanValue: PZ.Scalar.bool().optional().optional(),
  floatValue: PZ.Scalar.number().optional().optional(),
});

export const AttributeValueUpdateSchema = AttributeValueRawUpdateSchema.clone();

export const AttributeValueOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    attributeId: PZ.OrderDirectionSchema,
    variantId: PZ.OrderDirectionSchema,
    textValue: PZ.OrderDirectionSchema,
    booleanValue: PZ.OrderDirectionSchema,
    floatValue: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const AttributeValueOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  AttributeValueWhereSchema
);

export const AttributeValueSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    attributeId: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    textValue: PZ.Scalar.bool(),
    booleanValue: PZ.Scalar.bool(),
    floatValue: PZ.Scalar.bool(),
    variant: PZ.Scalar.bool().or(VariantOwnQueryOneSchema),
    attribute: PZ.Scalar.bool().or(AttributeOwnQueryOneSchema),
  })
  .partial();

export const AttributeValueSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeValueSelectFieldsSchema
);

export const AttributeValueOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    attributeId: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    textValue: PZ.Scalar.bool(),
    booleanValue: PZ.Scalar.bool(),
    floatValue: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'attributeId',
        'variantId',
        'textValue',
        'booleanValue',
        'floatValue',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const AttributeValueOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeValueOmitFieldsSchema
);

export const AttributeValueIncludeSchema = z
  .object({
    variant: PZ.Scalar.bool().or(VariantOwnQueryOneSchema),
    attribute: PZ.Scalar.bool().or(AttributeOwnQueryOneSchema),
  })
  .partial();

export const AttributeValueIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AttributeValueIncludeSchema
);

export const AttributeValueProjectionSchema = z.union([
  z.object({ omit: AttributeValueOmitFieldsSchemaJson }),
  z.object({ select: AttributeValueSelectFieldsSchemaJson }),
  z.object({ include: AttributeValueIncludeSchemaJson }),
  z.object({}),
]);

export const CurrencyRawCreateSchema = z.object({
  name: PZ.Scalar.name(),
  code: PZ.Scalar.string(),
  symbol: PZ.Scalar.string().optional(),
});

export const CurrencyCreateSchema = CurrencyRawCreateSchema.clone();

export const CurrencyRawUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  code: PZ.Scalar.string().optional(),
  symbol: PZ.Scalar.string().optional().optional(),
});

export const CurrencyUpdateSchema = CurrencyRawUpdateSchema.clone();

export const CurrencyOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    code: PZ.OrderDirectionSchema,
    symbol: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const CurrencyOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  CurrencyWhereSchema
);

export const CurrencySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    symbol: PZ.Scalar.bool(),
    priceLevels: PZ.Scalar.bool().or(PriceLevelOwnQuerySchema),
  })
  .partial();

export const CurrencySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CurrencySelectFieldsSchema
);

export const CurrencyOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    symbol: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'name', 'code', 'symbol'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const CurrencyOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CurrencyOmitFieldsSchema
);

export const CurrencyIncludeSchema = z
  .object({
    priceLevels: PZ.Scalar.bool().or(PriceLevelOwnQuerySchema),
  })
  .partial();

export const CurrencyIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CurrencyIncludeSchema
);

export const CurrencyProjectionSchema = z.union([
  z.object({ omit: CurrencyOmitFieldsSchemaJson }),
  z.object({ select: CurrencySelectFieldsSchemaJson }),
  z.object({ include: CurrencyIncludeSchemaJson }),
  z.object({}),
]);

export const PriceLevelRawCreateSchema = z.object({
  currencyId: PZ.Scalar.id(),
  name: PZ.Scalar.name(),
  slug: PZ.Scalar.slug().optional(),
  taxrate: PZ.Scalar.number(),
  notes: PZ.Scalar.string().optional(),
});

export const PriceLevelCreateSchema =
  PriceLevelRawCreateSchema.clone().transform(PZ.slugTransformer('name'));

export const PriceLevelRawUpdateSchema = z.object({
  currencyId: PZ.Scalar.id().optional(),
  name: PZ.Scalar.name().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
  taxrate: PZ.Scalar.number().optional(),
  notes: PZ.Scalar.string().optional().optional(),
});

export const PriceLevelUpdateSchema =
  PriceLevelRawUpdateSchema.clone().transform(PZ.slugTransformer('name'));

export const PriceLevelOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    currencyId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    taxrate: PZ.OrderDirectionSchema,
    notes: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PriceLevelOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  PriceLevelWhereSchema
);

export const PriceLevelSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    currencyId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    taxrate: PZ.Scalar.bool(),
    notes: PZ.Scalar.bool(),
    currency: PZ.Scalar.bool().or(CurrencyOwnQueryOneSchema),
    stores: PZ.Scalar.bool().or(StoreOwnQuerySchema),
    prices: PZ.Scalar.bool().or(PriceOwnQuerySchema),
    discounts: PZ.Scalar.bool().or(DiscountTargetOwnQuerySchema),
  })
  .partial();

export const PriceLevelSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PriceLevelSelectFieldsSchema
);

export const PriceLevelOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    currencyId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    taxrate: PZ.Scalar.bool(),
    notes: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'currencyId', 'name', 'slug', 'taxrate', 'notes'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PriceLevelOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PriceLevelOmitFieldsSchema
);

export const PriceLevelIncludeSchema = z
  .object({
    currency: PZ.Scalar.bool().or(CurrencyOwnQueryOneSchema),
    stores: PZ.Scalar.bool().or(StoreOwnQuerySchema),
    prices: PZ.Scalar.bool().or(PriceOwnQuerySchema),
    discounts: PZ.Scalar.bool().or(DiscountTargetOwnQuerySchema),
  })
  .partial();

export const PriceLevelIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PriceLevelIncludeSchema
);

export const PriceLevelProjectionSchema = z.union([
  z.object({ omit: PriceLevelOmitFieldsSchemaJson }),
  z.object({ select: PriceLevelSelectFieldsSchemaJson }),
  z.object({ include: PriceLevelIncludeSchemaJson }),
  z.object({}),
]);

export const PriceRawCreateSchema = z.object({
  variantId: PZ.Scalar.id(),
  priceLevelId: PZ.Scalar.id(),
  price: PZ.Scalar.positive(),
  cost: PZ.Scalar.positive(),
  description: PZ.Scalar.description().optional(),
});

export const PriceCreateSchema = PriceRawCreateSchema.clone();

export const PriceRawUpdateSchema = z.object({
  variantId: PZ.Scalar.id().optional(),
  priceLevelId: PZ.Scalar.id().optional(),
  price: PZ.Scalar.positive().optional(),
  cost: PZ.Scalar.positive().optional(),
  description: PZ.Scalar.description().optional().optional(),
});

export const PriceUpdateSchema = PriceRawUpdateSchema.clone();

export const PriceOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    variantId: PZ.OrderDirectionSchema,
    priceLevelId: PZ.OrderDirectionSchema,
    price: PZ.OrderDirectionSchema,
    cost: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PriceOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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

export const PriceWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PriceWhereSchema
);

export const PriceSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    priceLevelId: PZ.Scalar.bool(),
    price: PZ.Scalar.bool(),
    cost: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    variant: PZ.Scalar.bool().or(VariantOwnQueryOneSchema),
    priceLevel: PZ.Scalar.bool().or(PriceLevelOwnQueryOneSchema),
  })
  .partial();

export const PriceSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PriceSelectFieldsSchema
);

export const PriceOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    priceLevelId: PZ.Scalar.bool(),
    price: PZ.Scalar.bool(),
    cost: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'variantId',
        'priceLevelId',
        'price',
        'cost',
        'description',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PriceOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PriceOmitFieldsSchema
);

export const PriceIncludeSchema = z
  .object({
    variant: PZ.Scalar.bool().or(VariantOwnQueryOneSchema),
    priceLevel: PZ.Scalar.bool().or(PriceLevelOwnQueryOneSchema),
  })
  .partial();

export const PriceIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PriceIncludeSchema
);

export const PriceProjectionSchema = z.union([
  z.object({ omit: PriceOmitFieldsSchemaJson }),
  z.object({ select: PriceSelectFieldsSchemaJson }),
  z.object({ include: PriceIncludeSchemaJson }),
  z.object({}),
]);

export const QuantityRawCreateSchema = z.object({
  variantId: PZ.Scalar.id(),
  storeId: PZ.Scalar.id(),
  quantity: PZ.Scalar.positiveInt(),
  alertThreshold: PZ.Scalar.int().optional(),
});

export const QuantityCreateSchema = QuantityRawCreateSchema.clone();

export const QuantityRawUpdateSchema = z.object({
  variantId: PZ.Scalar.id().optional(),
  storeId: PZ.Scalar.id().optional(),
  quantity: PZ.Scalar.positiveInt().optional(),
  alertThreshold: PZ.Scalar.int().optional().optional(),
});

export const QuantityUpdateSchema = QuantityRawUpdateSchema.clone();

export const QuantityOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    variantId: PZ.OrderDirectionSchema,
    storeId: PZ.OrderDirectionSchema,
    quantity: PZ.OrderDirectionSchema,
    alertThreshold: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const QuantityOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  QuantityWhereSchema
);

export const QuantitySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    storeId: PZ.Scalar.bool(),
    quantity: PZ.Scalar.bool(),
    alertThreshold: PZ.Scalar.bool(),
    variant: PZ.Scalar.bool().or(VariantOwnQueryOneSchema),
    store: PZ.Scalar.bool().or(StoreOwnQueryOneSchema),
  })
  .partial();

export const QuantitySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  QuantitySelectFieldsSchema
);

export const QuantityOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    storeId: PZ.Scalar.bool(),
    quantity: PZ.Scalar.bool(),
    alertThreshold: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'variantId', 'storeId', 'quantity', 'alertThreshold'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const QuantityOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  QuantityOmitFieldsSchema
);

export const QuantityIncludeSchema = z
  .object({
    variant: PZ.Scalar.bool().or(VariantOwnQueryOneSchema),
    store: PZ.Scalar.bool().or(StoreOwnQueryOneSchema),
  })
  .partial();

export const QuantityIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  QuantityIncludeSchema
);

export const QuantityProjectionSchema = z.union([
  z.object({ omit: QuantityOmitFieldsSchemaJson }),
  z.object({ select: QuantitySelectFieldsSchemaJson }),
  z.object({ include: QuantityIncludeSchemaJson }),
  z.object({}),
]);

export const SerialNumberRawCreateSchema = z.object({
  variantId: PZ.Scalar.id(),
  storeId: PZ.Scalar.id(),
  serialNumber: PZ.Scalar.string(),
  inStock: PZ.Scalar.bool(),
});

export const SerialNumberCreateSchema = SerialNumberRawCreateSchema.clone();

export const SerialNumberRawUpdateSchema = z.object({
  variantId: PZ.Scalar.id().optional(),
  storeId: PZ.Scalar.id().optional(),
  serialNumber: PZ.Scalar.string().optional(),
  inStock: PZ.Scalar.bool().optional(),
});

export const SerialNumberUpdateSchema = SerialNumberRawUpdateSchema.clone();

export const SerialNumberOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    variantId: PZ.OrderDirectionSchema,
    storeId: PZ.OrderDirectionSchema,
    serialNumber: PZ.OrderDirectionSchema,
    inStock: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const SerialNumberOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  SerialNumberWhereSchema
);

export const SerialNumberSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    storeId: PZ.Scalar.bool(),
    serialNumber: PZ.Scalar.bool(),
    inStock: PZ.Scalar.bool(),
    variant: PZ.Scalar.bool().or(VariantOwnQueryOneSchema),
    store: PZ.Scalar.bool().or(StoreOwnQueryOneSchema),
  })
  .partial();

export const SerialNumberSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SerialNumberSelectFieldsSchema
);

export const SerialNumberOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    storeId: PZ.Scalar.bool(),
    serialNumber: PZ.Scalar.bool(),
    inStock: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'variantId', 'storeId', 'serialNumber', 'inStock'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const SerialNumberOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SerialNumberOmitFieldsSchema
);

export const SerialNumberIncludeSchema = z
  .object({
    variant: PZ.Scalar.bool().or(VariantOwnQueryOneSchema),
    store: PZ.Scalar.bool().or(StoreOwnQueryOneSchema),
  })
  .partial();

export const SerialNumberIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SerialNumberIncludeSchema
);

export const SerialNumberProjectionSchema = z.union([
  z.object({ omit: SerialNumberOmitFieldsSchemaJson }),
  z.object({ select: SerialNumberSelectFieldsSchemaJson }),
  z.object({ include: SerialNumberIncludeSchemaJson }),
  z.object({}),
]);

export const DiscountRawCreateSchema = z.object({
  code: PZ.Scalar.string(),
  type: DiscountTypeSchema,
  valueType: ValueTypeSchema,
  value: PZ.Scalar.number().optional(),
  minQuantity: PZ.Scalar.int().optional(),
  maxQuantity: PZ.Scalar.int().optional(),
  minOrderTotal: PZ.Scalar.number().optional(),
  maxOrderTotal: PZ.Scalar.number().optional(),
  startDate: PZ.Scalar.datetime().optional(),
  endDate: PZ.Scalar.datetime().optional(),
  usageLimit: PZ.Scalar.int().optional(),
  usageCount: PZ.Scalar.int().optional(),
});

export const DiscountCreateSchema = DiscountRawCreateSchema.clone();

export const DiscountRawUpdateSchema = z.object({
  code: PZ.Scalar.string().optional(),
  type: DiscountTypeSchema.optional(),
  valueType: ValueTypeSchema.optional(),
  value: PZ.Scalar.number().optional().optional(),
  minQuantity: PZ.Scalar.int().optional().optional(),
  maxQuantity: PZ.Scalar.int().optional().optional(),
  minOrderTotal: PZ.Scalar.number().optional().optional(),
  maxOrderTotal: PZ.Scalar.number().optional().optional(),
  startDate: PZ.Scalar.datetime().optional().optional(),
  endDate: PZ.Scalar.datetime().optional().optional(),
  usageLimit: PZ.Scalar.int().optional().optional(),
  usageCount: PZ.Scalar.int().optional().optional(),
});

export const DiscountUpdateSchema = DiscountRawUpdateSchema.clone();

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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const DiscountOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  DiscountWhereSchema
);

export const DiscountSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    valueType: PZ.Scalar.bool(),
    value: PZ.Scalar.bool(),
    minQuantity: PZ.Scalar.bool(),
    maxQuantity: PZ.Scalar.bool(),
    minOrderTotal: PZ.Scalar.bool(),
    maxOrderTotal: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    usageLimit: PZ.Scalar.bool(),
    usageCount: PZ.Scalar.bool(),
    targets: PZ.Scalar.bool().or(DiscountTargetOwnQuerySchema),
  })
  .partial();

export const DiscountSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DiscountSelectFieldsSchema
);

export const DiscountOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    valueType: PZ.Scalar.bool(),
    value: PZ.Scalar.bool(),
    minQuantity: PZ.Scalar.bool(),
    maxQuantity: PZ.Scalar.bool(),
    minOrderTotal: PZ.Scalar.bool(),
    maxOrderTotal: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    usageLimit: PZ.Scalar.bool(),
    usageCount: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
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
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const DiscountOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DiscountOmitFieldsSchema
);

export const DiscountIncludeSchema = z
  .object({
    targets: PZ.Scalar.bool().or(DiscountTargetOwnQuerySchema),
  })
  .partial();

export const DiscountIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DiscountIncludeSchema
);

export const DiscountProjectionSchema = z.union([
  z.object({ omit: DiscountOmitFieldsSchemaJson }),
  z.object({ select: DiscountSelectFieldsSchemaJson }),
  z.object({ include: DiscountIncludeSchemaJson }),
  z.object({}),
]);

export const DiscountTargetRawCreateSchema = z.object({
  type: DiscountTargetTypeSchema,
  discountId: PZ.Scalar.id(),
  storeId: PZ.Scalar.id().optional(),
  productId: PZ.Scalar.id().optional(),
  variantId: PZ.Scalar.id().optional(),
  priceLevelId: PZ.Scalar.id().optional(),
  categoryId: PZ.Scalar.id().optional(),
});

export const DiscountTargetCreateSchema = DiscountTargetRawCreateSchema.clone();

export const DiscountTargetRawUpdateSchema = z.object({
  type: DiscountTargetTypeSchema.optional(),
  discountId: PZ.Scalar.id().optional(),
  storeId: PZ.Scalar.id().optional().optional(),
  productId: PZ.Scalar.id().optional().optional(),
  variantId: PZ.Scalar.id().optional().optional(),
  priceLevelId: PZ.Scalar.id().optional().optional(),
  categoryId: PZ.Scalar.id().optional().optional(),
});

export const DiscountTargetUpdateSchema = DiscountTargetRawUpdateSchema.clone();

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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const DiscountTargetOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  DiscountTargetWhereSchema
);

export const DiscountTargetSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    discountId: PZ.Scalar.bool(),
    storeId: PZ.Scalar.bool(),
    productId: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    priceLevelId: PZ.Scalar.bool(),
    categoryId: PZ.Scalar.bool(),
    discount: PZ.Scalar.bool().or(DiscountOwnQueryOneSchema),
    store: PZ.Scalar.bool().or(StoreOwnQueryOneSchema),
    category: PZ.Scalar.bool().or(CategoryOwnQueryOneSchema),
    priceLevel: PZ.Scalar.bool().or(PriceLevelOwnQueryOneSchema),
    product: PZ.Scalar.bool().or(ProductOwnQueryOneSchema),
    variant: PZ.Scalar.bool().or(VariantOwnQueryOneSchema),
  })
  .partial();

export const DiscountTargetSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DiscountTargetSelectFieldsSchema
);

export const DiscountTargetOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    discountId: PZ.Scalar.bool(),
    storeId: PZ.Scalar.bool(),
    productId: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    priceLevelId: PZ.Scalar.bool(),
    categoryId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'type',
        'discountId',
        'storeId',
        'productId',
        'variantId',
        'priceLevelId',
        'categoryId',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const DiscountTargetOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DiscountTargetOmitFieldsSchema
);

export const DiscountTargetIncludeSchema = z
  .object({
    discount: PZ.Scalar.bool().or(DiscountOwnQueryOneSchema),
    store: PZ.Scalar.bool().or(StoreOwnQueryOneSchema),
    category: PZ.Scalar.bool().or(CategoryOwnQueryOneSchema),
    priceLevel: PZ.Scalar.bool().or(PriceLevelOwnQueryOneSchema),
    product: PZ.Scalar.bool().or(ProductOwnQueryOneSchema),
    variant: PZ.Scalar.bool().or(VariantOwnQueryOneSchema),
  })
  .partial();

export const DiscountTargetIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DiscountTargetIncludeSchema
);

export const DiscountTargetProjectionSchema = z.union([
  z.object({ omit: DiscountTargetOmitFieldsSchemaJson }),
  z.object({ select: DiscountTargetSelectFieldsSchemaJson }),
  z.object({ include: DiscountTargetIncludeSchemaJson }),
  z.object({}),
]);

export const StoreRawCreateSchema = z.object({
  priceLevelId: PZ.Scalar.id(),
  name: PZ.Scalar.name(),
  slug: PZ.Scalar.slug().optional(),
  description: PZ.Scalar.description().optional(),
});

export const StoreCreateSchema = StoreRawCreateSchema.clone().transform(
  PZ.slugTransformer('name')
);

export const StoreRawUpdateSchema = z.object({
  priceLevelId: PZ.Scalar.id().optional(),
  name: PZ.Scalar.name().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
  description: PZ.Scalar.description().optional().optional(),
});

export const StoreUpdateSchema = StoreRawUpdateSchema.clone().transform(
  PZ.slugTransformer('name')
);

export const StoreOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    priceLevelId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const StoreOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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

export const StoreWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StoreWhereSchema
);

export const StoreSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    priceLevelId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    priceLevel: PZ.Scalar.bool().or(PriceLevelOwnQueryOneSchema),
    quantities: PZ.Scalar.bool().or(QuantityOwnQuerySchema),
    discounts: PZ.Scalar.bool().or(DiscountTargetOwnQuerySchema),
    serialNumbers: PZ.Scalar.bool().or(SerialNumberOwnQuerySchema),
  })
  .partial();

export const StoreSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StoreSelectFieldsSchema
);

export const StoreOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    priceLevelId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'priceLevelId', 'name', 'slug', 'description'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const StoreOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StoreOmitFieldsSchema
);

export const StoreIncludeSchema = z
  .object({
    priceLevel: PZ.Scalar.bool().or(PriceLevelOwnQueryOneSchema),
    quantities: PZ.Scalar.bool().or(QuantityOwnQuerySchema),
    discounts: PZ.Scalar.bool().or(DiscountTargetOwnQuerySchema),
    serialNumbers: PZ.Scalar.bool().or(SerialNumberOwnQuerySchema),
  })
  .partial();

export const StoreIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StoreIncludeSchema
);

export const StoreProjectionSchema = z.union([
  z.object({ omit: StoreOmitFieldsSchemaJson }),
  z.object({ select: StoreSelectFieldsSchemaJson }),
  z.object({ include: StoreIncludeSchemaJson }),
  z.object({}),
]);

export const WarrantyPolicyRawCreateSchema = z.object({
  name: PZ.Scalar.name(),
  description: PZ.Scalar.description().optional(),
  duration: PZ.Scalar.int(),
  durationUnit: TimeUnitSchema.optional(),
});

export const WarrantyPolicyCreateSchema = WarrantyPolicyRawCreateSchema.clone();

export const WarrantyPolicyRawUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  description: PZ.Scalar.description().optional().optional(),
  duration: PZ.Scalar.int().optional(),
  durationUnit: TimeUnitSchema.optional().optional(),
});

export const WarrantyPolicyUpdateSchema = WarrantyPolicyRawUpdateSchema.clone();

export const WarrantyPolicyOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    duration: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const WarrantyPolicyOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  WarrantyPolicyWhereSchema
);

export const WarrantyPolicySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    duration: PZ.Scalar.bool(),
    durationUnit: PZ.Scalar.bool(),
    products: PZ.Scalar.bool().or(ProductWarrantyOwnQuerySchema),
  })
  .partial();

export const WarrantyPolicySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  WarrantyPolicySelectFieldsSchema
);

export const WarrantyPolicyOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    duration: PZ.Scalar.bool(),
    durationUnit: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'name', 'description', 'duration', 'durationUnit'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const WarrantyPolicyOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  WarrantyPolicyOmitFieldsSchema
);

export const WarrantyPolicyIncludeSchema = z
  .object({
    products: PZ.Scalar.bool().or(ProductWarrantyOwnQuerySchema),
  })
  .partial();

export const WarrantyPolicyIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  WarrantyPolicyIncludeSchema
);

export const WarrantyPolicyProjectionSchema = z.union([
  z.object({ omit: WarrantyPolicyOmitFieldsSchemaJson }),
  z.object({ select: WarrantyPolicySelectFieldsSchemaJson }),
  z.object({ include: WarrantyPolicyIncludeSchemaJson }),
  z.object({}),
]);

export const ProductWarrantyRawCreateSchema = z.object({
  productId: PZ.Scalar.id().optional(),
  variantId: PZ.Scalar.id().optional(),
  policyId: PZ.Scalar.id(),
});

export const ProductWarrantyCreateSchema =
  ProductWarrantyRawCreateSchema.clone();

export const ProductWarrantyRawUpdateSchema = z.object({
  productId: PZ.Scalar.id().optional().optional(),
  variantId: PZ.Scalar.id().optional().optional(),
  policyId: PZ.Scalar.id().optional(),
});

export const ProductWarrantyUpdateSchema =
  ProductWarrantyRawUpdateSchema.clone();

export const ProductWarrantyOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    productId: PZ.OrderDirectionSchema,
    variantId: PZ.OrderDirectionSchema,
    policyId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ProductWarrantyOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  ProductWarrantyWhereSchema
);

export const ProductWarrantySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    productId: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    policyId: PZ.Scalar.bool(),
    product: PZ.Scalar.bool().or(ProductOwnQueryOneSchema),
    variant: PZ.Scalar.bool().or(VariantOwnQueryOneSchema),
    policy: PZ.Scalar.bool().or(WarrantyPolicyOwnQueryOneSchema),
  })
  .partial();

export const ProductWarrantySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProductWarrantySelectFieldsSchema
);

export const ProductWarrantyOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    productId: PZ.Scalar.bool(),
    variantId: PZ.Scalar.bool(),
    policyId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'productId', 'variantId', 'policyId'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const ProductWarrantyOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProductWarrantyOmitFieldsSchema
);

export const ProductWarrantyIncludeSchema = z
  .object({
    product: PZ.Scalar.bool().or(ProductOwnQueryOneSchema),
    variant: PZ.Scalar.bool().or(VariantOwnQueryOneSchema),
    policy: PZ.Scalar.bool().or(WarrantyPolicyOwnQueryOneSchema),
  })
  .partial();

export const ProductWarrantyIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProductWarrantyIncludeSchema
);

export const ProductWarrantyProjectionSchema = z.union([
  z.object({ omit: ProductWarrantyOmitFieldsSchemaJson }),
  z.object({ select: ProductWarrantySelectFieldsSchemaJson }),
  z.object({ include: ProductWarrantyIncludeSchemaJson }),
  z.object({}),
]);

export const CategoryQueryOneSchema = z
  .object({
    where: CategoryWhereSchemaJson,
    distinct: CategoryDistinctFieldsSchema,
  })
  .partial();

export const CategoryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: CategoryWhereSchemaJson,
    distinct: CategoryDistinctFieldsSchema,
    orderBy: CategoryOrderBySchemaJson,
  })
  .partial();

export type CategoryCreate = z.infer<typeof CategoryRawCreateSchema>;

export type CategoryUpdate = z.infer<typeof CategoryRawUpdateSchema>;

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

export type CategoryOmitFields = z.infer<typeof CategoryOmitFieldsSchema>;

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
    ...PaginationSchema.shape,
    where: ProductWhereSchemaJson,
    distinct: ProductDistinctFieldsSchema,
    orderBy: ProductOrderBySchemaJson,
  })
  .partial();

export type ProductCreate = z.infer<typeof ProductRawCreateSchema>;

export type ProductUpdate = z.infer<typeof ProductRawUpdateSchema>;

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

export type ProductOmitFields = z.infer<typeof ProductOmitFieldsSchema>;

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
    ...PaginationSchema.shape,
    where: ProductCategoryWhereSchemaJson,
    distinct: ProductCategoryDistinctFieldsSchema,
    orderBy: ProductCategoryOrderBySchemaJson,
  })
  .partial();

export type ProductCategoryCreate = z.infer<
  typeof ProductCategoryRawCreateSchema
>;

export type ProductCategoryUpdate = z.infer<
  typeof ProductCategoryRawUpdateSchema
>;

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

export type ProductCategoryOmitFields = z.infer<
  typeof ProductCategoryOmitFieldsSchema
>;

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
    ...PaginationSchema.shape,
    where: VariantWhereSchemaJson,
    distinct: VariantDistinctFieldsSchema,
    orderBy: VariantOrderBySchemaJson,
  })
  .partial();

export type VariantCreate = z.infer<typeof VariantRawCreateSchema>;

export type VariantUpdate = z.infer<typeof VariantRawUpdateSchema>;

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

export type VariantOmitFields = z.infer<typeof VariantOmitFieldsSchema>;

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
    ...PaginationSchema.shape,
    where: AttributeCategoryWhereSchemaJson,
    distinct: AttributeCategoryDistinctFieldsSchema,
    orderBy: AttributeCategoryOrderBySchemaJson,
  })
  .partial();

export type AttributeCategoryCreate = z.infer<
  typeof AttributeCategoryRawCreateSchema
>;

export type AttributeCategoryUpdate = z.infer<
  typeof AttributeCategoryRawUpdateSchema
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

export type AttributeCategoryOmitFields = z.infer<
  typeof AttributeCategoryOmitFieldsSchema
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
    ...PaginationSchema.shape,
    where: AttributeWhereSchemaJson,
    distinct: AttributeDistinctFieldsSchema,
    orderBy: AttributeOrderBySchemaJson,
  })
  .partial();

export type AttributeCreate = z.infer<typeof AttributeRawCreateSchema>;

export type AttributeUpdate = z.infer<typeof AttributeRawUpdateSchema>;

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

export type AttributeOmitFields = z.infer<typeof AttributeOmitFieldsSchema>;

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
    ...PaginationSchema.shape,
    where: UnitWhereSchemaJson,
    distinct: UnitDistinctFieldsSchema,
    orderBy: UnitOrderBySchemaJson,
  })
  .partial();

export type UnitCreate = z.infer<typeof UnitRawCreateSchema>;

export type UnitUpdate = z.infer<typeof UnitRawUpdateSchema>;

export type UnitOrderBy = z.infer<typeof UnitOrderBySchema>;

export type UnitOwnSelectFields = z.infer<typeof UnitOwnSelectFieldsSchema>;

export type UnitOwnWhere = z.infer<typeof UnitOwnWhereSchema>;

export type UnitOwnQuery = z.infer<typeof UnitOwnQuerySchema>;

export type UnitOwnQueryOne = z.infer<typeof UnitOwnQueryOneSchema>;

export type UnitWhere = z.infer<typeof UnitWhereSchema>;

export type UnitInclude = z.infer<typeof UnitIncludeSchema>;

export type UnitQueryOne = z.infer<typeof UnitQueryOneSchema>;

export type UnitQuery = z.infer<typeof UnitQuerySchema>;

export type UnitOmitFields = z.infer<typeof UnitOmitFieldsSchema>;

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
    ...PaginationSchema.shape,
    where: AttributeUnitWhereSchemaJson,
    distinct: AttributeUnitDistinctFieldsSchema,
    orderBy: AttributeUnitOrderBySchemaJson,
  })
  .partial();

export type AttributeUnitCreate = z.infer<typeof AttributeUnitRawCreateSchema>;

export type AttributeUnitUpdate = z.infer<typeof AttributeUnitRawUpdateSchema>;

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

export type AttributeUnitOmitFields = z.infer<
  typeof AttributeUnitOmitFieldsSchema
>;

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
    ...PaginationSchema.shape,
    where: AttributeValueWhereSchemaJson,
    distinct: AttributeValueDistinctFieldsSchema,
    orderBy: AttributeValueOrderBySchemaJson,
  })
  .partial();

export type AttributeValueCreate = z.infer<
  typeof AttributeValueRawCreateSchema
>;

export type AttributeValueUpdate = z.infer<
  typeof AttributeValueRawUpdateSchema
>;

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

export type AttributeValueOmitFields = z.infer<
  typeof AttributeValueOmitFieldsSchema
>;

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
    ...PaginationSchema.shape,
    where: CurrencyWhereSchemaJson,
    distinct: CurrencyDistinctFieldsSchema,
    orderBy: CurrencyOrderBySchemaJson,
  })
  .partial();

export type CurrencyCreate = z.infer<typeof CurrencyRawCreateSchema>;

export type CurrencyUpdate = z.infer<typeof CurrencyRawUpdateSchema>;

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

export type CurrencyOmitFields = z.infer<typeof CurrencyOmitFieldsSchema>;

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
    ...PaginationSchema.shape,
    where: PriceLevelWhereSchemaJson,
    distinct: PriceLevelDistinctFieldsSchema,
    orderBy: PriceLevelOrderBySchemaJson,
  })
  .partial();

export type PriceLevelCreate = z.infer<typeof PriceLevelRawCreateSchema>;

export type PriceLevelUpdate = z.infer<typeof PriceLevelRawUpdateSchema>;

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

export type PriceLevelOmitFields = z.infer<typeof PriceLevelOmitFieldsSchema>;

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
    ...PaginationSchema.shape,
    where: PriceWhereSchemaJson,
    distinct: PriceDistinctFieldsSchema,
    orderBy: PriceOrderBySchemaJson,
  })
  .partial();

export type PriceCreate = z.infer<typeof PriceRawCreateSchema>;

export type PriceUpdate = z.infer<typeof PriceRawUpdateSchema>;

export type PriceOrderBy = z.infer<typeof PriceOrderBySchema>;

export type PriceOwnSelectFields = z.infer<typeof PriceOwnSelectFieldsSchema>;

export type PriceOwnWhere = z.infer<typeof PriceOwnWhereSchema>;

export type PriceOwnQuery = z.infer<typeof PriceOwnQuerySchema>;

export type PriceOwnQueryOne = z.infer<typeof PriceOwnQueryOneSchema>;

export type PriceWhere = z.infer<typeof PriceWhereSchema>;

export type PriceInclude = z.infer<typeof PriceIncludeSchema>;

export type PriceQueryOne = z.infer<typeof PriceQueryOneSchema>;

export type PriceQuery = z.infer<typeof PriceQuerySchema>;

export type PriceOmitFields = z.infer<typeof PriceOmitFieldsSchema>;

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
    ...PaginationSchema.shape,
    where: QuantityWhereSchemaJson,
    distinct: QuantityDistinctFieldsSchema,
    orderBy: QuantityOrderBySchemaJson,
  })
  .partial();

export type QuantityCreate = z.infer<typeof QuantityRawCreateSchema>;

export type QuantityUpdate = z.infer<typeof QuantityRawUpdateSchema>;

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

export type QuantityOmitFields = z.infer<typeof QuantityOmitFieldsSchema>;

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
    ...PaginationSchema.shape,
    where: SerialNumberWhereSchemaJson,
    distinct: SerialNumberDistinctFieldsSchema,
    orderBy: SerialNumberOrderBySchemaJson,
  })
  .partial();

export type SerialNumberCreate = z.infer<typeof SerialNumberRawCreateSchema>;

export type SerialNumberUpdate = z.infer<typeof SerialNumberRawUpdateSchema>;

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

export type SerialNumberOmitFields = z.infer<
  typeof SerialNumberOmitFieldsSchema
>;

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
    ...PaginationSchema.shape,
    where: DiscountWhereSchemaJson,
    distinct: DiscountDistinctFieldsSchema,
    orderBy: DiscountOrderBySchemaJson,
  })
  .partial();

export type DiscountCreate = z.infer<typeof DiscountRawCreateSchema>;

export type DiscountUpdate = z.infer<typeof DiscountRawUpdateSchema>;

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

export type DiscountOmitFields = z.infer<typeof DiscountOmitFieldsSchema>;

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
    ...PaginationSchema.shape,
    where: DiscountTargetWhereSchemaJson,
    distinct: DiscountTargetDistinctFieldsSchema,
    orderBy: DiscountTargetOrderBySchemaJson,
  })
  .partial();

export type DiscountTargetCreate = z.infer<
  typeof DiscountTargetRawCreateSchema
>;

export type DiscountTargetUpdate = z.infer<
  typeof DiscountTargetRawUpdateSchema
>;

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

export type DiscountTargetOmitFields = z.infer<
  typeof DiscountTargetOmitFieldsSchema
>;

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
    ...PaginationSchema.shape,
    where: StoreWhereSchemaJson,
    distinct: StoreDistinctFieldsSchema,
    orderBy: StoreOrderBySchemaJson,
  })
  .partial();

export type StoreCreate = z.infer<typeof StoreRawCreateSchema>;

export type StoreUpdate = z.infer<typeof StoreRawUpdateSchema>;

export type StoreOrderBy = z.infer<typeof StoreOrderBySchema>;

export type StoreOwnSelectFields = z.infer<typeof StoreOwnSelectFieldsSchema>;

export type StoreOwnWhere = z.infer<typeof StoreOwnWhereSchema>;

export type StoreOwnQuery = z.infer<typeof StoreOwnQuerySchema>;

export type StoreOwnQueryOne = z.infer<typeof StoreOwnQueryOneSchema>;

export type StoreWhere = z.infer<typeof StoreWhereSchema>;

export type StoreInclude = z.infer<typeof StoreIncludeSchema>;

export type StoreQueryOne = z.infer<typeof StoreQueryOneSchema>;

export type StoreQuery = z.infer<typeof StoreQuerySchema>;

export type StoreOmitFields = z.infer<typeof StoreOmitFieldsSchema>;

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
    ...PaginationSchema.shape,
    where: WarrantyPolicyWhereSchemaJson,
    distinct: WarrantyPolicyDistinctFieldsSchema,
    orderBy: WarrantyPolicyOrderBySchemaJson,
  })
  .partial();

export type WarrantyPolicyCreate = z.infer<
  typeof WarrantyPolicyRawCreateSchema
>;

export type WarrantyPolicyUpdate = z.infer<
  typeof WarrantyPolicyRawUpdateSchema
>;

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

export type WarrantyPolicyOmitFields = z.infer<
  typeof WarrantyPolicyOmitFieldsSchema
>;

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
    ...PaginationSchema.shape,
    where: ProductWarrantyWhereSchemaJson,
    distinct: ProductWarrantyDistinctFieldsSchema,
    orderBy: ProductWarrantyOrderBySchemaJson,
  })
  .partial();

export type ProductWarrantyCreate = z.infer<
  typeof ProductWarrantyRawCreateSchema
>;

export type ProductWarrantyUpdate = z.infer<
  typeof ProductWarrantyRawUpdateSchema
>;

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

export type ProductWarrantyOmitFields = z.infer<
  typeof ProductWarrantyOmitFieldsSchema
>;

export type ProductWarrantySelectFields = z.infer<
  typeof ProductWarrantySelectFieldsSchema
>;

export type ProductWarrantyProjection = z.infer<
  typeof ProductWarrantyProjectionSchema
>;

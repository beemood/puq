import z from "zod";

export const _int = z.coerce.number().int();

export const _str = z.string();

export const _num = z.coerce.number();

export const _bool = z.coerce.boolean();

export const _date = z.iso.datetime();

export const _shortText = z.string().max(30);

export const _longText = z.string().max(2000);

export const _id = z.coerce.number().int().min(1);

export const _currency = z.coerce.number().min(0);

export const _positiveInt = z.coerce.number().int().min(0);

export const _name = z.string().min(3).max(30);

export const _slug = z
  .string()
  .min(3)
  .max(30)
  .regex(/[0-9a-z-]{0,30}/, {
    error: "Slug must contain only lowercase letters, numbers, and dash.",
  });

export const _description = z.string().max(1000);

export const _email = z.string().max(1000);

export const _phone = z
  .string()
  .regex(/^[0-9]{3} [0-9]{3} [0-9]{2}-[0-9]{2}$/, {
    error: "Invalid phone format",
  });

export const _url = z.url();

export const _password = z
  .string()
  .min(6)
  .regex(/[A-Z]{1,}/, { error: "must contain at least one upper-case letter" })
  .regex(/[a-z]{1,}/, { error: "must contain at least one lower-case letter" })
  .regex(/[0-9]{1,}/, { error: "must contain at least one number" })
  .regex(/[~!@#$%^&*()_+{}":'<>?]{1,}/, {
    error: "must contain at least one special character",
  });

export const _select = z.coerce.boolean().optional();

export const _direction = z.enum(["asc", "desc"]).optional();

export const _orderByCount = z.object({ _count: _direction }).optional();

export const _take = _int.min(1).default(20).optional();

export const _skip = _int.min(0).optional();

export const _json = z.preprocess((value) => {
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }
  return value;
}, z.any());

export const _jsonPreprocessor = (value: unknown) => {
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  return value;
};

export const _0_boolFilter = z.object({
  equals: _bool.optional(),
});

export const _1_boolFilter = z.object({
  equals: _bool.optional(),
  not: _bool.or(_0_boolFilter).optional(),
});

export const _boolFilter = _bool.or(_1_boolFilter);

export const _0_intFilter = z.object({
  equals: _int.optional(),
  gt: _int.optional(),
  gte: _int.optional(),
  lt: _int.optional(),
  lte: _int.optional(),
  in: _int.array().optional(),
  notIn: _int.array().optional(),
});

export const _1_intFilter = z.object({
  equals: _int.optional(),
  gt: _int.optional(),
  gte: _int.optional(),
  lt: _int.optional(),
  lte: _int.optional(),
  in: _int.array().optional(),
  notIn: _int.array().optional(),
  not: _0_intFilter.optional(),
});

export const _intFilter = _int.or(_1_intFilter);

export const _0_numFilter = z.object({
  equals: _num.optional(),
  gt: _num.optional(),
  gte: _num.optional(),
  lt: _num.optional(),
  lte: _num.optional(),
  in: _num.array().optional(),
  notIn: _num.array().optional(),
});

export const _1_numFilter = z.object({
  equals: _num.optional(),
  gt: _num.optional(),
  gte: _num.optional(),
  lt: _num.optional(),
  lte: _num.optional(),
  in: _num.array().optional(),
  notIn: _num.array().optional(),
  not: _0_numFilter.optional(),
});

export const _numFilter = _num.or(_1_numFilter);

export const _0_dateFilter = z.object({
  equals: _date.optional(),
  gt: _date.optional(),
  gte: _date.optional(),
  lt: _date.optional(),
  lte: _date.optional(),
  in: _date.array().optional(),
  notIn: _date.array().optional(),
});

export const _1_dateFilter = z.object({
  equals: _date.optional(),
  gt: _date.optional(),
  gte: _date.optional(),
  lt: _date.optional(),
  lte: _date.optional(),
  in: _date.array().optional(),
  notIn: _date.array().optional(),
  not: _0_dateFilter.optional(),
});

export const _dateFilter = _date.or(_1_dateFilter);

export const _strMode = z.enum(["default", "insensitive"]);

export const _0_strFilter = z.object({
  contains: _str.optional(),
  endsWith: _str.optional(),
  equals: _str.optional(),
  gt: _str.optional(),
  gte: _str.optional(),
  lt: _str.optional(),
  lte: _str.optional(),
  startsWith: _str.optional(),
  in: _str.array().optional(),
  notIn: _str.array().optional(),
  mode: _strMode.optional(),
});

export const _1_strFilter = z.object({
  contains: _str.optional(),
  endsWith: _str.optional(),
  equals: _str.optional(),
  gt: _str.optional(),
  gte: _str.optional(),
  lt: _str.optional(),
  lte: _str.optional(),
  startsWith: _str.optional(),
  in: _str.array().optional(),
  notIn: _str.array().optional(),
  mode: _strMode.optional(),
  not: _str.or(_0_strFilter).optional(),
});

export const _strFilter = _str.or(_1_strFilter);

export const _jsonFilter = z.object({
  path: _str.array().optional(),
  array_contains: _str.optional(),
  array_ends_with: _str.optional(),
  array_starts_with: _str.optional(),
  equals: _str.optional(),
  gt: _str.optional(),
  gte: _str.optional(),
  lt: _str.optional(),
  lte: _str.optional(),
  mode: _strMode,
  string_contains: _str.optional(),
  string_ends_with: _str.optional(),
  string_starts_with: _str.optional(),
  not: _str.optional(),
});

export const _strArrayFilter = z.object({
  equals: _str.array().optional(),
  has: _str.optional(),
  hasEvery: _str.array().optional(),
  hasSome: _str.array().optional(),
  isEmpty: _bool.optional(),
});

export const _numArrayFilter = z.object({
  equals: _num.array().optional(),
  has: _num.optional(),
  hasEvery: _num.array().optional(),
  hasSome: _num.array().optional(),
  isEmpty: _bool.optional(),
});

export const _intArrayFilter = z.object({
  equals: _int.array().optional(),
  has: _int.optional(),
  hasEvery: _int.array().optional(),
  hasSome: _int.array().optional(),
  isEmpty: _bool.optional(),
});

export const _dateArrayFilter = z.object({
  equals: _date.array().optional(),
  has: _date.optional(),
  hasEvery: _date.array().optional(),
  hasSome: _date.array().optional(),
  isEmpty: _bool.optional(),
});

export const DiscountTargetTypeSchema = z.enum([
  "STORE",
  "PRICE_LEVEL",
  "CATEGORY",
  "PRODUCT",
  "VARIANT",
  "STORE_CATEGORY",
  "STORE_PRODUCT",
  "STORE_VARIANT",
  "PRICE_LEVEL_CATEGORY",
  "PRICE_LEVEL_PRODUCT",
  "PRICE_LEVEL_VARIANT",
]);

export const __DiscountTargetTypeFilterSchema = z.object({
  equals: DiscountTargetTypeSchema.optional(),
  in: DiscountTargetTypeSchema.array().optional(),
  notIn: DiscountTargetTypeSchema.array().optional(),
});
export const DiscountTargetTypeFilterSchema = z.object({
  equals: DiscountTargetTypeSchema.optional(),
  in: DiscountTargetTypeSchema.array().optional(),
  notIn: DiscountTargetTypeSchema.array().optional(),
  not: DiscountTargetTypeSchema.or(__DiscountTargetTypeFilterSchema).optional(),
});

export const DiscountTargetTypeArrayFilterSchema = z.object({
  equals: DiscountTargetTypeSchema.array().optional(),
  has: DiscountTargetTypeSchema.optional(),
  hasEvery: DiscountTargetTypeSchema.array().optional(),
  hasSome: DiscountTargetTypeSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const ValueTypeSchema = z.enum(["PERCENT", "FIXED"]);

export const __ValueTypeFilterSchema = z.object({
  equals: ValueTypeSchema.optional(),
  in: ValueTypeSchema.array().optional(),
  notIn: ValueTypeSchema.array().optional(),
});
export const ValueTypeFilterSchema = z.object({
  equals: ValueTypeSchema.optional(),
  in: ValueTypeSchema.array().optional(),
  notIn: ValueTypeSchema.array().optional(),
  not: ValueTypeSchema.or(__ValueTypeFilterSchema).optional(),
});

export const ValueTypeArrayFilterSchema = z.object({
  equals: ValueTypeSchema.array().optional(),
  has: ValueTypeSchema.optional(),
  hasEvery: ValueTypeSchema.array().optional(),
  hasSome: ValueTypeSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const DiscountTypeSchema = z.enum([
  "SIMPLE",
  "VOLUME",
  "FREE_SHIPPING",
  "ORDER_TOTAL",
]);

export const __DiscountTypeFilterSchema = z.object({
  equals: DiscountTypeSchema.optional(),
  in: DiscountTypeSchema.array().optional(),
  notIn: DiscountTypeSchema.array().optional(),
});
export const DiscountTypeFilterSchema = z.object({
  equals: DiscountTypeSchema.optional(),
  in: DiscountTypeSchema.array().optional(),
  notIn: DiscountTypeSchema.array().optional(),
  not: DiscountTypeSchema.or(__DiscountTypeFilterSchema).optional(),
});

export const DiscountTypeArrayFilterSchema = z.object({
  equals: DiscountTypeSchema.array().optional(),
  has: DiscountTypeSchema.optional(),
  hasEvery: DiscountTypeSchema.array().optional(),
  hasSome: DiscountTypeSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const TimeUnitSchema = z.enum([
  "SECOND",
  "MINUTE",
  "HOUR",
  "DAY",
  "MONTH",
  "YEAR",
  "DECADE",
  "LIFE_TIME",
]);

export const __TimeUnitFilterSchema = z.object({
  equals: TimeUnitSchema.optional(),
  in: TimeUnitSchema.array().optional(),
  notIn: TimeUnitSchema.array().optional(),
});
export const TimeUnitFilterSchema = z.object({
  equals: TimeUnitSchema.optional(),
  in: TimeUnitSchema.array().optional(),
  notIn: TimeUnitSchema.array().optional(),
  not: TimeUnitSchema.or(__TimeUnitFilterSchema).optional(),
});

export const TimeUnitArrayFilterSchema = z.object({
  equals: TimeUnitSchema.array().optional(),
  has: TimeUnitSchema.optional(),
  hasEvery: TimeUnitSchema.array().optional(),
  hasSome: TimeUnitSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const CategoryDistinctSchema = z
  .enum(["id", "parentId", "name", "slug"])
  .array()
  .optional();

export const ProductDistinctSchema = z
  .enum([
    "id",
    "createdAt",
    "updatedAt",
    "isActive",
    "uuid",
    "name",
    "slug",
    "description",
  ])
  .array()
  .optional();

export const ProductCategoryDistinctSchema = z
  .enum(["id", "productId", "categoryId"])
  .array()
  .optional();

export const VariantDistinctSchema = z
  .enum(["id", "uuid", "productId", "sku", "upc"])
  .array()
  .optional();

export const AttributeCategoryDistinctSchema = z
  .enum(["id", "name", "slug"])
  .array()
  .optional();

export const AttributeDistinctSchema = z
  .enum(["id", "categoryId", "name", "description"])
  .array()
  .optional();

export const UnitDistinctSchema = z
  .enum(["id", "name", "symbol"])
  .array()
  .optional();

export const AttributeUnitDistinctSchema = z
  .enum(["id", "attributeId", "unitId"])
  .array()
  .optional();

export const AttributeValueDistinctSchema = z
  .enum([
    "id",
    "attributeId",
    "variantId",
    "textValue",
    "booleanValue",
    "floatValue",
  ])
  .array()
  .optional();

export const CurrencyDistinctSchema = z
  .enum(["id", "name", "code", "symbol"])
  .array()
  .optional();

export const PriceLevelDistinctSchema = z
  .enum(["id", "currencyId", "name", "slug", "taxrate", "notes"])
  .array()
  .optional();

export const PriceDistinctSchema = z
  .enum(["id", "variantId", "priceLevelId", "price", "cost", "description"])
  .array()
  .optional();

export const QuantityDistinctSchema = z
  .enum(["id", "variantId", "storeId", "quantity", "alertThreshold"])
  .array()
  .optional();

export const SerialNumberDistinctSchema = z
  .enum(["id", "variantId", "storeId", "serialNumber", "inStock"])
  .array()
  .optional();

export const DiscountDistinctSchema = z
  .enum([
    "id",
    "code",
    "type",
    "valueType",
    "value",
    "minQuantity",
    "maxQuantity",
    "minOrderTotal",
    "maxOrderTotal",
    "startDate",
    "endDate",
    "usageLimit",
    "usageCount",
  ])
  .array()
  .optional();

export const DiscountTargetDistinctSchema = z
  .enum([
    "id",
    "type",
    "discountId",
    "storeId",
    "productId",
    "variantId",
    "priceLevelId",
    "categoryId",
  ])
  .array()
  .optional();

export const StoreDistinctSchema = z
  .enum(["id", "priceLevelId", "name", "slug", "description"])
  .array()
  .optional();

export const WarrantyPolicyDistinctSchema = z
  .enum(["id", "name", "description", "duration", "durationUnit"])
  .array()
  .optional();

export const ProductWarrantyDistinctSchema = z
  .enum(["id", "productId", "variantId", "policyId"])
  .array()
  .optional();

export const CategoryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  parentId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
});

export const ProductOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  isActive: _boolFilter.optional(),
  uuid: _strFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
});

export const ProductCategoryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  productId: _intFilter.optional(),
  categoryId: _intFilter.optional(),
});

export const VariantOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  productId: _intFilter.optional(),
  sku: _strFilter.optional(),
  upc: _strFilter.optional(),
});

export const AttributeCategoryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
});

export const AttributeOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  categoryId: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
});

export const UnitOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  symbol: _strFilter.optional(),
});

export const AttributeUnitOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  attributeId: _intFilter.optional(),
  unitId: _intFilter.optional(),
});

export const AttributeValueOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  attributeId: _intFilter.optional(),
  variantId: _intFilter.optional(),
  textValue: _strFilter.optional(),
  booleanValue: _boolFilter.optional(),
  floatValue: _numFilter.optional(),
});

export const CurrencyOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  code: _strFilter.optional(),
  symbol: _strFilter.optional(),
});

export const PriceLevelOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  currencyId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  taxrate: _numFilter.optional(),
  notes: _strFilter.optional(),
});

export const PriceOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  variantId: _intFilter.optional(),
  priceLevelId: _intFilter.optional(),
  price: _numFilter.optional(),
  cost: _numFilter.optional(),
  description: _strFilter.optional(),
});

export const QuantityOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  variantId: _intFilter.optional(),
  storeId: _intFilter.optional(),
  quantity: _intFilter.optional(),
  alertThreshold: _intFilter.optional(),
});

export const SerialNumberOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  variantId: _intFilter.optional(),
  storeId: _intFilter.optional(),
  serialNumber: _strFilter.optional(),
  inStock: _boolFilter.optional(),
});

export const DiscountOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  code: _strFilter.optional(),
  type: DiscountTypeFilterSchema.optional(),
  valueType: ValueTypeFilterSchema.optional(),
  value: _numFilter.optional(),
  minQuantity: _intFilter.optional(),
  maxQuantity: _intFilter.optional(),
  minOrderTotal: _numFilter.optional(),
  maxOrderTotal: _numFilter.optional(),
  startDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
  usageLimit: _intFilter.optional(),
  usageCount: _intFilter.optional(),
});

export const DiscountTargetOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  type: DiscountTargetTypeFilterSchema.optional(),
  discountId: _intFilter.optional(),
  storeId: _intFilter.optional(),
  productId: _intFilter.optional(),
  variantId: _intFilter.optional(),
  priceLevelId: _intFilter.optional(),
  categoryId: _intFilter.optional(),
});

export const StoreOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  priceLevelId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
});

export const WarrantyPolicyOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  duration: _intFilter.optional(),
  durationUnit: TimeUnitFilterSchema.optional(),
});

export const ProductWarrantyOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  productId: _intFilter.optional(),
  variantId: _intFilter.optional(),
  policyId: _intFilter.optional(),
});

export const CategoryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnWhereSchema
);

export const ProductOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductOwnWhereSchema
);

export const ProductCategoryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCategoryOwnWhereSchema
);

export const VariantOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  VariantOwnWhereSchema
);

export const AttributeCategoryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCategoryOwnWhereSchema
);

export const AttributeOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeOwnWhereSchema
);

export const UnitOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UnitOwnWhereSchema
);

export const AttributeUnitOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeUnitOwnWhereSchema
);

export const AttributeValueOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeValueOwnWhereSchema
);

export const CurrencyOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CurrencyOwnWhereSchema
);

export const PriceLevelOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceLevelOwnWhereSchema
);

export const PriceOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceOwnWhereSchema
);

export const QuantityOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityOwnWhereSchema
);

export const SerialNumberOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberOwnWhereSchema
);

export const DiscountOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountOwnWhereSchema
);

export const DiscountTargetOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountTargetOwnWhereSchema
);

export const StoreOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StoreOwnWhereSchema
);

export const WarrantyPolicyOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WarrantyPolicyOwnWhereSchema
);

export const ProductWarrantyOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductWarrantyOwnWhereSchema
);

export const CategoryWhereSchema = z.object({
  id: _intFilter.optional(),
  parentId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  parent: CategoryOwnWhereSchema.optional(),
  children: z
    .object({
      every: CategoryOwnWhereSchema.optional(),
      some: CategoryOwnWhereSchema.optional(),
      none: CategoryOwnWhereSchema.optional(),
    })
    .optional(),
  products: z
    .object({
      every: ProductCategoryOwnWhereSchema.optional(),
      some: ProductCategoryOwnWhereSchema.optional(),
      none: ProductCategoryOwnWhereSchema.optional(),
    })
    .optional(),
  discountTargets: z
    .object({
      every: DiscountTargetOwnWhereSchema.optional(),
      some: DiscountTargetOwnWhereSchema.optional(),
      none: DiscountTargetOwnWhereSchema.optional(),
    })
    .optional(),
});

export const ProductWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  isActive: _boolFilter.optional(),
  uuid: _strFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
  variants: z
    .object({
      every: VariantOwnWhereSchema.optional(),
      some: VariantOwnWhereSchema.optional(),
      none: VariantOwnWhereSchema.optional(),
    })
    .optional(),
  categories: z
    .object({
      every: ProductCategoryOwnWhereSchema.optional(),
      some: ProductCategoryOwnWhereSchema.optional(),
      none: ProductCategoryOwnWhereSchema.optional(),
    })
    .optional(),
  discounts: z
    .object({
      every: DiscountTargetOwnWhereSchema.optional(),
      some: DiscountTargetOwnWhereSchema.optional(),
      none: DiscountTargetOwnWhereSchema.optional(),
    })
    .optional(),
  warranties: z
    .object({
      every: ProductWarrantyOwnWhereSchema.optional(),
      some: ProductWarrantyOwnWhereSchema.optional(),
      none: ProductWarrantyOwnWhereSchema.optional(),
    })
    .optional(),
});

export const ProductCategoryWhereSchema = z.object({
  id: _intFilter.optional(),
  productId: _intFilter.optional(),
  categoryId: _intFilter.optional(),
  product: ProductOwnWhereSchema.optional(),
  category: CategoryOwnWhereSchema.optional(),
});

export const VariantWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  productId: _intFilter.optional(),
  sku: _strFilter.optional(),
  upc: _strFilter.optional(),
  product: ProductOwnWhereSchema.optional(),
  attributes: z
    .object({
      every: AttributeValueOwnWhereSchema.optional(),
      some: AttributeValueOwnWhereSchema.optional(),
      none: AttributeValueOwnWhereSchema.optional(),
    })
    .optional(),
  prices: z
    .object({
      every: PriceOwnWhereSchema.optional(),
      some: PriceOwnWhereSchema.optional(),
      none: PriceOwnWhereSchema.optional(),
    })
    .optional(),
  quantities: z
    .object({
      every: QuantityOwnWhereSchema.optional(),
      some: QuantityOwnWhereSchema.optional(),
      none: QuantityOwnWhereSchema.optional(),
    })
    .optional(),
  discounts: z
    .object({
      every: DiscountTargetOwnWhereSchema.optional(),
      some: DiscountTargetOwnWhereSchema.optional(),
      none: DiscountTargetOwnWhereSchema.optional(),
    })
    .optional(),
  serrialNumbers: z
    .object({
      every: SerialNumberOwnWhereSchema.optional(),
      some: SerialNumberOwnWhereSchema.optional(),
      none: SerialNumberOwnWhereSchema.optional(),
    })
    .optional(),
  warranties: z
    .object({
      every: ProductWarrantyOwnWhereSchema.optional(),
      some: ProductWarrantyOwnWhereSchema.optional(),
      none: ProductWarrantyOwnWhereSchema.optional(),
    })
    .optional(),
});

export const AttributeCategoryWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  attributes: z
    .object({
      every: AttributeOwnWhereSchema.optional(),
      some: AttributeOwnWhereSchema.optional(),
      none: AttributeOwnWhereSchema.optional(),
    })
    .optional(),
});

export const AttributeWhereSchema = z.object({
  id: _intFilter.optional(),
  categoryId: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  category: AttributeCategoryOwnWhereSchema.optional(),
  unites: z
    .object({
      every: AttributeUnitOwnWhereSchema.optional(),
      some: AttributeUnitOwnWhereSchema.optional(),
      none: AttributeUnitOwnWhereSchema.optional(),
    })
    .optional(),
  values: z
    .object({
      every: AttributeValueOwnWhereSchema.optional(),
      some: AttributeValueOwnWhereSchema.optional(),
      none: AttributeValueOwnWhereSchema.optional(),
    })
    .optional(),
});

export const UnitWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  symbol: _strFilter.optional(),
  attributes: z
    .object({
      every: AttributeUnitOwnWhereSchema.optional(),
      some: AttributeUnitOwnWhereSchema.optional(),
      none: AttributeUnitOwnWhereSchema.optional(),
    })
    .optional(),
});

export const AttributeUnitWhereSchema = z.object({
  id: _intFilter.optional(),
  attributeId: _intFilter.optional(),
  unitId: _intFilter.optional(),
  attribute: AttributeOwnWhereSchema.optional(),
  unit: UnitOwnWhereSchema.optional(),
});

export const AttributeValueWhereSchema = z.object({
  id: _intFilter.optional(),
  attributeId: _intFilter.optional(),
  variantId: _intFilter.optional(),
  textValue: _strFilter.optional(),
  booleanValue: _boolFilter.optional(),
  floatValue: _numFilter.optional(),
  variant: VariantOwnWhereSchema.optional(),
  attribute: AttributeOwnWhereSchema.optional(),
});

export const CurrencyWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  code: _strFilter.optional(),
  symbol: _strFilter.optional(),
  priceLevels: z
    .object({
      every: PriceLevelOwnWhereSchema.optional(),
      some: PriceLevelOwnWhereSchema.optional(),
      none: PriceLevelOwnWhereSchema.optional(),
    })
    .optional(),
});

export const PriceLevelWhereSchema = z.object({
  id: _intFilter.optional(),
  currencyId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  taxrate: _numFilter.optional(),
  notes: _strFilter.optional(),
  currency: CurrencyOwnWhereSchema.optional(),
  stores: z
    .object({
      every: StoreOwnWhereSchema.optional(),
      some: StoreOwnWhereSchema.optional(),
      none: StoreOwnWhereSchema.optional(),
    })
    .optional(),
  prices: z
    .object({
      every: PriceOwnWhereSchema.optional(),
      some: PriceOwnWhereSchema.optional(),
      none: PriceOwnWhereSchema.optional(),
    })
    .optional(),
  discounts: z
    .object({
      every: DiscountTargetOwnWhereSchema.optional(),
      some: DiscountTargetOwnWhereSchema.optional(),
      none: DiscountTargetOwnWhereSchema.optional(),
    })
    .optional(),
});

export const PriceWhereSchema = z.object({
  id: _intFilter.optional(),
  variantId: _intFilter.optional(),
  priceLevelId: _intFilter.optional(),
  price: _numFilter.optional(),
  cost: _numFilter.optional(),
  description: _strFilter.optional(),
  variant: VariantOwnWhereSchema.optional(),
  priceLevel: PriceLevelOwnWhereSchema.optional(),
});

export const QuantityWhereSchema = z.object({
  id: _intFilter.optional(),
  variantId: _intFilter.optional(),
  storeId: _intFilter.optional(),
  quantity: _intFilter.optional(),
  alertThreshold: _intFilter.optional(),
  variant: VariantOwnWhereSchema.optional(),
  store: StoreOwnWhereSchema.optional(),
});

export const SerialNumberWhereSchema = z.object({
  id: _intFilter.optional(),
  variantId: _intFilter.optional(),
  storeId: _intFilter.optional(),
  serialNumber: _strFilter.optional(),
  inStock: _boolFilter.optional(),
  variant: VariantOwnWhereSchema.optional(),
  store: StoreOwnWhereSchema.optional(),
});

export const DiscountWhereSchema = z.object({
  id: _intFilter.optional(),
  code: _strFilter.optional(),
  type: DiscountTypeFilterSchema.optional(),
  valueType: ValueTypeFilterSchema.optional(),
  value: _numFilter.optional(),
  minQuantity: _intFilter.optional(),
  maxQuantity: _intFilter.optional(),
  minOrderTotal: _numFilter.optional(),
  maxOrderTotal: _numFilter.optional(),
  startDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
  usageLimit: _intFilter.optional(),
  usageCount: _intFilter.optional(),
  targets: z
    .object({
      every: DiscountTargetOwnWhereSchema.optional(),
      some: DiscountTargetOwnWhereSchema.optional(),
      none: DiscountTargetOwnWhereSchema.optional(),
    })
    .optional(),
});

export const DiscountTargetWhereSchema = z.object({
  id: _intFilter.optional(),
  type: DiscountTargetTypeFilterSchema.optional(),
  discountId: _intFilter.optional(),
  storeId: _intFilter.optional(),
  productId: _intFilter.optional(),
  variantId: _intFilter.optional(),
  priceLevelId: _intFilter.optional(),
  categoryId: _intFilter.optional(),
  discount: DiscountOwnWhereSchema.optional(),
  store: StoreOwnWhereSchema.optional(),
  category: CategoryOwnWhereSchema.optional(),
  priceLevel: PriceLevelOwnWhereSchema.optional(),
  product: ProductOwnWhereSchema.optional(),
  variant: VariantOwnWhereSchema.optional(),
});

export const StoreWhereSchema = z.object({
  id: _intFilter.optional(),
  priceLevelId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
  priceLevel: PriceLevelOwnWhereSchema.optional(),
  quantities: z
    .object({
      every: QuantityOwnWhereSchema.optional(),
      some: QuantityOwnWhereSchema.optional(),
      none: QuantityOwnWhereSchema.optional(),
    })
    .optional(),
  discounts: z
    .object({
      every: DiscountTargetOwnWhereSchema.optional(),
      some: DiscountTargetOwnWhereSchema.optional(),
      none: DiscountTargetOwnWhereSchema.optional(),
    })
    .optional(),
  serialNumbers: z
    .object({
      every: SerialNumberOwnWhereSchema.optional(),
      some: SerialNumberOwnWhereSchema.optional(),
      none: SerialNumberOwnWhereSchema.optional(),
    })
    .optional(),
});

export const WarrantyPolicyWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  duration: _intFilter.optional(),
  durationUnit: TimeUnitFilterSchema.optional(),
  products: z
    .object({
      every: ProductWarrantyOwnWhereSchema.optional(),
      some: ProductWarrantyOwnWhereSchema.optional(),
      none: ProductWarrantyOwnWhereSchema.optional(),
    })
    .optional(),
});

export const ProductWarrantyWhereSchema = z.object({
  id: _intFilter.optional(),
  productId: _intFilter.optional(),
  variantId: _intFilter.optional(),
  policyId: _intFilter.optional(),
  product: ProductOwnWhereSchema.optional(),
  variant: VariantOwnWhereSchema.optional(),
  policy: WarrantyPolicyOwnWhereSchema.optional(),
});

export const CategoryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryWhereSchema
);

export const ProductWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductWhereSchema
);

export const ProductCategoryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCategoryWhereSchema
);

export const VariantWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  VariantWhereSchema
);

export const AttributeCategoryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCategoryWhereSchema
);

export const AttributeWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeWhereSchema
);

export const UnitWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UnitWhereSchema
);

export const AttributeUnitWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeUnitWhereSchema
);

export const AttributeValueWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeValueWhereSchema
);

export const CurrencyWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CurrencyWhereSchema
);

export const PriceLevelWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceLevelWhereSchema
);

export const PriceWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceWhereSchema
);

export const QuantityWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityWhereSchema
);

export const SerialNumberWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberWhereSchema
);

export const DiscountWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountWhereSchema
);

export const DiscountTargetWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountTargetWhereSchema
);

export const StoreWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StoreWhereSchema
);

export const WarrantyPolicyWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WarrantyPolicyWhereSchema
);

export const ProductWarrantyWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductWarrantyWhereSchema
);

export const CategoryOwnOrderBySchema = z.object({
  id: _direction,
  parentId: _direction,
  name: _direction,
  slug: _direction,
});

export const ProductOwnOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  isActive: _direction,
  uuid: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
});

export const ProductCategoryOwnOrderBySchema = z.object({
  id: _direction,
  productId: _direction,
  categoryId: _direction,
});

export const VariantOwnOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  productId: _direction,
  sku: _direction,
  upc: _direction,
});

export const AttributeCategoryOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  slug: _direction,
});

export const AttributeOwnOrderBySchema = z.object({
  id: _direction,
  categoryId: _direction,
  name: _direction,
  description: _direction,
});

export const UnitOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  symbol: _direction,
});

export const AttributeUnitOwnOrderBySchema = z.object({
  id: _direction,
  attributeId: _direction,
  unitId: _direction,
});

export const AttributeValueOwnOrderBySchema = z.object({
  id: _direction,
  attributeId: _direction,
  variantId: _direction,
  textValue: _direction,
  booleanValue: _direction,
  floatValue: _direction,
});

export const CurrencyOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  code: _direction,
  symbol: _direction,
});

export const PriceLevelOwnOrderBySchema = z.object({
  id: _direction,
  currencyId: _direction,
  name: _direction,
  slug: _direction,
  taxrate: _direction,
  notes: _direction,
});

export const PriceOwnOrderBySchema = z.object({
  id: _direction,
  variantId: _direction,
  priceLevelId: _direction,
  price: _direction,
  cost: _direction,
  description: _direction,
});

export const QuantityOwnOrderBySchema = z.object({
  id: _direction,
  variantId: _direction,
  storeId: _direction,
  quantity: _direction,
  alertThreshold: _direction,
});

export const SerialNumberOwnOrderBySchema = z.object({
  id: _direction,
  variantId: _direction,
  storeId: _direction,
  serialNumber: _direction,
  inStock: _direction,
});

export const DiscountOwnOrderBySchema = z.object({
  id: _direction,
  code: _direction,
  type: _direction,
  valueType: _direction,
  value: _direction,
  minQuantity: _direction,
  maxQuantity: _direction,
  minOrderTotal: _direction,
  maxOrderTotal: _direction,
  startDate: _direction,
  endDate: _direction,
  usageLimit: _direction,
  usageCount: _direction,
});

export const DiscountTargetOwnOrderBySchema = z.object({
  id: _direction,
  type: _direction,
  discountId: _direction,
  storeId: _direction,
  productId: _direction,
  variantId: _direction,
  priceLevelId: _direction,
  categoryId: _direction,
});

export const StoreOwnOrderBySchema = z.object({
  id: _direction,
  priceLevelId: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
});

export const WarrantyPolicyOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  description: _direction,
  duration: _direction,
  durationUnit: _direction,
});

export const ProductWarrantyOwnOrderBySchema = z.object({
  id: _direction,
  productId: _direction,
  variantId: _direction,
  policyId: _direction,
});

export const CategoryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnOrderBySchema
);

export const ProductOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductOwnOrderBySchema
);

export const ProductCategoryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCategoryOwnOrderBySchema
);

export const VariantOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  VariantOwnOrderBySchema
);

export const AttributeCategoryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCategoryOwnOrderBySchema
);

export const AttributeOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeOwnOrderBySchema
);

export const UnitOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UnitOwnOrderBySchema
);

export const AttributeUnitOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeUnitOwnOrderBySchema
);

export const AttributeValueOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeValueOwnOrderBySchema
);

export const CurrencyOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CurrencyOwnOrderBySchema
);

export const PriceLevelOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceLevelOwnOrderBySchema
);

export const PriceOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceOwnOrderBySchema
);

export const QuantityOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityOwnOrderBySchema
);

export const SerialNumberOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberOwnOrderBySchema
);

export const DiscountOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountOwnOrderBySchema
);

export const DiscountTargetOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountTargetOwnOrderBySchema
);

export const StoreOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StoreOwnOrderBySchema
);

export const WarrantyPolicyOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  WarrantyPolicyOwnOrderBySchema
);

export const ProductWarrantyOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductWarrantyOwnOrderBySchema
);

export const CategoryOrderBySchema = z.object({
  id: _direction,
  parentId: _direction,
  name: _direction,
  slug: _direction,
  parent: CategoryOwnOrderBySchema.optional(),
  children: _orderByCount,
  products: _orderByCount,
  discountTargets: _orderByCount,
});

export const ProductOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  isActive: _direction,
  uuid: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
  variants: _orderByCount,
  categories: _orderByCount,
  discounts: _orderByCount,
  warranties: _orderByCount,
});

export const ProductCategoryOrderBySchema = z.object({
  id: _direction,
  productId: _direction,
  categoryId: _direction,
  product: ProductOwnOrderBySchema.optional(),
  category: CategoryOwnOrderBySchema.optional(),
});

export const VariantOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  productId: _direction,
  sku: _direction,
  upc: _direction,
  product: ProductOwnOrderBySchema.optional(),
  attributes: _orderByCount,
  prices: _orderByCount,
  quantities: _orderByCount,
  discounts: _orderByCount,
  serrialNumbers: _orderByCount,
  warranties: _orderByCount,
});

export const AttributeCategoryOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  slug: _direction,
  attributes: _orderByCount,
});

export const AttributeOrderBySchema = z.object({
  id: _direction,
  categoryId: _direction,
  name: _direction,
  description: _direction,
  category: AttributeCategoryOwnOrderBySchema.optional(),
  unites: _orderByCount,
  values: _orderByCount,
});

export const UnitOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  symbol: _direction,
  attributes: _orderByCount,
});

export const AttributeUnitOrderBySchema = z.object({
  id: _direction,
  attributeId: _direction,
  unitId: _direction,
  attribute: AttributeOwnOrderBySchema.optional(),
  unit: UnitOwnOrderBySchema.optional(),
});

export const AttributeValueOrderBySchema = z.object({
  id: _direction,
  attributeId: _direction,
  variantId: _direction,
  textValue: _direction,
  booleanValue: _direction,
  floatValue: _direction,
  variant: VariantOwnOrderBySchema.optional(),
  attribute: AttributeOwnOrderBySchema.optional(),
});

export const CurrencyOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  code: _direction,
  symbol: _direction,
  priceLevels: _orderByCount,
});

export const PriceLevelOrderBySchema = z.object({
  id: _direction,
  currencyId: _direction,
  name: _direction,
  slug: _direction,
  taxrate: _direction,
  notes: _direction,
  currency: CurrencyOwnOrderBySchema.optional(),
  stores: _orderByCount,
  prices: _orderByCount,
  discounts: _orderByCount,
});

export const PriceOrderBySchema = z.object({
  id: _direction,
  variantId: _direction,
  priceLevelId: _direction,
  price: _direction,
  cost: _direction,
  description: _direction,
  variant: VariantOwnOrderBySchema.optional(),
  priceLevel: PriceLevelOwnOrderBySchema.optional(),
});

export const QuantityOrderBySchema = z.object({
  id: _direction,
  variantId: _direction,
  storeId: _direction,
  quantity: _direction,
  alertThreshold: _direction,
  variant: VariantOwnOrderBySchema.optional(),
  store: StoreOwnOrderBySchema.optional(),
});

export const SerialNumberOrderBySchema = z.object({
  id: _direction,
  variantId: _direction,
  storeId: _direction,
  serialNumber: _direction,
  inStock: _direction,
  variant: VariantOwnOrderBySchema.optional(),
  store: StoreOwnOrderBySchema.optional(),
});

export const DiscountOrderBySchema = z.object({
  id: _direction,
  code: _direction,
  type: _direction,
  valueType: _direction,
  value: _direction,
  minQuantity: _direction,
  maxQuantity: _direction,
  minOrderTotal: _direction,
  maxOrderTotal: _direction,
  startDate: _direction,
  endDate: _direction,
  usageLimit: _direction,
  usageCount: _direction,
  targets: _orderByCount,
});

export const DiscountTargetOrderBySchema = z.object({
  id: _direction,
  type: _direction,
  discountId: _direction,
  storeId: _direction,
  productId: _direction,
  variantId: _direction,
  priceLevelId: _direction,
  categoryId: _direction,
  discount: DiscountOwnOrderBySchema.optional(),
  store: StoreOwnOrderBySchema.optional(),
  category: CategoryOwnOrderBySchema.optional(),
  priceLevel: PriceLevelOwnOrderBySchema.optional(),
  product: ProductOwnOrderBySchema.optional(),
  variant: VariantOwnOrderBySchema.optional(),
});

export const StoreOrderBySchema = z.object({
  id: _direction,
  priceLevelId: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
  priceLevel: PriceLevelOwnOrderBySchema.optional(),
  quantities: _orderByCount,
  discounts: _orderByCount,
  serialNumbers: _orderByCount,
});

export const WarrantyPolicyOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  description: _direction,
  duration: _direction,
  durationUnit: _direction,
  products: _orderByCount,
});

export const ProductWarrantyOrderBySchema = z.object({
  id: _direction,
  productId: _direction,
  variantId: _direction,
  policyId: _direction,
  product: ProductOwnOrderBySchema.optional(),
  variant: VariantOwnOrderBySchema.optional(),
  policy: WarrantyPolicyOwnOrderBySchema.optional(),
});

export const CategoryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOrderBySchema
);

export const ProductOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductOrderBySchema
);

export const ProductCategoryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCategoryOrderBySchema
);

export const VariantOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  VariantOrderBySchema
);

export const AttributeCategoryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCategoryOrderBySchema
);

export const AttributeOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeOrderBySchema
);

export const UnitOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UnitOrderBySchema
);

export const AttributeUnitOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeUnitOrderBySchema
);

export const AttributeValueOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeValueOrderBySchema
);

export const CurrencyOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CurrencyOrderBySchema
);

export const PriceLevelOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceLevelOrderBySchema
);

export const PriceOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceOrderBySchema
);

export const QuantityOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityOrderBySchema
);

export const SerialNumberOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberOrderBySchema
);

export const DiscountOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountOrderBySchema
);

export const DiscountTargetOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountTargetOrderBySchema
);

export const StoreOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StoreOrderBySchema
);

export const WarrantyPolicyOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  WarrantyPolicyOrderBySchema
);

export const ProductWarrantyOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductWarrantyOrderBySchema
);

export const CategoryOwnSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  slug: _select,
});

export const ProductOwnSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  isActive: _select,
  uuid: _select,
  name: _select,
  slug: _select,
  description: _select,
});

export const ProductCategoryOwnSelectSchema = z.object({
  id: _select,
  productId: _select,
  categoryId: _select,
});

export const VariantOwnSelectSchema = z.object({
  id: _select,
  uuid: _select,
  productId: _select,
  sku: _select,
  upc: _select,
});

export const AttributeCategoryOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  slug: _select,
});

export const AttributeOwnSelectSchema = z.object({
  id: _select,
  categoryId: _select,
  name: _select,
  description: _select,
});

export const UnitOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  symbol: _select,
});

export const AttributeUnitOwnSelectSchema = z.object({
  id: _select,
  attributeId: _select,
  unitId: _select,
});

export const AttributeValueOwnSelectSchema = z.object({
  id: _select,
  attributeId: _select,
  variantId: _select,
  textValue: _select,
  booleanValue: _select,
  floatValue: _select,
});

export const CurrencyOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
  symbol: _select,
});

export const PriceLevelOwnSelectSchema = z.object({
  id: _select,
  currencyId: _select,
  name: _select,
  slug: _select,
  taxrate: _select,
  notes: _select,
});

export const PriceOwnSelectSchema = z.object({
  id: _select,
  variantId: _select,
  priceLevelId: _select,
  price: _select,
  cost: _select,
  description: _select,
});

export const QuantityOwnSelectSchema = z.object({
  id: _select,
  variantId: _select,
  storeId: _select,
  quantity: _select,
  alertThreshold: _select,
});

export const SerialNumberOwnSelectSchema = z.object({
  id: _select,
  variantId: _select,
  storeId: _select,
  serialNumber: _select,
  inStock: _select,
});

export const DiscountOwnSelectSchema = z.object({
  id: _select,
  code: _select,
  type: _select,
  valueType: _select,
  value: _select,
  minQuantity: _select,
  maxQuantity: _select,
  minOrderTotal: _select,
  maxOrderTotal: _select,
  startDate: _select,
  endDate: _select,
  usageLimit: _select,
  usageCount: _select,
});

export const DiscountTargetOwnSelectSchema = z.object({
  id: _select,
  type: _select,
  discountId: _select,
  storeId: _select,
  productId: _select,
  variantId: _select,
  priceLevelId: _select,
  categoryId: _select,
});

export const StoreOwnSelectSchema = z.object({
  id: _select,
  priceLevelId: _select,
  name: _select,
  slug: _select,
  description: _select,
});

export const WarrantyPolicyOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  duration: _select,
  durationUnit: _select,
});

export const ProductWarrantyOwnSelectSchema = z.object({
  id: _select,
  productId: _select,
  variantId: _select,
  policyId: _select,
});

export const CategoryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnSelectSchema
);

export const ProductOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductOwnSelectSchema
);

export const ProductCategoryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCategoryOwnSelectSchema
);

export const VariantOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  VariantOwnSelectSchema
);

export const AttributeCategoryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCategoryOwnSelectSchema
);

export const AttributeOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeOwnSelectSchema
);

export const UnitOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UnitOwnSelectSchema
);

export const AttributeUnitOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeUnitOwnSelectSchema
);

export const AttributeValueOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeValueOwnSelectSchema
);

export const CurrencyOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CurrencyOwnSelectSchema
);

export const PriceLevelOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceLevelOwnSelectSchema
);

export const PriceOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceOwnSelectSchema
);

export const QuantityOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityOwnSelectSchema
);

export const SerialNumberOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberOwnSelectSchema
);

export const DiscountOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountOwnSelectSchema
);

export const DiscountTargetOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountTargetOwnSelectSchema
);

export const StoreOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StoreOwnSelectSchema
);

export const WarrantyPolicyOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WarrantyPolicyOwnSelectSchema
);

export const ProductWarrantyOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductWarrantyOwnSelectSchema
);

export const CategorySelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  slug: _select,
  parent: _select,
  children: _select,
  products: _select,
  discountTargets: _select,
});

export const ProductSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  isActive: _select,
  uuid: _select,
  name: _select,
  slug: _select,
  description: _select,
  variants: _select,
  categories: _select,
  discounts: _select,
  warranties: _select,
});

export const ProductCategorySelectSchema = z.object({
  id: _select,
  productId: _select,
  categoryId: _select,
  product: _select,
  category: _select,
});

export const VariantSelectSchema = z.object({
  id: _select,
  uuid: _select,
  productId: _select,
  sku: _select,
  upc: _select,
  product: _select,
  attributes: _select,
  prices: _select,
  quantities: _select,
  discounts: _select,
  serrialNumbers: _select,
  warranties: _select,
});

export const AttributeCategorySelectSchema = z.object({
  id: _select,
  name: _select,
  slug: _select,
  attributes: _select,
});

export const AttributeSelectSchema = z.object({
  id: _select,
  categoryId: _select,
  name: _select,
  description: _select,
  category: _select,
  unites: _select,
  values: _select,
});

export const UnitSelectSchema = z.object({
  id: _select,
  name: _select,
  symbol: _select,
  attributes: _select,
});

export const AttributeUnitSelectSchema = z.object({
  id: _select,
  attributeId: _select,
  unitId: _select,
  attribute: _select,
  unit: _select,
});

export const AttributeValueSelectSchema = z.object({
  id: _select,
  attributeId: _select,
  variantId: _select,
  textValue: _select,
  booleanValue: _select,
  floatValue: _select,
  variant: _select,
  attribute: _select,
});

export const CurrencySelectSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
  symbol: _select,
  priceLevels: _select,
});

export const PriceLevelSelectSchema = z.object({
  id: _select,
  currencyId: _select,
  name: _select,
  slug: _select,
  taxrate: _select,
  notes: _select,
  currency: _select,
  stores: _select,
  prices: _select,
  discounts: _select,
});

export const PriceSelectSchema = z.object({
  id: _select,
  variantId: _select,
  priceLevelId: _select,
  price: _select,
  cost: _select,
  description: _select,
  variant: _select,
  priceLevel: _select,
});

export const QuantitySelectSchema = z.object({
  id: _select,
  variantId: _select,
  storeId: _select,
  quantity: _select,
  alertThreshold: _select,
  variant: _select,
  store: _select,
});

export const SerialNumberSelectSchema = z.object({
  id: _select,
  variantId: _select,
  storeId: _select,
  serialNumber: _select,
  inStock: _select,
  variant: _select,
  store: _select,
});

export const DiscountSelectSchema = z.object({
  id: _select,
  code: _select,
  type: _select,
  valueType: _select,
  value: _select,
  minQuantity: _select,
  maxQuantity: _select,
  minOrderTotal: _select,
  maxOrderTotal: _select,
  startDate: _select,
  endDate: _select,
  usageLimit: _select,
  usageCount: _select,
  targets: _select,
});

export const DiscountTargetSelectSchema = z.object({
  id: _select,
  type: _select,
  discountId: _select,
  storeId: _select,
  productId: _select,
  variantId: _select,
  priceLevelId: _select,
  categoryId: _select,
  discount: _select,
  store: _select,
  category: _select,
  priceLevel: _select,
  product: _select,
  variant: _select,
});

export const StoreSelectSchema = z.object({
  id: _select,
  priceLevelId: _select,
  name: _select,
  slug: _select,
  description: _select,
  priceLevel: _select,
  quantities: _select,
  discounts: _select,
  serialNumbers: _select,
});

export const WarrantyPolicySelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  duration: _select,
  durationUnit: _select,
  products: _select,
});

export const ProductWarrantySelectSchema = z.object({
  id: _select,
  productId: _select,
  variantId: _select,
  policyId: _select,
  product: _select,
  variant: _select,
  policy: _select,
});

export const CategorySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategorySelectSchema
);

export const ProductSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductSelectSchema
);

export const ProductCategorySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCategorySelectSchema
);

export const VariantSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  VariantSelectSchema
);

export const AttributeCategorySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCategorySelectSchema
);

export const AttributeSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeSelectSchema
);

export const UnitSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UnitSelectSchema
);

export const AttributeUnitSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeUnitSelectSchema
);

export const AttributeValueSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeValueSelectSchema
);

export const CurrencySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CurrencySelectSchema
);

export const PriceLevelSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceLevelSelectSchema
);

export const PriceSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceSelectSchema
);

export const QuantitySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantitySelectSchema
);

export const SerialNumberSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberSelectSchema
);

export const DiscountSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountSelectSchema
);

export const DiscountTargetSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountTargetSelectSchema
);

export const StoreSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StoreSelectSchema
);

export const WarrantyPolicySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WarrantyPolicySelectSchema
);

export const ProductWarrantySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductWarrantySelectSchema
);

export const CategoryOmitSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  slug: _select,
});

export const ProductOmitSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  isActive: _select,
  uuid: _select,
  name: _select,
  slug: _select,
  description: _select,
});

export const ProductCategoryOmitSchema = z.object({
  id: _select,
  productId: _select,
  categoryId: _select,
});

export const VariantOmitSchema = z.object({
  id: _select,
  uuid: _select,
  productId: _select,
  sku: _select,
  upc: _select,
});

export const AttributeCategoryOmitSchema = z.object({
  id: _select,
  name: _select,
  slug: _select,
});

export const AttributeOmitSchema = z.object({
  id: _select,
  categoryId: _select,
  name: _select,
  description: _select,
});

export const UnitOmitSchema = z.object({
  id: _select,
  name: _select,
  symbol: _select,
});

export const AttributeUnitOmitSchema = z.object({
  id: _select,
  attributeId: _select,
  unitId: _select,
});

export const AttributeValueOmitSchema = z.object({
  id: _select,
  attributeId: _select,
  variantId: _select,
  textValue: _select,
  booleanValue: _select,
  floatValue: _select,
});

export const CurrencyOmitSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
  symbol: _select,
});

export const PriceLevelOmitSchema = z.object({
  id: _select,
  currencyId: _select,
  name: _select,
  slug: _select,
  taxrate: _select,
  notes: _select,
});

export const PriceOmitSchema = z.object({
  id: _select,
  variantId: _select,
  priceLevelId: _select,
  price: _select,
  cost: _select,
  description: _select,
});

export const QuantityOmitSchema = z.object({
  id: _select,
  variantId: _select,
  storeId: _select,
  quantity: _select,
  alertThreshold: _select,
});

export const SerialNumberOmitSchema = z.object({
  id: _select,
  variantId: _select,
  storeId: _select,
  serialNumber: _select,
  inStock: _select,
});

export const DiscountOmitSchema = z.object({
  id: _select,
  code: _select,
  type: _select,
  valueType: _select,
  value: _select,
  minQuantity: _select,
  maxQuantity: _select,
  minOrderTotal: _select,
  maxOrderTotal: _select,
  startDate: _select,
  endDate: _select,
  usageLimit: _select,
  usageCount: _select,
});

export const DiscountTargetOmitSchema = z.object({
  id: _select,
  type: _select,
  discountId: _select,
  storeId: _select,
  productId: _select,
  variantId: _select,
  priceLevelId: _select,
  categoryId: _select,
});

export const StoreOmitSchema = z.object({
  id: _select,
  priceLevelId: _select,
  name: _select,
  slug: _select,
  description: _select,
});

export const WarrantyPolicyOmitSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  duration: _select,
  durationUnit: _select,
});

export const ProductWarrantyOmitSchema = z.object({
  id: _select,
  productId: _select,
  variantId: _select,
  policyId: _select,
});

export const CategoryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOmitSchema
);

export const ProductOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductOmitSchema
);

export const ProductCategoryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCategoryOmitSchema
);

export const VariantOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  VariantOmitSchema
);

export const AttributeCategoryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCategoryOmitSchema
);

export const AttributeOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeOmitSchema
);

export const UnitOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UnitOmitSchema
);

export const AttributeUnitOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeUnitOmitSchema
);

export const AttributeValueOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeValueOmitSchema
);

export const CurrencyOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CurrencyOmitSchema
);

export const PriceLevelOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceLevelOmitSchema
);

export const PriceOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceOmitSchema
);

export const QuantityOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityOmitSchema
);

export const SerialNumberOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberOmitSchema
);

export const DiscountOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountOmitSchema
);

export const DiscountTargetOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountTargetOmitSchema
);

export const StoreOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StoreOmitSchema
);

export const WarrantyPolicyOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WarrantyPolicyOmitSchema
);

export const ProductWarrantyOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductWarrantyOmitSchema
);

export const CategoryOwnQueryOneSchema = z.object({
  select: CategoryOwnSelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  where: CategoryOwnWhereSchemaJson.optional(),
});

export const ProductOwnQueryOneSchema = z.object({
  select: ProductOwnSelectSchemaJson.optional(),
  omit: ProductOmitSchemaJson.optional(),
  where: ProductOwnWhereSchemaJson.optional(),
});

export const ProductCategoryOwnQueryOneSchema = z.object({
  select: ProductCategoryOwnSelectSchemaJson.optional(),
  omit: ProductCategoryOmitSchemaJson.optional(),
  where: ProductCategoryOwnWhereSchemaJson.optional(),
});

export const VariantOwnQueryOneSchema = z.object({
  select: VariantOwnSelectSchemaJson.optional(),
  omit: VariantOmitSchemaJson.optional(),
  where: VariantOwnWhereSchemaJson.optional(),
});

export const AttributeCategoryOwnQueryOneSchema = z.object({
  select: AttributeCategoryOwnSelectSchemaJson.optional(),
  omit: AttributeCategoryOmitSchemaJson.optional(),
  where: AttributeCategoryOwnWhereSchemaJson.optional(),
});

export const AttributeOwnQueryOneSchema = z.object({
  select: AttributeOwnSelectSchemaJson.optional(),
  omit: AttributeOmitSchemaJson.optional(),
  where: AttributeOwnWhereSchemaJson.optional(),
});

export const UnitOwnQueryOneSchema = z.object({
  select: UnitOwnSelectSchemaJson.optional(),
  omit: UnitOmitSchemaJson.optional(),
  where: UnitOwnWhereSchemaJson.optional(),
});

export const AttributeUnitOwnQueryOneSchema = z.object({
  select: AttributeUnitOwnSelectSchemaJson.optional(),
  omit: AttributeUnitOmitSchemaJson.optional(),
  where: AttributeUnitOwnWhereSchemaJson.optional(),
});

export const AttributeValueOwnQueryOneSchema = z.object({
  select: AttributeValueOwnSelectSchemaJson.optional(),
  omit: AttributeValueOmitSchemaJson.optional(),
  where: AttributeValueOwnWhereSchemaJson.optional(),
});

export const CurrencyOwnQueryOneSchema = z.object({
  select: CurrencyOwnSelectSchemaJson.optional(),
  omit: CurrencyOmitSchemaJson.optional(),
  where: CurrencyOwnWhereSchemaJson.optional(),
});

export const PriceLevelOwnQueryOneSchema = z.object({
  select: PriceLevelOwnSelectSchemaJson.optional(),
  omit: PriceLevelOmitSchemaJson.optional(),
  where: PriceLevelOwnWhereSchemaJson.optional(),
});

export const PriceOwnQueryOneSchema = z.object({
  select: PriceOwnSelectSchemaJson.optional(),
  omit: PriceOmitSchemaJson.optional(),
  where: PriceOwnWhereSchemaJson.optional(),
});

export const QuantityOwnQueryOneSchema = z.object({
  select: QuantityOwnSelectSchemaJson.optional(),
  omit: QuantityOmitSchemaJson.optional(),
  where: QuantityOwnWhereSchemaJson.optional(),
});

export const SerialNumberOwnQueryOneSchema = z.object({
  select: SerialNumberOwnSelectSchemaJson.optional(),
  omit: SerialNumberOmitSchemaJson.optional(),
  where: SerialNumberOwnWhereSchemaJson.optional(),
});

export const DiscountOwnQueryOneSchema = z.object({
  select: DiscountOwnSelectSchemaJson.optional(),
  omit: DiscountOmitSchemaJson.optional(),
  where: DiscountOwnWhereSchemaJson.optional(),
});

export const DiscountTargetOwnQueryOneSchema = z.object({
  select: DiscountTargetOwnSelectSchemaJson.optional(),
  omit: DiscountTargetOmitSchemaJson.optional(),
  where: DiscountTargetOwnWhereSchemaJson.optional(),
});

export const StoreOwnQueryOneSchema = z.object({
  select: StoreOwnSelectSchemaJson.optional(),
  omit: StoreOmitSchemaJson.optional(),
  where: StoreOwnWhereSchemaJson.optional(),
});

export const WarrantyPolicyOwnQueryOneSchema = z.object({
  select: WarrantyPolicyOwnSelectSchemaJson.optional(),
  omit: WarrantyPolicyOmitSchemaJson.optional(),
  where: WarrantyPolicyOwnWhereSchemaJson.optional(),
});

export const ProductWarrantyOwnQueryOneSchema = z.object({
  select: ProductWarrantyOwnSelectSchemaJson.optional(),
  omit: ProductWarrantyOmitSchemaJson.optional(),
  where: ProductWarrantyOwnWhereSchemaJson.optional(),
});

export const CategoryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnQueryOneSchema
);

export const ProductOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductOwnQueryOneSchema
);

export const ProductCategoryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCategoryOwnQueryOneSchema
);

export const VariantOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  VariantOwnQueryOneSchema
);

export const AttributeCategoryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCategoryOwnQueryOneSchema
);

export const AttributeOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeOwnQueryOneSchema
);

export const UnitOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UnitOwnQueryOneSchema
);

export const AttributeUnitOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeUnitOwnQueryOneSchema
);

export const AttributeValueOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeValueOwnQueryOneSchema
);

export const CurrencyOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CurrencyOwnQueryOneSchema
);

export const PriceLevelOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceLevelOwnQueryOneSchema
);

export const PriceOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceOwnQueryOneSchema
);

export const QuantityOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityOwnQueryOneSchema
);

export const SerialNumberOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberOwnQueryOneSchema
);

export const DiscountOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountOwnQueryOneSchema
);

export const DiscountTargetOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountTargetOwnQueryOneSchema
);

export const StoreOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StoreOwnQueryOneSchema
);

export const WarrantyPolicyOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WarrantyPolicyOwnQueryOneSchema
);

export const ProductWarrantyOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductWarrantyOwnQueryOneSchema
);

export const CategoryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CategoryDistinctSchema.optional(),
  select: CategoryOwnSelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  where: CategoryOwnWhereSchemaJson.optional(),
  orderBy: CategoryOwnOrderBySchemaJson.optional(),
});

export const ProductOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProductDistinctSchema.optional(),
  select: ProductOwnSelectSchemaJson.optional(),
  omit: ProductOmitSchemaJson.optional(),
  where: ProductOwnWhereSchemaJson.optional(),
  orderBy: ProductOwnOrderBySchemaJson.optional(),
});

export const ProductCategoryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProductCategoryDistinctSchema.optional(),
  select: ProductCategoryOwnSelectSchemaJson.optional(),
  omit: ProductCategoryOmitSchemaJson.optional(),
  where: ProductCategoryOwnWhereSchemaJson.optional(),
  orderBy: ProductCategoryOwnOrderBySchemaJson.optional(),
});

export const VariantOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: VariantDistinctSchema.optional(),
  select: VariantOwnSelectSchemaJson.optional(),
  omit: VariantOmitSchemaJson.optional(),
  where: VariantOwnWhereSchemaJson.optional(),
  orderBy: VariantOwnOrderBySchemaJson.optional(),
});

export const AttributeCategoryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AttributeCategoryDistinctSchema.optional(),
  select: AttributeCategoryOwnSelectSchemaJson.optional(),
  omit: AttributeCategoryOmitSchemaJson.optional(),
  where: AttributeCategoryOwnWhereSchemaJson.optional(),
  orderBy: AttributeCategoryOwnOrderBySchemaJson.optional(),
});

export const AttributeOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AttributeDistinctSchema.optional(),
  select: AttributeOwnSelectSchemaJson.optional(),
  omit: AttributeOmitSchemaJson.optional(),
  where: AttributeOwnWhereSchemaJson.optional(),
  orderBy: AttributeOwnOrderBySchemaJson.optional(),
});

export const UnitOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: UnitDistinctSchema.optional(),
  select: UnitOwnSelectSchemaJson.optional(),
  omit: UnitOmitSchemaJson.optional(),
  where: UnitOwnWhereSchemaJson.optional(),
  orderBy: UnitOwnOrderBySchemaJson.optional(),
});

export const AttributeUnitOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AttributeUnitDistinctSchema.optional(),
  select: AttributeUnitOwnSelectSchemaJson.optional(),
  omit: AttributeUnitOmitSchemaJson.optional(),
  where: AttributeUnitOwnWhereSchemaJson.optional(),
  orderBy: AttributeUnitOwnOrderBySchemaJson.optional(),
});

export const AttributeValueOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AttributeValueDistinctSchema.optional(),
  select: AttributeValueOwnSelectSchemaJson.optional(),
  omit: AttributeValueOmitSchemaJson.optional(),
  where: AttributeValueOwnWhereSchemaJson.optional(),
  orderBy: AttributeValueOwnOrderBySchemaJson.optional(),
});

export const CurrencyOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CurrencyDistinctSchema.optional(),
  select: CurrencyOwnSelectSchemaJson.optional(),
  omit: CurrencyOmitSchemaJson.optional(),
  where: CurrencyOwnWhereSchemaJson.optional(),
  orderBy: CurrencyOwnOrderBySchemaJson.optional(),
});

export const PriceLevelOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PriceLevelDistinctSchema.optional(),
  select: PriceLevelOwnSelectSchemaJson.optional(),
  omit: PriceLevelOmitSchemaJson.optional(),
  where: PriceLevelOwnWhereSchemaJson.optional(),
  orderBy: PriceLevelOwnOrderBySchemaJson.optional(),
});

export const PriceOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PriceDistinctSchema.optional(),
  select: PriceOwnSelectSchemaJson.optional(),
  omit: PriceOmitSchemaJson.optional(),
  where: PriceOwnWhereSchemaJson.optional(),
  orderBy: PriceOwnOrderBySchemaJson.optional(),
});

export const QuantityOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: QuantityDistinctSchema.optional(),
  select: QuantityOwnSelectSchemaJson.optional(),
  omit: QuantityOmitSchemaJson.optional(),
  where: QuantityOwnWhereSchemaJson.optional(),
  orderBy: QuantityOwnOrderBySchemaJson.optional(),
});

export const SerialNumberOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SerialNumberDistinctSchema.optional(),
  select: SerialNumberOwnSelectSchemaJson.optional(),
  omit: SerialNumberOmitSchemaJson.optional(),
  where: SerialNumberOwnWhereSchemaJson.optional(),
  orderBy: SerialNumberOwnOrderBySchemaJson.optional(),
});

export const DiscountOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DiscountDistinctSchema.optional(),
  select: DiscountOwnSelectSchemaJson.optional(),
  omit: DiscountOmitSchemaJson.optional(),
  where: DiscountOwnWhereSchemaJson.optional(),
  orderBy: DiscountOwnOrderBySchemaJson.optional(),
});

export const DiscountTargetOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DiscountTargetDistinctSchema.optional(),
  select: DiscountTargetOwnSelectSchemaJson.optional(),
  omit: DiscountTargetOmitSchemaJson.optional(),
  where: DiscountTargetOwnWhereSchemaJson.optional(),
  orderBy: DiscountTargetOwnOrderBySchemaJson.optional(),
});

export const StoreOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StoreDistinctSchema.optional(),
  select: StoreOwnSelectSchemaJson.optional(),
  omit: StoreOmitSchemaJson.optional(),
  where: StoreOwnWhereSchemaJson.optional(),
  orderBy: StoreOwnOrderBySchemaJson.optional(),
});

export const WarrantyPolicyOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: WarrantyPolicyDistinctSchema.optional(),
  select: WarrantyPolicyOwnSelectSchemaJson.optional(),
  omit: WarrantyPolicyOmitSchemaJson.optional(),
  where: WarrantyPolicyOwnWhereSchemaJson.optional(),
  orderBy: WarrantyPolicyOwnOrderBySchemaJson.optional(),
});

export const ProductWarrantyOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProductWarrantyDistinctSchema.optional(),
  select: ProductWarrantyOwnSelectSchemaJson.optional(),
  omit: ProductWarrantyOmitSchemaJson.optional(),
  where: ProductWarrantyOwnWhereSchemaJson.optional(),
  orderBy: ProductWarrantyOwnOrderBySchemaJson.optional(),
});

export const CategoryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnQuerySchema
);

export const ProductOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductOwnQuerySchema
);

export const ProductCategoryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCategoryOwnQuerySchema
);

export const VariantOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  VariantOwnQuerySchema
);

export const AttributeCategoryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCategoryOwnQuerySchema
);

export const AttributeOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeOwnQuerySchema
);

export const UnitOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UnitOwnQuerySchema
);

export const AttributeUnitOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeUnitOwnQuerySchema
);

export const AttributeValueOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeValueOwnQuerySchema
);

export const CurrencyOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CurrencyOwnQuerySchema
);

export const PriceLevelOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceLevelOwnQuerySchema
);

export const PriceOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceOwnQuerySchema
);

export const QuantityOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityOwnQuerySchema
);

export const SerialNumberOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberOwnQuerySchema
);

export const DiscountOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountOwnQuerySchema
);

export const DiscountTargetOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountTargetOwnQuerySchema
);

export const StoreOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StoreOwnQuerySchema
);

export const WarrantyPolicyOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  WarrantyPolicyOwnQuerySchema
);

export const ProductWarrantyOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductWarrantyOwnQuerySchema
);

export const CategoryIncludeSchema = z.object({
  parent: _select.or(CategoryOwnQueryOneSchema).optional(),
  children: _select.or(CategoryOwnQueryOneSchema).optional(),
  products: _select.or(ProductCategoryOwnQueryOneSchema).optional(),
  discountTargets: _select.or(DiscountTargetOwnQueryOneSchema).optional(),
});

export const ProductIncludeSchema = z.object({
  variants: _select.or(VariantOwnQueryOneSchema).optional(),
  categories: _select.or(ProductCategoryOwnQueryOneSchema).optional(),
  discounts: _select.or(DiscountTargetOwnQueryOneSchema).optional(),
  warranties: _select.or(ProductWarrantyOwnQueryOneSchema).optional(),
});

export const ProductCategoryIncludeSchema = z.object({
  product: _select.or(ProductOwnQueryOneSchema).optional(),
  category: _select.or(CategoryOwnQueryOneSchema).optional(),
});

export const VariantIncludeSchema = z.object({
  product: _select.or(ProductOwnQueryOneSchema).optional(),
  attributes: _select.or(AttributeValueOwnQueryOneSchema).optional(),
  prices: _select.or(PriceOwnQueryOneSchema).optional(),
  quantities: _select.or(QuantityOwnQueryOneSchema).optional(),
  discounts: _select.or(DiscountTargetOwnQueryOneSchema).optional(),
  serrialNumbers: _select.or(SerialNumberOwnQueryOneSchema).optional(),
  warranties: _select.or(ProductWarrantyOwnQueryOneSchema).optional(),
});

export const AttributeCategoryIncludeSchema = z.object({
  attributes: _select.or(AttributeOwnQueryOneSchema).optional(),
});

export const AttributeIncludeSchema = z.object({
  category: _select.or(AttributeCategoryOwnQueryOneSchema).optional(),
  unites: _select.or(AttributeUnitOwnQueryOneSchema).optional(),
  values: _select.or(AttributeValueOwnQueryOneSchema).optional(),
});

export const UnitIncludeSchema = z.object({
  attributes: _select.or(AttributeUnitOwnQueryOneSchema).optional(),
});

export const AttributeUnitIncludeSchema = z.object({
  attribute: _select.or(AttributeOwnQueryOneSchema).optional(),
  unit: _select.or(UnitOwnQueryOneSchema).optional(),
});

export const AttributeValueIncludeSchema = z.object({
  variant: _select.or(VariantOwnQueryOneSchema).optional(),
  attribute: _select.or(AttributeOwnQueryOneSchema).optional(),
});

export const CurrencyIncludeSchema = z.object({
  priceLevels: _select.or(PriceLevelOwnQueryOneSchema).optional(),
});

export const PriceLevelIncludeSchema = z.object({
  currency: _select.or(CurrencyOwnQueryOneSchema).optional(),
  stores: _select.or(StoreOwnQueryOneSchema).optional(),
  prices: _select.or(PriceOwnQueryOneSchema).optional(),
  discounts: _select.or(DiscountTargetOwnQueryOneSchema).optional(),
});

export const PriceIncludeSchema = z.object({
  variant: _select.or(VariantOwnQueryOneSchema).optional(),
  priceLevel: _select.or(PriceLevelOwnQueryOneSchema).optional(),
});

export const QuantityIncludeSchema = z.object({
  variant: _select.or(VariantOwnQueryOneSchema).optional(),
  store: _select.or(StoreOwnQueryOneSchema).optional(),
});

export const SerialNumberIncludeSchema = z.object({
  variant: _select.or(VariantOwnQueryOneSchema).optional(),
  store: _select.or(StoreOwnQueryOneSchema).optional(),
});

export const DiscountIncludeSchema = z.object({
  targets: _select.or(DiscountTargetOwnQueryOneSchema).optional(),
});

export const DiscountTargetIncludeSchema = z.object({
  discount: _select.or(DiscountOwnQueryOneSchema).optional(),
  store: _select.or(StoreOwnQueryOneSchema).optional(),
  category: _select.or(CategoryOwnQueryOneSchema).optional(),
  priceLevel: _select.or(PriceLevelOwnQueryOneSchema).optional(),
  product: _select.or(ProductOwnQueryOneSchema).optional(),
  variant: _select.or(VariantOwnQueryOneSchema).optional(),
});

export const StoreIncludeSchema = z.object({
  priceLevel: _select.or(PriceLevelOwnQueryOneSchema).optional(),
  quantities: _select.or(QuantityOwnQueryOneSchema).optional(),
  discounts: _select.or(DiscountTargetOwnQueryOneSchema).optional(),
  serialNumbers: _select.or(SerialNumberOwnQueryOneSchema).optional(),
});

export const WarrantyPolicyIncludeSchema = z.object({
  products: _select.or(ProductWarrantyOwnQueryOneSchema).optional(),
});

export const ProductWarrantyIncludeSchema = z.object({
  product: _select.or(ProductOwnQueryOneSchema).optional(),
  variant: _select.or(VariantOwnQueryOneSchema).optional(),
  policy: _select.or(WarrantyPolicyOwnQueryOneSchema).optional(),
});

export const CategoryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryIncludeSchema
);

export const ProductIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductIncludeSchema
);

export const ProductCategoryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCategoryIncludeSchema
);

export const VariantIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  VariantIncludeSchema
);

export const AttributeCategoryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCategoryIncludeSchema
);

export const AttributeIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeIncludeSchema
);

export const UnitIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UnitIncludeSchema
);

export const AttributeUnitIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeUnitIncludeSchema
);

export const AttributeValueIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeValueIncludeSchema
);

export const CurrencyIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CurrencyIncludeSchema
);

export const PriceLevelIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceLevelIncludeSchema
);

export const PriceIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceIncludeSchema
);

export const QuantityIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityIncludeSchema
);

export const SerialNumberIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberIncludeSchema
);

export const DiscountIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountIncludeSchema
);

export const DiscountTargetIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountTargetIncludeSchema
);

export const StoreIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StoreIncludeSchema
);

export const WarrantyPolicyIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WarrantyPolicyIncludeSchema
);

export const ProductWarrantyIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductWarrantyIncludeSchema
);

export const CategoryCompleteSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  slug: _select,
  parent: _select.or(CategoryOwnQueryOneSchema).optional(),
  children: _select.or(CategoryOwnQueryOneSchema).optional(),
  products: _select.or(ProductCategoryOwnQueryOneSchema).optional(),
  discountTargets: _select.or(DiscountTargetOwnQueryOneSchema).optional(),
});

export const ProductCompleteSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  isActive: _select,
  uuid: _select,
  name: _select,
  slug: _select,
  description: _select,
  variants: _select.or(VariantOwnQueryOneSchema).optional(),
  categories: _select.or(ProductCategoryOwnQueryOneSchema).optional(),
  discounts: _select.or(DiscountTargetOwnQueryOneSchema).optional(),
  warranties: _select.or(ProductWarrantyOwnQueryOneSchema).optional(),
});

export const ProductCategoryCompleteSelectSchema = z.object({
  id: _select,
  productId: _select,
  categoryId: _select,
  product: _select.or(ProductOwnQueryOneSchema).optional(),
  category: _select.or(CategoryOwnQueryOneSchema).optional(),
});

export const VariantCompleteSelectSchema = z.object({
  id: _select,
  uuid: _select,
  productId: _select,
  sku: _select,
  upc: _select,
  product: _select.or(ProductOwnQueryOneSchema).optional(),
  attributes: _select.or(AttributeValueOwnQueryOneSchema).optional(),
  prices: _select.or(PriceOwnQueryOneSchema).optional(),
  quantities: _select.or(QuantityOwnQueryOneSchema).optional(),
  discounts: _select.or(DiscountTargetOwnQueryOneSchema).optional(),
  serrialNumbers: _select.or(SerialNumberOwnQueryOneSchema).optional(),
  warranties: _select.or(ProductWarrantyOwnQueryOneSchema).optional(),
});

export const AttributeCategoryCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  slug: _select,
  attributes: _select.or(AttributeOwnQueryOneSchema).optional(),
});

export const AttributeCompleteSelectSchema = z.object({
  id: _select,
  categoryId: _select,
  name: _select,
  description: _select,
  category: _select.or(AttributeCategoryOwnQueryOneSchema).optional(),
  unites: _select.or(AttributeUnitOwnQueryOneSchema).optional(),
  values: _select.or(AttributeValueOwnQueryOneSchema).optional(),
});

export const UnitCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  symbol: _select,
  attributes: _select.or(AttributeUnitOwnQueryOneSchema).optional(),
});

export const AttributeUnitCompleteSelectSchema = z.object({
  id: _select,
  attributeId: _select,
  unitId: _select,
  attribute: _select.or(AttributeOwnQueryOneSchema).optional(),
  unit: _select.or(UnitOwnQueryOneSchema).optional(),
});

export const AttributeValueCompleteSelectSchema = z.object({
  id: _select,
  attributeId: _select,
  variantId: _select,
  textValue: _select,
  booleanValue: _select,
  floatValue: _select,
  variant: _select.or(VariantOwnQueryOneSchema).optional(),
  attribute: _select.or(AttributeOwnQueryOneSchema).optional(),
});

export const CurrencyCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
  symbol: _select,
  priceLevels: _select.or(PriceLevelOwnQueryOneSchema).optional(),
});

export const PriceLevelCompleteSelectSchema = z.object({
  id: _select,
  currencyId: _select,
  name: _select,
  slug: _select,
  taxrate: _select,
  notes: _select,
  currency: _select.or(CurrencyOwnQueryOneSchema).optional(),
  stores: _select.or(StoreOwnQueryOneSchema).optional(),
  prices: _select.or(PriceOwnQueryOneSchema).optional(),
  discounts: _select.or(DiscountTargetOwnQueryOneSchema).optional(),
});

export const PriceCompleteSelectSchema = z.object({
  id: _select,
  variantId: _select,
  priceLevelId: _select,
  price: _select,
  cost: _select,
  description: _select,
  variant: _select.or(VariantOwnQueryOneSchema).optional(),
  priceLevel: _select.or(PriceLevelOwnQueryOneSchema).optional(),
});

export const QuantityCompleteSelectSchema = z.object({
  id: _select,
  variantId: _select,
  storeId: _select,
  quantity: _select,
  alertThreshold: _select,
  variant: _select.or(VariantOwnQueryOneSchema).optional(),
  store: _select.or(StoreOwnQueryOneSchema).optional(),
});

export const SerialNumberCompleteSelectSchema = z.object({
  id: _select,
  variantId: _select,
  storeId: _select,
  serialNumber: _select,
  inStock: _select,
  variant: _select.or(VariantOwnQueryOneSchema).optional(),
  store: _select.or(StoreOwnQueryOneSchema).optional(),
});

export const DiscountCompleteSelectSchema = z.object({
  id: _select,
  code: _select,
  type: _select,
  valueType: _select,
  value: _select,
  minQuantity: _select,
  maxQuantity: _select,
  minOrderTotal: _select,
  maxOrderTotal: _select,
  startDate: _select,
  endDate: _select,
  usageLimit: _select,
  usageCount: _select,
  targets: _select.or(DiscountTargetOwnQueryOneSchema).optional(),
});

export const DiscountTargetCompleteSelectSchema = z.object({
  id: _select,
  type: _select,
  discountId: _select,
  storeId: _select,
  productId: _select,
  variantId: _select,
  priceLevelId: _select,
  categoryId: _select,
  discount: _select.or(DiscountOwnQueryOneSchema).optional(),
  store: _select.or(StoreOwnQueryOneSchema).optional(),
  category: _select.or(CategoryOwnQueryOneSchema).optional(),
  priceLevel: _select.or(PriceLevelOwnQueryOneSchema).optional(),
  product: _select.or(ProductOwnQueryOneSchema).optional(),
  variant: _select.or(VariantOwnQueryOneSchema).optional(),
});

export const StoreCompleteSelectSchema = z.object({
  id: _select,
  priceLevelId: _select,
  name: _select,
  slug: _select,
  description: _select,
  priceLevel: _select.or(PriceLevelOwnQueryOneSchema).optional(),
  quantities: _select.or(QuantityOwnQueryOneSchema).optional(),
  discounts: _select.or(DiscountTargetOwnQueryOneSchema).optional(),
  serialNumbers: _select.or(SerialNumberOwnQueryOneSchema).optional(),
});

export const WarrantyPolicyCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  duration: _select,
  durationUnit: _select,
  products: _select.or(ProductWarrantyOwnQueryOneSchema).optional(),
});

export const ProductWarrantyCompleteSelectSchema = z.object({
  id: _select,
  productId: _select,
  variantId: _select,
  policyId: _select,
  product: _select.or(ProductOwnQueryOneSchema).optional(),
  variant: _select.or(VariantOwnQueryOneSchema).optional(),
  policy: _select.or(WarrantyPolicyOwnQueryOneSchema).optional(),
});

export const CategoryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryCompleteSelectSchema
);

export const ProductCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCompleteSelectSchema
);

export const ProductCategoryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCategoryCompleteSelectSchema
);

export const VariantCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  VariantCompleteSelectSchema
);

export const AttributeCategoryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCategoryCompleteSelectSchema
);

export const AttributeCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCompleteSelectSchema
);

export const UnitCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UnitCompleteSelectSchema
);

export const AttributeUnitCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeUnitCompleteSelectSchema
);

export const AttributeValueCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeValueCompleteSelectSchema
);

export const CurrencyCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CurrencyCompleteSelectSchema
);

export const PriceLevelCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceLevelCompleteSelectSchema
);

export const PriceCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceCompleteSelectSchema
);

export const QuantityCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityCompleteSelectSchema
);

export const SerialNumberCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberCompleteSelectSchema
);

export const DiscountCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountCompleteSelectSchema
);

export const DiscountTargetCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountTargetCompleteSelectSchema
);

export const StoreCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StoreCompleteSelectSchema
);

export const WarrantyPolicyCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WarrantyPolicyCompleteSelectSchema
);

export const ProductWarrantyCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductWarrantyCompleteSelectSchema
);

export const CategoryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CategoryDistinctSchema.optional(),
  select: CategoryOwnSelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  include: CategoryIncludeSchemaJson.optional(),
  where: CategoryOwnWhereSchemaJson.optional(),
  orderBy: CategoryOwnOrderBySchemaJson.optional(),
});

export const ProductQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProductDistinctSchema.optional(),
  select: ProductOwnSelectSchemaJson.optional(),
  omit: ProductOmitSchemaJson.optional(),
  include: ProductIncludeSchemaJson.optional(),
  where: ProductOwnWhereSchemaJson.optional(),
  orderBy: ProductOwnOrderBySchemaJson.optional(),
});

export const ProductCategoryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProductCategoryDistinctSchema.optional(),
  select: ProductCategoryOwnSelectSchemaJson.optional(),
  omit: ProductCategoryOmitSchemaJson.optional(),
  include: ProductCategoryIncludeSchemaJson.optional(),
  where: ProductCategoryOwnWhereSchemaJson.optional(),
  orderBy: ProductCategoryOwnOrderBySchemaJson.optional(),
});

export const VariantQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: VariantDistinctSchema.optional(),
  select: VariantOwnSelectSchemaJson.optional(),
  omit: VariantOmitSchemaJson.optional(),
  include: VariantIncludeSchemaJson.optional(),
  where: VariantOwnWhereSchemaJson.optional(),
  orderBy: VariantOwnOrderBySchemaJson.optional(),
});

export const AttributeCategoryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AttributeCategoryDistinctSchema.optional(),
  select: AttributeCategoryOwnSelectSchemaJson.optional(),
  omit: AttributeCategoryOmitSchemaJson.optional(),
  include: AttributeCategoryIncludeSchemaJson.optional(),
  where: AttributeCategoryOwnWhereSchemaJson.optional(),
  orderBy: AttributeCategoryOwnOrderBySchemaJson.optional(),
});

export const AttributeQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AttributeDistinctSchema.optional(),
  select: AttributeOwnSelectSchemaJson.optional(),
  omit: AttributeOmitSchemaJson.optional(),
  include: AttributeIncludeSchemaJson.optional(),
  where: AttributeOwnWhereSchemaJson.optional(),
  orderBy: AttributeOwnOrderBySchemaJson.optional(),
});

export const UnitQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: UnitDistinctSchema.optional(),
  select: UnitOwnSelectSchemaJson.optional(),
  omit: UnitOmitSchemaJson.optional(),
  include: UnitIncludeSchemaJson.optional(),
  where: UnitOwnWhereSchemaJson.optional(),
  orderBy: UnitOwnOrderBySchemaJson.optional(),
});

export const AttributeUnitQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AttributeUnitDistinctSchema.optional(),
  select: AttributeUnitOwnSelectSchemaJson.optional(),
  omit: AttributeUnitOmitSchemaJson.optional(),
  include: AttributeUnitIncludeSchemaJson.optional(),
  where: AttributeUnitOwnWhereSchemaJson.optional(),
  orderBy: AttributeUnitOwnOrderBySchemaJson.optional(),
});

export const AttributeValueQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AttributeValueDistinctSchema.optional(),
  select: AttributeValueOwnSelectSchemaJson.optional(),
  omit: AttributeValueOmitSchemaJson.optional(),
  include: AttributeValueIncludeSchemaJson.optional(),
  where: AttributeValueOwnWhereSchemaJson.optional(),
  orderBy: AttributeValueOwnOrderBySchemaJson.optional(),
});

export const CurrencyQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CurrencyDistinctSchema.optional(),
  select: CurrencyOwnSelectSchemaJson.optional(),
  omit: CurrencyOmitSchemaJson.optional(),
  include: CurrencyIncludeSchemaJson.optional(),
  where: CurrencyOwnWhereSchemaJson.optional(),
  orderBy: CurrencyOwnOrderBySchemaJson.optional(),
});

export const PriceLevelQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PriceLevelDistinctSchema.optional(),
  select: PriceLevelOwnSelectSchemaJson.optional(),
  omit: PriceLevelOmitSchemaJson.optional(),
  include: PriceLevelIncludeSchemaJson.optional(),
  where: PriceLevelOwnWhereSchemaJson.optional(),
  orderBy: PriceLevelOwnOrderBySchemaJson.optional(),
});

export const PriceQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PriceDistinctSchema.optional(),
  select: PriceOwnSelectSchemaJson.optional(),
  omit: PriceOmitSchemaJson.optional(),
  include: PriceIncludeSchemaJson.optional(),
  where: PriceOwnWhereSchemaJson.optional(),
  orderBy: PriceOwnOrderBySchemaJson.optional(),
});

export const QuantityQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: QuantityDistinctSchema.optional(),
  select: QuantityOwnSelectSchemaJson.optional(),
  omit: QuantityOmitSchemaJson.optional(),
  include: QuantityIncludeSchemaJson.optional(),
  where: QuantityOwnWhereSchemaJson.optional(),
  orderBy: QuantityOwnOrderBySchemaJson.optional(),
});

export const SerialNumberQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SerialNumberDistinctSchema.optional(),
  select: SerialNumberOwnSelectSchemaJson.optional(),
  omit: SerialNumberOmitSchemaJson.optional(),
  include: SerialNumberIncludeSchemaJson.optional(),
  where: SerialNumberOwnWhereSchemaJson.optional(),
  orderBy: SerialNumberOwnOrderBySchemaJson.optional(),
});

export const DiscountQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DiscountDistinctSchema.optional(),
  select: DiscountOwnSelectSchemaJson.optional(),
  omit: DiscountOmitSchemaJson.optional(),
  include: DiscountIncludeSchemaJson.optional(),
  where: DiscountOwnWhereSchemaJson.optional(),
  orderBy: DiscountOwnOrderBySchemaJson.optional(),
});

export const DiscountTargetQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DiscountTargetDistinctSchema.optional(),
  select: DiscountTargetOwnSelectSchemaJson.optional(),
  omit: DiscountTargetOmitSchemaJson.optional(),
  include: DiscountTargetIncludeSchemaJson.optional(),
  where: DiscountTargetOwnWhereSchemaJson.optional(),
  orderBy: DiscountTargetOwnOrderBySchemaJson.optional(),
});

export const StoreQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StoreDistinctSchema.optional(),
  select: StoreOwnSelectSchemaJson.optional(),
  omit: StoreOmitSchemaJson.optional(),
  include: StoreIncludeSchemaJson.optional(),
  where: StoreOwnWhereSchemaJson.optional(),
  orderBy: StoreOwnOrderBySchemaJson.optional(),
});

export const WarrantyPolicyQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: WarrantyPolicyDistinctSchema.optional(),
  select: WarrantyPolicyOwnSelectSchemaJson.optional(),
  omit: WarrantyPolicyOmitSchemaJson.optional(),
  include: WarrantyPolicyIncludeSchemaJson.optional(),
  where: WarrantyPolicyOwnWhereSchemaJson.optional(),
  orderBy: WarrantyPolicyOwnOrderBySchemaJson.optional(),
});

export const ProductWarrantyQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProductWarrantyDistinctSchema.optional(),
  select: ProductWarrantyOwnSelectSchemaJson.optional(),
  omit: ProductWarrantyOmitSchemaJson.optional(),
  include: ProductWarrantyIncludeSchemaJson.optional(),
  where: ProductWarrantyOwnWhereSchemaJson.optional(),
  orderBy: ProductWarrantyOwnOrderBySchemaJson.optional(),
});

export const CategoryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryQuerySchema
);

export const ProductQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductQuerySchema
);

export const ProductCategoryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCategoryQuerySchema
);

export const VariantQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  VariantQuerySchema
);

export const AttributeCategoryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCategoryQuerySchema
);

export const AttributeQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeQuerySchema
);

export const UnitQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UnitQuerySchema
);

export const AttributeUnitQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeUnitQuerySchema
);

export const AttributeValueQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeValueQuerySchema
);

export const CurrencyQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CurrencyQuerySchema
);

export const PriceLevelQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceLevelQuerySchema
);

export const PriceQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceQuerySchema
);

export const QuantityQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityQuerySchema
);

export const SerialNumberQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberQuerySchema
);

export const DiscountQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountQuerySchema
);

export const DiscountTargetQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountTargetQuerySchema
);

export const StoreQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StoreQuerySchema
);

export const WarrantyPolicyQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  WarrantyPolicyQuerySchema
);

export const ProductWarrantyQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductWarrantyQuerySchema
);

export const CategoryCompleteQueryOneSchema = z.object({
  select: CategorySelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  include: CategoryIncludeSchemaJson.optional(),
  where: CategoryWhereSchemaJson.optional(),
});

export const ProductCompleteQueryOneSchema = z.object({
  select: ProductSelectSchemaJson.optional(),
  omit: ProductOmitSchemaJson.optional(),
  include: ProductIncludeSchemaJson.optional(),
  where: ProductWhereSchemaJson.optional(),
});

export const ProductCategoryCompleteQueryOneSchema = z.object({
  select: ProductCategorySelectSchemaJson.optional(),
  omit: ProductCategoryOmitSchemaJson.optional(),
  include: ProductCategoryIncludeSchemaJson.optional(),
  where: ProductCategoryWhereSchemaJson.optional(),
});

export const VariantCompleteQueryOneSchema = z.object({
  select: VariantSelectSchemaJson.optional(),
  omit: VariantOmitSchemaJson.optional(),
  include: VariantIncludeSchemaJson.optional(),
  where: VariantWhereSchemaJson.optional(),
});

export const AttributeCategoryCompleteQueryOneSchema = z.object({
  select: AttributeCategorySelectSchemaJson.optional(),
  omit: AttributeCategoryOmitSchemaJson.optional(),
  include: AttributeCategoryIncludeSchemaJson.optional(),
  where: AttributeCategoryWhereSchemaJson.optional(),
});

export const AttributeCompleteQueryOneSchema = z.object({
  select: AttributeSelectSchemaJson.optional(),
  omit: AttributeOmitSchemaJson.optional(),
  include: AttributeIncludeSchemaJson.optional(),
  where: AttributeWhereSchemaJson.optional(),
});

export const UnitCompleteQueryOneSchema = z.object({
  select: UnitSelectSchemaJson.optional(),
  omit: UnitOmitSchemaJson.optional(),
  include: UnitIncludeSchemaJson.optional(),
  where: UnitWhereSchemaJson.optional(),
});

export const AttributeUnitCompleteQueryOneSchema = z.object({
  select: AttributeUnitSelectSchemaJson.optional(),
  omit: AttributeUnitOmitSchemaJson.optional(),
  include: AttributeUnitIncludeSchemaJson.optional(),
  where: AttributeUnitWhereSchemaJson.optional(),
});

export const AttributeValueCompleteQueryOneSchema = z.object({
  select: AttributeValueSelectSchemaJson.optional(),
  omit: AttributeValueOmitSchemaJson.optional(),
  include: AttributeValueIncludeSchemaJson.optional(),
  where: AttributeValueWhereSchemaJson.optional(),
});

export const CurrencyCompleteQueryOneSchema = z.object({
  select: CurrencySelectSchemaJson.optional(),
  omit: CurrencyOmitSchemaJson.optional(),
  include: CurrencyIncludeSchemaJson.optional(),
  where: CurrencyWhereSchemaJson.optional(),
});

export const PriceLevelCompleteQueryOneSchema = z.object({
  select: PriceLevelSelectSchemaJson.optional(),
  omit: PriceLevelOmitSchemaJson.optional(),
  include: PriceLevelIncludeSchemaJson.optional(),
  where: PriceLevelWhereSchemaJson.optional(),
});

export const PriceCompleteQueryOneSchema = z.object({
  select: PriceSelectSchemaJson.optional(),
  omit: PriceOmitSchemaJson.optional(),
  include: PriceIncludeSchemaJson.optional(),
  where: PriceWhereSchemaJson.optional(),
});

export const QuantityCompleteQueryOneSchema = z.object({
  select: QuantitySelectSchemaJson.optional(),
  omit: QuantityOmitSchemaJson.optional(),
  include: QuantityIncludeSchemaJson.optional(),
  where: QuantityWhereSchemaJson.optional(),
});

export const SerialNumberCompleteQueryOneSchema = z.object({
  select: SerialNumberSelectSchemaJson.optional(),
  omit: SerialNumberOmitSchemaJson.optional(),
  include: SerialNumberIncludeSchemaJson.optional(),
  where: SerialNumberWhereSchemaJson.optional(),
});

export const DiscountCompleteQueryOneSchema = z.object({
  select: DiscountSelectSchemaJson.optional(),
  omit: DiscountOmitSchemaJson.optional(),
  include: DiscountIncludeSchemaJson.optional(),
  where: DiscountWhereSchemaJson.optional(),
});

export const DiscountTargetCompleteQueryOneSchema = z.object({
  select: DiscountTargetSelectSchemaJson.optional(),
  omit: DiscountTargetOmitSchemaJson.optional(),
  include: DiscountTargetIncludeSchemaJson.optional(),
  where: DiscountTargetWhereSchemaJson.optional(),
});

export const StoreCompleteQueryOneSchema = z.object({
  select: StoreSelectSchemaJson.optional(),
  omit: StoreOmitSchemaJson.optional(),
  include: StoreIncludeSchemaJson.optional(),
  where: StoreWhereSchemaJson.optional(),
});

export const WarrantyPolicyCompleteQueryOneSchema = z.object({
  select: WarrantyPolicySelectSchemaJson.optional(),
  omit: WarrantyPolicyOmitSchemaJson.optional(),
  include: WarrantyPolicyIncludeSchemaJson.optional(),
  where: WarrantyPolicyWhereSchemaJson.optional(),
});

export const ProductWarrantyCompleteQueryOneSchema = z.object({
  select: ProductWarrantySelectSchemaJson.optional(),
  omit: ProductWarrantyOmitSchemaJson.optional(),
  include: ProductWarrantyIncludeSchemaJson.optional(),
  where: ProductWarrantyWhereSchemaJson.optional(),
});

export const CategoryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryCompleteQueryOneSchema
);

export const ProductCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCompleteQueryOneSchema
);

export const ProductCategoryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCategoryCompleteQueryOneSchema
);

export const VariantCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  VariantCompleteQueryOneSchema
);

export const AttributeCategoryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCategoryCompleteQueryOneSchema
);

export const AttributeCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCompleteQueryOneSchema
);

export const UnitCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UnitCompleteQueryOneSchema
);

export const AttributeUnitCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeUnitCompleteQueryOneSchema
);

export const AttributeValueCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeValueCompleteQueryOneSchema
);

export const CurrencyCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CurrencyCompleteQueryOneSchema
);

export const PriceLevelCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceLevelCompleteQueryOneSchema
);

export const PriceCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceCompleteQueryOneSchema
);

export const QuantityCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityCompleteQueryOneSchema
);

export const SerialNumberCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberCompleteQueryOneSchema
);

export const DiscountCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountCompleteQueryOneSchema
);

export const DiscountTargetCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountTargetCompleteQueryOneSchema
);

export const StoreCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StoreCompleteQueryOneSchema
);

export const WarrantyPolicyCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WarrantyPolicyCompleteQueryOneSchema
);

export const ProductWarrantyCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductWarrantyCompleteQueryOneSchema
);

export const CategoryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CategoryDistinctSchema.optional(),
  select: CategoryCompleteSelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  include: CategoryIncludeSchemaJson.optional(),
  where: CategoryWhereSchemaJson.optional(),
  orderBy: CategoryOrderBySchemaJson.optional(),
});

export const ProductCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProductDistinctSchema.optional(),
  select: ProductCompleteSelectSchemaJson.optional(),
  omit: ProductOmitSchemaJson.optional(),
  include: ProductIncludeSchemaJson.optional(),
  where: ProductWhereSchemaJson.optional(),
  orderBy: ProductOrderBySchemaJson.optional(),
});

export const ProductCategoryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProductCategoryDistinctSchema.optional(),
  select: ProductCategoryCompleteSelectSchemaJson.optional(),
  omit: ProductCategoryOmitSchemaJson.optional(),
  include: ProductCategoryIncludeSchemaJson.optional(),
  where: ProductCategoryWhereSchemaJson.optional(),
  orderBy: ProductCategoryOrderBySchemaJson.optional(),
});

export const VariantCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: VariantDistinctSchema.optional(),
  select: VariantCompleteSelectSchemaJson.optional(),
  omit: VariantOmitSchemaJson.optional(),
  include: VariantIncludeSchemaJson.optional(),
  where: VariantWhereSchemaJson.optional(),
  orderBy: VariantOrderBySchemaJson.optional(),
});

export const AttributeCategoryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AttributeCategoryDistinctSchema.optional(),
  select: AttributeCategoryCompleteSelectSchemaJson.optional(),
  omit: AttributeCategoryOmitSchemaJson.optional(),
  include: AttributeCategoryIncludeSchemaJson.optional(),
  where: AttributeCategoryWhereSchemaJson.optional(),
  orderBy: AttributeCategoryOrderBySchemaJson.optional(),
});

export const AttributeCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AttributeDistinctSchema.optional(),
  select: AttributeCompleteSelectSchemaJson.optional(),
  omit: AttributeOmitSchemaJson.optional(),
  include: AttributeIncludeSchemaJson.optional(),
  where: AttributeWhereSchemaJson.optional(),
  orderBy: AttributeOrderBySchemaJson.optional(),
});

export const UnitCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: UnitDistinctSchema.optional(),
  select: UnitCompleteSelectSchemaJson.optional(),
  omit: UnitOmitSchemaJson.optional(),
  include: UnitIncludeSchemaJson.optional(),
  where: UnitWhereSchemaJson.optional(),
  orderBy: UnitOrderBySchemaJson.optional(),
});

export const AttributeUnitCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AttributeUnitDistinctSchema.optional(),
  select: AttributeUnitCompleteSelectSchemaJson.optional(),
  omit: AttributeUnitOmitSchemaJson.optional(),
  include: AttributeUnitIncludeSchemaJson.optional(),
  where: AttributeUnitWhereSchemaJson.optional(),
  orderBy: AttributeUnitOrderBySchemaJson.optional(),
});

export const AttributeValueCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AttributeValueDistinctSchema.optional(),
  select: AttributeValueCompleteSelectSchemaJson.optional(),
  omit: AttributeValueOmitSchemaJson.optional(),
  include: AttributeValueIncludeSchemaJson.optional(),
  where: AttributeValueWhereSchemaJson.optional(),
  orderBy: AttributeValueOrderBySchemaJson.optional(),
});

export const CurrencyCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CurrencyDistinctSchema.optional(),
  select: CurrencyCompleteSelectSchemaJson.optional(),
  omit: CurrencyOmitSchemaJson.optional(),
  include: CurrencyIncludeSchemaJson.optional(),
  where: CurrencyWhereSchemaJson.optional(),
  orderBy: CurrencyOrderBySchemaJson.optional(),
});

export const PriceLevelCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PriceLevelDistinctSchema.optional(),
  select: PriceLevelCompleteSelectSchemaJson.optional(),
  omit: PriceLevelOmitSchemaJson.optional(),
  include: PriceLevelIncludeSchemaJson.optional(),
  where: PriceLevelWhereSchemaJson.optional(),
  orderBy: PriceLevelOrderBySchemaJson.optional(),
});

export const PriceCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PriceDistinctSchema.optional(),
  select: PriceCompleteSelectSchemaJson.optional(),
  omit: PriceOmitSchemaJson.optional(),
  include: PriceIncludeSchemaJson.optional(),
  where: PriceWhereSchemaJson.optional(),
  orderBy: PriceOrderBySchemaJson.optional(),
});

export const QuantityCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: QuantityDistinctSchema.optional(),
  select: QuantityCompleteSelectSchemaJson.optional(),
  omit: QuantityOmitSchemaJson.optional(),
  include: QuantityIncludeSchemaJson.optional(),
  where: QuantityWhereSchemaJson.optional(),
  orderBy: QuantityOrderBySchemaJson.optional(),
});

export const SerialNumberCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SerialNumberDistinctSchema.optional(),
  select: SerialNumberCompleteSelectSchemaJson.optional(),
  omit: SerialNumberOmitSchemaJson.optional(),
  include: SerialNumberIncludeSchemaJson.optional(),
  where: SerialNumberWhereSchemaJson.optional(),
  orderBy: SerialNumberOrderBySchemaJson.optional(),
});

export const DiscountCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DiscountDistinctSchema.optional(),
  select: DiscountCompleteSelectSchemaJson.optional(),
  omit: DiscountOmitSchemaJson.optional(),
  include: DiscountIncludeSchemaJson.optional(),
  where: DiscountWhereSchemaJson.optional(),
  orderBy: DiscountOrderBySchemaJson.optional(),
});

export const DiscountTargetCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DiscountTargetDistinctSchema.optional(),
  select: DiscountTargetCompleteSelectSchemaJson.optional(),
  omit: DiscountTargetOmitSchemaJson.optional(),
  include: DiscountTargetIncludeSchemaJson.optional(),
  where: DiscountTargetWhereSchemaJson.optional(),
  orderBy: DiscountTargetOrderBySchemaJson.optional(),
});

export const StoreCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StoreDistinctSchema.optional(),
  select: StoreCompleteSelectSchemaJson.optional(),
  omit: StoreOmitSchemaJson.optional(),
  include: StoreIncludeSchemaJson.optional(),
  where: StoreWhereSchemaJson.optional(),
  orderBy: StoreOrderBySchemaJson.optional(),
});

export const WarrantyPolicyCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: WarrantyPolicyDistinctSchema.optional(),
  select: WarrantyPolicyCompleteSelectSchemaJson.optional(),
  omit: WarrantyPolicyOmitSchemaJson.optional(),
  include: WarrantyPolicyIncludeSchemaJson.optional(),
  where: WarrantyPolicyWhereSchemaJson.optional(),
  orderBy: WarrantyPolicyOrderBySchemaJson.optional(),
});

export const ProductWarrantyCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProductWarrantyDistinctSchema.optional(),
  select: ProductWarrantyCompleteSelectSchemaJson.optional(),
  omit: ProductWarrantyOmitSchemaJson.optional(),
  include: ProductWarrantyIncludeSchemaJson.optional(),
  where: ProductWarrantyWhereSchemaJson.optional(),
  orderBy: ProductWarrantyOrderBySchemaJson.optional(),
});

export const CategoryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryCompleteQuerySchema
);

export const ProductCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCompleteQuerySchema
);

export const ProductCategoryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductCategoryCompleteQuerySchema
);

export const VariantCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  VariantCompleteQuerySchema
);

export const AttributeCategoryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCategoryCompleteQuerySchema
);

export const AttributeCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCompleteQuerySchema
);

export const UnitCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UnitCompleteQuerySchema
);

export const AttributeUnitCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeUnitCompleteQuerySchema
);

export const AttributeValueCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeValueCompleteQuerySchema
);

export const CurrencyCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CurrencyCompleteQuerySchema
);

export const PriceLevelCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceLevelCompleteQuerySchema
);

export const PriceCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriceCompleteQuerySchema
);

export const QuantityCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityCompleteQuerySchema
);

export const SerialNumberCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberCompleteQuerySchema
);

export const DiscountCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountCompleteQuerySchema
);

export const DiscountTargetCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DiscountTargetCompleteQuerySchema
);

export const StoreCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StoreCompleteQuerySchema
);

export const WarrantyPolicyCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  WarrantyPolicyCompleteQuerySchema
);

export const ProductWarrantyCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProductWarrantyCompleteQuerySchema
);

export const CategoryProjectionSchema = z.union([
  z.object({ omit: CategoryOmitSchemaJson }),
  z.object({ select: CategorySelectSchemaJson }),
  z.object({ include: CategoryIncludeSchemaJson }),
  z.object({}),
]);

export const ProductProjectionSchema = z.union([
  z.object({ omit: ProductOmitSchemaJson }),
  z.object({ select: ProductSelectSchemaJson }),
  z.object({ include: ProductIncludeSchemaJson }),
  z.object({}),
]);

export const ProductCategoryProjectionSchema = z.union([
  z.object({ omit: ProductCategoryOmitSchemaJson }),
  z.object({ select: ProductCategorySelectSchemaJson }),
  z.object({ include: ProductCategoryIncludeSchemaJson }),
  z.object({}),
]);

export const VariantProjectionSchema = z.union([
  z.object({ omit: VariantOmitSchemaJson }),
  z.object({ select: VariantSelectSchemaJson }),
  z.object({ include: VariantIncludeSchemaJson }),
  z.object({}),
]);

export const AttributeCategoryProjectionSchema = z.union([
  z.object({ omit: AttributeCategoryOmitSchemaJson }),
  z.object({ select: AttributeCategorySelectSchemaJson }),
  z.object({ include: AttributeCategoryIncludeSchemaJson }),
  z.object({}),
]);

export const AttributeProjectionSchema = z.union([
  z.object({ omit: AttributeOmitSchemaJson }),
  z.object({ select: AttributeSelectSchemaJson }),
  z.object({ include: AttributeIncludeSchemaJson }),
  z.object({}),
]);

export const UnitProjectionSchema = z.union([
  z.object({ omit: UnitOmitSchemaJson }),
  z.object({ select: UnitSelectSchemaJson }),
  z.object({ include: UnitIncludeSchemaJson }),
  z.object({}),
]);

export const AttributeUnitProjectionSchema = z.union([
  z.object({ omit: AttributeUnitOmitSchemaJson }),
  z.object({ select: AttributeUnitSelectSchemaJson }),
  z.object({ include: AttributeUnitIncludeSchemaJson }),
  z.object({}),
]);

export const AttributeValueProjectionSchema = z.union([
  z.object({ omit: AttributeValueOmitSchemaJson }),
  z.object({ select: AttributeValueSelectSchemaJson }),
  z.object({ include: AttributeValueIncludeSchemaJson }),
  z.object({}),
]);

export const CurrencyProjectionSchema = z.union([
  z.object({ omit: CurrencyOmitSchemaJson }),
  z.object({ select: CurrencySelectSchemaJson }),
  z.object({ include: CurrencyIncludeSchemaJson }),
  z.object({}),
]);

export const PriceLevelProjectionSchema = z.union([
  z.object({ omit: PriceLevelOmitSchemaJson }),
  z.object({ select: PriceLevelSelectSchemaJson }),
  z.object({ include: PriceLevelIncludeSchemaJson }),
  z.object({}),
]);

export const PriceProjectionSchema = z.union([
  z.object({ omit: PriceOmitSchemaJson }),
  z.object({ select: PriceSelectSchemaJson }),
  z.object({ include: PriceIncludeSchemaJson }),
  z.object({}),
]);

export const QuantityProjectionSchema = z.union([
  z.object({ omit: QuantityOmitSchemaJson }),
  z.object({ select: QuantitySelectSchemaJson }),
  z.object({ include: QuantityIncludeSchemaJson }),
  z.object({}),
]);

export const SerialNumberProjectionSchema = z.union([
  z.object({ omit: SerialNumberOmitSchemaJson }),
  z.object({ select: SerialNumberSelectSchemaJson }),
  z.object({ include: SerialNumberIncludeSchemaJson }),
  z.object({}),
]);

export const DiscountProjectionSchema = z.union([
  z.object({ omit: DiscountOmitSchemaJson }),
  z.object({ select: DiscountSelectSchemaJson }),
  z.object({ include: DiscountIncludeSchemaJson }),
  z.object({}),
]);

export const DiscountTargetProjectionSchema = z.union([
  z.object({ omit: DiscountTargetOmitSchemaJson }),
  z.object({ select: DiscountTargetSelectSchemaJson }),
  z.object({ include: DiscountTargetIncludeSchemaJson }),
  z.object({}),
]);

export const StoreProjectionSchema = z.union([
  z.object({ omit: StoreOmitSchemaJson }),
  z.object({ select: StoreSelectSchemaJson }),
  z.object({ include: StoreIncludeSchemaJson }),
  z.object({}),
]);

export const WarrantyPolicyProjectionSchema = z.union([
  z.object({ omit: WarrantyPolicyOmitSchemaJson }),
  z.object({ select: WarrantyPolicySelectSchemaJson }),
  z.object({ include: WarrantyPolicyIncludeSchemaJson }),
  z.object({}),
]);

export const ProductWarrantyProjectionSchema = z.union([
  z.object({ omit: ProductWarrantyOmitSchemaJson }),
  z.object({ select: ProductWarrantySelectSchemaJson }),
  z.object({ include: ProductWarrantyIncludeSchemaJson }),
  z.object({}),
]);

export const CategoryOwnCreateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
  slug: _slug,
});

export const ProductOwnCreateSchema = z.object({
  isActive: _bool.optional(),
  uuid: _str.optional(),
  name: _name,
  slug: _slug,
  description: _description.optional(),
});

export const ProductCategoryOwnCreateSchema = z.object({
  productId: _id,
  categoryId: _id,
});

export const VariantOwnCreateSchema = z.object({
  uuid: _str.optional(),
  productId: _id,
  sku: _str,
  upc: _str,
});

export const AttributeCategoryOwnCreateSchema = z.object({
  name: _name,
  slug: _slug,
});

export const AttributeOwnCreateSchema = z.object({
  categoryId: _id.optional(),
  name: _name,
  description: _description.optional(),
});

export const UnitOwnCreateSchema = z.object({ name: _name, symbol: _str });

export const AttributeUnitOwnCreateSchema = z.object({
  attributeId: _id,
  unitId: _id,
});

export const AttributeValueOwnCreateSchema = z.object({
  attributeId: _id,
  variantId: _id,
  textValue: _str.optional(),
  booleanValue: _bool.optional(),
  floatValue: _currency.optional(),
});

export const CurrencyOwnCreateSchema = z.object({
  name: _name,
  code: _str,
  symbol: _str.optional(),
});

export const PriceLevelOwnCreateSchema = z.object({
  currencyId: _id,
  name: _name,
  slug: _slug,
  taxrate: _currency,
  notes: _str.optional(),
});

export const PriceOwnCreateSchema = z.object({
  variantId: _id,
  priceLevelId: _id,
  price: _currency,
  cost: _currency,
  description: _description.optional(),
});

export const QuantityOwnCreateSchema = z.object({
  variantId: _id,
  storeId: _id,
  quantity: _int,
  alertThreshold: _int.optional(),
});

export const SerialNumberOwnCreateSchema = z.object({
  variantId: _id,
  storeId: _id,
  serialNumber: _str,
  inStock: _bool,
});

export const DiscountOwnCreateSchema = z.object({
  code: _str,
  type: DiscountTypeSchema,
  valueType: ValueTypeSchema,
  value: _currency.optional(),
  minQuantity: _int.optional(),
  maxQuantity: _int.optional(),
  minOrderTotal: _currency.optional(),
  maxOrderTotal: _currency.optional(),
  startDate: _date.optional(),
  endDate: _date.optional(),
  usageLimit: _int.optional(),
  usageCount: _int.optional(),
});

export const DiscountTargetOwnCreateSchema = z.object({
  type: DiscountTargetTypeSchema,
  discountId: _id,
  storeId: _id.optional(),
  productId: _id.optional(),
  variantId: _id.optional(),
  priceLevelId: _id.optional(),
  categoryId: _id.optional(),
});

export const StoreOwnCreateSchema = z.object({
  priceLevelId: _id,
  name: _name,
  slug: _slug,
  description: _description.optional(),
});

export const WarrantyPolicyOwnCreateSchema = z.object({
  name: _name,
  description: _description.optional(),
  duration: _int,
  durationUnit: TimeUnitSchema.optional(),
});

export const ProductWarrantyOwnCreateSchema = z.object({
  productId: _id.optional(),
  variantId: _id.optional(),
  policyId: _id,
});

export const CategoryCreateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
  slug: _slug,
  parent: z.object({ create: CategoryOwnCreateSchema }).optional(),
  children: z.object({ createMany: CategoryOwnCreateSchema.array() }).array(),
  products: z
    .object({ createMany: ProductCategoryOwnCreateSchema.array() })
    .array(),
  discountTargets: z
    .object({ createMany: DiscountTargetOwnCreateSchema.array() })
    .array(),
});

export const ProductCreateSchema = z.object({
  isActive: _bool.optional(),
  uuid: _str.optional(),
  name: _name,
  slug: _slug,
  description: _description.optional(),
  variants: z.object({ createMany: VariantOwnCreateSchema.array() }).array(),
  categories: z
    .object({ createMany: ProductCategoryOwnCreateSchema.array() })
    .array(),
  discounts: z
    .object({ createMany: DiscountTargetOwnCreateSchema.array() })
    .array(),
  warranties: z
    .object({ createMany: ProductWarrantyOwnCreateSchema.array() })
    .array(),
});

export const ProductCategoryCreateSchema = z.object({
  productId: _id,
  categoryId: _id,
  product: z.object({ create: ProductOwnCreateSchema }),
  category: z.object({ create: CategoryOwnCreateSchema }),
});

export const VariantCreateSchema = z.object({
  uuid: _str.optional(),
  productId: _id,
  sku: _str,
  upc: _str,
  product: z.object({ create: ProductOwnCreateSchema }),
  attributes: z
    .object({ createMany: AttributeValueOwnCreateSchema.array() })
    .array(),
  prices: z.object({ createMany: PriceOwnCreateSchema.array() }).array(),
  quantities: z.object({ createMany: QuantityOwnCreateSchema.array() }).array(),
  discounts: z
    .object({ createMany: DiscountTargetOwnCreateSchema.array() })
    .array(),
  serrialNumbers: z
    .object({ createMany: SerialNumberOwnCreateSchema.array() })
    .array(),
  warranties: z
    .object({ createMany: ProductWarrantyOwnCreateSchema.array() })
    .array(),
});

export const AttributeCategoryCreateSchema = z.object({
  name: _name,
  slug: _slug,
  attributes: z
    .object({ createMany: AttributeOwnCreateSchema.array() })
    .array(),
});

export const AttributeCreateSchema = z.object({
  categoryId: _id.optional(),
  name: _name,
  description: _description.optional(),
  category: z.object({ create: AttributeCategoryOwnCreateSchema }).optional(),
  unites: z
    .object({ createMany: AttributeUnitOwnCreateSchema.array() })
    .array(),
  values: z
    .object({ createMany: AttributeValueOwnCreateSchema.array() })
    .array(),
});

export const UnitCreateSchema = z.object({
  name: _name,
  symbol: _str,
  attributes: z
    .object({ createMany: AttributeUnitOwnCreateSchema.array() })
    .array(),
});

export const AttributeUnitCreateSchema = z.object({
  attributeId: _id,
  unitId: _id,
  attribute: z.object({ create: AttributeOwnCreateSchema }),
  unit: z.object({ create: UnitOwnCreateSchema }),
});

export const AttributeValueCreateSchema = z.object({
  attributeId: _id,
  variantId: _id,
  textValue: _str.optional(),
  booleanValue: _bool.optional(),
  floatValue: _currency.optional(),
  variant: z.object({ create: VariantOwnCreateSchema }),
  attribute: z.object({ create: AttributeOwnCreateSchema }),
});

export const CurrencyCreateSchema = z.object({
  name: _name,
  code: _str,
  symbol: _str.optional(),
  priceLevels: z
    .object({ createMany: PriceLevelOwnCreateSchema.array() })
    .array(),
});

export const PriceLevelCreateSchema = z.object({
  currencyId: _id,
  name: _name,
  slug: _slug,
  taxrate: _currency,
  notes: _str.optional(),
  currency: z.object({ create: CurrencyOwnCreateSchema }),
  stores: z.object({ createMany: StoreOwnCreateSchema.array() }).array(),
  prices: z.object({ createMany: PriceOwnCreateSchema.array() }).array(),
  discounts: z
    .object({ createMany: DiscountTargetOwnCreateSchema.array() })
    .array(),
});

export const PriceCreateSchema = z.object({
  variantId: _id,
  priceLevelId: _id,
  price: _currency,
  cost: _currency,
  description: _description.optional(),
  variant: z.object({ create: VariantOwnCreateSchema }),
  priceLevel: z.object({ create: PriceLevelOwnCreateSchema }),
});

export const QuantityCreateSchema = z.object({
  variantId: _id,
  storeId: _id,
  quantity: _int,
  alertThreshold: _int.optional(),
  variant: z.object({ create: VariantOwnCreateSchema }),
  store: z.object({ create: StoreOwnCreateSchema }),
});

export const SerialNumberCreateSchema = z.object({
  variantId: _id,
  storeId: _id,
  serialNumber: _str,
  inStock: _bool,
  variant: z.object({ create: VariantOwnCreateSchema }),
  store: z.object({ create: StoreOwnCreateSchema }),
});

export const DiscountCreateSchema = z.object({
  code: _str,
  type: DiscountTypeSchema,
  valueType: ValueTypeSchema,
  value: _currency.optional(),
  minQuantity: _int.optional(),
  maxQuantity: _int.optional(),
  minOrderTotal: _currency.optional(),
  maxOrderTotal: _currency.optional(),
  startDate: _date.optional(),
  endDate: _date.optional(),
  usageLimit: _int.optional(),
  usageCount: _int.optional(),
  targets: z
    .object({ createMany: DiscountTargetOwnCreateSchema.array() })
    .array(),
});

export const DiscountTargetCreateSchema = z.object({
  type: DiscountTargetTypeSchema,
  discountId: _id,
  storeId: _id.optional(),
  productId: _id.optional(),
  variantId: _id.optional(),
  priceLevelId: _id.optional(),
  categoryId: _id.optional(),
  discount: z.object({ create: DiscountOwnCreateSchema }),
  store: z.object({ create: StoreOwnCreateSchema }).optional(),
  category: z.object({ create: CategoryOwnCreateSchema }).optional(),
  priceLevel: z.object({ create: PriceLevelOwnCreateSchema }).optional(),
  product: z.object({ create: ProductOwnCreateSchema }).optional(),
  variant: z.object({ create: VariantOwnCreateSchema }).optional(),
});

export const StoreCreateSchema = z.object({
  priceLevelId: _id,
  name: _name,
  slug: _slug,
  description: _description.optional(),
  priceLevel: z.object({ create: PriceLevelOwnCreateSchema }),
  quantities: z.object({ createMany: QuantityOwnCreateSchema.array() }).array(),
  discounts: z
    .object({ createMany: DiscountTargetOwnCreateSchema.array() })
    .array(),
  serialNumbers: z
    .object({ createMany: SerialNumberOwnCreateSchema.array() })
    .array(),
});

export const WarrantyPolicyCreateSchema = z.object({
  name: _name,
  description: _description.optional(),
  duration: _int,
  durationUnit: TimeUnitSchema.optional(),
  products: z
    .object({ createMany: ProductWarrantyOwnCreateSchema.array() })
    .array(),
});

export const ProductWarrantyCreateSchema = z.object({
  productId: _id.optional(),
  variantId: _id.optional(),
  policyId: _id,
  product: z.object({ create: ProductOwnCreateSchema }).optional(),
  variant: z.object({ create: VariantOwnCreateSchema }).optional(),
  policy: z.object({ create: WarrantyPolicyOwnCreateSchema }),
});

export const CategoryUpdateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
  slug: _slug,
});

export const ProductUpdateSchema = z.object({
  isActive: _bool.optional(),
  name: _name,
  slug: _slug,
  description: _description.optional(),
});

export const ProductCategoryUpdateSchema = z.object({
  productId: _id,
  categoryId: _id,
});

export const VariantUpdateSchema = z.object({
  productId: _id,
  sku: _str,
  upc: _str,
});

export const AttributeCategoryUpdateSchema = z.object({
  name: _name,
  slug: _slug,
});

export const AttributeUpdateSchema = z.object({
  categoryId: _id.optional(),
  name: _name,
  description: _description.optional(),
});

export const UnitUpdateSchema = z.object({ name: _name, symbol: _str });

export const AttributeUnitUpdateSchema = z.object({
  attributeId: _id,
  unitId: _id,
});

export const AttributeValueUpdateSchema = z.object({
  attributeId: _id,
  variantId: _id,
  textValue: _str.optional(),
  booleanValue: _bool.optional(),
  floatValue: _currency.optional(),
});

export const CurrencyUpdateSchema = z.object({
  name: _name,
  code: _str,
  symbol: _str.optional(),
});

export const PriceLevelUpdateSchema = z.object({
  currencyId: _id,
  name: _name,
  slug: _slug,
  taxrate: _currency,
  notes: _str.optional(),
});

export const PriceUpdateSchema = z.object({
  variantId: _id,
  priceLevelId: _id,
  price: _currency,
  cost: _currency,
  description: _description.optional(),
});

export const QuantityUpdateSchema = z.object({
  variantId: _id,
  storeId: _id,
  quantity: _int,
  alertThreshold: _int.optional(),
});

export const SerialNumberUpdateSchema = z.object({
  variantId: _id,
  storeId: _id,
  serialNumber: _str,
  inStock: _bool,
});

export const DiscountUpdateSchema = z.object({
  code: _str,
  type: DiscountTypeSchema,
  valueType: ValueTypeSchema,
  value: _currency.optional(),
  minQuantity: _int.optional(),
  maxQuantity: _int.optional(),
  minOrderTotal: _currency.optional(),
  maxOrderTotal: _currency.optional(),
  startDate: _date.optional(),
  endDate: _date.optional(),
  usageLimit: _int.optional(),
  usageCount: _int.optional(),
});

export const DiscountTargetUpdateSchema = z.object({
  type: DiscountTargetTypeSchema,
  discountId: _id,
  storeId: _id.optional(),
  productId: _id.optional(),
  variantId: _id.optional(),
  priceLevelId: _id.optional(),
  categoryId: _id.optional(),
});

export const StoreUpdateSchema = z.object({
  priceLevelId: _id,
  name: _name,
  slug: _slug,
  description: _description.optional(),
});

export const WarrantyPolicyUpdateSchema = z.object({
  name: _name,
  description: _description.optional(),
  duration: _int,
  durationUnit: TimeUnitSchema.optional(),
});

export const ProductWarrantyUpdateSchema = z.object({
  productId: _id.optional(),
  variantId: _id.optional(),
  policyId: _id,
});

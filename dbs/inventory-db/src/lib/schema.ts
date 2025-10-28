import z from "zod";

export const _int = z.coerce.number().int();

export const _str = z.string();

export const _num = z.coerce.number();

export const _bool = z.coerce.boolean();

export const _date = z.iso.datetime();

export const _shortText = z.string().max(30);

export const _longText = z.string().max(2000);

export const _id = z.coerce.number().int().min(1);

export const _idObject = z.object({
  id: _id,
});

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
  .enum(["id", "parentId", "name", "description"])
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
    "description",
  ])
  .array()
  .optional();

export const ProductCategoryDistinctSchema = z
  .enum(["id", "productId", "categoryId"])
  .array()
  .optional();

export const VariantDistinctSchema = z
  .enum(["id", "uuid", "productId", "sku", "upc", "description"])
  .array()
  .optional();

export const AttributeDistinctSchema = z
  .enum(["id", "variantId", "name", "value"])
  .array()
  .optional();

export const CurrencyDistinctSchema = z
  .enum(["id", "name", "code", "symbol"])
  .array()
  .optional();

export const PriceLevelDistinctSchema = z
  .enum(["id", "currencyId", "name", "description", "taxrate"])
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
  .enum(["id", "priceLevelId", "name", "description"])
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
  description: _strFilter.optional(),
});

export const ProductOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  isActive: _boolFilter.optional(),
  uuid: _strFilter.optional(),
  name: _strFilter.optional(),
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
  description: _strFilter.optional(),
});

export const AttributeOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  variantId: _intFilter.optional(),
  name: _strFilter.optional(),
  value: _strFilter.optional(),
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
  description: _strFilter.optional(),
  taxrate: _numFilter.optional(),
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

export const AttributeOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeOwnWhereSchema
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
  description: _strFilter.optional(),
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
  description: _strFilter.optional(),
  product: ProductOwnWhereSchema.optional(),
  attributes: z
    .object({
      every: AttributeOwnWhereSchema.optional(),
      some: AttributeOwnWhereSchema.optional(),
      none: AttributeOwnWhereSchema.optional(),
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
  serialNumbers: z
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

export const AttributeWhereSchema = z.object({
  id: _intFilter.optional(),
  variantId: _intFilter.optional(),
  name: _strFilter.optional(),
  value: _strFilter.optional(),
  variant: VariantOwnWhereSchema.optional(),
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
  description: _strFilter.optional(),
  taxrate: _numFilter.optional(),
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

export const AttributeWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeWhereSchema
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
  description: _direction,
});

export const ProductOwnOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  isActive: _direction,
  uuid: _direction,
  name: _direction,
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
  description: _direction,
});

export const AttributeOwnOrderBySchema = z.object({
  id: _direction,
  variantId: _direction,
  name: _direction,
  value: _direction,
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
  description: _direction,
  taxrate: _direction,
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

export const AttributeOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeOwnOrderBySchema
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
  description: _direction,
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
  description: _direction,
  product: ProductOwnOrderBySchema.optional(),
  attributes: _orderByCount,
  prices: _orderByCount,
  quantities: _orderByCount,
  discounts: _orderByCount,
  serialNumbers: _orderByCount,
  warranties: _orderByCount,
});

export const AttributeOrderBySchema = z.object({
  id: _direction,
  variantId: _direction,
  name: _direction,
  value: _direction,
  variant: VariantOwnOrderBySchema.optional(),
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
  description: _direction,
  taxrate: _direction,
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

export const AttributeOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeOrderBySchema
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
  description: _select,
});

export const ProductOwnSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  isActive: _select,
  uuid: _select,
  name: _select,
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
  description: _select,
});

export const AttributeOwnSelectSchema = z.object({
  id: _select,
  variantId: _select,
  name: _select,
  value: _select,
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
  description: _select,
  taxrate: _select,
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

export const AttributeOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeOwnSelectSchema
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
  description: _select,
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
  description: _select,
  product: _select,
  attributes: _select,
  prices: _select,
  quantities: _select,
  discounts: _select,
  serialNumbers: _select,
  warranties: _select,
});

export const AttributeSelectSchema = z.object({
  id: _select,
  variantId: _select,
  name: _select,
  value: _select,
  variant: _select,
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
  description: _select,
  taxrate: _select,
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

export const AttributeSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeSelectSchema
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
  description: _select,
});

export const ProductOmitSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  isActive: _select,
  uuid: _select,
  name: _select,
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
  description: _select,
});

export const AttributeOmitSchema = z.object({
  id: _select,
  variantId: _select,
  name: _select,
  value: _select,
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
  description: _select,
  taxrate: _select,
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

export const AttributeOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeOmitSchema
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

export const AttributeOwnQueryOneSchema = z.object({
  select: AttributeOwnSelectSchemaJson.optional(),
  omit: AttributeOmitSchemaJson.optional(),
  where: AttributeOwnWhereSchemaJson.optional(),
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

export const AttributeOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeOwnQueryOneSchema
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

export const AttributeOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AttributeDistinctSchema.optional(),
  select: AttributeOwnSelectSchemaJson.optional(),
  omit: AttributeOmitSchemaJson.optional(),
  where: AttributeOwnWhereSchemaJson.optional(),
  orderBy: AttributeOwnOrderBySchemaJson.optional(),
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

export const AttributeOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeOwnQuerySchema
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
  attributes: _select.or(AttributeOwnQueryOneSchema).optional(),
  prices: _select.or(PriceOwnQueryOneSchema).optional(),
  quantities: _select.or(QuantityOwnQueryOneSchema).optional(),
  discounts: _select.or(DiscountTargetOwnQueryOneSchema).optional(),
  serialNumbers: _select.or(SerialNumberOwnQueryOneSchema).optional(),
  warranties: _select.or(ProductWarrantyOwnQueryOneSchema).optional(),
});

export const AttributeIncludeSchema = z.object({
  variant: _select.or(VariantOwnQueryOneSchema).optional(),
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

export const AttributeIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeIncludeSchema
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
  description: _select,
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
  description: _select,
  product: _select.or(ProductOwnQueryOneSchema).optional(),
  attributes: _select.or(AttributeOwnQueryOneSchema).optional(),
  prices: _select.or(PriceOwnQueryOneSchema).optional(),
  quantities: _select.or(QuantityOwnQueryOneSchema).optional(),
  discounts: _select.or(DiscountTargetOwnQueryOneSchema).optional(),
  serialNumbers: _select.or(SerialNumberOwnQueryOneSchema).optional(),
  warranties: _select.or(ProductWarrantyOwnQueryOneSchema).optional(),
});

export const AttributeCompleteSelectSchema = z.object({
  id: _select,
  variantId: _select,
  name: _select,
  value: _select,
  variant: _select.or(VariantOwnQueryOneSchema).optional(),
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
  description: _select,
  taxrate: _select,
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

export const AttributeCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCompleteSelectSchema
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
  where: CategoryWhereSchemaJson.optional(),
  orderBy: CategoryOrderBySchemaJson.optional(),
});

export const ProductQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProductDistinctSchema.optional(),
  select: ProductOwnSelectSchemaJson.optional(),
  omit: ProductOmitSchemaJson.optional(),
  include: ProductIncludeSchemaJson.optional(),
  where: ProductWhereSchemaJson.optional(),
  orderBy: ProductOrderBySchemaJson.optional(),
});

export const ProductCategoryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProductCategoryDistinctSchema.optional(),
  select: ProductCategoryOwnSelectSchemaJson.optional(),
  omit: ProductCategoryOmitSchemaJson.optional(),
  include: ProductCategoryIncludeSchemaJson.optional(),
  where: ProductCategoryWhereSchemaJson.optional(),
  orderBy: ProductCategoryOrderBySchemaJson.optional(),
});

export const VariantQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: VariantDistinctSchema.optional(),
  select: VariantOwnSelectSchemaJson.optional(),
  omit: VariantOmitSchemaJson.optional(),
  include: VariantIncludeSchemaJson.optional(),
  where: VariantWhereSchemaJson.optional(),
  orderBy: VariantOrderBySchemaJson.optional(),
});

export const AttributeQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AttributeDistinctSchema.optional(),
  select: AttributeOwnSelectSchemaJson.optional(),
  omit: AttributeOmitSchemaJson.optional(),
  include: AttributeIncludeSchemaJson.optional(),
  where: AttributeWhereSchemaJson.optional(),
  orderBy: AttributeOrderBySchemaJson.optional(),
});

export const CurrencyQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CurrencyDistinctSchema.optional(),
  select: CurrencyOwnSelectSchemaJson.optional(),
  omit: CurrencyOmitSchemaJson.optional(),
  include: CurrencyIncludeSchemaJson.optional(),
  where: CurrencyWhereSchemaJson.optional(),
  orderBy: CurrencyOrderBySchemaJson.optional(),
});

export const PriceLevelQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PriceLevelDistinctSchema.optional(),
  select: PriceLevelOwnSelectSchemaJson.optional(),
  omit: PriceLevelOmitSchemaJson.optional(),
  include: PriceLevelIncludeSchemaJson.optional(),
  where: PriceLevelWhereSchemaJson.optional(),
  orderBy: PriceLevelOrderBySchemaJson.optional(),
});

export const PriceQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PriceDistinctSchema.optional(),
  select: PriceOwnSelectSchemaJson.optional(),
  omit: PriceOmitSchemaJson.optional(),
  include: PriceIncludeSchemaJson.optional(),
  where: PriceWhereSchemaJson.optional(),
  orderBy: PriceOrderBySchemaJson.optional(),
});

export const QuantityQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: QuantityDistinctSchema.optional(),
  select: QuantityOwnSelectSchemaJson.optional(),
  omit: QuantityOmitSchemaJson.optional(),
  include: QuantityIncludeSchemaJson.optional(),
  where: QuantityWhereSchemaJson.optional(),
  orderBy: QuantityOrderBySchemaJson.optional(),
});

export const SerialNumberQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SerialNumberDistinctSchema.optional(),
  select: SerialNumberOwnSelectSchemaJson.optional(),
  omit: SerialNumberOmitSchemaJson.optional(),
  include: SerialNumberIncludeSchemaJson.optional(),
  where: SerialNumberWhereSchemaJson.optional(),
  orderBy: SerialNumberOrderBySchemaJson.optional(),
});

export const DiscountQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DiscountDistinctSchema.optional(),
  select: DiscountOwnSelectSchemaJson.optional(),
  omit: DiscountOmitSchemaJson.optional(),
  include: DiscountIncludeSchemaJson.optional(),
  where: DiscountWhereSchemaJson.optional(),
  orderBy: DiscountOrderBySchemaJson.optional(),
});

export const DiscountTargetQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DiscountTargetDistinctSchema.optional(),
  select: DiscountTargetOwnSelectSchemaJson.optional(),
  omit: DiscountTargetOmitSchemaJson.optional(),
  include: DiscountTargetIncludeSchemaJson.optional(),
  where: DiscountTargetWhereSchemaJson.optional(),
  orderBy: DiscountTargetOrderBySchemaJson.optional(),
});

export const StoreQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StoreDistinctSchema.optional(),
  select: StoreOwnSelectSchemaJson.optional(),
  omit: StoreOmitSchemaJson.optional(),
  include: StoreIncludeSchemaJson.optional(),
  where: StoreWhereSchemaJson.optional(),
  orderBy: StoreOrderBySchemaJson.optional(),
});

export const WarrantyPolicyQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: WarrantyPolicyDistinctSchema.optional(),
  select: WarrantyPolicyOwnSelectSchemaJson.optional(),
  omit: WarrantyPolicyOmitSchemaJson.optional(),
  include: WarrantyPolicyIncludeSchemaJson.optional(),
  where: WarrantyPolicyWhereSchemaJson.optional(),
  orderBy: WarrantyPolicyOrderBySchemaJson.optional(),
});

export const ProductWarrantyQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProductWarrantyDistinctSchema.optional(),
  select: ProductWarrantyOwnSelectSchemaJson.optional(),
  omit: ProductWarrantyOmitSchemaJson.optional(),
  include: ProductWarrantyIncludeSchemaJson.optional(),
  where: ProductWarrantyWhereSchemaJson.optional(),
  orderBy: ProductWarrantyOrderBySchemaJson.optional(),
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

export const AttributeQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeQuerySchema
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

export const AttributeCompleteQueryOneSchema = z.object({
  select: AttributeSelectSchemaJson.optional(),
  omit: AttributeOmitSchemaJson.optional(),
  include: AttributeIncludeSchemaJson.optional(),
  where: AttributeWhereSchemaJson.optional(),
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

export const AttributeCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCompleteQueryOneSchema
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

export const AttributeCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AttributeCompleteQuerySchema
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

export const AttributeProjectionSchema = z.union([
  z.object({ omit: AttributeOmitSchemaJson }),
  z.object({ select: AttributeSelectSchemaJson }),
  z.object({ include: AttributeIncludeSchemaJson }),
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
  description: _description.optional(),
});

export const ProductOwnCreateSchema = z.object({
  isActive: _bool.optional(),
  uuid: _str.optional(),
  name: _name,
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
  description: _description.optional(),
});

export const AttributeOwnCreateSchema = z.object({
  variantId: _id,
  name: _name,
  value: _str,
});

export const CurrencyOwnCreateSchema = z.object({
  name: _name,
  code: _str,
  symbol: _str.optional(),
});

export const PriceLevelOwnCreateSchema = z.object({
  currencyId: _id,
  name: _name,
  description: _description.optional(),
  taxrate: _currency.optional(),
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
  description: _description.optional(),
  children: z
    .object({
      createMany: z.object({
        data: CategoryOwnCreateSchema.array(),
        skipDuplicates: _bool.optional(),
      }),
    })
    .optional(),
});

export const ProductCreateSchema = z.object({
  isActive: _bool.optional(),
  uuid: _str.optional(),
  name: _name,
  description: _description.optional(),
});

export const ProductCategoryCreateSchema = z.object({
  productId: _id,
  categoryId: _id,
});

export const VariantCreateSchema = z.object({
  uuid: _str.optional(),
  productId: _id,
  sku: _str,
  upc: _str,
  description: _description.optional(),
});

export const AttributeCreateSchema = z.object({
  variantId: _id,
  name: _name,
  value: _str,
});

export const CurrencyCreateSchema = z.object({
  name: _name,
  code: _str,
  symbol: _str.optional(),
});

export const PriceLevelCreateSchema = z.object({
  currencyId: _id,
  name: _name,
  description: _description.optional(),
  taxrate: _currency.optional(),
});

export const PriceCreateSchema = z.object({
  variantId: _id,
  priceLevelId: _id,
  price: _currency,
  cost: _currency,
  description: _description.optional(),
});

export const QuantityCreateSchema = z.object({
  variantId: _id,
  storeId: _id,
  quantity: _int,
  alertThreshold: _int.optional(),
});

export const SerialNumberCreateSchema = z.object({
  variantId: _id,
  storeId: _id,
  serialNumber: _str,
  inStock: _bool,
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
});

export const DiscountTargetCreateSchema = z.object({
  type: DiscountTargetTypeSchema,
  discountId: _id,
  storeId: _id.optional(),
  productId: _id.optional(),
  variantId: _id.optional(),
  priceLevelId: _id.optional(),
  categoryId: _id.optional(),
});

export const StoreCreateSchema = z.object({
  priceLevelId: _id,
  name: _name,
  description: _description.optional(),
});

export const WarrantyPolicyCreateSchema = z.object({
  name: _name,
  description: _description.optional(),
  duration: _int,
  durationUnit: TimeUnitSchema.optional(),
});

export const ProductWarrantyCreateSchema = z.object({
  productId: _id.optional(),
  variantId: _id.optional(),
  policyId: _id,
});

export const CategoryUpdateSchema = z.object({
  id: _id.optional(),
  parentId: _id.optional(),
  name: _name.optional(),
  description: _description.optional(),
  children: z
    .object({ connect: _idObject.optional(), disconnect: _idObject.optional() })
    .optional(),
});

export const ProductUpdateSchema = z.object({
  id: _id.optional(),
  createdAt: _date.optional(),
  updatedAt: _date.optional(),
  isActive: _bool.optional(),
  uuid: _str.optional(),
  name: _name.optional(),
  description: _description.optional(),
});

export const ProductCategoryUpdateSchema = z.object({
  id: _id.optional(),
  productId: _id.optional(),
  categoryId: _id.optional(),
});

export const VariantUpdateSchema = z.object({
  id: _id.optional(),
  uuid: _str.optional(),
  productId: _id.optional(),
  sku: _str.optional(),
  upc: _str.optional(),
  description: _description.optional(),
});

export const AttributeUpdateSchema = z.object({
  id: _id.optional(),
  variantId: _id.optional(),
  name: _name.optional(),
  value: _str.optional(),
});

export const CurrencyUpdateSchema = z.object({
  id: _id.optional(),
  name: _name.optional(),
  code: _str.optional(),
  symbol: _str.optional(),
});

export const PriceLevelUpdateSchema = z.object({
  id: _id.optional(),
  currencyId: _id.optional(),
  name: _name.optional(),
  description: _description.optional(),
  taxrate: _currency.optional(),
});

export const PriceUpdateSchema = z.object({
  id: _id.optional(),
  variantId: _id.optional(),
  priceLevelId: _id.optional(),
  price: _currency.optional(),
  cost: _currency.optional(),
  description: _description.optional(),
});

export const QuantityUpdateSchema = z.object({
  id: _id.optional(),
  variantId: _id.optional(),
  storeId: _id.optional(),
  quantity: _int.optional(),
  alertThreshold: _int.optional(),
});

export const SerialNumberUpdateSchema = z.object({
  id: _id.optional(),
  variantId: _id.optional(),
  storeId: _id.optional(),
  serialNumber: _str.optional(),
  inStock: _bool.optional(),
});

export const DiscountUpdateSchema = z.object({
  id: _id.optional(),
  code: _str.optional(),
  type: DiscountTypeSchema.optional(),
  valueType: ValueTypeSchema.optional(),
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
  id: _id.optional(),
  type: DiscountTargetTypeSchema.optional(),
  discountId: _id.optional(),
  storeId: _id.optional(),
  productId: _id.optional(),
  variantId: _id.optional(),
  priceLevelId: _id.optional(),
  categoryId: _id.optional(),
});

export const StoreUpdateSchema = z.object({
  id: _id.optional(),
  priceLevelId: _id.optional(),
  name: _name.optional(),
  description: _description.optional(),
});

export const WarrantyPolicyUpdateSchema = z.object({
  id: _id.optional(),
  name: _name.optional(),
  description: _description.optional(),
  duration: _int.optional(),
  durationUnit: TimeUnitSchema.optional(),
});

export const ProductWarrantyUpdateSchema = z.object({
  id: _id.optional(),
  productId: _id.optional(),
  variantId: _id.optional(),
  policyId: _id.optional(),
});

export type CategoryDistinct = z.infer<typeof CategoryDistinctSchema>;

export type ProductDistinct = z.infer<typeof ProductDistinctSchema>;

export type ProductCategoryDistinct = z.infer<
  typeof ProductCategoryDistinctSchema
>;

export type VariantDistinct = z.infer<typeof VariantDistinctSchema>;

export type AttributeDistinct = z.infer<typeof AttributeDistinctSchema>;

export type CurrencyDistinct = z.infer<typeof CurrencyDistinctSchema>;

export type PriceLevelDistinct = z.infer<typeof PriceLevelDistinctSchema>;

export type PriceDistinct = z.infer<typeof PriceDistinctSchema>;

export type QuantityDistinct = z.infer<typeof QuantityDistinctSchema>;

export type SerialNumberDistinct = z.infer<typeof SerialNumberDistinctSchema>;

export type DiscountDistinct = z.infer<typeof DiscountDistinctSchema>;

export type DiscountTargetDistinct = z.infer<
  typeof DiscountTargetDistinctSchema
>;

export type StoreDistinct = z.infer<typeof StoreDistinctSchema>;

export type WarrantyPolicyDistinct = z.infer<
  typeof WarrantyPolicyDistinctSchema
>;

export type ProductWarrantyDistinct = z.infer<
  typeof ProductWarrantyDistinctSchema
>;

export type CategoryOwnWhere = z.infer<typeof CategoryOwnWhereSchema>;

export type ProductOwnWhere = z.infer<typeof ProductOwnWhereSchema>;

export type ProductCategoryOwnWhere = z.infer<
  typeof ProductCategoryOwnWhereSchema
>;

export type VariantOwnWhere = z.infer<typeof VariantOwnWhereSchema>;

export type AttributeOwnWhere = z.infer<typeof AttributeOwnWhereSchema>;

export type CurrencyOwnWhere = z.infer<typeof CurrencyOwnWhereSchema>;

export type PriceLevelOwnWhere = z.infer<typeof PriceLevelOwnWhereSchema>;

export type PriceOwnWhere = z.infer<typeof PriceOwnWhereSchema>;

export type QuantityOwnWhere = z.infer<typeof QuantityOwnWhereSchema>;

export type SerialNumberOwnWhere = z.infer<typeof SerialNumberOwnWhereSchema>;

export type DiscountOwnWhere = z.infer<typeof DiscountOwnWhereSchema>;

export type DiscountTargetOwnWhere = z.infer<
  typeof DiscountTargetOwnWhereSchema
>;

export type StoreOwnWhere = z.infer<typeof StoreOwnWhereSchema>;

export type WarrantyPolicyOwnWhere = z.infer<
  typeof WarrantyPolicyOwnWhereSchema
>;

export type ProductWarrantyOwnWhere = z.infer<
  typeof ProductWarrantyOwnWhereSchema
>;

export type CategoryWhere = z.infer<typeof CategoryWhereSchema>;

export type ProductWhere = z.infer<typeof ProductWhereSchema>;

export type ProductCategoryWhere = z.infer<typeof ProductCategoryWhereSchema>;

export type VariantWhere = z.infer<typeof VariantWhereSchema>;

export type AttributeWhere = z.infer<typeof AttributeWhereSchema>;

export type CurrencyWhere = z.infer<typeof CurrencyWhereSchema>;

export type PriceLevelWhere = z.infer<typeof PriceLevelWhereSchema>;

export type PriceWhere = z.infer<typeof PriceWhereSchema>;

export type QuantityWhere = z.infer<typeof QuantityWhereSchema>;

export type SerialNumberWhere = z.infer<typeof SerialNumberWhereSchema>;

export type DiscountWhere = z.infer<typeof DiscountWhereSchema>;

export type DiscountTargetWhere = z.infer<typeof DiscountTargetWhereSchema>;

export type StoreWhere = z.infer<typeof StoreWhereSchema>;

export type WarrantyPolicyWhere = z.infer<typeof WarrantyPolicyWhereSchema>;

export type ProductWarrantyWhere = z.infer<typeof ProductWarrantyWhereSchema>;

export type CategoryOwnOrderBy = z.infer<typeof CategoryOwnOrderBySchema>;

export type ProductOwnOrderBy = z.infer<typeof ProductOwnOrderBySchema>;

export type ProductCategoryOwnOrderBy = z.infer<
  typeof ProductCategoryOwnOrderBySchema
>;

export type VariantOwnOrderBy = z.infer<typeof VariantOwnOrderBySchema>;

export type AttributeOwnOrderBy = z.infer<typeof AttributeOwnOrderBySchema>;

export type CurrencyOwnOrderBy = z.infer<typeof CurrencyOwnOrderBySchema>;

export type PriceLevelOwnOrderBy = z.infer<typeof PriceLevelOwnOrderBySchema>;

export type PriceOwnOrderBy = z.infer<typeof PriceOwnOrderBySchema>;

export type QuantityOwnOrderBy = z.infer<typeof QuantityOwnOrderBySchema>;

export type SerialNumberOwnOrderBy = z.infer<
  typeof SerialNumberOwnOrderBySchema
>;

export type DiscountOwnOrderBy = z.infer<typeof DiscountOwnOrderBySchema>;

export type DiscountTargetOwnOrderBy = z.infer<
  typeof DiscountTargetOwnOrderBySchema
>;

export type StoreOwnOrderBy = z.infer<typeof StoreOwnOrderBySchema>;

export type WarrantyPolicyOwnOrderBy = z.infer<
  typeof WarrantyPolicyOwnOrderBySchema
>;

export type ProductWarrantyOwnOrderBy = z.infer<
  typeof ProductWarrantyOwnOrderBySchema
>;

export type CategoryOrderBy = z.infer<typeof CategoryOrderBySchema>;

export type ProductOrderBy = z.infer<typeof ProductOrderBySchema>;

export type ProductCategoryOrderBy = z.infer<
  typeof ProductCategoryOrderBySchema
>;

export type VariantOrderBy = z.infer<typeof VariantOrderBySchema>;

export type AttributeOrderBy = z.infer<typeof AttributeOrderBySchema>;

export type CurrencyOrderBy = z.infer<typeof CurrencyOrderBySchema>;

export type PriceLevelOrderBy = z.infer<typeof PriceLevelOrderBySchema>;

export type PriceOrderBy = z.infer<typeof PriceOrderBySchema>;

export type QuantityOrderBy = z.infer<typeof QuantityOrderBySchema>;

export type SerialNumberOrderBy = z.infer<typeof SerialNumberOrderBySchema>;

export type DiscountOrderBy = z.infer<typeof DiscountOrderBySchema>;

export type DiscountTargetOrderBy = z.infer<typeof DiscountTargetOrderBySchema>;

export type StoreOrderBy = z.infer<typeof StoreOrderBySchema>;

export type WarrantyPolicyOrderBy = z.infer<typeof WarrantyPolicyOrderBySchema>;

export type ProductWarrantyOrderBy = z.infer<
  typeof ProductWarrantyOrderBySchema
>;

export type CategoryOwnSelect = z.infer<typeof CategoryOwnSelectSchema>;

export type ProductOwnSelect = z.infer<typeof ProductOwnSelectSchema>;

export type ProductCategoryOwnSelect = z.infer<
  typeof ProductCategoryOwnSelectSchema
>;

export type VariantOwnSelect = z.infer<typeof VariantOwnSelectSchema>;

export type AttributeOwnSelect = z.infer<typeof AttributeOwnSelectSchema>;

export type CurrencyOwnSelect = z.infer<typeof CurrencyOwnSelectSchema>;

export type PriceLevelOwnSelect = z.infer<typeof PriceLevelOwnSelectSchema>;

export type PriceOwnSelect = z.infer<typeof PriceOwnSelectSchema>;

export type QuantityOwnSelect = z.infer<typeof QuantityOwnSelectSchema>;

export type SerialNumberOwnSelect = z.infer<typeof SerialNumberOwnSelectSchema>;

export type DiscountOwnSelect = z.infer<typeof DiscountOwnSelectSchema>;

export type DiscountTargetOwnSelect = z.infer<
  typeof DiscountTargetOwnSelectSchema
>;

export type StoreOwnSelect = z.infer<typeof StoreOwnSelectSchema>;

export type WarrantyPolicyOwnSelect = z.infer<
  typeof WarrantyPolicyOwnSelectSchema
>;

export type ProductWarrantyOwnSelect = z.infer<
  typeof ProductWarrantyOwnSelectSchema
>;

export type CategorySelect = z.infer<typeof CategorySelectSchema>;

export type ProductSelect = z.infer<typeof ProductSelectSchema>;

export type ProductCategorySelect = z.infer<typeof ProductCategorySelectSchema>;

export type VariantSelect = z.infer<typeof VariantSelectSchema>;

export type AttributeSelect = z.infer<typeof AttributeSelectSchema>;

export type CurrencySelect = z.infer<typeof CurrencySelectSchema>;

export type PriceLevelSelect = z.infer<typeof PriceLevelSelectSchema>;

export type PriceSelect = z.infer<typeof PriceSelectSchema>;

export type QuantitySelect = z.infer<typeof QuantitySelectSchema>;

export type SerialNumberSelect = z.infer<typeof SerialNumberSelectSchema>;

export type DiscountSelect = z.infer<typeof DiscountSelectSchema>;

export type DiscountTargetSelect = z.infer<typeof DiscountTargetSelectSchema>;

export type StoreSelect = z.infer<typeof StoreSelectSchema>;

export type WarrantyPolicySelect = z.infer<typeof WarrantyPolicySelectSchema>;

export type ProductWarrantySelect = z.infer<typeof ProductWarrantySelectSchema>;

export type CategoryOmit = z.infer<typeof CategoryOmitSchema>;

export type ProductOmit = z.infer<typeof ProductOmitSchema>;

export type ProductCategoryOmit = z.infer<typeof ProductCategoryOmitSchema>;

export type VariantOmit = z.infer<typeof VariantOmitSchema>;

export type AttributeOmit = z.infer<typeof AttributeOmitSchema>;

export type CurrencyOmit = z.infer<typeof CurrencyOmitSchema>;

export type PriceLevelOmit = z.infer<typeof PriceLevelOmitSchema>;

export type PriceOmit = z.infer<typeof PriceOmitSchema>;

export type QuantityOmit = z.infer<typeof QuantityOmitSchema>;

export type SerialNumberOmit = z.infer<typeof SerialNumberOmitSchema>;

export type DiscountOmit = z.infer<typeof DiscountOmitSchema>;

export type DiscountTargetOmit = z.infer<typeof DiscountTargetOmitSchema>;

export type StoreOmit = z.infer<typeof StoreOmitSchema>;

export type WarrantyPolicyOmit = z.infer<typeof WarrantyPolicyOmitSchema>;

export type ProductWarrantyOmit = z.infer<typeof ProductWarrantyOmitSchema>;

export type CategoryOwnQueryOne = z.infer<typeof CategoryOwnQueryOneSchema>;

export type ProductOwnQueryOne = z.infer<typeof ProductOwnQueryOneSchema>;

export type ProductCategoryOwnQueryOne = z.infer<
  typeof ProductCategoryOwnQueryOneSchema
>;

export type VariantOwnQueryOne = z.infer<typeof VariantOwnQueryOneSchema>;

export type AttributeOwnQueryOne = z.infer<typeof AttributeOwnQueryOneSchema>;

export type CurrencyOwnQueryOne = z.infer<typeof CurrencyOwnQueryOneSchema>;

export type PriceLevelOwnQueryOne = z.infer<typeof PriceLevelOwnQueryOneSchema>;

export type PriceOwnQueryOne = z.infer<typeof PriceOwnQueryOneSchema>;

export type QuantityOwnQueryOne = z.infer<typeof QuantityOwnQueryOneSchema>;

export type SerialNumberOwnQueryOne = z.infer<
  typeof SerialNumberOwnQueryOneSchema
>;

export type DiscountOwnQueryOne = z.infer<typeof DiscountOwnQueryOneSchema>;

export type DiscountTargetOwnQueryOne = z.infer<
  typeof DiscountTargetOwnQueryOneSchema
>;

export type StoreOwnQueryOne = z.infer<typeof StoreOwnQueryOneSchema>;

export type WarrantyPolicyOwnQueryOne = z.infer<
  typeof WarrantyPolicyOwnQueryOneSchema
>;

export type ProductWarrantyOwnQueryOne = z.infer<
  typeof ProductWarrantyOwnQueryOneSchema
>;

export type CategoryOwnQuery = z.infer<typeof CategoryOwnQuerySchema>;

export type ProductOwnQuery = z.infer<typeof ProductOwnQuerySchema>;

export type ProductCategoryOwnQuery = z.infer<
  typeof ProductCategoryOwnQuerySchema
>;

export type VariantOwnQuery = z.infer<typeof VariantOwnQuerySchema>;

export type AttributeOwnQuery = z.infer<typeof AttributeOwnQuerySchema>;

export type CurrencyOwnQuery = z.infer<typeof CurrencyOwnQuerySchema>;

export type PriceLevelOwnQuery = z.infer<typeof PriceLevelOwnQuerySchema>;

export type PriceOwnQuery = z.infer<typeof PriceOwnQuerySchema>;

export type QuantityOwnQuery = z.infer<typeof QuantityOwnQuerySchema>;

export type SerialNumberOwnQuery = z.infer<typeof SerialNumberOwnQuerySchema>;

export type DiscountOwnQuery = z.infer<typeof DiscountOwnQuerySchema>;

export type DiscountTargetOwnQuery = z.infer<
  typeof DiscountTargetOwnQuerySchema
>;

export type StoreOwnQuery = z.infer<typeof StoreOwnQuerySchema>;

export type WarrantyPolicyOwnQuery = z.infer<
  typeof WarrantyPolicyOwnQuerySchema
>;

export type ProductWarrantyOwnQuery = z.infer<
  typeof ProductWarrantyOwnQuerySchema
>;

export type CategoryInclude = z.infer<typeof CategoryIncludeSchema>;

export type ProductInclude = z.infer<typeof ProductIncludeSchema>;

export type ProductCategoryInclude = z.infer<
  typeof ProductCategoryIncludeSchema
>;

export type VariantInclude = z.infer<typeof VariantIncludeSchema>;

export type AttributeInclude = z.infer<typeof AttributeIncludeSchema>;

export type CurrencyInclude = z.infer<typeof CurrencyIncludeSchema>;

export type PriceLevelInclude = z.infer<typeof PriceLevelIncludeSchema>;

export type PriceInclude = z.infer<typeof PriceIncludeSchema>;

export type QuantityInclude = z.infer<typeof QuantityIncludeSchema>;

export type SerialNumberInclude = z.infer<typeof SerialNumberIncludeSchema>;

export type DiscountInclude = z.infer<typeof DiscountIncludeSchema>;

export type DiscountTargetInclude = z.infer<typeof DiscountTargetIncludeSchema>;

export type StoreInclude = z.infer<typeof StoreIncludeSchema>;

export type WarrantyPolicyInclude = z.infer<typeof WarrantyPolicyIncludeSchema>;

export type ProductWarrantyInclude = z.infer<
  typeof ProductWarrantyIncludeSchema
>;

export type CategoryCompleteSelect = z.infer<
  typeof CategoryCompleteSelectSchema
>;

export type ProductCompleteSelect = z.infer<typeof ProductCompleteSelectSchema>;

export type ProductCategoryCompleteSelect = z.infer<
  typeof ProductCategoryCompleteSelectSchema
>;

export type VariantCompleteSelect = z.infer<typeof VariantCompleteSelectSchema>;

export type AttributeCompleteSelect = z.infer<
  typeof AttributeCompleteSelectSchema
>;

export type CurrencyCompleteSelect = z.infer<
  typeof CurrencyCompleteSelectSchema
>;

export type PriceLevelCompleteSelect = z.infer<
  typeof PriceLevelCompleteSelectSchema
>;

export type PriceCompleteSelect = z.infer<typeof PriceCompleteSelectSchema>;

export type QuantityCompleteSelect = z.infer<
  typeof QuantityCompleteSelectSchema
>;

export type SerialNumberCompleteSelect = z.infer<
  typeof SerialNumberCompleteSelectSchema
>;

export type DiscountCompleteSelect = z.infer<
  typeof DiscountCompleteSelectSchema
>;

export type DiscountTargetCompleteSelect = z.infer<
  typeof DiscountTargetCompleteSelectSchema
>;

export type StoreCompleteSelect = z.infer<typeof StoreCompleteSelectSchema>;

export type WarrantyPolicyCompleteSelect = z.infer<
  typeof WarrantyPolicyCompleteSelectSchema
>;

export type ProductWarrantyCompleteSelect = z.infer<
  typeof ProductWarrantyCompleteSelectSchema
>;

export type CategoryQuery = z.infer<typeof CategoryQuerySchema>;

export type ProductQuery = z.infer<typeof ProductQuerySchema>;

export type ProductCategoryQuery = z.infer<typeof ProductCategoryQuerySchema>;

export type VariantQuery = z.infer<typeof VariantQuerySchema>;

export type AttributeQuery = z.infer<typeof AttributeQuerySchema>;

export type CurrencyQuery = z.infer<typeof CurrencyQuerySchema>;

export type PriceLevelQuery = z.infer<typeof PriceLevelQuerySchema>;

export type PriceQuery = z.infer<typeof PriceQuerySchema>;

export type QuantityQuery = z.infer<typeof QuantityQuerySchema>;

export type SerialNumberQuery = z.infer<typeof SerialNumberQuerySchema>;

export type DiscountQuery = z.infer<typeof DiscountQuerySchema>;

export type DiscountTargetQuery = z.infer<typeof DiscountTargetQuerySchema>;

export type StoreQuery = z.infer<typeof StoreQuerySchema>;

export type WarrantyPolicyQuery = z.infer<typeof WarrantyPolicyQuerySchema>;

export type ProductWarrantyQuery = z.infer<typeof ProductWarrantyQuerySchema>;

export type CategoryCompleteQueryOne = z.infer<
  typeof CategoryCompleteQueryOneSchema
>;

export type ProductCompleteQueryOne = z.infer<
  typeof ProductCompleteQueryOneSchema
>;

export type ProductCategoryCompleteQueryOne = z.infer<
  typeof ProductCategoryCompleteQueryOneSchema
>;

export type VariantCompleteQueryOne = z.infer<
  typeof VariantCompleteQueryOneSchema
>;

export type AttributeCompleteQueryOne = z.infer<
  typeof AttributeCompleteQueryOneSchema
>;

export type CurrencyCompleteQueryOne = z.infer<
  typeof CurrencyCompleteQueryOneSchema
>;

export type PriceLevelCompleteQueryOne = z.infer<
  typeof PriceLevelCompleteQueryOneSchema
>;

export type PriceCompleteQueryOne = z.infer<typeof PriceCompleteQueryOneSchema>;

export type QuantityCompleteQueryOne = z.infer<
  typeof QuantityCompleteQueryOneSchema
>;

export type SerialNumberCompleteQueryOne = z.infer<
  typeof SerialNumberCompleteQueryOneSchema
>;

export type DiscountCompleteQueryOne = z.infer<
  typeof DiscountCompleteQueryOneSchema
>;

export type DiscountTargetCompleteQueryOne = z.infer<
  typeof DiscountTargetCompleteQueryOneSchema
>;

export type StoreCompleteQueryOne = z.infer<typeof StoreCompleteQueryOneSchema>;

export type WarrantyPolicyCompleteQueryOne = z.infer<
  typeof WarrantyPolicyCompleteQueryOneSchema
>;

export type ProductWarrantyCompleteQueryOne = z.infer<
  typeof ProductWarrantyCompleteQueryOneSchema
>;

export type CategoryCompleteQuery = z.infer<typeof CategoryCompleteQuerySchema>;

export type ProductCompleteQuery = z.infer<typeof ProductCompleteQuerySchema>;

export type ProductCategoryCompleteQuery = z.infer<
  typeof ProductCategoryCompleteQuerySchema
>;

export type VariantCompleteQuery = z.infer<typeof VariantCompleteQuerySchema>;

export type AttributeCompleteQuery = z.infer<
  typeof AttributeCompleteQuerySchema
>;

export type CurrencyCompleteQuery = z.infer<typeof CurrencyCompleteQuerySchema>;

export type PriceLevelCompleteQuery = z.infer<
  typeof PriceLevelCompleteQuerySchema
>;

export type PriceCompleteQuery = z.infer<typeof PriceCompleteQuerySchema>;

export type QuantityCompleteQuery = z.infer<typeof QuantityCompleteQuerySchema>;

export type SerialNumberCompleteQuery = z.infer<
  typeof SerialNumberCompleteQuerySchema
>;

export type DiscountCompleteQuery = z.infer<typeof DiscountCompleteQuerySchema>;

export type DiscountTargetCompleteQuery = z.infer<
  typeof DiscountTargetCompleteQuerySchema
>;

export type StoreCompleteQuery = z.infer<typeof StoreCompleteQuerySchema>;

export type WarrantyPolicyCompleteQuery = z.infer<
  typeof WarrantyPolicyCompleteQuerySchema
>;

export type ProductWarrantyCompleteQuery = z.infer<
  typeof ProductWarrantyCompleteQuerySchema
>;

export type CategoryProjection = z.infer<typeof CategoryProjectionSchema>;

export type ProductProjection = z.infer<typeof ProductProjectionSchema>;

export type ProductCategoryProjection = z.infer<
  typeof ProductCategoryProjectionSchema
>;

export type VariantProjection = z.infer<typeof VariantProjectionSchema>;

export type AttributeProjection = z.infer<typeof AttributeProjectionSchema>;

export type CurrencyProjection = z.infer<typeof CurrencyProjectionSchema>;

export type PriceLevelProjection = z.infer<typeof PriceLevelProjectionSchema>;

export type PriceProjection = z.infer<typeof PriceProjectionSchema>;

export type QuantityProjection = z.infer<typeof QuantityProjectionSchema>;

export type SerialNumberProjection = z.infer<
  typeof SerialNumberProjectionSchema
>;

export type DiscountProjection = z.infer<typeof DiscountProjectionSchema>;

export type DiscountTargetProjection = z.infer<
  typeof DiscountTargetProjectionSchema
>;

export type StoreProjection = z.infer<typeof StoreProjectionSchema>;

export type WarrantyPolicyProjection = z.infer<
  typeof WarrantyPolicyProjectionSchema
>;

export type ProductWarrantyProjection = z.infer<
  typeof ProductWarrantyProjectionSchema
>;

export type CategoryOwnCreate = z.infer<typeof CategoryOwnCreateSchema>;

export type ProductOwnCreate = z.infer<typeof ProductOwnCreateSchema>;

export type ProductCategoryOwnCreate = z.infer<
  typeof ProductCategoryOwnCreateSchema
>;

export type VariantOwnCreate = z.infer<typeof VariantOwnCreateSchema>;

export type AttributeOwnCreate = z.infer<typeof AttributeOwnCreateSchema>;

export type CurrencyOwnCreate = z.infer<typeof CurrencyOwnCreateSchema>;

export type PriceLevelOwnCreate = z.infer<typeof PriceLevelOwnCreateSchema>;

export type PriceOwnCreate = z.infer<typeof PriceOwnCreateSchema>;

export type QuantityOwnCreate = z.infer<typeof QuantityOwnCreateSchema>;

export type SerialNumberOwnCreate = z.infer<typeof SerialNumberOwnCreateSchema>;

export type DiscountOwnCreate = z.infer<typeof DiscountOwnCreateSchema>;

export type DiscountTargetOwnCreate = z.infer<
  typeof DiscountTargetOwnCreateSchema
>;

export type StoreOwnCreate = z.infer<typeof StoreOwnCreateSchema>;

export type WarrantyPolicyOwnCreate = z.infer<
  typeof WarrantyPolicyOwnCreateSchema
>;

export type ProductWarrantyOwnCreate = z.infer<
  typeof ProductWarrantyOwnCreateSchema
>;

export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;

export type ProductCreate = z.infer<typeof ProductCreateSchema>;

export type ProductCategoryCreate = z.infer<typeof ProductCategoryCreateSchema>;

export type VariantCreate = z.infer<typeof VariantCreateSchema>;

export type AttributeCreate = z.infer<typeof AttributeCreateSchema>;

export type CurrencyCreate = z.infer<typeof CurrencyCreateSchema>;

export type PriceLevelCreate = z.infer<typeof PriceLevelCreateSchema>;

export type PriceCreate = z.infer<typeof PriceCreateSchema>;

export type QuantityCreate = z.infer<typeof QuantityCreateSchema>;

export type SerialNumberCreate = z.infer<typeof SerialNumberCreateSchema>;

export type DiscountCreate = z.infer<typeof DiscountCreateSchema>;

export type DiscountTargetCreate = z.infer<typeof DiscountTargetCreateSchema>;

export type StoreCreate = z.infer<typeof StoreCreateSchema>;

export type WarrantyPolicyCreate = z.infer<typeof WarrantyPolicyCreateSchema>;

export type ProductWarrantyCreate = z.infer<typeof ProductWarrantyCreateSchema>;

export type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;

export type ProductUpdate = z.infer<typeof ProductUpdateSchema>;

export type ProductCategoryUpdate = z.infer<typeof ProductCategoryUpdateSchema>;

export type VariantUpdate = z.infer<typeof VariantUpdateSchema>;

export type AttributeUpdate = z.infer<typeof AttributeUpdateSchema>;

export type CurrencyUpdate = z.infer<typeof CurrencyUpdateSchema>;

export type PriceLevelUpdate = z.infer<typeof PriceLevelUpdateSchema>;

export type PriceUpdate = z.infer<typeof PriceUpdateSchema>;

export type QuantityUpdate = z.infer<typeof QuantityUpdateSchema>;

export type SerialNumberUpdate = z.infer<typeof SerialNumberUpdateSchema>;

export type DiscountUpdate = z.infer<typeof DiscountUpdateSchema>;

export type DiscountTargetUpdate = z.infer<typeof DiscountTargetUpdateSchema>;

export type StoreUpdate = z.infer<typeof StoreUpdateSchema>;

export type WarrantyPolicyUpdate = z.infer<typeof WarrantyPolicyUpdateSchema>;

export type ProductWarrantyUpdate = z.infer<typeof ProductWarrantyUpdateSchema>;

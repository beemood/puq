import z from 'zod';

/**
 * Try to parse json value if it is a valid json or return it.
 */
export function _parseJsonOrReturn(value: any) {
  if (typeof value === 'string') {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  return value;
}

/**
 * Coerced integer schema
 */
export const _int = z.coerce.number().int();

/**
 * String schema
 */
export const _str = z.string();

/**
 * Coerced number/decimal schema
 */
export const _num = z.coerce.number();

/**
 * Coerced boolean schema
 */
export const _bool = z.coerce.boolean();

/**
 * Date schema
 */
export const _date = z.iso.date();

/**
 * Datetime schema
 */
export const _datetime = z.iso.datetime();

/**
 * Short string schema ((maximum 30 characters))
 */
export const _shortText = z.string().max(30);

/**
 * Long string schema (maximum 2000 characters)
 */
export const _longText = z.string().max(2000);

/**
 * Coerced id field schema
 */
export const _id = z.coerce.number().int().min(1);

/**
 * Coerced id object schema
 */
export const _idObject = z.object({
  id: _id,
});

/**
 * Coerced currency schema
 */
export const _currency = z.coerce.number().min(0);

/**
 * Coerced positive integer schema
 */
export const _positiveInt = z.coerce.number().int().min(0);

/**
 * Phone country code schema
 */
export const _phoneCountryCode = z.string().regex(/^\+[0-9]{1,5}$/);

/**
 * Phone schema
 */
export const _phone = z
  .string()
  .regex(/^[0-9]{3} [0-9]{3} [0-9]{2}-[0-9]{2}$/, {
    error: 'Invalid phone format',
  });

/**
 * Name schema with minimum 3 and maximum 30 characters long constraints
 */
export const _name = z.string().min(3).max(30);

/**
 * Slug schema
 */
export const _slug = z
  .string()
  .min(3)
  .max(30)
  .regex(/[0-9a-z-]{0,30}/, {
    error: 'Slug must contain only lowercase letters, numbers, and dash.',
  });

/**
 * Description schema
 */
export const _description = z.string().max(1000);

/**
 * Email schemea
 */
export const _email = z.string().max(1000);

/**
 * Url schema
 */
export const _url = z.url();

/**
 * Strong password schema
 */
export const _password = z
  .string()
  .min(6)
  .regex(/[A-Z]{1,}/, { error: 'must contain at least one upper-case letter' })
  .regex(/[a-z]{1,}/, { error: 'must contain at least one lower-case letter' })
  .regex(/[0-9]{1,}/, { error: 'must contain at least one number' })
  .regex(/[~!@#$%^&*()_+{}":'<>?]{1,}/, {
    error: 'must contain at least one special character',
  });

/**
 * projection field schema (optional coerced boolean schema)
 */
export const _select = z.coerce.boolean().optional();

/**
 * Order schema to define order direction either "asc" or "desc"
 */
export const _direction = z.enum(['asc', 'desc']).optional();

/**
 * Special object schema with _count property to order by relation count
 */
export const _orderByCount = z.object({ _count: _direction }).optional();

/**
 * Pagination schema for **take/limit** option
 */
export const _take = _int.min(1).default(20).optional();

/**
 * Pagination schema for  **skip/offset** option
 */
export const _skip = _int.min(0).default(0).optional();

/**
 * Json value schema
 */
export const _json = z.preprocess(_parseJsonOrReturn, z.any());

/**
 * {@link _boolFilter}
 */
export const _0_boolFilter = z.object({
  equals: _bool.optional(),
});

/**
 * {@link _boolFilter}
 */
export const _1_boolFilter = z.object({
  equals: _bool.optional(),
  not: _bool.or(_0_boolFilter).optional(),
});

/**
 * Filter schema to query boolean value
 */
export const _boolFilter = _bool.or(_1_boolFilter);

/**
 * {@link _intFilter}
 */
export const _0_intFilter = z.object({
  equals: _int.optional(),
  gt: _int.optional(),
  gte: _int.optional(),
  lt: _int.optional(),
  lte: _int.optional(),
  in: _int.array().optional(),
  notIn: _int.array().optional(),
});

/**
 * {@link _intFilter}
 */
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

/**
 * Filter schema to query integer value
 */
export const _intFilter = _int.or(_1_intFilter);

/**
 * {@link _numFilter}
 */
export const _0_numFilter = z.object({
  equals: _num.optional(),
  gt: _num.optional(),
  gte: _num.optional(),
  lt: _num.optional(),
  lte: _num.optional(),
  in: _num.array().optional(),
  notIn: _num.array().optional(),
});

/**
 * {@link _numFilter}
 */
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

/**
 * Filter schema to query number value
 */
export const _numFilter = _num.or(_1_numFilter);

/**
 * {@link _dateFilter}
 */
export const _0_dateFilter = z.object({
  equals: _date.optional(),
  gt: _date.optional(),
  gte: _date.optional(),
  lt: _date.optional(),
  lte: _date.optional(),
  in: _date.array().optional(),
  notIn: _date.array().optional(),
});

/**
 * {@link _dateFilter}
 */
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

/**
 * Filter schema to query date value
 */
export const _dateFilter = _date.or(_1_dateFilter);

/**
 * Schema to define string query mode would be 'default' or 'insensitive' mode
 */
export const _strMode = z.enum(['default', 'insensitive']);

/**
 * {@link _strFilter}
 */
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

/**
 * {@link _strFilter}
 */
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

/**
 * Filter schema to query string value
 */
export const _strFilter = _str.or(_1_strFilter);

/**
 * Filter schema to query json value
 */
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

/**
 * Filter schema to query a list of strings
 */
export const _strArrayFilter = z.object({
  equals: _str.array().optional(),
  has: _str.optional(),
  hasEvery: _str.array().optional(),
  hasSome: _str.array().optional(),
  isEmpty: _bool.optional(),
});

/**
 * Filter schema to query a list of numbers
 */
export const _numArrayFilter = z.object({
  equals: _num.array().optional(),
  has: _num.optional(),
  hasEvery: _num.array().optional(),
  hasSome: _num.array().optional(),
  isEmpty: _bool.optional(),
});

/**
 * Filter schema to query a list of integer values
 */
export const _intArrayFilter = z.object({
  equals: _int.array().optional(),
  has: _int.optional(),
  hasEvery: _int.array().optional(),
  hasSome: _int.array().optional(),
  isEmpty: _bool.optional(),
});

/**
 * Fileter scehma to query list of dates
 */
export const _dateArrayFilter = z.object({
  equals: _date.array().optional(),
  has: _date.optional(),
  hasEvery: _date.array().optional(),
  hasSome: _date.array().optional(),
  isEmpty: _bool.optional(),
});

export const Pagination = z.object({
  take: _take,
  skip: _skip,
});

export type Pagination = z.infer<typeof Pagination>;

export const DiscountTargetType = z.enum([
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

export const ValueType = z.enum(['PERCENT', 'FIXED']);

export const DiscountType = z.enum([
  'SIMPLE',
  'VOLUME',
  'FREE_SHIPPING',
  'ORDER_TOTAL',
]);

export const TimeUnit = z.enum([
  'SECOND',
  'MINUTE',
  'HOUR',
  'DAY',
  'MONTH',
  'YEAR',
  'DECADE',
  'LIFE_TIME',
]);

export const DiscountTargetTypeFilter = DiscountTargetType.or(
  z.object({
    equals: DiscountTargetType.optional(),
    in: DiscountTargetType.array().optional(),
    notIn: DiscountTargetType.array().optional(),
    not: z
      .object({
        equals: DiscountTargetType.optional(),
        in: DiscountTargetType.array().optional(),
        notIn: DiscountTargetType.array().optional(),
      })
      .optional(),
  })
);

export const ValueTypeFilter = ValueType.or(
  z.object({
    equals: ValueType.optional(),
    in: ValueType.array().optional(),
    notIn: ValueType.array().optional(),
    not: z
      .object({
        equals: ValueType.optional(),
        in: ValueType.array().optional(),
        notIn: ValueType.array().optional(),
      })
      .optional(),
  })
);

export const DiscountTypeFilter = DiscountType.or(
  z.object({
    equals: DiscountType.optional(),
    in: DiscountType.array().optional(),
    notIn: DiscountType.array().optional(),
    not: z
      .object({
        equals: DiscountType.optional(),
        in: DiscountType.array().optional(),
        notIn: DiscountType.array().optional(),
      })
      .optional(),
  })
);

export const TimeUnitFilter = TimeUnit.or(
  z.object({
    equals: TimeUnit.optional(),
    in: TimeUnit.array().optional(),
    notIn: TimeUnit.array().optional(),
    not: z
      .object({
        equals: TimeUnit.optional(),
        in: TimeUnit.array().optional(),
        notIn: TimeUnit.array().optional(),
      })
      .optional(),
  })
);

export const CategoryField = z.enum(['id', 'parentId', 'name', 'description']);

export const CategoryDistinctSelect = CategoryField.array().length(1);

export const ProductField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isActive',
  'uuid',
  'name',
  'description',
]);

export const ProductDistinctSelect = ProductField.array().length(1);

export const ProductCategoryField = z.enum(['id', 'productId', 'categoryId']);

export const ProductCategoryDistinctSelect =
  ProductCategoryField.array().length(1);

export const VariantField = z.enum([
  'id',
  'uuid',
  'productId',
  'sku',
  'upc',
  'description',
]);

export const VariantDistinctSelect = VariantField.array().length(1);

export const AttributeField = z.enum(['id', 'variantId', 'name', 'value']);

export const AttributeDistinctSelect = AttributeField.array().length(1);

export const CurrencyField = z.enum(['id', 'name', 'code', 'symbol']);

export const CurrencyDistinctSelect = CurrencyField.array().length(1);

export const PriceLevelField = z.enum([
  'id',
  'currencyId',
  'name',
  'description',
  'taxrate',
]);

export const PriceLevelDistinctSelect = PriceLevelField.array().length(1);

export const PriceField = z.enum([
  'id',
  'variantId',
  'priceLevelId',
  'price',
  'cost',
  'description',
]);

export const PriceDistinctSelect = PriceField.array().length(1);

export const QuantityField = z.enum([
  'id',
  'variantId',
  'storeId',
  'quantity',
  'alertThreshold',
]);

export const QuantityDistinctSelect = QuantityField.array().length(1);

export const SerialNumberField = z.enum([
  'id',
  'variantId',
  'storeId',
  'serialNumber',
  'inStock',
]);

export const SerialNumberDistinctSelect = SerialNumberField.array().length(1);

export const DiscountField = z.enum([
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
]);

export const DiscountDistinctSelect = DiscountField.array().length(1);

export const DiscountTargetField = z.enum([
  'id',
  'type',
  'discountId',
  'storeId',
  'productId',
  'variantId',
  'priceLevelId',
  'categoryId',
]);

export const DiscountTargetDistinctSelect =
  DiscountTargetField.array().length(1);

export const StoreField = z.enum(['id', 'priceLevelId', 'name', 'description']);

export const StoreDistinctSelect = StoreField.array().length(1);

export const WarrantyPolicyField = z.enum([
  'id',
  'name',
  'description',
  'duration',
  'durationUnit',
]);

export const WarrantyPolicyDistinctSelect =
  WarrantyPolicyField.array().length(1);

export const ProductWarrantyField = z.enum([
  'id',
  'productId',
  'variantId',
  'policyId',
]);

export const ProductWarrantyDistinctSelect =
  ProductWarrantyField.array().length(1);

export const CategoryOmit = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  description: _select,
});

export const ProductOmit = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  isActive: _select,
  uuid: _select,
  name: _select,
  description: _select,
});

export const ProductCategoryOmit = z.object({
  id: _select,
  productId: _select,
  categoryId: _select,
});

export const VariantOmit = z.object({
  id: _select,
  uuid: _select,
  productId: _select,
  sku: _select,
  upc: _select,
  description: _select,
});

export const AttributeOmit = z.object({
  id: _select,
  variantId: _select,
  name: _select,
  value: _select,
});

export const CurrencyOmit = z.object({
  id: _select,
  name: _select,
  code: _select,
  symbol: _select,
});

export const PriceLevelOmit = z.object({
  id: _select,
  currencyId: _select,
  name: _select,
  description: _select,
  taxrate: _select,
});

export const PriceOmit = z.object({
  id: _select,
  variantId: _select,
  priceLevelId: _select,
  price: _select,
  cost: _select,
  description: _select,
});

export const QuantityOmit = z.object({
  id: _select,
  variantId: _select,
  storeId: _select,
  quantity: _select,
  alertThreshold: _select,
});

export const SerialNumberOmit = z.object({
  id: _select,
  variantId: _select,
  storeId: _select,
  serialNumber: _select,
  inStock: _select,
});

export const DiscountOmit = z.object({
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

export const DiscountTargetOmit = z.object({
  id: _select,
  type: _select,
  discountId: _select,
  storeId: _select,
  productId: _select,
  variantId: _select,
  priceLevelId: _select,
  categoryId: _select,
});

export const StoreOmit = z.object({
  id: _select,
  priceLevelId: _select,
  name: _select,
  description: _select,
});

export const WarrantyPolicyOmit = z.object({
  id: _select,
  name: _select,
  description: _select,
  duration: _select,
  durationUnit: _select,
});

export const ProductWarrantyOmit = z.object({
  id: _select,
  productId: _select,
  variantId: _select,
  policyId: _select,
});

export type DiscountTargetType = z.infer<typeof DiscountTargetType>;

export type ValueType = z.infer<typeof ValueType>;

export type DiscountType = z.infer<typeof DiscountType>;

export type TimeUnit = z.infer<typeof TimeUnit>;

export type DiscountTargetTypeFilter = z.infer<typeof DiscountTargetTypeFilter>;

export type ValueTypeFilter = z.infer<typeof ValueTypeFilter>;

export type DiscountTypeFilter = z.infer<typeof DiscountTypeFilter>;

export type TimeUnitFilter = z.infer<typeof TimeUnitFilter>;

export type CategoryField = z.infer<typeof CategoryField>;

export type CategoryDistinctSelect = z.infer<typeof CategoryDistinctSelect>;

export type ProductField = z.infer<typeof ProductField>;

export type ProductDistinctSelect = z.infer<typeof ProductDistinctSelect>;

export type ProductCategoryField = z.infer<typeof ProductCategoryField>;

export type ProductCategoryDistinctSelect = z.infer<
  typeof ProductCategoryDistinctSelect
>;

export type VariantField = z.infer<typeof VariantField>;

export type VariantDistinctSelect = z.infer<typeof VariantDistinctSelect>;

export type AttributeField = z.infer<typeof AttributeField>;

export type AttributeDistinctSelect = z.infer<typeof AttributeDistinctSelect>;

export type CurrencyField = z.infer<typeof CurrencyField>;

export type CurrencyDistinctSelect = z.infer<typeof CurrencyDistinctSelect>;

export type PriceLevelField = z.infer<typeof PriceLevelField>;

export type PriceLevelDistinctSelect = z.infer<typeof PriceLevelDistinctSelect>;

export type PriceField = z.infer<typeof PriceField>;

export type PriceDistinctSelect = z.infer<typeof PriceDistinctSelect>;

export type QuantityField = z.infer<typeof QuantityField>;

export type QuantityDistinctSelect = z.infer<typeof QuantityDistinctSelect>;

export type SerialNumberField = z.infer<typeof SerialNumberField>;

export type SerialNumberDistinctSelect = z.infer<
  typeof SerialNumberDistinctSelect
>;

export type DiscountField = z.infer<typeof DiscountField>;

export type DiscountDistinctSelect = z.infer<typeof DiscountDistinctSelect>;

export type DiscountTargetField = z.infer<typeof DiscountTargetField>;

export type DiscountTargetDistinctSelect = z.infer<
  typeof DiscountTargetDistinctSelect
>;

export type StoreField = z.infer<typeof StoreField>;

export type StoreDistinctSelect = z.infer<typeof StoreDistinctSelect>;

export type WarrantyPolicyField = z.infer<typeof WarrantyPolicyField>;

export type WarrantyPolicyDistinctSelect = z.infer<
  typeof WarrantyPolicyDistinctSelect
>;

export type ProductWarrantyField = z.infer<typeof ProductWarrantyField>;

export type ProductWarrantyDistinctSelect = z.infer<
  typeof ProductWarrantyDistinctSelect
>;

export type CategoryOmit = z.infer<typeof CategoryOmit>;

export type ProductOmit = z.infer<typeof ProductOmit>;

export type ProductCategoryOmit = z.infer<typeof ProductCategoryOmit>;

export type VariantOmit = z.infer<typeof VariantOmit>;

export type AttributeOmit = z.infer<typeof AttributeOmit>;

export type CurrencyOmit = z.infer<typeof CurrencyOmit>;

export type PriceLevelOmit = z.infer<typeof PriceLevelOmit>;

export type PriceOmit = z.infer<typeof PriceOmit>;

export type QuantityOmit = z.infer<typeof QuantityOmit>;

export type SerialNumberOmit = z.infer<typeof SerialNumberOmit>;

export type DiscountOmit = z.infer<typeof DiscountOmit>;

export type DiscountTargetOmit = z.infer<typeof DiscountTargetOmit>;

export type StoreOmit = z.infer<typeof StoreOmit>;

export type WarrantyPolicyOmit = z.infer<typeof WarrantyPolicyOmit>;

export type ProductWarrantyOmit = z.infer<typeof ProductWarrantyOmit>;

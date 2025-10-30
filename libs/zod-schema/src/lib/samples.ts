import z from "zod";

/**
 * Try to parse json value if it is a valid json or return it.
 */
export function _parseJsonOrReturn(value: any) {
  if (typeof value === "string") {
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
    error: "Invalid phone format",
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
    error: "Slug must contain only lowercase letters, numbers, and dash.",
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
  .regex(/[A-Z]{1,}/, { error: "must contain at least one upper-case letter" })
  .regex(/[a-z]{1,}/, { error: "must contain at least one lower-case letter" })
  .regex(/[0-9]{1,}/, { error: "must contain at least one number" })
  .regex(/[~!@#$%^&*()_+{}":'<>?]{1,}/, {
    error: "must contain at least one special character",
  });

/**
 * projection field schema (optional coerced boolean schema)
 */
export const _select = z.coerce.boolean().optional();

/**
 * Order schema to define order direction either "asc" or "desc"
 */
export const _direction = z.enum(["asc", "desc"]).optional();

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
export const _strMode = z.enum(["default", "insensitive"]);

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

export const DepartmentField = z.enum(["id", "name"]);

export const DepartmentDistinctSelect = DepartmentField.array().length(1);

export const CategoryField = z.enum(["id", "name"]);

export const CategoryDistinctSelect = CategoryField.array().length(1);

export const AttribueField = z.enum(["id", "name"]);

export const AttribueDistinctSelect = AttribueField.array().length(1);

export const VariantAttributeField = z.enum([
  "variantId",
  "attribueId",
  "value",
]);

export const VariantAttributeDistinctSelect =
  VariantAttributeField.array().length(1);

export const ProductField = z.enum([
  "id",
  "uuid",
  "categoryId",
  "departmentId",
  "createdAt",
  "updatedAt",
  "name",
  "description",
  "isActive",
]);

export const ProductDistinctSelect = ProductField.array().length(1);

export const VariantField = z.enum([
  "id",
  "uuid",
  "productId",
  "sku",
  "upc",
  "description",
]);

export const VariantDistinctSelect = VariantField.array().length(1);

export const CurrencyField = z.enum(["id", "name", "code", "symbol"]);

export const CurrencyDistinctSelect = CurrencyField.array().length(1);

export const PriceLevelField = z.enum([
  "id",
  "currencyId",
  "name",
  "description",
  "taxrate",
]);

export const PriceLevelDistinctSelect = PriceLevelField.array().length(1);

export const PriceField = z.enum([
  "id",
  "variantId",
  "priceLevelId",
  "price",
  "cost",
  "description",
]);

export const PriceDistinctSelect = PriceField.array().length(1);

export const QuantityField = z.enum([
  "id",
  "variantId",
  "storeId",
  "quantity",
  "alertThreshold",
]);

export const QuantityDistinctSelect = QuantityField.array().length(1);

export const SerialNumberField = z.enum([
  "id",
  "variantId",
  "storeId",
  "serialNumber",
  "inStock",
]);

export const SerialNumberDistinctSelect = SerialNumberField.array().length(1);

export const StoreField = z.enum(["id", "priceLevelId", "name", "description"]);

export const StoreDistinctSelect = StoreField.array().length(1);

export const DepartmentWhereOwn = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const CategoryWhereOwn = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const AttribueWhereOwn = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const CurrencyWhereOwn = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  code: _strFilter.optional(),
  symbol: _strFilter.optional(),
});

export const PriceLevelWhereOwn = z.object({
  id: _intFilter.optional(),
  currencyId: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  taxrate: _numFilter.optional(),
});

export const PriceWhereOwn = z.object({
  id: _intFilter.optional(),
  variantId: _intFilter.optional(),
  priceLevelId: _intFilter.optional(),
  price: _numFilter.optional(),
  cost: _numFilter.optional(),
  description: _strFilter.optional(),
});

export const QuantityWhereOwn = z.object({
  id: _intFilter.optional(),
  variantId: _intFilter.optional(),
  storeId: _intFilter.optional(),
  quantity: _intFilter.optional(),
  alertThreshold: _intFilter.optional(),
});

export const SerialNumberWhereOwn = z.object({
  id: _intFilter.optional(),
  variantId: _intFilter.optional(),
  storeId: _intFilter.optional(),
  serialNumber: _strFilter.optional(),
  inStock: _boolFilter.optional(),
});

export const DepartmentWhere = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const CategoryWhere = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const AttribueWhere = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const CurrencyWhere = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  code: _strFilter.optional(),
  symbol: _strFilter.optional(),
});

export const PriceLevelWhere = z.object({
  id: _intFilter.optional(),
  currencyId: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  taxrate: _numFilter.optional(),
});

export const PriceWhere = z.object({
  id: _intFilter.optional(),
  variantId: _intFilter.optional(),
  priceLevelId: _intFilter.optional(),
  price: _numFilter.optional(),
  cost: _numFilter.optional(),
  description: _strFilter.optional(),
});

export const QuantityWhere = z.object({
  id: _intFilter.optional(),
  variantId: _intFilter.optional(),
  storeId: _intFilter.optional(),
  quantity: _intFilter.optional(),
  alertThreshold: _intFilter.optional(),
});

export const SerialNumberWhere = z.object({
  id: _intFilter.optional(),
  variantId: _intFilter.optional(),
  storeId: _intFilter.optional(),
  serialNumber: _strFilter.optional(),
  inStock: _boolFilter.optional(),
});

export const VariantWhereOwn = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  productId: _intFilter.optional(),
  sku: _strFilter.optional(),
  upc: _strFilter.optional(),
  description: _strFilter.optional(),
});

export const VariantAttributeWhereOwn = z.object({
  variantId: _intFilter.optional(),
  attribueId: _intFilter.optional(),
  value: _strFilter.optional(),
  attribute: AttribueWhere.optional(),
  variant: z
    .object({
      id: _intFilter.optional(),
      uuid: _strFilter.optional(),
      productId: _intFilter.optional(),
      sku: _strFilter.optional(),
      upc: _strFilter.optional(),
      description: _strFilter.optional(),
    })
    .optional(),
});

export const VariantAttributeWhere = z.object({
  variantId: _intFilter.optional(),
  attribueId: _intFilter.optional(),
  value: _strFilter.optional(),
  attribute: AttribueWhere.optional(),
  variant: VariantWhereOwn.optional(),
});

export const ProductWhereOwn = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  categoryId: _intFilter.optional(),
  departmentId: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  isActive: _boolFilter.optional(),
  category: CategoryWhere.optional(),
  department: DepartmentWhere.optional(),
});

export const StoreWhereOwn = z.object({
  id: _intFilter.optional(),
  priceLevelId: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  priceLevel: PriceLevelWhere.optional(),
});

export const ProductWhere = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  categoryId: _intFilter.optional(),
  departmentId: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  isActive: _boolFilter.optional(),
  category: CategoryWhere.optional(),
  department: DepartmentWhere.optional(),
});

export const VariantWhere = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  productId: _intFilter.optional(),
  sku: _strFilter.optional(),
  upc: _strFilter.optional(),
  description: _strFilter.optional(),
});

export const StoreWhere = z.object({
  id: _intFilter.optional(),
  priceLevelId: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  priceLevel: PriceLevelWhere.optional(),
});

export const DepartmentOmit = z.object({ id: _select, name: _select });

export const CategoryOmit = z.object({ id: _select, name: _select });

export const AttribueOmit = z.object({ id: _select, name: _select });

export const VariantAttributeOmit = z.object({
  variantId: _select,
  attribueId: _select,
  value: _select,
});

export const ProductOmit = z.object({
  id: _select,
  uuid: _select,
  categoryId: _select,
  departmentId: _select,
  createdAt: _select,
  updatedAt: _select,
  name: _select,
  description: _select,
  isActive: _select,
});

export const VariantOmit = z.object({
  id: _select,
  uuid: _select,
  productId: _select,
  sku: _select,
  upc: _select,
  description: _select,
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

export const StoreOmit = z.object({
  id: _select,
  priceLevelId: _select,
  name: _select,
  description: _select,
});

export const DepartmentOrderBy = z.object({ id: _direction, name: _direction });

export const CategoryOrderBy = z.object({ id: _direction, name: _direction });

export const AttribueOrderBy = z.object({ id: _direction, name: _direction });

export const CurrencyOrderBy = z.object({
  id: _direction,
  name: _direction,
  code: _direction,
  symbol: _direction,
});

export const PriceLevelOrderBy = z.object({
  id: _direction,
  currencyId: _direction,
  name: _direction,
  description: _direction,
  taxrate: _direction,
});

export const PriceOrderBy = z.object({
  id: _direction,
  variantId: _direction,
  priceLevelId: _direction,
  price: _direction,
  cost: _direction,
  description: _direction,
});

export const QuantityOrderBy = z.object({
  id: _direction,
  variantId: _direction,
  storeId: _direction,
  quantity: _direction,
  alertThreshold: _direction,
});

export const SerialNumberOrderBy = z.object({
  id: _direction,
  variantId: _direction,
  storeId: _direction,
  serialNumber: _direction,
  inStock: _direction,
});

export const VariantAttributeOrderBy = z.object({
  variantId: _direction,
  attribueId: _direction,
  value: _direction,
});

export const ProductOrderBy = z.object({
  id: _direction,
  uuid: _direction,
  categoryId: _direction,
  departmentId: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  name: _direction,
  description: _direction,
  isActive: _direction,
});

export const VariantOrderBy = z.object({
  id: _direction,
  uuid: _direction,
  productId: _direction,
  sku: _direction,
  upc: _direction,
  description: _direction,
});

export const StoreOrderBy = z.object({
  id: _direction,
  priceLevelId: _direction,
  name: _direction,
  description: _direction,
});

export const DepartmentSelect = z.object({
  id: _select.optional(),
  name: _select.optional(),
});

export const CategorySelect = z.object({
  id: _select.optional(),
  name: _select.optional(),
});

export const AttribueSelect = z.object({
  id: _select.optional(),
  name: _select.optional(),
});

export const CurrencySelect = z.object({
  id: _select.optional(),
  name: _select.optional(),
  code: _select.optional(),
  symbol: _select.optional(),
});

export const PriceLevelSelect = z.object({
  id: _select.optional(),
  currencyId: _select.optional(),
  name: _select.optional(),
  description: _select.optional(),
  taxrate: _select.optional(),
});

export const PriceSelect = z.object({
  id: _select.optional(),
  variantId: _select.optional(),
  priceLevelId: _select.optional(),
  price: _select.optional(),
  cost: _select.optional(),
  description: _select.optional(),
});

export const QuantitySelect = z.object({
  id: _select.optional(),
  variantId: _select.optional(),
  storeId: _select.optional(),
  quantity: _select.optional(),
  alertThreshold: _select.optional(),
});

export const SerialNumberSelect = z.object({
  id: _select.optional(),
  variantId: _select.optional(),
  storeId: _select.optional(),
  serialNumber: _select.optional(),
  inStock: _select.optional(),
});

export const VariantAttributeSelect = z.object({
  variantId: _select.optional(),
  attribueId: _select.optional(),
  value: _select.optional(),
});

export const ProductSelect = z.object({
  id: _select.optional(),
  uuid: _select.optional(),
  categoryId: _select.optional(),
  departmentId: _select.optional(),
  createdAt: _select.optional(),
  updatedAt: _select.optional(),
  name: _select.optional(),
  description: _select.optional(),
  isActive: _select.optional(),
});

export const VariantSelect = z.object({
  id: _select.optional(),
  uuid: _select.optional(),
  productId: _select.optional(),
  sku: _select.optional(),
  upc: _select.optional(),
  description: _select.optional(),
});

export const StoreSelect = z.object({
  id: _select.optional(),
  priceLevelId: _select.optional(),
  name: _select.optional(),
  description: _select.optional(),
});

export const DepartmentInclude = z.object({});

export const CategoryInclude = z.object({});

export const AttribueInclude = z.object({});

export const CurrencyInclude = z.object({});

export const PriceLevelInclude = z.object({});

export const PriceInclude = z.object({});

export const QuantityInclude = z.object({});

export const SerialNumberInclude = z.object({});

export const VariantAttributeInclude = z.object({
  attribute: z
    .object({
      select: AttribueSelect.optional(),
      where: AttribueWhere.optional(),
    })
    .optional(),
  variant: z
    .object({
      select: VariantSelect.optional(),
      where: VariantWhere.optional(),
    })
    .optional(),
});

export const ProductInclude = z.object({
  variants: z
    .object({
      select: VariantSelect.optional(),
      where: VariantWhere.optional(),
    })
    .optional(),
  category: z
    .object({
      select: CategorySelect.optional(),
      where: CategoryWhere.optional(),
    })
    .optional(),
  department: z
    .object({
      select: DepartmentSelect.optional(),
      where: DepartmentWhere.optional(),
    })
    .optional(),
});

export const VariantInclude = z.object({});

export const StoreInclude = z.object({
  priceLevel: z
    .object({
      select: PriceLevelSelect.optional(),
      where: PriceLevelWhere.optional(),
    })
    .optional(),
});

export const DepartmentProjection = z.union([
  z.object({
    select: z.preprocess(_parseJsonOrReturn, DepartmentSelect).optional(),
  }),
  z.object({
    omit: z.preprocess(_parseJsonOrReturn, DepartmentOmit).optional(),
  }),
  z.object({
    include: z.preprocess(_parseJsonOrReturn, DepartmentInclude).optional(),
  }),
  z.object({}).optional(),
]);

export const CategoryProjection = z.union([
  z.object({
    select: z.preprocess(_parseJsonOrReturn, CategorySelect).optional(),
  }),
  z.object({ omit: z.preprocess(_parseJsonOrReturn, CategoryOmit).optional() }),
  z.object({
    include: z.preprocess(_parseJsonOrReturn, CategoryInclude).optional(),
  }),
  z.object({}).optional(),
]);

export const AttribueProjection = z.union([
  z.object({
    select: z.preprocess(_parseJsonOrReturn, AttribueSelect).optional(),
  }),
  z.object({ omit: z.preprocess(_parseJsonOrReturn, AttribueOmit).optional() }),
  z.object({
    include: z.preprocess(_parseJsonOrReturn, AttribueInclude).optional(),
  }),
  z.object({}).optional(),
]);

export const CurrencyProjection = z.union([
  z.object({
    select: z.preprocess(_parseJsonOrReturn, CurrencySelect).optional(),
  }),
  z.object({ omit: z.preprocess(_parseJsonOrReturn, CurrencyOmit).optional() }),
  z.object({
    include: z.preprocess(_parseJsonOrReturn, CurrencyInclude).optional(),
  }),
  z.object({}).optional(),
]);

export const PriceLevelProjection = z.union([
  z.object({
    select: z.preprocess(_parseJsonOrReturn, PriceLevelSelect).optional(),
  }),
  z.object({
    omit: z.preprocess(_parseJsonOrReturn, PriceLevelOmit).optional(),
  }),
  z.object({
    include: z.preprocess(_parseJsonOrReturn, PriceLevelInclude).optional(),
  }),
  z.object({}).optional(),
]);

export const PriceProjection = z.union([
  z.object({
    select: z.preprocess(_parseJsonOrReturn, PriceSelect).optional(),
  }),
  z.object({ omit: z.preprocess(_parseJsonOrReturn, PriceOmit).optional() }),
  z.object({
    include: z.preprocess(_parseJsonOrReturn, PriceInclude).optional(),
  }),
  z.object({}).optional(),
]);

export const QuantityProjection = z.union([
  z.object({
    select: z.preprocess(_parseJsonOrReturn, QuantitySelect).optional(),
  }),
  z.object({ omit: z.preprocess(_parseJsonOrReturn, QuantityOmit).optional() }),
  z.object({
    include: z.preprocess(_parseJsonOrReturn, QuantityInclude).optional(),
  }),
  z.object({}).optional(),
]);

export const SerialNumberProjection = z.union([
  z.object({
    select: z.preprocess(_parseJsonOrReturn, SerialNumberSelect).optional(),
  }),
  z.object({
    omit: z.preprocess(_parseJsonOrReturn, SerialNumberOmit).optional(),
  }),
  z.object({
    include: z.preprocess(_parseJsonOrReturn, SerialNumberInclude).optional(),
  }),
  z.object({}).optional(),
]);

export const VariantAttributeProjection = z.union([
  z.object({
    select: z.preprocess(_parseJsonOrReturn, VariantAttributeSelect).optional(),
  }),
  z.object({
    omit: z.preprocess(_parseJsonOrReturn, VariantAttributeOmit).optional(),
  }),
  z.object({
    include: z
      .preprocess(_parseJsonOrReturn, VariantAttributeInclude)
      .optional(),
  }),
  z.object({}).optional(),
]);

export const ProductProjection = z.union([
  z.object({
    select: z.preprocess(_parseJsonOrReturn, ProductSelect).optional(),
  }),
  z.object({ omit: z.preprocess(_parseJsonOrReturn, ProductOmit).optional() }),
  z.object({
    include: z.preprocess(_parseJsonOrReturn, ProductInclude).optional(),
  }),
  z.object({}).optional(),
]);

export const VariantProjection = z.union([
  z.object({
    select: z.preprocess(_parseJsonOrReturn, VariantSelect).optional(),
  }),
  z.object({ omit: z.preprocess(_parseJsonOrReturn, VariantOmit).optional() }),
  z.object({
    include: z.preprocess(_parseJsonOrReturn, VariantInclude).optional(),
  }),
  z.object({}).optional(),
]);

export const StoreProjection = z.union([
  z.object({
    select: z.preprocess(_parseJsonOrReturn, StoreSelect).optional(),
  }),
  z.object({ omit: z.preprocess(_parseJsonOrReturn, StoreOmit).optional() }),
  z.object({
    include: z.preprocess(_parseJsonOrReturn, StoreInclude).optional(),
  }),
  z.object({}).optional(),
]);

export const DepartmentQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, DepartmentWhere).optional(),
});

export const CategoryQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, CategoryWhere).optional(),
});

export const AttribueQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, AttribueWhere).optional(),
});

export const CurrencyQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, CurrencyWhere).optional(),
});

export const PriceLevelQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, PriceLevelWhere).optional(),
});

export const PriceQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, PriceWhere).optional(),
});

export const QuantityQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, QuantityWhere).optional(),
});

export const SerialNumberQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, SerialNumberWhere).optional(),
});

export const VariantAttributeQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, VariantAttributeWhere).optional(),
});

export const ProductQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, ProductWhere).optional(),
});

export const VariantQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, VariantWhere).optional(),
});

export const StoreQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, StoreWhere).optional(),
});

export const DepartmentQuery = z.object({
  distinct: DepartmentDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, DepartmentWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, DepartmentOrderBy).optional(),
});

export const CategoryQuery = z.object({
  distinct: CategoryDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, CategoryWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, CategoryOrderBy).optional(),
});

export const AttribueQuery = z.object({
  distinct: AttribueDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, AttribueWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, AttribueOrderBy).optional(),
});

export const CurrencyQuery = z.object({
  distinct: CurrencyDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, CurrencyWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, CurrencyOrderBy).optional(),
});

export const PriceLevelQuery = z.object({
  distinct: PriceLevelDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, PriceLevelWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, PriceLevelOrderBy).optional(),
});

export const PriceQuery = z.object({
  distinct: PriceDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, PriceWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, PriceOrderBy).optional(),
});

export const QuantityQuery = z.object({
  distinct: QuantityDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, QuantityWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, QuantityOrderBy).optional(),
});

export const SerialNumberQuery = z.object({
  distinct: SerialNumberDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, SerialNumberWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, SerialNumberOrderBy).optional(),
});

export const VariantAttributeQuery = z.object({
  distinct: VariantAttributeDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, VariantAttributeWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, VariantAttributeOrderBy).optional(),
});

export const ProductQuery = z.object({
  distinct: ProductDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, ProductWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, ProductOrderBy).optional(),
});

export const VariantQuery = z.object({
  distinct: VariantDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, VariantWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, VariantOrderBy).optional(),
});

export const StoreQuery = z.object({
  distinct: StoreDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, StoreWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, StoreOrderBy).optional(),
});

export type DepartmentField = z.infer<typeof DepartmentField>;

export type DepartmentDistinctSelect = z.infer<typeof DepartmentDistinctSelect>;

export type CategoryField = z.infer<typeof CategoryField>;

export type CategoryDistinctSelect = z.infer<typeof CategoryDistinctSelect>;

export type AttribueField = z.infer<typeof AttribueField>;

export type AttribueDistinctSelect = z.infer<typeof AttribueDistinctSelect>;

export type VariantAttributeField = z.infer<typeof VariantAttributeField>;

export type VariantAttributeDistinctSelect = z.infer<
  typeof VariantAttributeDistinctSelect
>;

export type ProductField = z.infer<typeof ProductField>;

export type ProductDistinctSelect = z.infer<typeof ProductDistinctSelect>;

export type VariantField = z.infer<typeof VariantField>;

export type VariantDistinctSelect = z.infer<typeof VariantDistinctSelect>;

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

export type StoreField = z.infer<typeof StoreField>;

export type StoreDistinctSelect = z.infer<typeof StoreDistinctSelect>;

export type DepartmentWhereOwn = z.infer<typeof DepartmentWhereOwn>;

export type CategoryWhereOwn = z.infer<typeof CategoryWhereOwn>;

export type AttribueWhereOwn = z.infer<typeof AttribueWhereOwn>;

export type CurrencyWhereOwn = z.infer<typeof CurrencyWhereOwn>;

export type PriceLevelWhereOwn = z.infer<typeof PriceLevelWhereOwn>;

export type PriceWhereOwn = z.infer<typeof PriceWhereOwn>;

export type QuantityWhereOwn = z.infer<typeof QuantityWhereOwn>;

export type SerialNumberWhereOwn = z.infer<typeof SerialNumberWhereOwn>;

export type DepartmentWhere = z.infer<typeof DepartmentWhere>;

export type CategoryWhere = z.infer<typeof CategoryWhere>;

export type AttribueWhere = z.infer<typeof AttribueWhere>;

export type CurrencyWhere = z.infer<typeof CurrencyWhere>;

export type PriceLevelWhere = z.infer<typeof PriceLevelWhere>;

export type PriceWhere = z.infer<typeof PriceWhere>;

export type QuantityWhere = z.infer<typeof QuantityWhere>;

export type SerialNumberWhere = z.infer<typeof SerialNumberWhere>;

export type VariantWhereOwn = z.infer<typeof VariantWhereOwn>;

export type VariantAttributeWhereOwn = z.infer<typeof VariantAttributeWhereOwn>;

export type VariantAttributeWhere = z.infer<typeof VariantAttributeWhere>;

export type ProductWhereOwn = z.infer<typeof ProductWhereOwn>;

export type StoreWhereOwn = z.infer<typeof StoreWhereOwn>;

export type ProductWhere = z.infer<typeof ProductWhere>;

export type VariantWhere = z.infer<typeof VariantWhere>;

export type StoreWhere = z.infer<typeof StoreWhere>;

export type DepartmentOmit = z.infer<typeof DepartmentOmit>;

export type CategoryOmit = z.infer<typeof CategoryOmit>;

export type AttribueOmit = z.infer<typeof AttribueOmit>;

export type VariantAttributeOmit = z.infer<typeof VariantAttributeOmit>;

export type ProductOmit = z.infer<typeof ProductOmit>;

export type VariantOmit = z.infer<typeof VariantOmit>;

export type CurrencyOmit = z.infer<typeof CurrencyOmit>;

export type PriceLevelOmit = z.infer<typeof PriceLevelOmit>;

export type PriceOmit = z.infer<typeof PriceOmit>;

export type QuantityOmit = z.infer<typeof QuantityOmit>;

export type SerialNumberOmit = z.infer<typeof SerialNumberOmit>;

export type StoreOmit = z.infer<typeof StoreOmit>;

export type DepartmentOrderBy = z.infer<typeof DepartmentOrderBy>;

export type CategoryOrderBy = z.infer<typeof CategoryOrderBy>;

export type AttribueOrderBy = z.infer<typeof AttribueOrderBy>;

export type CurrencyOrderBy = z.infer<typeof CurrencyOrderBy>;

export type PriceLevelOrderBy = z.infer<typeof PriceLevelOrderBy>;

export type PriceOrderBy = z.infer<typeof PriceOrderBy>;

export type QuantityOrderBy = z.infer<typeof QuantityOrderBy>;

export type SerialNumberOrderBy = z.infer<typeof SerialNumberOrderBy>;

export type VariantAttributeOrderBy = z.infer<typeof VariantAttributeOrderBy>;

export type ProductOrderBy = z.infer<typeof ProductOrderBy>;

export type VariantOrderBy = z.infer<typeof VariantOrderBy>;

export type StoreOrderBy = z.infer<typeof StoreOrderBy>;

export type DepartmentSelect = z.infer<typeof DepartmentSelect>;

export type CategorySelect = z.infer<typeof CategorySelect>;

export type AttribueSelect = z.infer<typeof AttribueSelect>;

export type CurrencySelect = z.infer<typeof CurrencySelect>;

export type PriceLevelSelect = z.infer<typeof PriceLevelSelect>;

export type PriceSelect = z.infer<typeof PriceSelect>;

export type QuantitySelect = z.infer<typeof QuantitySelect>;

export type SerialNumberSelect = z.infer<typeof SerialNumberSelect>;

export type VariantAttributeSelect = z.infer<typeof VariantAttributeSelect>;

export type ProductSelect = z.infer<typeof ProductSelect>;

export type VariantSelect = z.infer<typeof VariantSelect>;

export type StoreSelect = z.infer<typeof StoreSelect>;

export type DepartmentInclude = z.infer<typeof DepartmentInclude>;

export type CategoryInclude = z.infer<typeof CategoryInclude>;

export type AttribueInclude = z.infer<typeof AttribueInclude>;

export type CurrencyInclude = z.infer<typeof CurrencyInclude>;

export type PriceLevelInclude = z.infer<typeof PriceLevelInclude>;

export type PriceInclude = z.infer<typeof PriceInclude>;

export type QuantityInclude = z.infer<typeof QuantityInclude>;

export type SerialNumberInclude = z.infer<typeof SerialNumberInclude>;

export type VariantAttributeInclude = z.infer<typeof VariantAttributeInclude>;

export type ProductInclude = z.infer<typeof ProductInclude>;

export type VariantInclude = z.infer<typeof VariantInclude>;

export type StoreInclude = z.infer<typeof StoreInclude>;

export type DepartmentProjection = z.infer<typeof DepartmentProjection>;

export type CategoryProjection = z.infer<typeof CategoryProjection>;

export type AttribueProjection = z.infer<typeof AttribueProjection>;

export type CurrencyProjection = z.infer<typeof CurrencyProjection>;

export type PriceLevelProjection = z.infer<typeof PriceLevelProjection>;

export type PriceProjection = z.infer<typeof PriceProjection>;

export type QuantityProjection = z.infer<typeof QuantityProjection>;

export type SerialNumberProjection = z.infer<typeof SerialNumberProjection>;

export type VariantAttributeProjection = z.infer<
  typeof VariantAttributeProjection
>;

export type ProductProjection = z.infer<typeof ProductProjection>;

export type VariantProjection = z.infer<typeof VariantProjection>;

export type StoreProjection = z.infer<typeof StoreProjection>;

export type DepartmentQueryOne = z.infer<typeof DepartmentQueryOne>;

export type CategoryQueryOne = z.infer<typeof CategoryQueryOne>;

export type AttribueQueryOne = z.infer<typeof AttribueQueryOne>;

export type CurrencyQueryOne = z.infer<typeof CurrencyQueryOne>;

export type PriceLevelQueryOne = z.infer<typeof PriceLevelQueryOne>;

export type PriceQueryOne = z.infer<typeof PriceQueryOne>;

export type QuantityQueryOne = z.infer<typeof QuantityQueryOne>;

export type SerialNumberQueryOne = z.infer<typeof SerialNumberQueryOne>;

export type VariantAttributeQueryOne = z.infer<typeof VariantAttributeQueryOne>;

export type ProductQueryOne = z.infer<typeof ProductQueryOne>;

export type VariantQueryOne = z.infer<typeof VariantQueryOne>;

export type StoreQueryOne = z.infer<typeof StoreQueryOne>;

export type DepartmentQuery = z.infer<typeof DepartmentQuery>;

export type CategoryQuery = z.infer<typeof CategoryQuery>;

export type AttribueQuery = z.infer<typeof AttribueQuery>;

export type CurrencyQuery = z.infer<typeof CurrencyQuery>;

export type PriceLevelQuery = z.infer<typeof PriceLevelQuery>;

export type PriceQuery = z.infer<typeof PriceQuery>;

export type QuantityQuery = z.infer<typeof QuantityQuery>;

export type SerialNumberQuery = z.infer<typeof SerialNumberQuery>;

export type VariantAttributeQuery = z.infer<typeof VariantAttributeQuery>;

export type ProductQuery = z.infer<typeof ProductQuery>;

export type VariantQuery = z.infer<typeof VariantQuery>;

export type StoreQuery = z.infer<typeof StoreQuery>;

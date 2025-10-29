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

export const Status = z.enum(['ACTIVE', 'PASSIVE']);

export const StatusFilter = Status.or(
  z.object({
    equals: Status.optional(),
    in: Status.array().optional(),
    notIn: Status.array().optional(),
    not: z
      .object({
        equals: Status.optional(),
        in: Status.array().optional(),
        notIn: Status.array().optional(),
      })
      .optional(),
  })
);

export const CatField = z.enum(['id', 'parentId', 'name', 'description']);

export const CatDistinctSelect = CatField.array().length(1);

export const TagField = z.enum(['id', 'name']);

export const TagDistinctSelect = TagField.array().length(1);

export const ProductField = z.enum([
  'id',
  'name',
  'description',
  'cost',
  'price',
  'quantity',
  'catId',
  'status',
]);

export const ProductDistinctSelect = ProductField.array().length(1);

export const ProductAttributeField = z.enum(['productId', 'name', 'value']);

export const ProductAttributeDistinctSelect =
  ProductAttributeField.array().length(1);

export const ProductTagField = z.enum(['productId', 'tagId']);

export const ProductTagDistinctSelect = ProductTagField.array().length(1);

export const CatWhereOwn = z.object({
  id: _intFilter.optional(),
  parentId: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
});

export const TagWhereOwn = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const ProductAttributeWhereOwn = z.object({
  productId: _intFilter.optional(),
  name: _strFilter.optional(),
  value: _strFilter.optional(),
});

export const CatWhere = z.object({
  id: _intFilter.optional(),
  parentId: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
});

export const TagWhere = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const ProductAttributeWhere = z.object({
  productId: _intFilter.optional(),
  name: _strFilter.optional(),
  value: _strFilter.optional(),
});

export const ProductTagWhereOwn = z.object({
  productId: _intFilter.optional(),
  tagId: _intFilter.optional(),
  tag: TagWhere.optional(),
});

export const ProductTagWhere = z.object({
  productId: _intFilter.optional(),
  tagId: _intFilter.optional(),
  tag: TagWhere.optional(),
});

export const ProductWhereOwn = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  cost: _numFilter.optional(),
  price: _numFilter.optional(),
  quantity: _intFilter.optional(),
  catId: _intFilter.optional(),
  status: Status.optional(),
  cat: CatWhere.optional(),
  productTags: z
    .object({
      some: ProductTagWhere.optional(),
      every: ProductTagWhere.optional(),
      none: ProductTagWhere.optional(),
    })
    .optional(),
  attributes: z
    .object({
      some: ProductAttributeWhere.optional(),
      every: ProductAttributeWhere.optional(),
      none: ProductAttributeWhere.optional(),
    })
    .optional(),
});

export const ProductWhere = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  cost: _numFilter.optional(),
  price: _numFilter.optional(),
  quantity: _intFilter.optional(),
  catId: _intFilter.optional(),
  status: Status.optional(),
  cat: CatWhere.optional(),
  productTags: z
    .object({
      some: ProductTagWhere.optional(),
      every: ProductTagWhere.optional(),
      none: ProductTagWhere.optional(),
    })
    .optional(),
  attributes: z
    .object({
      some: ProductAttributeWhere.optional(),
      every: ProductAttributeWhere.optional(),
      none: ProductAttributeWhere.optional(),
    })
    .optional(),
});

export const CatOmit = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  description: _select,
});

export const TagOmit = z.object({ id: _select, name: _select });

export const ProductOmit = z.object({
  id: _select,
  name: _select,
  description: _select,
  cost: _select,
  price: _select,
  quantity: _select,
  catId: _select,
  status: _select,
});

export const ProductAttributeOmit = z.object({
  productId: _select,
  name: _select,
  value: _select,
});

export const ProductTagOmit = z.object({ productId: _select, tagId: _select });

export const CatOrderBy = z.object({
  id: _direction,
  parentId: _direction,
  name: _direction,
  description: _direction,
});

export const TagOrderBy = z.object({ id: _direction, name: _direction });

export const ProductAttributeOrderBy = z.object({
  productId: _direction,
  name: _direction,
  value: _direction,
});

export const ProductTagOrderBy = z.object({
  productId: _direction,
  tagId: _direction,
  tag: TagOrderBy,
});

export const ProductOrderBy = z.object({
  id: _direction,
  name: _direction,
  description: _direction,
  cost: _direction,
  price: _direction,
  quantity: _direction,
  catId: _direction,
  status: _direction,
  cat: CatOrderBy,
  productTags: _orderByCount,
  attributes: _orderByCount,
});

export const CatSelect = z.object({
  id: _select.optional(),
  parentId: _select.optional(),
  name: _select.optional(),
  description: _select.optional(),
});

export const TagSelect = z.object({
  id: _select.optional(),
  name: _select.optional(),
});

export const ProductAttributeSelect = z.object({
  productId: _select.optional(),
  name: _select.optional(),
  value: _select.optional(),
});

export const TagInclude = z.object({});

export const ProductTagSelect = z.object({
  productId: _select.optional(),
  tagId: _select.optional(),
  tag: z
    .object({
      select: TagSelect.optional(),
      where: TagWhere.optional(),
      include: z.object({}).optional(),
    })
    .optional(),
});

export const ProductTagInclude = z.object({
  tag: z
    .object({
      select: TagSelect.optional(),
      where: TagWhere.optional(),
    })
    .optional(),
});

export const ProductAttributeInclude = z.object({});

export const ProductSelect = z.object({
  id: _select.optional(),
  name: _select.optional(),
  description: _select.optional(),
  cost: _select.optional(),
  price: _select.optional(),
  quantity: _select.optional(),
  catId: _select.optional(),
  status: _select.optional(),
  cat: z
    .object({ select: CatSelect.optional(), where: CatWhere.optional() })
    .optional(),
  productTags: z
    .object({
      take: _take,
      skip: _skip,
      select: ProductTagSelect.optional(),
      where: ProductTagWhere.optional(),
      include: z
        .object({
          tag: z
            .object({
              select: TagSelect.optional(),
              where: TagWhere.optional(),
            })
            .optional(),
        })
        .optional(),
    })
    .optional(),
  attributes: z
    .object({
      take: _take,
      skip: _skip,
      select: ProductAttributeSelect.optional(),
      where: ProductAttributeWhere.optional(),
      include: z.object({}).optional(),
    })
    .optional(),
});

export const CatInclude = z.object({});

export const ProductInclude = z.object({
  productTags: z
    .object({
      select: ProductTagSelect.optional(),
      where: ProductTagWhere.optional(),
    })
    .optional(),
  attributes: z
    .object({
      select: ProductAttributeSelect.optional(),
      where: ProductAttributeWhere.optional(),
    })
    .optional(),
});

export const CatProjection = z.union([
  z.object({ select: z.preprocess(_parseJsonOrReturn, CatSelect).optional() }),
  z.object({ omit: z.preprocess(_parseJsonOrReturn, CatOmit).optional() }),
  z.object({
    include: z.preprocess(_parseJsonOrReturn, CatInclude).optional(),
  }),
  z.object({}),
]);

export const TagProjection = z.union([
  z.object({ select: z.preprocess(_parseJsonOrReturn, TagSelect).optional() }),
  z.object({ omit: z.preprocess(_parseJsonOrReturn, TagOmit).optional() }),
  z.object({
    include: z.preprocess(_parseJsonOrReturn, TagInclude).optional(),
  }),
  z.object({}),
]);

export const ProductAttributeProjection = z.union([
  z.object({
    select: z.preprocess(_parseJsonOrReturn, ProductAttributeSelect).optional(),
  }),
  z.object({
    omit: z.preprocess(_parseJsonOrReturn, ProductAttributeOmit).optional(),
  }),
  z.object({
    include: z
      .preprocess(_parseJsonOrReturn, ProductAttributeInclude)
      .optional(),
  }),
  z.object({}),
]);

export const ProductTagProjection = z.union([
  z.object({
    select: z.preprocess(_parseJsonOrReturn, ProductTagSelect).optional(),
  }),
  z.object({
    omit: z.preprocess(_parseJsonOrReturn, ProductTagOmit).optional(),
  }),
  z.object({
    include: z.preprocess(_parseJsonOrReturn, ProductTagInclude).optional(),
  }),
  z.object({}),
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

export const CatQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, CatWhere).optional(),
});

export const TagQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, TagWhere).optional(),
});

export const ProductAttributeQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, ProductAttributeWhere).optional(),
});

export const ProductTagQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, ProductTagWhere).optional(),
});

export const ProductQueryOne = z.object({
  where: z.preprocess(_parseJsonOrReturn, ProductWhere).optional(),
});

export const CatQuery = z.object({
  take: _take,
  skip: _skip,
  distinct: CatDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, CatWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, CatOrderBy).optional(),
});

export const TagQuery = z.object({
  take: _take,
  skip: _skip,
  distinct: TagDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, TagWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, TagOrderBy).optional(),
});

export const ProductAttributeQuery = z.object({
  take: _take,
  skip: _skip,
  distinct: ProductAttributeDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, ProductAttributeWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, ProductAttributeOrderBy).optional(),
});

export const ProductTagQuery = z.object({
  take: _take,
  skip: _skip,
  distinct: ProductTagDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, ProductTagWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, ProductTagOrderBy).optional(),
});

export const ProductQuery = z.object({
  take: _take,
  skip: _skip,
  distinct: ProductDistinctSelect.optional(),
  where: z.preprocess(_parseJsonOrReturn, ProductWhere).optional(),
  orderBy: z.preprocess(_parseJsonOrReturn, ProductOrderBy).optional(),
});

export type Status = z.infer<typeof Status>;

export type StatusFilter = z.infer<typeof StatusFilter>;

export type CatField = z.infer<typeof CatField>;

export type CatDistinctSelect = z.infer<typeof CatDistinctSelect>;

export type TagField = z.infer<typeof TagField>;

export type TagDistinctSelect = z.infer<typeof TagDistinctSelect>;

export type ProductField = z.infer<typeof ProductField>;

export type ProductDistinctSelect = z.infer<typeof ProductDistinctSelect>;

export type ProductAttributeField = z.infer<typeof ProductAttributeField>;

export type ProductAttributeDistinctSelect = z.infer<
  typeof ProductAttributeDistinctSelect
>;

export type ProductTagField = z.infer<typeof ProductTagField>;

export type ProductTagDistinctSelect = z.infer<typeof ProductTagDistinctSelect>;

export type CatWhereOwn = z.infer<typeof CatWhereOwn>;

export type TagWhereOwn = z.infer<typeof TagWhereOwn>;

export type ProductAttributeWhereOwn = z.infer<typeof ProductAttributeWhereOwn>;

export type CatWhere = z.infer<typeof CatWhere>;

export type TagWhere = z.infer<typeof TagWhere>;

export type ProductAttributeWhere = z.infer<typeof ProductAttributeWhere>;

export type ProductTagWhereOwn = z.infer<typeof ProductTagWhereOwn>;

export type ProductTagWhere = z.infer<typeof ProductTagWhere>;

export type ProductWhereOwn = z.infer<typeof ProductWhereOwn>;

export type ProductWhere = z.infer<typeof ProductWhere>;

export type CatOmit = z.infer<typeof CatOmit>;

export type TagOmit = z.infer<typeof TagOmit>;

export type ProductOmit = z.infer<typeof ProductOmit>;

export type ProductAttributeOmit = z.infer<typeof ProductAttributeOmit>;

export type ProductTagOmit = z.infer<typeof ProductTagOmit>;

export type CatOrderBy = z.infer<typeof CatOrderBy>;

export type TagOrderBy = z.infer<typeof TagOrderBy>;

export type ProductAttributeOrderBy = z.infer<typeof ProductAttributeOrderBy>;

export type ProductTagOrderBy = z.infer<typeof ProductTagOrderBy>;

export type ProductOrderBy = z.infer<typeof ProductOrderBy>;

export type CatSelect = z.infer<typeof CatSelect>;

export type TagSelect = z.infer<typeof TagSelect>;

export type ProductAttributeSelect = z.infer<typeof ProductAttributeSelect>;

export type TagInclude = z.infer<typeof TagInclude>;

export type ProductTagSelect = z.infer<typeof ProductTagSelect>;

export type ProductTagInclude = z.infer<typeof ProductTagInclude>;

export type ProductAttributeInclude = z.infer<typeof ProductAttributeInclude>;

export type ProductSelect = z.infer<typeof ProductSelect>;

export type CatInclude = z.infer<typeof CatInclude>;

export type ProductInclude = z.infer<typeof ProductInclude>;

export type CatProjection = z.infer<typeof CatProjection>;

export type TagProjection = z.infer<typeof TagProjection>;

export type ProductAttributeProjection = z.infer<
  typeof ProductAttributeProjection
>;

export type ProductTagProjection = z.infer<typeof ProductTagProjection>;

export type ProductProjection = z.infer<typeof ProductProjection>;

export type CatQueryOne = z.infer<typeof CatQueryOne>;

export type TagQueryOne = z.infer<typeof TagQueryOne>;

export type ProductAttributeQueryOne = z.infer<typeof ProductAttributeQueryOne>;

export type ProductTagQueryOne = z.infer<typeof ProductTagQueryOne>;

export type ProductQueryOne = z.infer<typeof ProductQueryOne>;

export type CatQuery = z.infer<typeof CatQuery>;

export type TagQuery = z.infer<typeof TagQuery>;

export type ProductAttributeQuery = z.infer<typeof ProductAttributeQuery>;

export type ProductTagQuery = z.infer<typeof ProductTagQuery>;

export type ProductQuery = z.infer<typeof ProductQuery>;

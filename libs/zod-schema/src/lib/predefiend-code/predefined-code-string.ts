export const preDefinedCode = `
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
export const _phoneCountryCode = z.string().regex(/^\\+[0-9]{1,5}$/);

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
  take:_take,
  skip:_skip  
});

export type Pagination = z.infer<typeof Pagination>
`;

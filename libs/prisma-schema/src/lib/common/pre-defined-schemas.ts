/**
 * Coerced integer schema definition
 */
export const _int = `
export const _int = z.coerce.number().int()
`;

/**
 * String schema definition
 */
export const _str = `
export const _str = z.string()
`;

/**
 * Coerced number/decimal schema definition
 */
export const _num = `
export const _num = z.coerce.number()
`;

/**
 * Coerced boolean schema definition
 */
export const _bool = `
export const _bool = z.coerce.boolean()
`;

/**
 * Coerced iso-datetime schema definition
 */
export const _date = `
export const _date = z.iso.datetime()
`;

/**
 * Short string schema definition
 */
export const _shortText = `
export const _shortText = z.string().max(30)
`;

/**
 * Long string schema definition
 */
export const _longText = `
export const _longText = z.string().max(2000)
`;

/**
 * Coerced id schema definition
 */
export const _id = `
export const _id = z.coerce.number().int().min(1)
`;

/**
 * Coerced currency schema definition
 */
export const _currency = `
export const _currency = z.coerce.number().min(0)
`;

/**
 * Coerced positive-integer schema definition
 */
export const _positiveInt = `
export const _positiveInt = z.coerce.number().int().min(0)
`;

/**
 * Name schema definition
 */
export const _name = `
export const _name = z.string().min(3).max(30)
`;

/**
 * Slug schema definition
 */
export const _slug = `
export const _slug = z.string().min(3).max(30).regex(/[0-9a-z-]{0,30}/, { error:'Slug must contain only lowercase letters, numbers, and dash.'})
`;

/**
 * Description schema definition
 */
export const _description = `
export const _description = z.string().max(1000)
`;

/**
 * Email schema definition
 */
export const _email = `
export const _email = z.string().max(1000)
`;

/**
 * Url schema definition
 */
export const _url = `
export const _url = z.url()
`;

/**
 * Password schema definition
 */
export const _password = `
export const _password = z.string()
  .min(6)
  .regex(/[A-Z]{1,}/, { error: 'must contain at least one upper-case letter' })
  .regex(/[a-z]{1,}/, { error: 'must contain at least one lower-case letter' })
  .regex(/[0-9]{1,}/, { error: 'must contain at least one number' })
  .regex(/[~!@#$%^&*()_+{}":'<>?]{1,}/, {error: 'must contain at least one special character' })
`;

/**
 * Select (coerced boolean) schema definition
 */
export const _select = `
export const _select = z.coerce.boolean().optional()
`;

/**
 * Direction ('asc', 'desc' enum schema) schema definition
 */
export const _direction = `
export const _direction = z.enum(['asc', 'desc']).optional()
`;

/**
 * Special object schema with _count property to order by relation count
 */
export const _orderByCount = `
export const _orderByCount = z.object({ _count: _direction }).optional();
`;

/**
 * Pagination take schema definition
 */
export const _take = `
export const _take = _int.min(1).default(20).optional()
`;

/**
 * Pagination skip schema definition
 */
export const _skip = `
export const _skip = _int.min(0).optional()
`;

/**
 * Object schema definition to validate json propery query
 */
export const _json = `
export const _json = z.preprocess((value) => {
  if (typeof value === 'string') {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }
  return value;
}, z.any());
`;



/**
 * Json preprocessor definition
 */
export const _jsonPreprocessor = `
export const _jsonPreprocessor = (value: unknown) => {
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  return value;
}
`;


/**
 * Object schema definition to validate boolean propery query
 */
export const _boolFilter = `
export const _0_boolFilter = z.object({
  equals: _bool.optional()
})

export const _1_boolFilter =  z.object({ 
  equals: _bool.optional(),
  not: _bool.or(_0_boolFilter).optional()
})

export const _boolFilter = _bool.or(_1_boolFilter)
`;

/**
 * Object schema definition to validate number propery query
 */
export const _intFilter = `
export const _0_intFilter = z.object({
  equals: _int.optional(),
  gt: _int.optional(),
  gte: _int.optional(),
  lt: _int.optional(),
  lte: _int.optional(),
  in: _int.array().optional(),
  notIn: _int.array().optional(),
})

export const _1_intFilter =  z.object({ 
  equals: _int.optional(),
  gt: _int.optional(),
  gte: _int.optional(),
  lt: _int.optional(),
  lte: _int.optional(),
  in: _int.array().optional(),
  notIn: _int.array().optional(),
  not: _0_intFilter.optional()
})

export const _intFilter = _int.or(_1_intFilter)
`;


/**
 * Object schema definition to validate number propery query
 */
export const _numFilter = `
export const _0_numFilter = z.object({
  equals: _num.optional(),
  gt: _num.optional(),
  gte: _num.optional(),
  lt: _num.optional(),
  lte: _num.optional(),
  in: _num.array().optional(),
  notIn: _num.array().optional(),
})

export const _1_numFilter =  z.object({ 
  equals: _num.optional(),
  gt: _num.optional(),
  gte: _num.optional(),
  lt: _num.optional(),
  lte: _num.optional(),
  in: _num.array().optional(),
  notIn: _num.array().optional(),
  not: _0_numFilter.optional()
})

export const _numFilter = _num.or(_1_numFilter)
`;

/**
 * Object schema definition to validate date/datetime propery query
 */
export const _dateFilter = `
export const _0_dateFilter = z.object({
  equals: _date.optional(),
  gt: _date.optional(),
  gte: _date.optional(),
  lt: _date.optional(),
  lte: _date.optional(),
  in: _date.array().optional(),
  notIn: _date.array().optional(),
})

export const _1_dateFilter =  z.object({ 
  equals: _date.optional(),
  gt: _date.optional(),
  gte: _date.optional(),
  lt: _date.optional(),
  lte: _date.optional(),
  in: _date.array().optional(),
  notIn: _date.array().optional(),
  not: _0_dateFilter.optional()
})

export const _dateFilter = _date.or(_1_dateFilter)
`;


/**
 * Object schema definition to validate string propery query
 */
export const _strFilter = `
export const _strMode = z.enum(['default', 'insensitive'])

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
})

export const _1_strFilter =  z.object({ 
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
  not: _str.or(_0_strFilter).optional()
})

export const _strFilter = _str.or(_1_strFilter)
`;


/**
 * Object schema definition to validate json propery query
 */
export const _jsonFilter = `
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
  not: _str.optional()
})
`;


/**
 * Object schema definition to validate string-array propery query
 */
export const _strArrayFilter = `
export const _strArrayFilter = z.object({
    equals: _str.array().optional(),
    has: _str.optional(),
    hasEvery: _str.array().optional(),
    hasSome: _str.array().optional(),
    isEmpty: _bool.optional(),
})
`;


/**
 * Object schema definition to validate number-array propery query
 */
export const _numArrayFilter = `
export const _numArrayFilter= z.object({
    equals: _num.array().optional(),
    has: _num.optional(),
    hasEvery: _num.array().optional(),
    hasSome: _num.array().optional(),
    isEmpty: _bool.optional(),
})
`;


/**
 * Object schema definition to validate integer-array propery query
 */
export const _intArrayFilter = `
export const _intArrayFilter= z.object({
    equals: _int.array().optional(),
    has: _int.optional(),
    hasEvery: _int.array().optional(),
    hasSome: _int.array().optional(),
    isEmpty: _bool.optional(),
})
`;


/**
 * Object schema definition to validate date/datetime-array propery query
 */
export const _dateArrayFilter = `
export const _dateArrayFilter= z.object({
    equals: _date.array().optional(),
    has: _date.optional(),
    hasEvery: _date.array().optional(),
    hasSome: _date.array().optional(),
    isEmpty: _bool.optional(),
})
`;

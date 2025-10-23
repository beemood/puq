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

export const AppDistinctSchema = z
  .enum(["id", "name", "description", "version", "host", "port"])
  .array()
  .optional();

export const SecretDistinctSchema = z
  .enum(["id", "createdAt", "updatedAt", "version", "secret"])
  .array()
  .optional();

export const AppHistoryDistinctSchema = z
  .enum(["id", "appId", "startedAt", "stopeedAt"])
  .array()
  .optional();

export const AppOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  version: _strFilter.optional(),
  host: _strFilter.optional(),
  port: _strFilter.optional(),
});

export const SecretOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  version: _strFilter.optional(),
  secret: _strFilter.optional(),
});

export const AppHistoryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  appId: _intFilter.optional(),
  startedAt: _dateFilter.optional(),
  stopeedAt: _dateFilter.optional(),
});

export const AppOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppOwnWhereSchema
);

export const SecretOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SecretOwnWhereSchema
);

export const AppHistoryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppHistoryOwnWhereSchema
);

export const AppWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  version: _strFilter.optional(),
  host: _strFilter.optional(),
  port: _strFilter.optional(),
  history: z
    .object({
      every: AppHistoryOwnWhereSchema.optional(),
      some: AppHistoryOwnWhereSchema.optional(),
      none: AppHistoryOwnWhereSchema.optional(),
    })
    .optional(),
});

export const SecretWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  version: _strFilter.optional(),
  secret: _strFilter.optional(),
});

export const AppHistoryWhereSchema = z.object({
  id: _intFilter.optional(),
  appId: _intFilter.optional(),
  startedAt: _dateFilter.optional(),
  stopeedAt: _dateFilter.optional(),
  app: AppOwnWhereSchema.optional(),
});

export const AppWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppWhereSchema
);

export const SecretWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SecretWhereSchema
);

export const AppHistoryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppHistoryWhereSchema
);

export const AppOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  description: _direction,
  version: _direction,
  host: _direction,
  port: _direction,
});

export const SecretOwnOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  version: _direction,
  secret: _direction,
});

export const AppHistoryOwnOrderBySchema = z.object({
  id: _direction,
  appId: _direction,
  startedAt: _direction,
  stopeedAt: _direction,
});

export const AppOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppOwnOrderBySchema
);

export const SecretOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SecretOwnOrderBySchema
);

export const AppHistoryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppHistoryOwnOrderBySchema
);

export const AppOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  description: _direction,
  version: _direction,
  host: _direction,
  port: _direction,
  history: _orderByCount,
});

export const SecretOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  version: _direction,
  secret: _direction,
});

export const AppHistoryOrderBySchema = z.object({
  id: _direction,
  appId: _direction,
  startedAt: _direction,
  stopeedAt: _direction,
  app: AppOwnOrderBySchema.optional(),
});

export const AppOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppOrderBySchema
);

export const SecretOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SecretOrderBySchema
);

export const AppHistoryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppHistoryOrderBySchema
);

export const AppOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  version: _select,
  host: _select,
  port: _select,
});

export const SecretOwnSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  version: _select,
  secret: _select,
});

export const AppHistoryOwnSelectSchema = z.object({
  id: _select,
  appId: _select,
  startedAt: _select,
  stopeedAt: _select,
});

export const AppOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppOwnSelectSchema
);

export const SecretOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SecretOwnSelectSchema
);

export const AppHistoryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppHistoryOwnSelectSchema
);

export const AppSelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  version: _select,
  host: _select,
  port: _select,
  history: _select,
});

export const SecretSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  version: _select,
  secret: _select,
});

export const AppHistorySelectSchema = z.object({
  id: _select,
  appId: _select,
  startedAt: _select,
  stopeedAt: _select,
  app: _select,
});

export const AppSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppSelectSchema
);

export const SecretSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SecretSelectSchema
);

export const AppHistorySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppHistorySelectSchema
);

export const AppOmitSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  version: _select,
  host: _select,
  port: _select,
});

export const SecretOmitSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  version: _select,
  secret: _select,
});

export const AppHistoryOmitSchema = z.object({
  id: _select,
  appId: _select,
  startedAt: _select,
  stopeedAt: _select,
});

export const AppOmitSchemaJson = z.preprocess(_jsonPreprocessor, AppOmitSchema);

export const SecretOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SecretOmitSchema
);

export const AppHistoryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppHistoryOmitSchema
);

export const AppOwnQueryOneSchema = z.object({
  select: AppOwnSelectSchemaJson.optional(),
  omit: AppOmitSchemaJson.optional(),
  where: AppOwnWhereSchemaJson.optional(),
});

export const SecretOwnQueryOneSchema = z.object({
  select: SecretOwnSelectSchemaJson.optional(),
  omit: SecretOmitSchemaJson.optional(),
  where: SecretOwnWhereSchemaJson.optional(),
});

export const AppHistoryOwnQueryOneSchema = z.object({
  select: AppHistoryOwnSelectSchemaJson.optional(),
  omit: AppHistoryOmitSchemaJson.optional(),
  where: AppHistoryOwnWhereSchemaJson.optional(),
});

export const AppOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppOwnQueryOneSchema
);

export const SecretOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SecretOwnQueryOneSchema
);

export const AppHistoryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppHistoryOwnQueryOneSchema
);

export const AppOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AppDistinctSchema.optional(),
  select: AppOwnSelectSchemaJson.optional(),
  omit: AppOmitSchemaJson.optional(),
  where: AppOwnWhereSchemaJson.optional(),
  orderBy: AppOwnOrderBySchemaJson.optional(),
});

export const SecretOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SecretDistinctSchema.optional(),
  select: SecretOwnSelectSchemaJson.optional(),
  omit: SecretOmitSchemaJson.optional(),
  where: SecretOwnWhereSchemaJson.optional(),
  orderBy: SecretOwnOrderBySchemaJson.optional(),
});

export const AppHistoryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AppHistoryDistinctSchema.optional(),
  select: AppHistoryOwnSelectSchemaJson.optional(),
  omit: AppHistoryOmitSchemaJson.optional(),
  where: AppHistoryOwnWhereSchemaJson.optional(),
  orderBy: AppHistoryOwnOrderBySchemaJson.optional(),
});

export const AppOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppOwnQuerySchema
);

export const SecretOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SecretOwnQuerySchema
);

export const AppHistoryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppHistoryOwnQuerySchema
);

export const AppIncludeSchema = z.object({
  history: _select.or(AppHistoryOwnQueryOneSchema).optional(),
});

export const SecretIncludeSchema = z.object({});

export const AppHistoryIncludeSchema = z.object({
  app: _select.or(AppOwnQueryOneSchema).optional(),
});

export const AppIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppIncludeSchema
);

export const SecretIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SecretIncludeSchema
);

export const AppHistoryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppHistoryIncludeSchema
);

export const AppCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  version: _select,
  host: _select,
  port: _select,
  history: _select.or(AppHistoryOwnQueryOneSchema).optional(),
});

export const SecretCompleteSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  version: _select,
  secret: _select,
});

export const AppHistoryCompleteSelectSchema = z.object({
  id: _select,
  appId: _select,
  startedAt: _select,
  stopeedAt: _select,
  app: _select.or(AppOwnQueryOneSchema).optional(),
});

export const AppCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppCompleteSelectSchema
);

export const SecretCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SecretCompleteSelectSchema
);

export const AppHistoryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppHistoryCompleteSelectSchema
);

export const AppQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AppDistinctSchema.optional(),
  select: AppOwnSelectSchemaJson.optional(),
  omit: AppOmitSchemaJson.optional(),
  include: AppIncludeSchemaJson.optional(),
  where: AppOwnWhereSchemaJson.optional(),
  orderBy: AppOwnOrderBySchemaJson.optional(),
});

export const SecretQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SecretDistinctSchema.optional(),
  select: SecretOwnSelectSchemaJson.optional(),
  omit: SecretOmitSchemaJson.optional(),
  include: SecretIncludeSchemaJson.optional(),
  where: SecretOwnWhereSchemaJson.optional(),
  orderBy: SecretOwnOrderBySchemaJson.optional(),
});

export const AppHistoryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AppHistoryDistinctSchema.optional(),
  select: AppHistoryOwnSelectSchemaJson.optional(),
  omit: AppHistoryOmitSchemaJson.optional(),
  include: AppHistoryIncludeSchemaJson.optional(),
  where: AppHistoryOwnWhereSchemaJson.optional(),
  orderBy: AppHistoryOwnOrderBySchemaJson.optional(),
});

export const AppQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppQuerySchema
);

export const SecretQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SecretQuerySchema
);

export const AppHistoryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppHistoryQuerySchema
);

export const AppCompleteQueryOneSchema = z.object({
  select: AppSelectSchemaJson.optional(),
  omit: AppOmitSchemaJson.optional(),
  include: AppIncludeSchemaJson.optional(),
  where: AppWhereSchemaJson.optional(),
});

export const SecretCompleteQueryOneSchema = z.object({
  select: SecretSelectSchemaJson.optional(),
  omit: SecretOmitSchemaJson.optional(),
  include: SecretIncludeSchemaJson.optional(),
  where: SecretWhereSchemaJson.optional(),
});

export const AppHistoryCompleteQueryOneSchema = z.object({
  select: AppHistorySelectSchemaJson.optional(),
  omit: AppHistoryOmitSchemaJson.optional(),
  include: AppHistoryIncludeSchemaJson.optional(),
  where: AppHistoryWhereSchemaJson.optional(),
});

export const AppCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppCompleteQueryOneSchema
);

export const SecretCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SecretCompleteQueryOneSchema
);

export const AppHistoryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppHistoryCompleteQueryOneSchema
);

export const AppCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AppDistinctSchema.optional(),
  select: AppCompleteSelectSchemaJson.optional(),
  omit: AppOmitSchemaJson.optional(),
  include: AppIncludeSchemaJson.optional(),
  where: AppWhereSchemaJson.optional(),
  orderBy: AppOrderBySchemaJson.optional(),
});

export const SecretCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SecretDistinctSchema.optional(),
  select: SecretCompleteSelectSchemaJson.optional(),
  omit: SecretOmitSchemaJson.optional(),
  include: SecretIncludeSchemaJson.optional(),
  where: SecretWhereSchemaJson.optional(),
  orderBy: SecretOrderBySchemaJson.optional(),
});

export const AppHistoryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AppHistoryDistinctSchema.optional(),
  select: AppHistoryCompleteSelectSchemaJson.optional(),
  omit: AppHistoryOmitSchemaJson.optional(),
  include: AppHistoryIncludeSchemaJson.optional(),
  where: AppHistoryWhereSchemaJson.optional(),
  orderBy: AppHistoryOrderBySchemaJson.optional(),
});

export const AppCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppCompleteQuerySchema
);

export const SecretCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SecretCompleteQuerySchema
);

export const AppHistoryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AppHistoryCompleteQuerySchema
);

export const AppProjectionSchema = z.union([
  z.object({ omit: AppOmitSchemaJson }),
  z.object({ select: AppSelectSchemaJson }),
  z.object({ include: AppIncludeSchemaJson }),
  z.object({}),
]);

export const SecretProjectionSchema = z.union([
  z.object({ omit: SecretOmitSchemaJson }),
  z.object({ select: SecretSelectSchemaJson }),
  z.object({ include: SecretIncludeSchemaJson }),
  z.object({}),
]);

export const AppHistoryProjectionSchema = z.union([
  z.object({ omit: AppHistoryOmitSchemaJson }),
  z.object({ select: AppHistorySelectSchemaJson }),
  z.object({ include: AppHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const AppOwnCreateSchema = z.object({
  name: _name,
  description: _description.optional(),
  version: _str.optional(),
  host: _str,
  port: _str,
});

export const SecretOwnCreateSchema = z.object({
  version: _str.optional(),
  secret: _str,
});

export const AppHistoryOwnCreateSchema = z.object({
  appId: _id,
  stopeedAt: _date.optional(),
});

export const AppCreateSchema = z.object({
  name: _name,
  description: _description.optional(),
  version: _str.optional(),
  host: _str,
  port: _str,
  history: z.object({ createMany: AppHistoryOwnCreateSchema.array() }).array(),
});

export const SecretCreateSchema = z.object({
  version: _str.optional(),
  secret: _str,
});

export const AppHistoryCreateSchema = z.object({
  appId: _id,
  stopeedAt: _date.optional(),
  app: z.object({ create: AppOwnCreateSchema }),
});

export const AppUpdateSchema = z.object({
  name: _name,
  description: _description.optional(),
  version: _str.optional(),
  host: _str,
  port: _str,
});

export const SecretUpdateSchema = z.object({ secret: _str });

export const AppHistoryUpdateSchema = z.object({
  appId: _id,
  stopeedAt: _date.optional(),
});

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

export const StatusSchema = z.enum(["DONE", "IN_PROGRESS", "NEW"]);

export const __StatusFilterSchema = z.object({
  equals: StatusSchema.optional(),
  in: StatusSchema.array().optional(),
  notIn: StatusSchema.array().optional(),
});
export const StatusFilterSchema = z.object({
  equals: StatusSchema.optional(),
  in: StatusSchema.array().optional(),
  notIn: StatusSchema.array().optional(),
  not: StatusSchema.or(__StatusFilterSchema).optional(),
});

export const StatusArrayFilterSchema = z.object({
  equals: StatusSchema.array().optional(),
  has: StatusSchema.optional(),
  hasEvery: StatusSchema.array().optional(),
  hasSome: StatusSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const CategoryDistinctSchema = z
  .enum(["id", "parentId", "name", "description"])
  .array()
  .optional();

export const TagDistinctSchema = z.enum(["id", "name"]).array().optional();

export const SampleDistinctSchema = z
  .enum([
    "id",
    "uuid",
    "otherUuid",
    "createdAt",
    "updatedAt",
    "deletedAt",
    "categoryId",
    "name",
    "slug",
    "description",
    "active",
    "notes",
    "nums",
    "url",
    "json",
    "email",
    "password",
    "price",
    "cost",
    "status",
    "statuses",
  ])
  .array()
  .optional();

export const SampleTagDistinctSchema = z
  .enum(["id", "tagId", "sampleId"])
  .array()
  .optional();

export const CategoryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  parentId: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
});

export const TagOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const SampleOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  otherUuid: _strFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  deletedAt: _dateFilter.optional(),
  categoryId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
  active: _boolFilter.optional(),
  notes: _strArrayFilter.optional(),
  nums: _intArrayFilter.optional(),
  url: _strFilter.optional(),
  json: _jsonFilter.optional(),
  email: _strFilter.optional(),
  password: _strFilter.optional(),
  price: _numFilter.optional(),
  cost: _numFilter.optional(),
  status: StatusFilterSchema.optional(),
  statuses: StatusArrayFilterSchema.optional(),
});

export const SampleTagOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  tagId: _intFilter.optional(),
  sampleId: _intFilter.optional(),
});

export const CategoryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnWhereSchema
);

export const TagOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagOwnWhereSchema
);

export const SampleOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleOwnWhereSchema
);

export const SampleTagOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleTagOwnWhereSchema
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
  samples: z
    .object({
      every: SampleOwnWhereSchema.optional(),
      some: SampleOwnWhereSchema.optional(),
      none: SampleOwnWhereSchema.optional(),
    })
    .optional(),
});

export const TagWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  samples: z
    .object({
      every: SampleTagOwnWhereSchema.optional(),
      some: SampleTagOwnWhereSchema.optional(),
      none: SampleTagOwnWhereSchema.optional(),
    })
    .optional(),
});

export const SampleWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  otherUuid: _strFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  deletedAt: _dateFilter.optional(),
  categoryId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
  active: _boolFilter.optional(),
  notes: _strArrayFilter.optional(),
  nums: _intArrayFilter.optional(),
  url: _strFilter.optional(),
  json: _jsonFilter.optional(),
  email: _strFilter.optional(),
  password: _strFilter.optional(),
  price: _numFilter.optional(),
  cost: _numFilter.optional(),
  category: CategoryOwnWhereSchema.optional(),
  tags: z
    .object({
      every: SampleTagOwnWhereSchema.optional(),
      some: SampleTagOwnWhereSchema.optional(),
      none: SampleTagOwnWhereSchema.optional(),
    })
    .optional(),
  status: StatusFilterSchema.optional(),
  statuses: StatusArrayFilterSchema.optional(),
});

export const SampleTagWhereSchema = z.object({
  id: _intFilter.optional(),
  tagId: _intFilter.optional(),
  sampleId: _intFilter.optional(),
  sample: SampleOwnWhereSchema.optional(),
  tag: TagOwnWhereSchema.optional(),
});

export const CategoryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryWhereSchema
);

export const TagWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagWhereSchema
);

export const SampleWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleWhereSchema
);

export const SampleTagWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleTagWhereSchema
);

export const CategoryOwnOrderBySchema = z.object({
  id: _direction,
  parentId: _direction,
  name: _direction,
  description: _direction,
});

export const TagOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
});

export const SampleOwnOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  otherUuid: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  deletedAt: _direction,
  categoryId: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
  active: _direction,
  notes: _direction,
  nums: _direction,
  url: _direction,
  json: _direction,
  email: _direction,
  password: _direction,
  price: _direction,
  cost: _direction,
  status: _direction,
  statuses: _direction,
});

export const SampleTagOwnOrderBySchema = z.object({
  id: _direction,
  tagId: _direction,
  sampleId: _direction,
});

export const CategoryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnOrderBySchema
);

export const TagOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagOwnOrderBySchema
);

export const SampleOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleOwnOrderBySchema
);

export const SampleTagOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleTagOwnOrderBySchema
);

export const CategoryOrderBySchema = z.object({
  id: _direction,
  parentId: _direction,
  name: _direction,
  description: _direction,
  parent: CategoryOwnOrderBySchema.optional(),
  children: _orderByCount,
  samples: _orderByCount,
});

export const TagOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  samples: _orderByCount,
});

export const SampleOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  otherUuid: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  deletedAt: _direction,
  categoryId: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
  active: _direction,
  notes: _direction,
  nums: _direction,
  url: _direction,
  json: _direction,
  email: _direction,
  password: _direction,
  price: _direction,
  cost: _direction,
  category: CategoryOwnOrderBySchema.optional(),
  tags: _orderByCount,
  status: _direction,
  statuses: _direction,
});

export const SampleTagOrderBySchema = z.object({
  id: _direction,
  tagId: _direction,
  sampleId: _direction,
  sample: SampleOwnOrderBySchema.optional(),
  tag: TagOwnOrderBySchema.optional(),
});

export const CategoryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOrderBySchema
);

export const TagOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagOrderBySchema
);

export const SampleOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleOrderBySchema
);

export const SampleTagOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleTagOrderBySchema
);

export const CategoryOwnSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  description: _select,
});

export const TagOwnSelectSchema = z.object({ id: _select, name: _select });

export const SampleOwnSelectSchema = z.object({
  id: _select,
  uuid: _select,
  otherUuid: _select,
  createdAt: _select,
  updatedAt: _select,
  deletedAt: _select,
  categoryId: _select,
  name: _select,
  slug: _select,
  description: _select,
  active: _select,
  notes: _select,
  nums: _select,
  url: _select,
  json: _select,
  email: _select,
  password: _select,
  price: _select,
  cost: _select,
  status: _select,
  statuses: _select,
});

export const SampleTagOwnSelectSchema = z.object({
  id: _select,
  tagId: _select,
  sampleId: _select,
});

export const CategoryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnSelectSchema
);

export const TagOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagOwnSelectSchema
);

export const SampleOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleOwnSelectSchema
);

export const SampleTagOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleTagOwnSelectSchema
);

export const CategorySelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  description: _select,
  parent: _select,
  children: _select,
  samples: _select,
});

export const TagSelectSchema = z.object({
  id: _select,
  name: _select,
  samples: _select,
});

export const SampleSelectSchema = z.object({
  id: _select,
  uuid: _select,
  otherUuid: _select,
  createdAt: _select,
  updatedAt: _select,
  deletedAt: _select,
  categoryId: _select,
  name: _select,
  slug: _select,
  description: _select,
  active: _select,
  notes: _select,
  nums: _select,
  url: _select,
  json: _select,
  email: _select,
  password: _select,
  price: _select,
  cost: _select,
  category: _select,
  tags: _select,
  status: _select,
  statuses: _select,
});

export const SampleTagSelectSchema = z.object({
  id: _select,
  tagId: _select,
  sampleId: _select,
  sample: _select,
  tag: _select,
});

export const CategorySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategorySelectSchema
);

export const TagSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagSelectSchema
);

export const SampleSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleSelectSchema
);

export const SampleTagSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleTagSelectSchema
);

export const CategoryOmitSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  description: _select,
});

export const TagOmitSchema = z.object({ id: _select, name: _select });

export const SampleOmitSchema = z.object({
  id: _select,
  uuid: _select,
  otherUuid: _select,
  createdAt: _select,
  updatedAt: _select,
  deletedAt: _select,
  categoryId: _select,
  name: _select,
  slug: _select,
  description: _select,
  active: _select,
  notes: _select,
  nums: _select,
  url: _select,
  json: _select,
  email: _select,
  password: _select,
  price: _select,
  cost: _select,
  status: _select,
  statuses: _select,
});

export const SampleTagOmitSchema = z.object({
  id: _select,
  tagId: _select,
  sampleId: _select,
});

export const CategoryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOmitSchema
);

export const TagOmitSchemaJson = z.preprocess(_jsonPreprocessor, TagOmitSchema);

export const SampleOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleOmitSchema
);

export const SampleTagOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleTagOmitSchema
);

export const CategoryOwnQueryOneSchema = z.object({
  select: CategoryOwnSelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  where: CategoryOwnWhereSchemaJson.optional(),
});

export const TagOwnQueryOneSchema = z.object({
  select: TagOwnSelectSchemaJson.optional(),
  omit: TagOmitSchemaJson.optional(),
  where: TagOwnWhereSchemaJson.optional(),
});

export const SampleOwnQueryOneSchema = z.object({
  select: SampleOwnSelectSchemaJson.optional(),
  omit: SampleOmitSchemaJson.optional(),
  where: SampleOwnWhereSchemaJson.optional(),
});

export const SampleTagOwnQueryOneSchema = z.object({
  select: SampleTagOwnSelectSchemaJson.optional(),
  omit: SampleTagOmitSchemaJson.optional(),
  where: SampleTagOwnWhereSchemaJson.optional(),
});

export const CategoryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnQueryOneSchema
);

export const TagOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagOwnQueryOneSchema
);

export const SampleOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleOwnQueryOneSchema
);

export const SampleTagOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleTagOwnQueryOneSchema
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

export const TagOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TagDistinctSchema.optional(),
  select: TagOwnSelectSchemaJson.optional(),
  omit: TagOmitSchemaJson.optional(),
  where: TagOwnWhereSchemaJson.optional(),
  orderBy: TagOwnOrderBySchemaJson.optional(),
});

export const SampleOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SampleDistinctSchema.optional(),
  select: SampleOwnSelectSchemaJson.optional(),
  omit: SampleOmitSchemaJson.optional(),
  where: SampleOwnWhereSchemaJson.optional(),
  orderBy: SampleOwnOrderBySchemaJson.optional(),
});

export const SampleTagOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SampleTagDistinctSchema.optional(),
  select: SampleTagOwnSelectSchemaJson.optional(),
  omit: SampleTagOmitSchemaJson.optional(),
  where: SampleTagOwnWhereSchemaJson.optional(),
  orderBy: SampleTagOwnOrderBySchemaJson.optional(),
});

export const CategoryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnQuerySchema
);

export const TagOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagOwnQuerySchema
);

export const SampleOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleOwnQuerySchema
);

export const SampleTagOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleTagOwnQuerySchema
);

export const CategoryIncludeSchema = z.object({
  parent: _select.or(CategoryOwnQueryOneSchema).optional(),
  children: _select.or(CategoryOwnQueryOneSchema).optional(),
  samples: _select.or(SampleOwnQueryOneSchema).optional(),
});

export const TagIncludeSchema = z.object({
  samples: _select.or(SampleTagOwnQueryOneSchema).optional(),
});

export const SampleIncludeSchema = z.object({
  category: _select.or(CategoryOwnQueryOneSchema).optional(),
  tags: _select.or(SampleTagOwnQueryOneSchema).optional(),
});

export const SampleTagIncludeSchema = z.object({
  sample: _select.or(SampleOwnQueryOneSchema).optional(),
  tag: _select.or(TagOwnQueryOneSchema).optional(),
});

export const CategoryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryIncludeSchema
);

export const TagIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagIncludeSchema
);

export const SampleIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleIncludeSchema
);

export const SampleTagIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleTagIncludeSchema
);

export const CategoryCompleteSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  description: _select,
  parent: _select.or(CategoryOwnQueryOneSchema).optional(),
  children: _select.or(CategoryOwnQueryOneSchema).optional(),
  samples: _select.or(SampleOwnQueryOneSchema).optional(),
});

export const TagCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  samples: _select.or(SampleTagOwnQueryOneSchema).optional(),
});

export const SampleCompleteSelectSchema = z.object({
  id: _select,
  uuid: _select,
  otherUuid: _select,
  createdAt: _select,
  updatedAt: _select,
  deletedAt: _select,
  categoryId: _select,
  name: _select,
  slug: _select,
  description: _select,
  active: _select,
  notes: _select,
  nums: _select,
  url: _select,
  json: _select,
  email: _select,
  password: _select,
  price: _select,
  cost: _select,
  category: _select.or(CategoryOwnQueryOneSchema).optional(),
  tags: _select.or(SampleTagOwnQueryOneSchema).optional(),
  status: _select,
  statuses: _select,
});

export const SampleTagCompleteSelectSchema = z.object({
  id: _select,
  tagId: _select,
  sampleId: _select,
  sample: _select.or(SampleOwnQueryOneSchema).optional(),
  tag: _select.or(TagOwnQueryOneSchema).optional(),
});

export const CategoryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryCompleteSelectSchema
);

export const TagCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagCompleteSelectSchema
);

export const SampleCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleCompleteSelectSchema
);

export const SampleTagCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleTagCompleteSelectSchema
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

export const TagQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TagDistinctSchema.optional(),
  select: TagOwnSelectSchemaJson.optional(),
  omit: TagOmitSchemaJson.optional(),
  include: TagIncludeSchemaJson.optional(),
  where: TagOwnWhereSchemaJson.optional(),
  orderBy: TagOwnOrderBySchemaJson.optional(),
});

export const SampleQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SampleDistinctSchema.optional(),
  select: SampleOwnSelectSchemaJson.optional(),
  omit: SampleOmitSchemaJson.optional(),
  include: SampleIncludeSchemaJson.optional(),
  where: SampleOwnWhereSchemaJson.optional(),
  orderBy: SampleOwnOrderBySchemaJson.optional(),
});

export const SampleTagQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SampleTagDistinctSchema.optional(),
  select: SampleTagOwnSelectSchemaJson.optional(),
  omit: SampleTagOmitSchemaJson.optional(),
  include: SampleTagIncludeSchemaJson.optional(),
  where: SampleTagOwnWhereSchemaJson.optional(),
  orderBy: SampleTagOwnOrderBySchemaJson.optional(),
});

export const CategoryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryQuerySchema
);

export const TagQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagQuerySchema
);

export const SampleQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleQuerySchema
);

export const SampleTagQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleTagQuerySchema
);

export const CategoryCompleteQueryOneSchema = z.object({
  select: CategorySelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  include: CategoryIncludeSchemaJson.optional(),
  where: CategoryWhereSchemaJson.optional(),
});

export const TagCompleteQueryOneSchema = z.object({
  select: TagSelectSchemaJson.optional(),
  omit: TagOmitSchemaJson.optional(),
  include: TagIncludeSchemaJson.optional(),
  where: TagWhereSchemaJson.optional(),
});

export const SampleCompleteQueryOneSchema = z.object({
  select: SampleSelectSchemaJson.optional(),
  omit: SampleOmitSchemaJson.optional(),
  include: SampleIncludeSchemaJson.optional(),
  where: SampleWhereSchemaJson.optional(),
});

export const SampleTagCompleteQueryOneSchema = z.object({
  select: SampleTagSelectSchemaJson.optional(),
  omit: SampleTagOmitSchemaJson.optional(),
  include: SampleTagIncludeSchemaJson.optional(),
  where: SampleTagWhereSchemaJson.optional(),
});

export const CategoryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryCompleteQueryOneSchema
);

export const TagCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagCompleteQueryOneSchema
);

export const SampleCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleCompleteQueryOneSchema
);

export const SampleTagCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleTagCompleteQueryOneSchema
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

export const TagCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TagDistinctSchema.optional(),
  select: TagCompleteSelectSchemaJson.optional(),
  omit: TagOmitSchemaJson.optional(),
  include: TagIncludeSchemaJson.optional(),
  where: TagWhereSchemaJson.optional(),
  orderBy: TagOrderBySchemaJson.optional(),
});

export const SampleCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SampleDistinctSchema.optional(),
  select: SampleCompleteSelectSchemaJson.optional(),
  omit: SampleOmitSchemaJson.optional(),
  include: SampleIncludeSchemaJson.optional(),
  where: SampleWhereSchemaJson.optional(),
  orderBy: SampleOrderBySchemaJson.optional(),
});

export const SampleTagCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SampleTagDistinctSchema.optional(),
  select: SampleTagCompleteSelectSchemaJson.optional(),
  omit: SampleTagOmitSchemaJson.optional(),
  include: SampleTagIncludeSchemaJson.optional(),
  where: SampleTagWhereSchemaJson.optional(),
  orderBy: SampleTagOrderBySchemaJson.optional(),
});

export const CategoryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryCompleteQuerySchema
);

export const TagCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagCompleteQuerySchema
);

export const SampleCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleCompleteQuerySchema
);

export const SampleTagCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SampleTagCompleteQuerySchema
);

export const CategoryProjectionSchema = z.union([
  z.object({ omit: CategoryOmitSchemaJson }),
  z.object({ select: CategorySelectSchemaJson }),
  z.object({ include: CategoryIncludeSchemaJson }),
  z.object({}),
]);

export const TagProjectionSchema = z.union([
  z.object({ omit: TagOmitSchemaJson }),
  z.object({ select: TagSelectSchemaJson }),
  z.object({ include: TagIncludeSchemaJson }),
  z.object({}),
]);

export const SampleProjectionSchema = z.union([
  z.object({ omit: SampleOmitSchemaJson }),
  z.object({ select: SampleSelectSchemaJson }),
  z.object({ include: SampleIncludeSchemaJson }),
  z.object({}),
]);

export const SampleTagProjectionSchema = z.union([
  z.object({ omit: SampleTagOmitSchemaJson }),
  z.object({ select: SampleTagSelectSchemaJson }),
  z.object({ include: SampleTagIncludeSchemaJson }),
  z.object({}),
]);

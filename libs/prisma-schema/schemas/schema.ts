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
  json: _strFilter.optional(),
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

export const CategoryOwnQueryOneSchema = z.object({
  select: CategoryOwnSelectSchema.optional(),
  omit: CategoryOmitSchema.optional(),
  where: CategoryOwnWhereSchema.optional(),
});

export const TagOwnQueryOneSchema = z.object({
  select: TagOwnSelectSchema.optional(),
  omit: TagOmitSchema.optional(),
  where: TagOwnWhereSchema.optional(),
});

export const SampleOwnQueryOneSchema = z.object({
  select: SampleOwnSelectSchema.optional(),
  omit: SampleOmitSchema.optional(),
  where: SampleOwnWhereSchema.optional(),
});

export const SampleTagOwnQueryOneSchema = z.object({
  select: SampleTagOwnSelectSchema.optional(),
  omit: SampleTagOmitSchema.optional(),
  where: SampleTagOwnWhereSchema.optional(),
});

export const CategoryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CategoryDistinctSchema.optional(),
  select: CategoryOwnSelectSchema.optional(),
  omit: CategoryOmitSchema.optional(),
  where: CategoryOwnWhereSchema.optional(),
});

export const TagOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TagDistinctSchema.optional(),
  select: TagOwnSelectSchema.optional(),
  omit: TagOmitSchema.optional(),
  where: TagOwnWhereSchema.optional(),
});

export const SampleOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SampleDistinctSchema.optional(),
  select: SampleOwnSelectSchema.optional(),
  omit: SampleOmitSchema.optional(),
  where: SampleOwnWhereSchema.optional(),
});

export const SampleTagOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SampleTagDistinctSchema.optional(),
  select: SampleTagOwnSelectSchema.optional(),
  omit: SampleTagOmitSchema.optional(),
  where: SampleTagOwnWhereSchema.optional(),
});

export const CategoryIncludeSchema = z.object({
  parent: _select.or(CategoryOwnQueryOneSchema).optional(),
  children: _select.or(CategoryOwnQuerySchema).optional(),
  samples: _select.or(SampleOwnQuerySchema).optional(),
});

export const TagIncludeSchema = z.object({
  samples: _select.or(SampleTagOwnQuerySchema).optional(),
});

export const SampleIncludeSchema = z.object({
  category: _select.or(CategoryOwnQueryOneSchema).optional(),
  tags: _select.or(SampleTagOwnQuerySchema).optional(),
});

export const SampleTagIncludeSchema = z.object({
  sample: _select.or(SampleOwnQueryOneSchema).optional(),
  tag: _select.or(TagOwnQueryOneSchema).optional(),
});

export const CategoryCompleteSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  description: _select,
  parent: _select.or(CategoryOwnQueryOneSchema).optional(),
  children: _select.or(CategoryOwnQuerySchema).optional(),
  samples: _select.or(SampleOwnQuerySchema).optional(),
});

export const TagCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  samples: _select.or(SampleTagOwnQuerySchema).optional(),
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
  tags: _select.or(SampleTagOwnQuerySchema).optional(),
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

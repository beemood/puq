import z from 'zod';

export const _int = z.coerce.number().int();

export const _string = z.string();

export const _number = z.coerce.number();

export const _bool = z.coerce.boolean();

export const _datetime = z.iso.datetime();

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
    error: 'Slug must contain only lowercase letters, numbers, and dash.',
  });

export const _description = z.string().max(1000);

export const _email = z.string().max(1000);

export const _url = z.url();

export const _password = z
  .string()
  .min(6)
  .regex(/[A-Z]{1,}/, { error: 'must contain at least one upper-case letter' })
  .regex(/[a-z]{1,}/, { error: 'must contain at least one lower-case letter' })
  .regex(/[0-9]{1,}/, { error: 'must contain at least one number' })
  .regex(/[~!@#$%^&*()_+{}":'<>?]{1,}/, {
    error: 'must contain at least one special character',
  });

export const _select = z.coerce.boolean().optional();

export const _direction = z.enum(['asc', 'desc']).optional();

export const _orderByCount = z.object({ _count: _direction }).optional();

export const _jsonPreprocessor = (value: unknown) => {
  if (typeof value === 'string') {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  return value;
};

export function _slugify(name: string) {
  return name.replace(/[^[0-9a-z- ]/g, '').replace(/\s{1,}/g, '-');
}



export const StatusSchema = z.enum(['DONE', 'IN_PROGRESS', 'NEW']);

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
  url: _direction,
  json: _direction,
  email: _direction,
  password: _direction,
  price: _direction,
  cost: _direction,
  status: _direction,
});

export const SampleTagOwnOrderBySchema = z.object({
  id: _direction,
  tagId: _direction,
  sampleId: _direction,
});

export const CategoryOwnSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  description: _select,
  parent: _select,
  children: _select,
  samples: _select,
});

export const TagOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  samples: _select,
});

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
  url: _select,
  json: _select,
  email: _select,
  password: _select,
  price: _select,
  cost: _select,
  category: _select,
  tags: _select,
  status: _select,
});

export const SampleTagOwnSelectSchema = z.object({
  id: _select,
  tagId: _select,
  sampleId: _select,
  sample: _select,
  tag: _select,
});

export const CategoryOrderBySchema = z.object({
  id: _direction,
  parentId: _direction,
  name: _direction,
  description: _direction,
  parent: CategoryOwnOrderBySchema,
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
  url: _direction,
  json: _direction,
  email: _direction,
  password: _direction,
  price: _direction,
  cost: _direction,
  category: CategoryOwnOrderBySchema,
  tags: _orderByCount,
  status: _direction,
});

export const SampleTagOrderBySchema = z.object({
  id: _direction,
  tagId: _direction,
  sampleId: _direction,
  sample: SampleOwnOrderBySchema,
  tag: TagOwnOrderBySchema,
});

export const CategorySelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  description: _select,
  parent: z.boolean().or(CategoryOwnQueryOneSchema).optional(),
  children: z.boolean().or(CategoryOwnQueryOneSchema).optional(),
  samples: z.boolean().or(SampleOwnQueryOneSchema).optional(),
});

export const TagSelectSchema = z.object({
  id: _select,
  name: _select,
  samples: z.boolean().or(SampleTagOwnQueryOneSchema).optional(),
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
  url: _select,
  json: _select,
  email: _select,
  password: _select,
  price: _select,
  cost: _select,
  category: z.boolean().or(CategoryOwnQueryOneSchema).optional(),
  tags: z.boolean().or(SampleTagOwnQueryOneSchema).optional(),
  status: _select,
});

export const SampleTagSelectSchema = z.object({
  id: _select,
  tagId: _select,
  sampleId: _select,
  sample: z.boolean().or(SampleOwnQueryOneSchema).optional(),
  tag: z.boolean().or(TagOwnQueryOneSchema).optional(),
});

export const CategoryCreateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
  description: _description.optional(),
});

export const TagCreateSchema = z.object({ name: _name });

export const SampleCreateSchema = z.object({
  otherUuid: _string.optional(),
  categoryId: _id.optional(),
  name: _name,
  slug: _slug,
  description: _description.optional(),
  active: _bool.optional(),
  notes: _string.array(),
  url: _url.optional(),
  json: z.json().optional(),
  email: _email,
  password: _password.optional(),
  price: _currency,
  cost: _currency,
  status: StatusSchema.optional(),
});

export const SampleTagCreateSchema = z.object({ tagId: _id, sampleId: _id });

export const CategoryUpdateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
  description: _description.optional(),
});

export const TagUpdateSchema = z.object({ name: _name });

export const SampleUpdateSchema = z.object({
  deletedAt: _datetime.optional(),
  categoryId: _id.optional(),
  name: _name,
  description: _description.optional(),
  active: _bool.optional(),
  notes: _string.array(),
  url: _url.optional(),
  json: z.json().optional(),
  email: _email,
  password: _password.optional(),
  price: _currency,
  cost: _currency,
  status: StatusSchema.optional(),
});

export const SampleTagUpdateSchema = z.object({ tagId: _id, sampleId: _id });

export const SampleOwnSelectSchemaProcessed = z.preprocess((value) => {
  value = _jsonPreprocessor(value);
  return value;
}, SampleOwnSelectSchema);

export const SampleOwnOrderBySchemaProcessed = z.preprocess((value) => {
  value = _jsonPreprocessor(value);
  return value;
}, SampleOwnOrderBySchema);

export const SampleSelectSchemaProcessed = z.preprocess((value) => {
  value = _jsonPreprocessor(value);
  return value;
}, SampleSelectSchema);

export const SampleOrderBySchemaProcessed = z.preprocess((value) => {
  value = _jsonPreprocessor(value);
  return value;
}, SampleOrderBySchema);

export const SampleOmitSchemaProcessed = z.preprocess((value) => {
  value = _jsonPreprocessor(value);
  return value;
}, SampleOmitSchema);

export const SampleIncludeSchemaProcessed = z.preprocess((value) => {
  value = _jsonPreprocessor(value);
  return value;
}, SampleIncludeSchema);

export type SampleOwnSelect = z.infer<typeof SampleOwnSelectSchema>;

export type SampleOwnOrderBy = z.infer<typeof SampleOwnOrderBySchema>;

export type SampleCreate = z.infer<typeof SampleCreateSchema>;

export type SampleUpdate = z.infer<typeof SampleUpdateSchema>;

export type SampleSelect = z.infer<typeof SampleSelectSchema>;

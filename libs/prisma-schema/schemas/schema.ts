import * as PZ from "@puq/zod";

import z from "zod";

export const StatusSchema = z.enum([
  "[object Object]",
  "[object Object]",
  "[object Object]",
]);

export const CategoryOwnOrderBySchema = z.object({
  id: z.enum(["asc", "desc"]).optional(),
  parentId: z.enum(["asc", "desc"]).optional(),
  name: z.enum(["asc", "desc"]).optional(),
  description: z.enum(["asc", "desc"]).optional(),
});

export const TagOwnOrderBySchema = z.object({
  id: z.enum(["asc", "desc"]).optional(),
  name: z.enum(["asc", "desc"]).optional(),
});

export const SampleOwnOrderBySchema = z.object({
  id: z.enum(["asc", "desc"]).optional(),
  uuid: z.enum(["asc", "desc"]).optional(),
  otherUuid: z.enum(["asc", "desc"]).optional(),
  createdAt: z.enum(["asc", "desc"]).optional(),
  updatedAt: z.enum(["asc", "desc"]).optional(),
  deletedAt: z.enum(["asc", "desc"]).optional(),
  categoryId: z.enum(["asc", "desc"]).optional(),
  name: z.enum(["asc", "desc"]).optional(),
  slug: z.enum(["asc", "desc"]).optional(),
  description: z.enum(["asc", "desc"]).optional(),
  active: z.enum(["asc", "desc"]).optional(),
  notes: z.enum(["asc", "desc"]).optional(),
  url: z.enum(["asc", "desc"]).optional(),
  json: z.enum(["asc", "desc"]).optional(),
  email: z.enum(["asc", "desc"]).optional(),
  password: z.enum(["asc", "desc"]).optional(),
  price: z.enum(["asc", "desc"]).optional(),
  cost: z.enum(["asc", "desc"]).optional(),
  status: z.enum(["asc", "desc"]).optional(),
});

export const SampleTagOwnOrderBySchema = z.object({
  id: z.enum(["asc", "desc"]).optional(),
  tagId: z.enum(["asc", "desc"]).optional(),
  sampleId: z.enum(["asc", "desc"]).optional(),
});

export const CategoryOwnSelectSchema = z.object({
  id: z.boolean().optional(),
  parentId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  parent: z.boolean().optional(),
  children: z.boolean().optional(),
  samples: z.boolean().optional(),
});

export const TagOwnSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  samples: z.boolean().optional(),
});

export const SampleOwnSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  otherUuid: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  active: z.boolean().optional(),
  notes: z.boolean().optional(),
  url: z.boolean().optional(),
  json: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  price: z.boolean().optional(),
  cost: z.boolean().optional(),
  category: z.boolean().optional(),
  tags: z.boolean().optional(),
  status: z.boolean().optional(),
});

export const SampleTagOwnSelectSchema = z.object({
  id: z.boolean().optional(),
  tagId: z.boolean().optional(),
  sampleId: z.boolean().optional(),
  sample: z.boolean().optional(),
  tag: z.boolean().optional(),
});

export const CategoryCreateSchema = z.object({
  parentId: z.coerce.number().int().positive().optional(),
  name: z.string().min(3).max(30),
  description: z.string().max(1000).optional(),
});

export const TagCreateSchema = z.object({ name: z.string().min(3).max(30) });

export const SampleCreateSchema = z.object({
  otherUuid: PZ.Scalar.string().optional(),
  categoryId: z.coerce.number().int().positive().optional(),
  name: z.string().min(3).max(30),
  slug: z.string().min(3).max(35),
  description: z.string().max(1000).optional(),
  active: z.coerce.boolean().optional(),
  notes: PZ.Scalar.string().array(),
  url: z.url().optional(),
  json: PZ.Scalar.json().optional(),
  email: z.email(),
  password: z
    .string()
    .min(6)
    .regex(/[A-Z]{1,}/, {
      error: "must contain at least one upper-case letter",
    })
    .regex(/[a-z]{1,}/, {
      error: "must contain at least one lower-case letter",
    })
    .regex(/[0-9]{1,}/, { error: "must contain at least one number" })
    .regex(/[~!@#$%^&*()_+{}":'<>?]{1,}/, {
      error: "must contain at least one special character",
    })
    .optional(),
  price: z.coerce.number().min(0),
  cost: z.coerce.number().min(0),
  status: StatusSchema.optional(),
});

export const SampleTagCreateSchema = z.object({
  tagId: z.coerce.number().int().positive(),
  sampleId: z.coerce.number().int().positive(),
});

export const CategoryUpdateSchema = z.object({
  parentId: z.coerce.number().int().positive().optional(),
  name: z.string().min(3).max(30),
  description: z.string().max(1000).optional(),
});

export const TagUpdateSchema = z.object({ name: z.string().min(3).max(30) });

export const SampleUpdateSchema = z.object({
  deletedAt: z.iso.datetime().optional(),
  categoryId: z.coerce.number().int().positive().optional(),
  name: z.string().min(3).max(30),
  description: z.string().max(1000).optional(),
  active: z.coerce.boolean().optional(),
  notes: PZ.Scalar.string().array(),
  url: z.url().optional(),
  json: PZ.Scalar.json().optional(),
  email: z.email(),
  password: z
    .string()
    .min(6)
    .regex(/[A-Z]{1,}/, {
      error: "must contain at least one upper-case letter",
    })
    .regex(/[a-z]{1,}/, {
      error: "must contain at least one lower-case letter",
    })
    .regex(/[0-9]{1,}/, { error: "must contain at least one number" })
    .regex(/[~!@#$%^&*()_+{}":'<>?]{1,}/, {
      error: "must contain at least one special character",
    })
    .optional(),
  price: z.coerce.number().min(0),
  cost: z.coerce.number().min(0),
  status: StatusSchema.optional(),
});

export const SampleTagUpdateSchema = z.object({
  tagId: z.coerce.number().int().positive(),
  sampleId: z.coerce.number().int().positive(),
});


export type CategoryOwnSelect = z.infer<typeof CategoryOwnSelectSchema>;

export type TagOwnSelect = z.infer<typeof TagOwnSelectSchema>;

export type SampleOwnSelect = z.infer<typeof SampleOwnSelectSchema>;

export type SampleTagOwnSelect = z.infer<typeof SampleTagOwnSelectSchema>;

export type CategoryOwnOrderBy = z.infer<typeof CategoryOwnOrderBySchema>;

export type TagOwnOrderBy = z.infer<typeof TagOwnOrderBySchema>;

export type SampleOwnOrderBy = z.infer<typeof SampleOwnOrderBySchema>;

export type SampleTagOwnOrderBy = z.infer<typeof SampleTagOwnOrderBySchema>;

export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;

export type TagCreate = z.infer<typeof TagCreateSchema>;

export type SampleCreate = z.infer<typeof SampleCreateSchema>;

export type SampleTagCreate = z.infer<typeof SampleTagCreateSchema>;

export type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;

export type TagUpdate = z.infer<typeof TagUpdateSchema>;

export type SampleUpdate = z.infer<typeof SampleUpdateSchema>;

export type SampleTagUpdate = z.infer<typeof SampleTagUpdateSchema>;

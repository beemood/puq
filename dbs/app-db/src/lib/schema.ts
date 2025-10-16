/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PZ from '@puq/zod';
import { z } from 'zod';
import { slugify } from '@puq/names';

export const takeSchema = z.coerce.number().int().min(1).default(20).optional();
export const skipSchema = z.coerce.number().int().min(0).default(0).optional();
export const PaginationSchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
  })
  .partial();

export const nameSchema = z.string().min(2).max(30);
export const descriptionSchema = z.string().max(1000);
export const currencySchema = z.coerce.number().positive();
export const positiveIntegerSchema = z.coerce.number().int().positive();
export const emailSchema = z.email();
export const dateSchema = z.iso.datetime();
export const slugSchema = z.string().regex(/^[a-z-]{2,}$/);

export function jsonParser<T>(value: T) {
  if (typeof value === 'string') {
    return JSON.parse(value);
  }
  return value;
}

export function slugTransformer(key: string) {
  return (value: any) => {
    if (value.slug == undefined && value[key] != undefined) {
      return {
        ...value,
        slug: value[key] ? slugify(value[key].toString()) : null,
      };
    }
    return value;
  };
}

export const AppOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    version: z.boolean(),
    host: z.boolean(),
    port: z.boolean(),
    history: z.boolean(),
  })
  .partial();

export const AppOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  AppOwnProjectionSchema
);

export const SecretOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    version: z.boolean(),
    secret: z.boolean(),
  })
  .partial();

export const SecretOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  SecretOwnProjectionSchema
);

export const AppHistoryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    appId: z.boolean(),
    startedAt: z.boolean(),
    stopeedAt: z.boolean(),
    app: z.boolean(),
  })
  .partial();

export const AppHistoryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  AppHistoryOwnProjectionSchema
);

export const AppOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    version: PZ.StringFilterSchema,
    host: PZ.StringFilterSchema,
    port: PZ.StringFilterSchema,
  })
  .partial();

export const AppOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AppOwnWhereSchema
);

export const SecretOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    version: PZ.StringFilterSchema,
    secret: PZ.StringFilterSchema,
  })
  .partial();

export const SecretOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  SecretOwnWhereSchema
);

export const AppHistoryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    appId: PZ.IntegerFilterSchema,
    startedAt: PZ.DateTimeFilterSchema,
    stopeedAt: PZ.DateTimeFilterSchema,
  })
  .partial();

export const AppHistoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AppHistoryOwnWhereSchema
);

export const AppOwnIncludeSchema = z
  .object({
    history: z.boolean(),
  })
  .partial();

export const AppOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  AppOwnIncludeSchema
);

export const AppOwnQueryOneSchema = z
  .object({
    where: AppOwnWhereSchemaJson,
    select: AppOwnProjectionSchemaJson,
    omit: AppOwnProjectionSchemaJson,
    include: AppOwnIncludeSchemaJson,
  })
  .partial();

export const AppOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AppOwnWhereSchemaJson,
    select: AppOwnProjectionSchemaJson,
    omit: AppOwnProjectionSchemaJson,
    include: AppOwnIncludeSchemaJson,
  })
  .partial();

export const SecretOwnIncludeSchema = z.object({}).partial();

export const SecretOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  SecretOwnIncludeSchema
);

export const SecretOwnQueryOneSchema = z
  .object({
    where: SecretOwnWhereSchemaJson,
    select: SecretOwnProjectionSchemaJson,
    omit: SecretOwnProjectionSchemaJson,
    include: SecretOwnIncludeSchemaJson,
  })
  .partial();

export const SecretOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SecretOwnWhereSchemaJson,
    select: SecretOwnProjectionSchemaJson,
    omit: SecretOwnProjectionSchemaJson,
    include: SecretOwnIncludeSchemaJson,
  })
  .partial();

export const AppHistoryOwnIncludeSchema = z
  .object({
    app: z.boolean(),
  })
  .partial();

export const AppHistoryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  AppHistoryOwnIncludeSchema
);

export const AppHistoryOwnQueryOneSchema = z
  .object({
    where: AppHistoryOwnWhereSchemaJson,
    select: AppHistoryOwnProjectionSchemaJson,
    omit: AppHistoryOwnProjectionSchemaJson,
    include: AppHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const AppHistoryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AppHistoryOwnWhereSchemaJson,
    select: AppHistoryOwnProjectionSchemaJson,
    omit: AppHistoryOwnProjectionSchemaJson,
    include: AppHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const AppCreateSchema = z.object({
  name: nameSchema.clone(),
  description: descriptionSchema.clone().optional(),
  version: z.string().optional(),
  host: z.string(),
  port: z.string(),
});

export const AppUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
  description: descriptionSchema.clone().optional().optional(),
  version: z.string().optional().optional(),
  host: z.string().optional(),
  port: z.string().optional(),
});

export const AppOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    version: PZ.OrderDirectionSchema,
    host: PZ.OrderDirectionSchema,
    port: PZ.OrderDirectionSchema,
  })
  .partial();

export const AppOrderBySchemaJson = z.preprocess(jsonParser, AppOrderBySchema);

export const AppWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    version: PZ.StringFilterSchema,
    host: PZ.StringFilterSchema,
    port: PZ.StringFilterSchema,
    history: z
      .object({
        some: AppHistoryOwnWhereSchema,
        every: AppHistoryOwnWhereSchema,
        none: AppHistoryOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const AppWhereSchemaJson = z.preprocess(jsonParser, AppWhereSchema);

export const AppProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    version: z.boolean(),
    host: z.boolean(),
    port: z.boolean(),
    history: z.boolean().or(AppHistoryOwnQuerySchema),
  })
  .partial();

export const AppProjectionSchemaJson = z.preprocess(
  jsonParser,
  AppProjectionSchema
);

export const AppIncludeSchema = z
  .object({
    history: z.boolean().or(AppHistoryOwnQuerySchema),
  })
  .partial();

export const AppIncludeSchemaJson = z.preprocess(jsonParser, AppIncludeSchema);

export const SecretCreateSchema = z.object({
  secret: z.string(),
});

export const SecretUpdateSchema = z.object({
  secret: z.string().optional(),
});

export const SecretOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    updatedAt: PZ.OrderDirectionSchema,
    version: PZ.OrderDirectionSchema,
    secret: PZ.OrderDirectionSchema,
  })
  .partial();

export const SecretOrderBySchemaJson = z.preprocess(
  jsonParser,
  SecretOrderBySchema
);

export const SecretWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    version: PZ.StringFilterSchema,
    secret: PZ.StringFilterSchema,
  })
  .partial();

export const SecretWhereSchemaJson = z.preprocess(
  jsonParser,
  SecretWhereSchema
);

export const SecretProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    version: z.boolean(),
    secret: z.boolean(),
  })
  .partial();

export const SecretProjectionSchemaJson = z.preprocess(
  jsonParser,
  SecretProjectionSchema
);

export const SecretIncludeSchema = z.object({}).partial();

export const SecretIncludeSchemaJson = z.preprocess(
  jsonParser,
  SecretIncludeSchema
);

export const AppHistoryCreateSchema = z.object({
  appId: z.coerce.number().int(),
  stopeedAt: dateSchema.clone().optional(),
});

export const AppHistoryUpdateSchema = z.object({
  appId: z.coerce.number().int().optional(),
  stopeedAt: dateSchema.clone().optional().optional(),
});

export const AppHistoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    appId: PZ.OrderDirectionSchema,
    startedAt: PZ.OrderDirectionSchema,
    stopeedAt: PZ.OrderDirectionSchema,
  })
  .partial();

export const AppHistoryOrderBySchemaJson = z.preprocess(
  jsonParser,
  AppHistoryOrderBySchema
);

export const AppHistoryWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    appId: PZ.IntegerFilterSchema,
    startedAt: PZ.DateTimeFilterSchema,
    stopeedAt: PZ.DateTimeFilterSchema,
    app: z
      .object({
        some: AppOwnWhereSchema,
        every: AppOwnWhereSchema,
        none: AppOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const AppHistoryWhereSchemaJson = z.preprocess(
  jsonParser,
  AppHistoryWhereSchema
);

export const AppHistoryProjectionSchema = z
  .object({
    id: z.boolean(),
    appId: z.boolean(),
    startedAt: z.boolean(),
    stopeedAt: z.boolean(),
    app: z.boolean().or(AppOwnQueryOneSchema),
  })
  .partial();

export const AppHistoryProjectionSchemaJson = z.preprocess(
  jsonParser,
  AppHistoryProjectionSchema
);

export const AppHistoryIncludeSchema = z
  .object({
    app: z.boolean().or(AppOwnQueryOneSchema),
  })
  .partial();

export const AppHistoryIncludeSchemaJson = z.preprocess(
  jsonParser,
  AppHistoryIncludeSchema
);

export const AppQueryOneSchema = z
  .object({
    where: AppWhereSchemaJson,
    select: AppProjectionSchemaJson,
    omit: AppProjectionSchemaJson,
    include: AppIncludeSchemaJson,
  })
  .partial();

export const AppQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AppWhereSchemaJson,
    select: AppProjectionSchemaJson,
    omit: AppProjectionSchemaJson,
    include: AppIncludeSchemaJson,
  })
  .partial();

export type AppCreate = z.infer<typeof AppCreateSchema>;

export type AppUpdate = z.infer<typeof AppUpdateSchema>;

export type AppOrderBy = z.infer<typeof AppOrderBySchema>;

export type AppOwnProjection = z.infer<typeof AppOwnProjectionSchema>;

export type AppOwnWhere = z.infer<typeof AppOwnWhereSchema>;

export type AppOwnQuery = z.infer<typeof AppOwnQuerySchema>;

export type AppOwnQueryOne = z.infer<typeof AppOwnQueryOneSchema>;

export type AppWhere = z.infer<typeof AppWhereSchema>;

export type AppInclude = z.infer<typeof AppIncludeSchema>;

export type AppQueryOne = z.infer<typeof AppQueryOneSchema>;

export type AppQuery = z.infer<typeof AppQuerySchema>;

export type AppProjection = z.infer<typeof AppProjectionSchema>;

export const SecretQueryOneSchema = z
  .object({
    where: SecretWhereSchemaJson,
    select: SecretProjectionSchemaJson,
    omit: SecretProjectionSchemaJson,
    include: SecretIncludeSchemaJson,
  })
  .partial();

export const SecretQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SecretWhereSchemaJson,
    select: SecretProjectionSchemaJson,
    omit: SecretProjectionSchemaJson,
    include: SecretIncludeSchemaJson,
  })
  .partial();

export type SecretCreate = z.infer<typeof SecretCreateSchema>;

export type SecretUpdate = z.infer<typeof SecretUpdateSchema>;

export type SecretOrderBy = z.infer<typeof SecretOrderBySchema>;

export type SecretOwnProjection = z.infer<typeof SecretOwnProjectionSchema>;

export type SecretOwnWhere = z.infer<typeof SecretOwnWhereSchema>;

export type SecretOwnQuery = z.infer<typeof SecretOwnQuerySchema>;

export type SecretOwnQueryOne = z.infer<typeof SecretOwnQueryOneSchema>;

export type SecretWhere = z.infer<typeof SecretWhereSchema>;

export type SecretInclude = z.infer<typeof SecretIncludeSchema>;

export type SecretQueryOne = z.infer<typeof SecretQueryOneSchema>;

export type SecretQuery = z.infer<typeof SecretQuerySchema>;

export type SecretProjection = z.infer<typeof SecretProjectionSchema>;

export const AppHistoryQueryOneSchema = z
  .object({
    where: AppHistoryWhereSchemaJson,
    select: AppHistoryProjectionSchemaJson,
    omit: AppHistoryProjectionSchemaJson,
    include: AppHistoryIncludeSchemaJson,
  })
  .partial();

export const AppHistoryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AppHistoryWhereSchemaJson,
    select: AppHistoryProjectionSchemaJson,
    omit: AppHistoryProjectionSchemaJson,
    include: AppHistoryIncludeSchemaJson,
  })
  .partial();

export type AppHistoryCreate = z.infer<typeof AppHistoryCreateSchema>;

export type AppHistoryUpdate = z.infer<typeof AppHistoryUpdateSchema>;

export type AppHistoryOrderBy = z.infer<typeof AppHistoryOrderBySchema>;

export type AppHistoryOwnProjection = z.infer<
  typeof AppHistoryOwnProjectionSchema
>;

export type AppHistoryOwnWhere = z.infer<typeof AppHistoryOwnWhereSchema>;

export type AppHistoryOwnQuery = z.infer<typeof AppHistoryOwnQuerySchema>;

export type AppHistoryOwnQueryOne = z.infer<typeof AppHistoryOwnQueryOneSchema>;

export type AppHistoryWhere = z.infer<typeof AppHistoryWhereSchema>;

export type AppHistoryInclude = z.infer<typeof AppHistoryIncludeSchema>;

export type AppHistoryQueryOne = z.infer<typeof AppHistoryQueryOneSchema>;

export type AppHistoryQuery = z.infer<typeof AppHistoryQuerySchema>;

export type AppHistoryProjection = z.infer<typeof AppHistoryProjectionSchema>;

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

export const AppOwnSelectFieldsSchema = z
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

export const AppOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AppOwnSelectFieldsSchema
);

export const AppDistinctFieldsSchema = z
  .enum(['id', 'name', 'description', 'version', 'host', 'port'])
  .array();

export const SecretOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    version: z.boolean(),
    secret: z.boolean(),
  })
  .partial();

export const SecretOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SecretOwnSelectFieldsSchema
);

export const SecretDistinctFieldsSchema = z
  .enum(['id', 'createdAt', 'updatedAt', 'version', 'secret'])
  .array();

export const AppHistoryOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    appId: z.boolean(),
    startedAt: z.boolean(),
    stopeedAt: z.boolean(),
    app: z.boolean(),
  })
  .partial();

export const AppHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AppHistoryOwnSelectFieldsSchema
);

export const AppHistoryDistinctFieldsSchema = z
  .enum(['id', 'appId', 'startedAt', 'stopeedAt'])
  .array();

export const AppOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    version: z.string().or(PZ.StringFilterSchema),
    host: z.string().or(PZ.StringFilterSchema),
    port: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const AppOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AppOwnWhereSchema
);

export const SecretOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    version: z.string().or(PZ.StringFilterSchema),
    secret: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const SecretOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  SecretOwnWhereSchema
);

export const AppHistoryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    appId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    startedAt: z.string().or(PZ.DateTimeFilterSchema),
    stopeedAt: z.string().or(PZ.DateTimeFilterSchema),
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
    distinct: AppDistinctFieldsSchema,
  })
  .partial();

export const AppOwnQuerySchema = z
  .object({
    where: AppOwnWhereSchemaJson,
    distinct: AppDistinctFieldsSchema,
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
    distinct: SecretDistinctFieldsSchema,
  })
  .partial();

export const SecretOwnQuerySchema = z
  .object({
    where: SecretOwnWhereSchemaJson,
    distinct: SecretDistinctFieldsSchema,
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
    distinct: AppHistoryDistinctFieldsSchema,
  })
  .partial();

export const AppHistoryOwnQuerySchema = z
  .object({
    where: AppHistoryOwnWhereSchemaJson,
    distinct: AppHistoryDistinctFieldsSchema,
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    version: z.string().or(PZ.StringFilterSchema),
    host: z.string().or(PZ.StringFilterSchema),
    port: z.string().or(PZ.StringFilterSchema),
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

export const AppSelectFieldsSchema = z
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

export const AppSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AppSelectFieldsSchema
);

export const AppIncludeSchema = z
  .object({
    history: z.boolean().or(AppHistoryOwnQuerySchema),
  })
  .partial();

export const AppIncludeSchemaJson = z.preprocess(jsonParser, AppIncludeSchema);

export const AppProjectionSchema = z.union([
  z.object({ omit: AppSelectFieldsSchemaJson }),
  z.object({ select: AppSelectFieldsSchemaJson }),
  z.object({ include: AppIncludeSchemaJson }),
  z.object({}),
]);

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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    version: z.string().or(PZ.StringFilterSchema),
    secret: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const SecretWhereSchemaJson = z.preprocess(
  jsonParser,
  SecretWhereSchema
);

export const SecretSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    version: z.boolean(),
    secret: z.boolean(),
  })
  .partial();

export const SecretSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SecretSelectFieldsSchema
);

export const SecretIncludeSchema = z.object({}).partial();

export const SecretIncludeSchemaJson = z.preprocess(
  jsonParser,
  SecretIncludeSchema
);

export const SecretProjectionSchema = z.union([
  z.object({ omit: SecretSelectFieldsSchemaJson }),
  z.object({ select: SecretSelectFieldsSchemaJson }),
  z.object({ include: SecretIncludeSchemaJson }),
  z.object({}),
]);

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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    appId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    startedAt: z.string().or(PZ.DateTimeFilterSchema),
    stopeedAt: z.string().or(PZ.DateTimeFilterSchema),
    app: AppOwnWhereSchema,
  })
  .partial();

export const AppHistoryWhereSchemaJson = z.preprocess(
  jsonParser,
  AppHistoryWhereSchema
);

export const AppHistorySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    appId: z.boolean(),
    startedAt: z.boolean(),
    stopeedAt: z.boolean(),
    app: z.boolean().or(AppOwnQueryOneSchema),
  })
  .partial();

export const AppHistorySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AppHistorySelectFieldsSchema
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

export const AppHistoryProjectionSchema = z.union([
  z.object({ omit: AppHistorySelectFieldsSchemaJson }),
  z.object({ select: AppHistorySelectFieldsSchemaJson }),
  z.object({ include: AppHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const AppQueryOneSchema = z
  .object({
    where: AppWhereSchemaJson,
    distinct: AppDistinctFieldsSchema,
  })
  .partial();

export const AppQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: AppWhereSchemaJson,
    distinct: AppDistinctFieldsSchema,
    orderBy: AppOrderBySchemaJson,
  })
  .partial();

export type AppCreate = z.infer<typeof AppCreateSchema>;

export type AppUpdate = z.infer<typeof AppUpdateSchema>;

export type AppOrderBy = z.infer<typeof AppOrderBySchema>;

export type AppOwnSelectFields = z.infer<typeof AppOwnSelectFieldsSchema>;

export type AppOwnWhere = z.infer<typeof AppOwnWhereSchema>;

export type AppOwnQuery = z.infer<typeof AppOwnQuerySchema>;

export type AppOwnQueryOne = z.infer<typeof AppOwnQueryOneSchema>;

export type AppWhere = z.infer<typeof AppWhereSchema>;

export type AppInclude = z.infer<typeof AppIncludeSchema>;

export type AppQueryOne = z.infer<typeof AppQueryOneSchema>;

export type AppQuery = z.infer<typeof AppQuerySchema>;

export type AppSelectFields = z.infer<typeof AppSelectFieldsSchema>;

export type AppProjection = z.infer<typeof AppProjectionSchema>;

export const SecretQueryOneSchema = z
  .object({
    where: SecretWhereSchemaJson,
    distinct: SecretDistinctFieldsSchema,
  })
  .partial();

export const SecretQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: SecretWhereSchemaJson,
    distinct: SecretDistinctFieldsSchema,
    orderBy: SecretOrderBySchemaJson,
  })
  .partial();

export type SecretCreate = z.infer<typeof SecretCreateSchema>;

export type SecretUpdate = z.infer<typeof SecretUpdateSchema>;

export type SecretOrderBy = z.infer<typeof SecretOrderBySchema>;

export type SecretOwnSelectFields = z.infer<typeof SecretOwnSelectFieldsSchema>;

export type SecretOwnWhere = z.infer<typeof SecretOwnWhereSchema>;

export type SecretOwnQuery = z.infer<typeof SecretOwnQuerySchema>;

export type SecretOwnQueryOne = z.infer<typeof SecretOwnQueryOneSchema>;

export type SecretWhere = z.infer<typeof SecretWhereSchema>;

export type SecretInclude = z.infer<typeof SecretIncludeSchema>;

export type SecretQueryOne = z.infer<typeof SecretQueryOneSchema>;

export type SecretQuery = z.infer<typeof SecretQuerySchema>;

export type SecretSelectFields = z.infer<typeof SecretSelectFieldsSchema>;

export type SecretProjection = z.infer<typeof SecretProjectionSchema>;

export const AppHistoryQueryOneSchema = z
  .object({
    where: AppHistoryWhereSchemaJson,
    distinct: AppHistoryDistinctFieldsSchema,
  })
  .partial();

export const AppHistoryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: AppHistoryWhereSchemaJson,
    distinct: AppHistoryDistinctFieldsSchema,
    orderBy: AppHistoryOrderBySchemaJson,
  })
  .partial();

export type AppHistoryCreate = z.infer<typeof AppHistoryCreateSchema>;

export type AppHistoryUpdate = z.infer<typeof AppHistoryUpdateSchema>;

export type AppHistoryOrderBy = z.infer<typeof AppHistoryOrderBySchema>;

export type AppHistoryOwnSelectFields = z.infer<
  typeof AppHistoryOwnSelectFieldsSchema
>;

export type AppHistoryOwnWhere = z.infer<typeof AppHistoryOwnWhereSchema>;

export type AppHistoryOwnQuery = z.infer<typeof AppHistoryOwnQuerySchema>;

export type AppHistoryOwnQueryOne = z.infer<typeof AppHistoryOwnQueryOneSchema>;

export type AppHistoryWhere = z.infer<typeof AppHistoryWhereSchema>;

export type AppHistoryInclude = z.infer<typeof AppHistoryIncludeSchema>;

export type AppHistoryQueryOne = z.infer<typeof AppHistoryQueryOneSchema>;

export type AppHistoryQuery = z.infer<typeof AppHistoryQuerySchema>;

export type AppHistorySelectFields = z.infer<
  typeof AppHistorySelectFieldsSchema
>;

export type AppHistoryProjection = z.infer<typeof AppHistoryProjectionSchema>;

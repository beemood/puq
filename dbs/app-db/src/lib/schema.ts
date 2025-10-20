/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PZ from '@puq/zod';
import { z } from 'zod';

export const PaginationSchema = z
  .object({
    take: PZ.Scalar.take(),
    skip: PZ.Scalar.skip(),
  })
  .partial();

export const AppOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    version: PZ.Scalar.bool(),
    host: PZ.Scalar.bool(),
    port: PZ.Scalar.bool(),
    history: PZ.Scalar.bool(),
  })
  .partial();

export const AppOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AppOwnSelectFieldsSchema
);

export const AppDistinctFieldsSchema = z
  .enum(['id', 'name', 'description', 'version', 'host', 'port'])
  .array();

export const SecretOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    version: PZ.Scalar.bool(),
    secret: PZ.Scalar.bool(),
  })
  .partial();

export const SecretOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SecretOwnSelectFieldsSchema
);

export const SecretDistinctFieldsSchema = z
  .enum(['id', 'createdAt', 'updatedAt', 'version', 'secret'])
  .array();

export const AppHistoryOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    appId: PZ.Scalar.bool(),
    startedAt: PZ.Scalar.bool(),
    stopeedAt: PZ.Scalar.bool(),
    app: PZ.Scalar.bool(),
  })
  .partial();

export const AppHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  AppHistoryOwnWhereSchema
);

export const AppOwnIncludeSchema = z
  .object({
    history: PZ.Scalar.bool(),
  })
  .partial();

export const AppOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
    app: PZ.Scalar.bool(),
  })
  .partial();

export const AppHistoryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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

export const AppRawCreateSchema = z.object({
  name: PZ.Scalar.name(),
  description: PZ.Scalar.description().optional(),
  version: PZ.Scalar.string().optional(),
  host: PZ.Scalar.string(),
  port: PZ.Scalar.string(),
});

export const AppCreateSchema = AppRawCreateSchema.clone();

export const AppRawUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  description: PZ.Scalar.description().optional().optional(),
  version: PZ.Scalar.string().optional().optional(),
  host: PZ.Scalar.string().optional(),
  port: PZ.Scalar.string().optional(),
});

export const AppUpdateSchema = AppRawUpdateSchema.clone();

export const AppOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    version: PZ.OrderDirectionSchema,
    host: PZ.OrderDirectionSchema,
    port: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const AppOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AppOrderBySchema
);

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

export const AppWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AppWhereSchema
);

export const AppSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    version: PZ.Scalar.bool(),
    host: PZ.Scalar.bool(),
    port: PZ.Scalar.bool(),
    history: PZ.Scalar.bool().or(AppHistoryOwnQuerySchema),
  })
  .partial();

export const AppSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AppSelectFieldsSchema
);

export const AppOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    version: PZ.Scalar.bool(),
    host: PZ.Scalar.bool(),
    port: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'name', 'description', 'version', 'host', 'port'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const AppOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AppOmitFieldsSchema
);

export const AppIncludeSchema = z
  .object({
    history: PZ.Scalar.bool().or(AppHistoryOwnQuerySchema),
  })
  .partial();

export const AppIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AppIncludeSchema
);

export const AppProjectionSchema = z.union([
  z.object({ omit: AppOmitFieldsSchemaJson }),
  z.object({ select: AppSelectFieldsSchemaJson }),
  z.object({ include: AppIncludeSchemaJson }),
  z.object({}),
]);

export const SecretRawCreateSchema = z.object({
  secret: PZ.Scalar.string(),
});

export const SecretCreateSchema = SecretRawCreateSchema.clone();

export const SecretRawUpdateSchema = z.object({
  secret: PZ.Scalar.string().optional(),
});

export const SecretUpdateSchema = SecretRawUpdateSchema.clone();

export const SecretOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    updatedAt: PZ.OrderDirectionSchema,
    version: PZ.OrderDirectionSchema,
    secret: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const SecretOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  SecretWhereSchema
);

export const SecretSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    version: PZ.Scalar.bool(),
    secret: PZ.Scalar.bool(),
  })
  .partial();

export const SecretSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SecretSelectFieldsSchema
);

export const SecretOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    version: PZ.Scalar.bool(),
    secret: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'createdAt', 'updatedAt', 'version', 'secret'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const SecretOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SecretOmitFieldsSchema
);

export const SecretIncludeSchema = z.object({}).partial();

export const SecretIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SecretIncludeSchema
);

export const SecretProjectionSchema = z.union([
  z.object({ omit: SecretOmitFieldsSchemaJson }),
  z.object({ select: SecretSelectFieldsSchemaJson }),
  z.object({ include: SecretIncludeSchemaJson }),
  z.object({}),
]);

export const AppHistoryRawCreateSchema = z.object({
  appId: PZ.Scalar.id(),
  stopeedAt: PZ.Scalar.datetime().optional(),
});

export const AppHistoryCreateSchema = AppHistoryRawCreateSchema.clone();

export const AppHistoryRawUpdateSchema = z.object({
  appId: PZ.Scalar.id().optional(),
  stopeedAt: PZ.Scalar.datetime().optional().optional(),
});

export const AppHistoryUpdateSchema = AppHistoryRawUpdateSchema.clone();

export const AppHistoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    appId: PZ.OrderDirectionSchema,
    startedAt: PZ.OrderDirectionSchema,
    stopeedAt: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const AppHistoryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  AppHistoryWhereSchema
);

export const AppHistorySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    appId: PZ.Scalar.bool(),
    startedAt: PZ.Scalar.bool(),
    stopeedAt: PZ.Scalar.bool(),
    app: PZ.Scalar.bool().or(AppOwnQueryOneSchema),
  })
  .partial();

export const AppHistorySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AppHistorySelectFieldsSchema
);

export const AppHistoryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    appId: PZ.Scalar.bool(),
    startedAt: PZ.Scalar.bool(),
    stopeedAt: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'appId', 'startedAt', 'stopeedAt'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const AppHistoryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AppHistoryOmitFieldsSchema
);

export const AppHistoryIncludeSchema = z
  .object({
    app: PZ.Scalar.bool().or(AppOwnQueryOneSchema),
  })
  .partial();

export const AppHistoryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AppHistoryIncludeSchema
);

export const AppHistoryProjectionSchema = z.union([
  z.object({ omit: AppHistoryOmitFieldsSchemaJson }),
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

export type AppCreate = z.infer<typeof AppRawCreateSchema>;

export type AppUpdate = z.infer<typeof AppRawUpdateSchema>;

export type AppOrderBy = z.infer<typeof AppOrderBySchema>;

export type AppOwnSelectFields = z.infer<typeof AppOwnSelectFieldsSchema>;

export type AppOwnWhere = z.infer<typeof AppOwnWhereSchema>;

export type AppOwnQuery = z.infer<typeof AppOwnQuerySchema>;

export type AppOwnQueryOne = z.infer<typeof AppOwnQueryOneSchema>;

export type AppWhere = z.infer<typeof AppWhereSchema>;

export type AppInclude = z.infer<typeof AppIncludeSchema>;

export type AppQueryOne = z.infer<typeof AppQueryOneSchema>;

export type AppQuery = z.infer<typeof AppQuerySchema>;

export type AppOmitFields = z.infer<typeof AppOmitFieldsSchema>;

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

export type SecretCreate = z.infer<typeof SecretRawCreateSchema>;

export type SecretUpdate = z.infer<typeof SecretRawUpdateSchema>;

export type SecretOrderBy = z.infer<typeof SecretOrderBySchema>;

export type SecretOwnSelectFields = z.infer<typeof SecretOwnSelectFieldsSchema>;

export type SecretOwnWhere = z.infer<typeof SecretOwnWhereSchema>;

export type SecretOwnQuery = z.infer<typeof SecretOwnQuerySchema>;

export type SecretOwnQueryOne = z.infer<typeof SecretOwnQueryOneSchema>;

export type SecretWhere = z.infer<typeof SecretWhereSchema>;

export type SecretInclude = z.infer<typeof SecretIncludeSchema>;

export type SecretQueryOne = z.infer<typeof SecretQueryOneSchema>;

export type SecretQuery = z.infer<typeof SecretQuerySchema>;

export type SecretOmitFields = z.infer<typeof SecretOmitFieldsSchema>;

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

export type AppHistoryCreate = z.infer<typeof AppHistoryRawCreateSchema>;

export type AppHistoryUpdate = z.infer<typeof AppHistoryRawUpdateSchema>;

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

export type AppHistoryOmitFields = z.infer<typeof AppHistoryOmitFieldsSchema>;

export type AppHistorySelectFields = z.infer<
  typeof AppHistorySelectFieldsSchema
>;

export type AppHistoryProjection = z.infer<typeof AppHistoryProjectionSchema>;

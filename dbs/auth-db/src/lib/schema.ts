/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PZ from '@puq/zod';
import { z } from 'zod';

export const PaginationSchema = z
  .object({
    take: PZ.Scalar.take(),
    skip: PZ.Scalar.skip(),
  })
  .partial();

export const SessionStatusSchema = z.enum(['ACTIVE', 'EXPIRED', 'REVOKED']);

export const UserOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    username: PZ.Scalar.bool(),
    password: PZ.Scalar.bool(),
    sessions: PZ.Scalar.bool(),
    permissions: PZ.Scalar.bool(),
    AccessToken: PZ.Scalar.bool(),
  })
  .partial();

export const UserOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserOwnSelectFieldsSchema
);

export const UserDistinctFieldsSchema = z
  .enum(['id', 'uuid', 'username', 'password'])
  .array();

export const AccessTokenOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    userId: PZ.Scalar.bool(),
    user: PZ.Scalar.bool(),
    AccessTokenPermission: PZ.Scalar.bool(),
  })
  .partial();

export const AccessTokenOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenOwnSelectFieldsSchema
);

export const AccessTokenDistinctFieldsSchema = z
  .enum(['id', 'name', 'userId'])
  .array();

export const ScopeOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    permissions: PZ.Scalar.bool(),
  })
  .partial();

export const ScopeOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ScopeOwnSelectFieldsSchema
);

export const ScopeDistinctFieldsSchema = z.enum(['id', 'name']).array();

export const ResourceOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    activities: PZ.Scalar.bool(),
  })
  .partial();

export const ResourceOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ResourceOwnSelectFieldsSchema
);

export const ResourceDistinctFieldsSchema = z.enum(['id', 'name']).array();

export const OperationOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    activities: PZ.Scalar.bool(),
  })
  .partial();

export const OperationOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  OperationOwnSelectFieldsSchema
);

export const OperationDistinctFieldsSchema = z.enum(['id', 'name']).array();

export const ActivityOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    resourceId: PZ.Scalar.bool(),
    operationId: PZ.Scalar.bool(),
    resouce: PZ.Scalar.bool(),
    operation: PZ.Scalar.bool(),
    permissions: PZ.Scalar.bool(),
    logs: PZ.Scalar.bool(),
  })
  .partial();

export const ActivityOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivityOwnSelectFieldsSchema
);

export const ActivityDistinctFieldsSchema = z
  .enum(['id', 'name', 'resourceId', 'operationId'])
  .array();

export const PermissionOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    scopeId: PZ.Scalar.bool(),
    activityId: PZ.Scalar.bool(),
    scope: PZ.Scalar.bool(),
    activity: PZ.Scalar.bool(),
    roles: PZ.Scalar.bool(),
    UserPermission: PZ.Scalar.bool(),
    AccessTokenPermission: PZ.Scalar.bool(),
  })
  .partial();

export const PermissionOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PermissionOwnSelectFieldsSchema
);

export const PermissionDistinctFieldsSchema = z
  .enum(['id', 'scopeId', 'activityId'])
  .array();

export const RoleOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    permissions: PZ.Scalar.bool(),
  })
  .partial();

export const RoleOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoleOwnSelectFieldsSchema
);

export const RoleDistinctFieldsSchema = z.enum(['id', 'name']).array();

export const RolePermissionOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    roleId: PZ.Scalar.bool(),
    permissionId: PZ.Scalar.bool(),
    role: PZ.Scalar.bool(),
    permission: PZ.Scalar.bool(),
  })
  .partial();

export const RolePermissionOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RolePermissionOwnSelectFieldsSchema
);

export const RolePermissionDistinctFieldsSchema = z
  .enum(['id', 'roleId', 'permissionId'])
  .array();

export const SessionOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    userId: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    user: PZ.Scalar.bool(),
    logs: PZ.Scalar.bool(),
  })
  .partial();

export const SessionOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SessionOwnSelectFieldsSchema
);

export const SessionDistinctFieldsSchema = z
  .enum(['id', 'userId', 'description', 'status', 'startDate', 'endDate'])
  .array();

export const ActivityLogOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    sessionId: PZ.Scalar.bool(),
    activityId: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    notes: PZ.Scalar.bool(),
    activity: PZ.Scalar.bool(),
    session: PZ.Scalar.bool(),
  })
  .partial();

export const ActivityLogOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivityLogOwnSelectFieldsSchema
);

export const ActivityLogDistinctFieldsSchema = z
  .enum(['id', 'sessionId', 'activityId', 'createdAt', 'notes'])
  .array();

export const UserPermissionOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    userId: PZ.Scalar.bool(),
    permissionId: PZ.Scalar.bool(),
    user: PZ.Scalar.bool(),
    permission: PZ.Scalar.bool(),
  })
  .partial();

export const UserPermissionOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserPermissionOwnSelectFieldsSchema
);

export const UserPermissionDistinctFieldsSchema = z
  .enum(['id', 'userId', 'permissionId'])
  .array();

export const AccessTokenPermissionOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    permissionId: PZ.Scalar.bool(),
    accessTokenId: PZ.Scalar.bool(),
    permission: PZ.Scalar.bool(),
    accessToken: PZ.Scalar.bool(),
  })
  .partial();

export const AccessTokenPermissionOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenPermissionOwnSelectFieldsSchema
);

export const AccessTokenPermissionDistinctFieldsSchema = z
  .enum(['id', 'permissionId', 'accessTokenId'])
  .array();

export const UserOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    username: z.string().or(PZ.StringFilterSchema),
    password: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const UserOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserOwnWhereSchema
);

export const AccessTokenOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    userId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const AccessTokenOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenOwnWhereSchema
);

export const ScopeOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const ScopeOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ScopeOwnWhereSchema
);

export const ResourceOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const ResourceOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ResourceOwnWhereSchema
);

export const OperationOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const OperationOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  OperationOwnWhereSchema
);

export const ActivityOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    resourceId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    operationId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const ActivityOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivityOwnWhereSchema
);

export const PermissionOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    scopeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    activityId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const PermissionOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PermissionOwnWhereSchema
);

export const RoleOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const RoleOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoleOwnWhereSchema
);

export const RolePermissionOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    roleId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    permissionId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const RolePermissionOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RolePermissionOwnWhereSchema
);

export const SessionOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    userId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    status: SessionStatusSchema,
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
  })
  .partial();

export const SessionOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SessionOwnWhereSchema
);

export const ActivityLogOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    sessionId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    activityId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    notes: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const ActivityLogOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivityLogOwnWhereSchema
);

export const UserPermissionOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    userId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    permissionId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const UserPermissionOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserPermissionOwnWhereSchema
);

export const AccessTokenPermissionOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    permissionId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    accessTokenId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const AccessTokenPermissionOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenPermissionOwnWhereSchema
);

export const UserOwnIncludeSchema = z
  .object({
    sessions: PZ.Scalar.bool(),
    permissions: PZ.Scalar.bool(),
    AccessToken: PZ.Scalar.bool(),
  })
  .partial();

export const UserOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserOwnIncludeSchema
);

export const UserOwnQueryOneSchema = z
  .object({
    where: UserOwnWhereSchemaJson,
    distinct: UserDistinctFieldsSchema,
  })
  .partial();

export const UserOwnQuerySchema = z
  .object({
    where: UserOwnWhereSchemaJson,
    distinct: UserDistinctFieldsSchema,
  })
  .partial();

export const AccessTokenOwnIncludeSchema = z
  .object({
    user: PZ.Scalar.bool(),
    AccessTokenPermission: PZ.Scalar.bool(),
  })
  .partial();

export const AccessTokenOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenOwnIncludeSchema
);

export const AccessTokenOwnQueryOneSchema = z
  .object({
    where: AccessTokenOwnWhereSchemaJson,
    distinct: AccessTokenDistinctFieldsSchema,
  })
  .partial();

export const AccessTokenOwnQuerySchema = z
  .object({
    where: AccessTokenOwnWhereSchemaJson,
    distinct: AccessTokenDistinctFieldsSchema,
  })
  .partial();

export const ScopeOwnIncludeSchema = z
  .object({
    permissions: PZ.Scalar.bool(),
  })
  .partial();

export const ScopeOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ScopeOwnIncludeSchema
);

export const ScopeOwnQueryOneSchema = z
  .object({
    where: ScopeOwnWhereSchemaJson,
    distinct: ScopeDistinctFieldsSchema,
  })
  .partial();

export const ScopeOwnQuerySchema = z
  .object({
    where: ScopeOwnWhereSchemaJson,
    distinct: ScopeDistinctFieldsSchema,
  })
  .partial();

export const ResourceOwnIncludeSchema = z
  .object({
    activities: PZ.Scalar.bool(),
  })
  .partial();

export const ResourceOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ResourceOwnIncludeSchema
);

export const ResourceOwnQueryOneSchema = z
  .object({
    where: ResourceOwnWhereSchemaJson,
    distinct: ResourceDistinctFieldsSchema,
  })
  .partial();

export const ResourceOwnQuerySchema = z
  .object({
    where: ResourceOwnWhereSchemaJson,
    distinct: ResourceDistinctFieldsSchema,
  })
  .partial();

export const OperationOwnIncludeSchema = z
  .object({
    activities: PZ.Scalar.bool(),
  })
  .partial();

export const OperationOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  OperationOwnIncludeSchema
);

export const OperationOwnQueryOneSchema = z
  .object({
    where: OperationOwnWhereSchemaJson,
    distinct: OperationDistinctFieldsSchema,
  })
  .partial();

export const OperationOwnQuerySchema = z
  .object({
    where: OperationOwnWhereSchemaJson,
    distinct: OperationDistinctFieldsSchema,
  })
  .partial();

export const ActivityOwnIncludeSchema = z
  .object({
    resouce: PZ.Scalar.bool(),
    operation: PZ.Scalar.bool(),
    permissions: PZ.Scalar.bool(),
    logs: PZ.Scalar.bool(),
  })
  .partial();

export const ActivityOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivityOwnIncludeSchema
);

export const ActivityOwnQueryOneSchema = z
  .object({
    where: ActivityOwnWhereSchemaJson,
    distinct: ActivityDistinctFieldsSchema,
  })
  .partial();

export const ActivityOwnQuerySchema = z
  .object({
    where: ActivityOwnWhereSchemaJson,
    distinct: ActivityDistinctFieldsSchema,
  })
  .partial();

export const PermissionOwnIncludeSchema = z
  .object({
    scope: PZ.Scalar.bool(),
    activity: PZ.Scalar.bool(),
    roles: PZ.Scalar.bool(),
    UserPermission: PZ.Scalar.bool(),
    AccessTokenPermission: PZ.Scalar.bool(),
  })
  .partial();

export const PermissionOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PermissionOwnIncludeSchema
);

export const PermissionOwnQueryOneSchema = z
  .object({
    where: PermissionOwnWhereSchemaJson,
    distinct: PermissionDistinctFieldsSchema,
  })
  .partial();

export const PermissionOwnQuerySchema = z
  .object({
    where: PermissionOwnWhereSchemaJson,
    distinct: PermissionDistinctFieldsSchema,
  })
  .partial();

export const RoleOwnIncludeSchema = z
  .object({
    permissions: PZ.Scalar.bool(),
  })
  .partial();

export const RoleOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoleOwnIncludeSchema
);

export const RoleOwnQueryOneSchema = z
  .object({
    where: RoleOwnWhereSchemaJson,
    distinct: RoleDistinctFieldsSchema,
  })
  .partial();

export const RoleOwnQuerySchema = z
  .object({
    where: RoleOwnWhereSchemaJson,
    distinct: RoleDistinctFieldsSchema,
  })
  .partial();

export const RolePermissionOwnIncludeSchema = z
  .object({
    role: PZ.Scalar.bool(),
    permission: PZ.Scalar.bool(),
  })
  .partial();

export const RolePermissionOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RolePermissionOwnIncludeSchema
);

export const RolePermissionOwnQueryOneSchema = z
  .object({
    where: RolePermissionOwnWhereSchemaJson,
    distinct: RolePermissionDistinctFieldsSchema,
  })
  .partial();

export const RolePermissionOwnQuerySchema = z
  .object({
    where: RolePermissionOwnWhereSchemaJson,
    distinct: RolePermissionDistinctFieldsSchema,
  })
  .partial();

export const SessionOwnIncludeSchema = z
  .object({
    user: PZ.Scalar.bool(),
    logs: PZ.Scalar.bool(),
  })
  .partial();

export const SessionOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SessionOwnIncludeSchema
);

export const SessionOwnQueryOneSchema = z
  .object({
    where: SessionOwnWhereSchemaJson,
    distinct: SessionDistinctFieldsSchema,
  })
  .partial();

export const SessionOwnQuerySchema = z
  .object({
    where: SessionOwnWhereSchemaJson,
    distinct: SessionDistinctFieldsSchema,
  })
  .partial();

export const ActivityLogOwnIncludeSchema = z
  .object({
    activity: PZ.Scalar.bool(),
    session: PZ.Scalar.bool(),
  })
  .partial();

export const ActivityLogOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivityLogOwnIncludeSchema
);

export const ActivityLogOwnQueryOneSchema = z
  .object({
    where: ActivityLogOwnWhereSchemaJson,
    distinct: ActivityLogDistinctFieldsSchema,
  })
  .partial();

export const ActivityLogOwnQuerySchema = z
  .object({
    where: ActivityLogOwnWhereSchemaJson,
    distinct: ActivityLogDistinctFieldsSchema,
  })
  .partial();

export const UserPermissionOwnIncludeSchema = z
  .object({
    user: PZ.Scalar.bool(),
    permission: PZ.Scalar.bool(),
  })
  .partial();

export const UserPermissionOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserPermissionOwnIncludeSchema
);

export const UserPermissionOwnQueryOneSchema = z
  .object({
    where: UserPermissionOwnWhereSchemaJson,
    distinct: UserPermissionDistinctFieldsSchema,
  })
  .partial();

export const UserPermissionOwnQuerySchema = z
  .object({
    where: UserPermissionOwnWhereSchemaJson,
    distinct: UserPermissionDistinctFieldsSchema,
  })
  .partial();

export const AccessTokenPermissionOwnIncludeSchema = z
  .object({
    permission: PZ.Scalar.bool(),
    accessToken: PZ.Scalar.bool(),
  })
  .partial();

export const AccessTokenPermissionOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenPermissionOwnIncludeSchema
);

export const AccessTokenPermissionOwnQueryOneSchema = z
  .object({
    where: AccessTokenPermissionOwnWhereSchemaJson,
    distinct: AccessTokenPermissionDistinctFieldsSchema,
  })
  .partial();

export const AccessTokenPermissionOwnQuerySchema = z
  .object({
    where: AccessTokenPermissionOwnWhereSchemaJson,
    distinct: AccessTokenPermissionDistinctFieldsSchema,
  })
  .partial();

export const UserRawCreateSchema = z.object({
  uuid: PZ.Scalar.string(),
  username: PZ.Scalar.string(),
  password: PZ.Scalar.string(),
});

export const UserCreateSchema = UserRawCreateSchema.clone();

export const UserRawUpdateSchema = z.object({
  uuid: PZ.Scalar.string().optional(),
  username: PZ.Scalar.string().optional(),
  password: PZ.Scalar.string().optional(),
});

export const UserUpdateSchema = UserRawUpdateSchema.clone();

export const UserOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    username: PZ.OrderDirectionSchema,
    password: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const UserOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserOrderBySchema
);

export const UserWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    username: z.string().or(PZ.StringFilterSchema),
    password: z.string().or(PZ.StringFilterSchema),
    sessions: z
      .object({
        some: SessionOwnWhereSchema,
        every: SessionOwnWhereSchema,
        none: SessionOwnWhereSchema,
      })
      .partial(),
    permissions: z
      .object({
        some: UserPermissionOwnWhereSchema,
        every: UserPermissionOwnWhereSchema,
        none: UserPermissionOwnWhereSchema,
      })
      .partial(),
    AccessToken: z
      .object({
        some: AccessTokenOwnWhereSchema,
        every: AccessTokenOwnWhereSchema,
        none: AccessTokenOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const UserWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserWhereSchema
);

export const UserSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    username: PZ.Scalar.bool(),
    password: PZ.Scalar.bool(),
    sessions: PZ.Scalar.bool().or(SessionOwnQuerySchema),
    permissions: PZ.Scalar.bool().or(UserPermissionOwnQuerySchema),
    AccessToken: PZ.Scalar.bool().or(AccessTokenOwnQuerySchema),
  })
  .partial();

export const UserSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserSelectFieldsSchema
);

export const UserOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    username: PZ.Scalar.bool(),
    password: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'uuid', 'username', 'password'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const UserOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserOmitFieldsSchema
);

export const UserIncludeSchema = z
  .object({
    sessions: PZ.Scalar.bool().or(SessionOwnQuerySchema),
    permissions: PZ.Scalar.bool().or(UserPermissionOwnQuerySchema),
    AccessToken: PZ.Scalar.bool().or(AccessTokenOwnQuerySchema),
  })
  .partial();

export const UserIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserIncludeSchema
);

export const UserProjectionSchema = z.union([
  z.object({ omit: UserOmitFieldsSchemaJson }),
  z.object({ select: UserSelectFieldsSchemaJson }),
  z.object({ include: UserIncludeSchemaJson }),
  z.object({}),
]);

export const AccessTokenRawCreateSchema = z.object({
  name: PZ.Scalar.name(),
  userId: PZ.Scalar.id(),
});

export const AccessTokenCreateSchema = AccessTokenRawCreateSchema.clone();

export const AccessTokenRawUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  userId: PZ.Scalar.id().optional(),
});

export const AccessTokenUpdateSchema = AccessTokenRawUpdateSchema.clone();

export const AccessTokenOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    userId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const AccessTokenOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenOrderBySchema
);

export const AccessTokenWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    userId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    user: UserOwnWhereSchema,
    AccessTokenPermission: z
      .object({
        some: AccessTokenPermissionOwnWhereSchema,
        every: AccessTokenPermissionOwnWhereSchema,
        none: AccessTokenPermissionOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const AccessTokenWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenWhereSchema
);

export const AccessTokenSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    userId: PZ.Scalar.bool(),
    user: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    AccessTokenPermission: PZ.Scalar.bool().or(
      AccessTokenPermissionOwnQuerySchema
    ),
  })
  .partial();

export const AccessTokenSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenSelectFieldsSchema
);

export const AccessTokenOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    userId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) => !['id', 'name', 'userId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const AccessTokenOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenOmitFieldsSchema
);

export const AccessTokenIncludeSchema = z
  .object({
    user: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    AccessTokenPermission: PZ.Scalar.bool().or(
      AccessTokenPermissionOwnQuerySchema
    ),
  })
  .partial();

export const AccessTokenIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenIncludeSchema
);

export const AccessTokenProjectionSchema = z.union([
  z.object({ omit: AccessTokenOmitFieldsSchemaJson }),
  z.object({ select: AccessTokenSelectFieldsSchemaJson }),
  z.object({ include: AccessTokenIncludeSchemaJson }),
  z.object({}),
]);

export const ScopeRawCreateSchema = z.object({
  name: PZ.Scalar.name(),
});

export const ScopeCreateSchema = ScopeRawCreateSchema.clone();

export const ScopeRawUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
});

export const ScopeUpdateSchema = ScopeRawUpdateSchema.clone();

export const ScopeOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ScopeOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ScopeOrderBySchema
);

export const ScopeWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    permissions: z
      .object({
        some: PermissionOwnWhereSchema,
        every: PermissionOwnWhereSchema,
        none: PermissionOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ScopeWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ScopeWhereSchema
);

export const ScopeSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    permissions: PZ.Scalar.bool().or(PermissionOwnQuerySchema),
  })
  .partial();

export const ScopeSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ScopeSelectFieldsSchema
);

export const ScopeOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
  })
  .partial()
  .refine((value) => !['id', 'name'].every((e) => Object.hasOwn(value, e)), {
    message: 'Cannot omit all fields',
    path: ['omit'],
  });

export const ScopeOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ScopeOmitFieldsSchema
);

export const ScopeIncludeSchema = z
  .object({
    permissions: PZ.Scalar.bool().or(PermissionOwnQuerySchema),
  })
  .partial();

export const ScopeIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ScopeIncludeSchema
);

export const ScopeProjectionSchema = z.union([
  z.object({ omit: ScopeOmitFieldsSchemaJson }),
  z.object({ select: ScopeSelectFieldsSchemaJson }),
  z.object({ include: ScopeIncludeSchemaJson }),
  z.object({}),
]);

export const ResourceRawCreateSchema = z.object({
  name: PZ.Scalar.name(),
});

export const ResourceCreateSchema = ResourceRawCreateSchema.clone();

export const ResourceRawUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
});

export const ResourceUpdateSchema = ResourceRawUpdateSchema.clone();

export const ResourceOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ResourceOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ResourceOrderBySchema
);

export const ResourceWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    activities: z
      .object({
        some: ActivityOwnWhereSchema,
        every: ActivityOwnWhereSchema,
        none: ActivityOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ResourceWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ResourceWhereSchema
);

export const ResourceSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    activities: PZ.Scalar.bool().or(ActivityOwnQuerySchema),
  })
  .partial();

export const ResourceSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ResourceSelectFieldsSchema
);

export const ResourceOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
  })
  .partial()
  .refine((value) => !['id', 'name'].every((e) => Object.hasOwn(value, e)), {
    message: 'Cannot omit all fields',
    path: ['omit'],
  });

export const ResourceOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ResourceOmitFieldsSchema
);

export const ResourceIncludeSchema = z
  .object({
    activities: PZ.Scalar.bool().or(ActivityOwnQuerySchema),
  })
  .partial();

export const ResourceIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ResourceIncludeSchema
);

export const ResourceProjectionSchema = z.union([
  z.object({ omit: ResourceOmitFieldsSchemaJson }),
  z.object({ select: ResourceSelectFieldsSchemaJson }),
  z.object({ include: ResourceIncludeSchemaJson }),
  z.object({}),
]);

export const OperationRawCreateSchema = z.object({
  name: PZ.Scalar.name(),
});

export const OperationCreateSchema = OperationRawCreateSchema.clone();

export const OperationRawUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
});

export const OperationUpdateSchema = OperationRawUpdateSchema.clone();

export const OperationOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const OperationOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  OperationOrderBySchema
);

export const OperationWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    activities: z
      .object({
        some: ActivityOwnWhereSchema,
        every: ActivityOwnWhereSchema,
        none: ActivityOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const OperationWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  OperationWhereSchema
);

export const OperationSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    activities: PZ.Scalar.bool().or(ActivityOwnQuerySchema),
  })
  .partial();

export const OperationSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  OperationSelectFieldsSchema
);

export const OperationOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
  })
  .partial()
  .refine((value) => !['id', 'name'].every((e) => Object.hasOwn(value, e)), {
    message: 'Cannot omit all fields',
    path: ['omit'],
  });

export const OperationOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  OperationOmitFieldsSchema
);

export const OperationIncludeSchema = z
  .object({
    activities: PZ.Scalar.bool().or(ActivityOwnQuerySchema),
  })
  .partial();

export const OperationIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  OperationIncludeSchema
);

export const OperationProjectionSchema = z.union([
  z.object({ omit: OperationOmitFieldsSchemaJson }),
  z.object({ select: OperationSelectFieldsSchemaJson }),
  z.object({ include: OperationIncludeSchemaJson }),
  z.object({}),
]);

export const ActivityRawCreateSchema = z.object({
  name: PZ.Scalar.name(),
  resourceId: PZ.Scalar.id(),
  operationId: PZ.Scalar.id(),
});

export const ActivityCreateSchema = ActivityRawCreateSchema.clone();

export const ActivityRawUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  resourceId: PZ.Scalar.id().optional(),
  operationId: PZ.Scalar.id().optional(),
});

export const ActivityUpdateSchema = ActivityRawUpdateSchema.clone();

export const ActivityOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    resourceId: PZ.OrderDirectionSchema,
    operationId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ActivityOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivityOrderBySchema
);

export const ActivityWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    resourceId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    operationId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    resouce: ResourceOwnWhereSchema,
    operation: OperationOwnWhereSchema,
    permissions: z
      .object({
        some: PermissionOwnWhereSchema,
        every: PermissionOwnWhereSchema,
        none: PermissionOwnWhereSchema,
      })
      .partial(),
    logs: z
      .object({
        some: ActivityLogOwnWhereSchema,
        every: ActivityLogOwnWhereSchema,
        none: ActivityLogOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ActivityWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivityWhereSchema
);

export const ActivitySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    resourceId: PZ.Scalar.bool(),
    operationId: PZ.Scalar.bool(),
    resouce: PZ.Scalar.bool().or(ResourceOwnQueryOneSchema),
    operation: PZ.Scalar.bool().or(OperationOwnQueryOneSchema),
    permissions: PZ.Scalar.bool().or(PermissionOwnQuerySchema),
    logs: PZ.Scalar.bool().or(ActivityLogOwnQuerySchema),
  })
  .partial();

export const ActivitySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivitySelectFieldsSchema
);

export const ActivityOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    resourceId: PZ.Scalar.bool(),
    operationId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'name', 'resourceId', 'operationId'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const ActivityOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivityOmitFieldsSchema
);

export const ActivityIncludeSchema = z
  .object({
    resouce: PZ.Scalar.bool().or(ResourceOwnQueryOneSchema),
    operation: PZ.Scalar.bool().or(OperationOwnQueryOneSchema),
    permissions: PZ.Scalar.bool().or(PermissionOwnQuerySchema),
    logs: PZ.Scalar.bool().or(ActivityLogOwnQuerySchema),
  })
  .partial();

export const ActivityIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivityIncludeSchema
);

export const ActivityProjectionSchema = z.union([
  z.object({ omit: ActivityOmitFieldsSchemaJson }),
  z.object({ select: ActivitySelectFieldsSchemaJson }),
  z.object({ include: ActivityIncludeSchemaJson }),
  z.object({}),
]);

export const PermissionRawCreateSchema = z.object({
  scopeId: PZ.Scalar.id(),
  activityId: PZ.Scalar.id(),
});

export const PermissionCreateSchema = PermissionRawCreateSchema.clone();

export const PermissionRawUpdateSchema = z.object({
  scopeId: PZ.Scalar.id().optional(),
  activityId: PZ.Scalar.id().optional(),
});

export const PermissionUpdateSchema = PermissionRawUpdateSchema.clone();

export const PermissionOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    scopeId: PZ.OrderDirectionSchema,
    activityId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PermissionOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PermissionOrderBySchema
);

export const PermissionWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    scopeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    activityId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    scope: ScopeOwnWhereSchema,
    activity: ActivityOwnWhereSchema,
    roles: z
      .object({
        some: RolePermissionOwnWhereSchema,
        every: RolePermissionOwnWhereSchema,
        none: RolePermissionOwnWhereSchema,
      })
      .partial(),
    UserPermission: z
      .object({
        some: UserPermissionOwnWhereSchema,
        every: UserPermissionOwnWhereSchema,
        none: UserPermissionOwnWhereSchema,
      })
      .partial(),
    AccessTokenPermission: z
      .object({
        some: AccessTokenPermissionOwnWhereSchema,
        every: AccessTokenPermissionOwnWhereSchema,
        none: AccessTokenPermissionOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PermissionWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PermissionWhereSchema
);

export const PermissionSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    scopeId: PZ.Scalar.bool(),
    activityId: PZ.Scalar.bool(),
    scope: PZ.Scalar.bool().or(ScopeOwnQueryOneSchema),
    activity: PZ.Scalar.bool().or(ActivityOwnQueryOneSchema),
    roles: PZ.Scalar.bool().or(RolePermissionOwnQuerySchema),
    UserPermission: PZ.Scalar.bool().or(UserPermissionOwnQuerySchema),
    AccessTokenPermission: PZ.Scalar.bool().or(
      AccessTokenPermissionOwnQuerySchema
    ),
  })
  .partial();

export const PermissionSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PermissionSelectFieldsSchema
);

export const PermissionOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    scopeId: PZ.Scalar.bool(),
    activityId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'scopeId', 'activityId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PermissionOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PermissionOmitFieldsSchema
);

export const PermissionIncludeSchema = z
  .object({
    scope: PZ.Scalar.bool().or(ScopeOwnQueryOneSchema),
    activity: PZ.Scalar.bool().or(ActivityOwnQueryOneSchema),
    roles: PZ.Scalar.bool().or(RolePermissionOwnQuerySchema),
    UserPermission: PZ.Scalar.bool().or(UserPermissionOwnQuerySchema),
    AccessTokenPermission: PZ.Scalar.bool().or(
      AccessTokenPermissionOwnQuerySchema
    ),
  })
  .partial();

export const PermissionIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PermissionIncludeSchema
);

export const PermissionProjectionSchema = z.union([
  z.object({ omit: PermissionOmitFieldsSchemaJson }),
  z.object({ select: PermissionSelectFieldsSchemaJson }),
  z.object({ include: PermissionIncludeSchemaJson }),
  z.object({}),
]);

export const RoleRawCreateSchema = z.object({
  name: PZ.Scalar.name(),
});

export const RoleCreateSchema = RoleRawCreateSchema.clone();

export const RoleRawUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
});

export const RoleUpdateSchema = RoleRawUpdateSchema.clone();

export const RoleOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const RoleOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoleOrderBySchema
);

export const RoleWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    permissions: z
      .object({
        some: RolePermissionOwnWhereSchema,
        every: RolePermissionOwnWhereSchema,
        none: RolePermissionOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const RoleWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoleWhereSchema
);

export const RoleSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    permissions: PZ.Scalar.bool().or(RolePermissionOwnQuerySchema),
  })
  .partial();

export const RoleSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoleSelectFieldsSchema
);

export const RoleOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
  })
  .partial()
  .refine((value) => !['id', 'name'].every((e) => Object.hasOwn(value, e)), {
    message: 'Cannot omit all fields',
    path: ['omit'],
  });

export const RoleOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoleOmitFieldsSchema
);

export const RoleIncludeSchema = z
  .object({
    permissions: PZ.Scalar.bool().or(RolePermissionOwnQuerySchema),
  })
  .partial();

export const RoleIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoleIncludeSchema
);

export const RoleProjectionSchema = z.union([
  z.object({ omit: RoleOmitFieldsSchemaJson }),
  z.object({ select: RoleSelectFieldsSchemaJson }),
  z.object({ include: RoleIncludeSchemaJson }),
  z.object({}),
]);

export const RolePermissionRawCreateSchema = z.object({
  roleId: PZ.Scalar.id(),
  permissionId: PZ.Scalar.id(),
});

export const RolePermissionCreateSchema = RolePermissionRawCreateSchema.clone();

export const RolePermissionRawUpdateSchema = z.object({
  roleId: PZ.Scalar.id().optional(),
  permissionId: PZ.Scalar.id().optional(),
});

export const RolePermissionUpdateSchema = RolePermissionRawUpdateSchema.clone();

export const RolePermissionOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    roleId: PZ.OrderDirectionSchema,
    permissionId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const RolePermissionOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RolePermissionOrderBySchema
);

export const RolePermissionWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    roleId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    permissionId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    role: RoleOwnWhereSchema,
    permission: PermissionOwnWhereSchema,
  })
  .partial();

export const RolePermissionWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RolePermissionWhereSchema
);

export const RolePermissionSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    roleId: PZ.Scalar.bool(),
    permissionId: PZ.Scalar.bool(),
    role: PZ.Scalar.bool().or(RoleOwnQueryOneSchema),
    permission: PZ.Scalar.bool().or(PermissionOwnQueryOneSchema),
  })
  .partial();

export const RolePermissionSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RolePermissionSelectFieldsSchema
);

export const RolePermissionOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    roleId: PZ.Scalar.bool(),
    permissionId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'roleId', 'permissionId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const RolePermissionOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RolePermissionOmitFieldsSchema
);

export const RolePermissionIncludeSchema = z
  .object({
    role: PZ.Scalar.bool().or(RoleOwnQueryOneSchema),
    permission: PZ.Scalar.bool().or(PermissionOwnQueryOneSchema),
  })
  .partial();

export const RolePermissionIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RolePermissionIncludeSchema
);

export const RolePermissionProjectionSchema = z.union([
  z.object({ omit: RolePermissionOmitFieldsSchemaJson }),
  z.object({ select: RolePermissionSelectFieldsSchemaJson }),
  z.object({ include: RolePermissionIncludeSchemaJson }),
  z.object({}),
]);

export const SessionRawCreateSchema = z.object({
  userId: PZ.Scalar.id(),
  description: PZ.Scalar.description().optional(),
  status: SessionStatusSchema.optional(),
  endDate: PZ.Scalar.datetime(),
});

export const SessionCreateSchema = SessionRawCreateSchema.clone();

export const SessionRawUpdateSchema = z.object({
  userId: PZ.Scalar.id().optional(),
  description: PZ.Scalar.description().optional().optional(),
  status: SessionStatusSchema.optional().optional(),
  endDate: PZ.Scalar.datetime().optional(),
});

export const SessionUpdateSchema = SessionRawUpdateSchema.clone();

export const SessionOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    userId: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    startDate: PZ.OrderDirectionSchema,
    endDate: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const SessionOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SessionOrderBySchema
);

export const SessionWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    userId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    status: SessionStatusSchema,
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
    user: UserOwnWhereSchema,
    logs: z
      .object({
        some: ActivityLogOwnWhereSchema,
        every: ActivityLogOwnWhereSchema,
        none: ActivityLogOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const SessionWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SessionWhereSchema
);

export const SessionSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    userId: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    user: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    logs: PZ.Scalar.bool().or(ActivityLogOwnQuerySchema),
  })
  .partial();

export const SessionSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SessionSelectFieldsSchema
);

export const SessionOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    userId: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'userId', 'description', 'status', 'startDate', 'endDate'].every(
        (e) => Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const SessionOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SessionOmitFieldsSchema
);

export const SessionIncludeSchema = z
  .object({
    user: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    logs: PZ.Scalar.bool().or(ActivityLogOwnQuerySchema),
  })
  .partial();

export const SessionIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SessionIncludeSchema
);

export const SessionProjectionSchema = z.union([
  z.object({ omit: SessionOmitFieldsSchemaJson }),
  z.object({ select: SessionSelectFieldsSchemaJson }),
  z.object({ include: SessionIncludeSchemaJson }),
  z.object({}),
]);

export const ActivityLogRawCreateSchema = z.object({
  sessionId: PZ.Scalar.id(),
  activityId: PZ.Scalar.id(),
  notes: PZ.Scalar.string().optional(),
});

export const ActivityLogCreateSchema = ActivityLogRawCreateSchema.clone();

export const ActivityLogRawUpdateSchema = z.object({
  sessionId: PZ.Scalar.id().optional(),
  activityId: PZ.Scalar.id().optional(),
  notes: PZ.Scalar.string().optional().optional(),
});

export const ActivityLogUpdateSchema = ActivityLogRawUpdateSchema.clone();

export const ActivityLogOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    sessionId: PZ.OrderDirectionSchema,
    activityId: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    notes: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ActivityLogOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivityLogOrderBySchema
);

export const ActivityLogWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    sessionId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    activityId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    notes: z.string().or(PZ.StringFilterSchema),
    activity: ActivityOwnWhereSchema,
    session: SessionOwnWhereSchema,
  })
  .partial();

export const ActivityLogWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivityLogWhereSchema
);

export const ActivityLogSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    sessionId: PZ.Scalar.bool(),
    activityId: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    notes: PZ.Scalar.bool(),
    activity: PZ.Scalar.bool().or(ActivityOwnQueryOneSchema),
    session: PZ.Scalar.bool().or(SessionOwnQueryOneSchema),
  })
  .partial();

export const ActivityLogSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivityLogSelectFieldsSchema
);

export const ActivityLogOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    sessionId: PZ.Scalar.bool(),
    activityId: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    notes: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'sessionId', 'activityId', 'createdAt', 'notes'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const ActivityLogOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivityLogOmitFieldsSchema
);

export const ActivityLogIncludeSchema = z
  .object({
    activity: PZ.Scalar.bool().or(ActivityOwnQueryOneSchema),
    session: PZ.Scalar.bool().or(SessionOwnQueryOneSchema),
  })
  .partial();

export const ActivityLogIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ActivityLogIncludeSchema
);

export const ActivityLogProjectionSchema = z.union([
  z.object({ omit: ActivityLogOmitFieldsSchemaJson }),
  z.object({ select: ActivityLogSelectFieldsSchemaJson }),
  z.object({ include: ActivityLogIncludeSchemaJson }),
  z.object({}),
]);

export const UserPermissionRawCreateSchema = z.object({
  userId: PZ.Scalar.id(),
  permissionId: PZ.Scalar.id(),
});

export const UserPermissionCreateSchema = UserPermissionRawCreateSchema.clone();

export const UserPermissionRawUpdateSchema = z.object({
  userId: PZ.Scalar.id().optional(),
  permissionId: PZ.Scalar.id().optional(),
});

export const UserPermissionUpdateSchema = UserPermissionRawUpdateSchema.clone();

export const UserPermissionOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    userId: PZ.OrderDirectionSchema,
    permissionId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const UserPermissionOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserPermissionOrderBySchema
);

export const UserPermissionWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    userId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    permissionId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    user: UserOwnWhereSchema,
    permission: PermissionOwnWhereSchema,
  })
  .partial();

export const UserPermissionWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserPermissionWhereSchema
);

export const UserPermissionSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    userId: PZ.Scalar.bool(),
    permissionId: PZ.Scalar.bool(),
    user: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    permission: PZ.Scalar.bool().or(PermissionOwnQueryOneSchema),
  })
  .partial();

export const UserPermissionSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserPermissionSelectFieldsSchema
);

export const UserPermissionOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    userId: PZ.Scalar.bool(),
    permissionId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'userId', 'permissionId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const UserPermissionOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserPermissionOmitFieldsSchema
);

export const UserPermissionIncludeSchema = z
  .object({
    user: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    permission: PZ.Scalar.bool().or(PermissionOwnQueryOneSchema),
  })
  .partial();

export const UserPermissionIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserPermissionIncludeSchema
);

export const UserPermissionProjectionSchema = z.union([
  z.object({ omit: UserPermissionOmitFieldsSchemaJson }),
  z.object({ select: UserPermissionSelectFieldsSchemaJson }),
  z.object({ include: UserPermissionIncludeSchemaJson }),
  z.object({}),
]);

export const AccessTokenPermissionRawCreateSchema = z.object({
  permissionId: PZ.Scalar.id(),
  accessTokenId: PZ.Scalar.id(),
});

export const AccessTokenPermissionCreateSchema =
  AccessTokenPermissionRawCreateSchema.clone();

export const AccessTokenPermissionRawUpdateSchema = z.object({
  permissionId: PZ.Scalar.id().optional(),
  accessTokenId: PZ.Scalar.id().optional(),
});

export const AccessTokenPermissionUpdateSchema =
  AccessTokenPermissionRawUpdateSchema.clone();

export const AccessTokenPermissionOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    permissionId: PZ.OrderDirectionSchema,
    accessTokenId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const AccessTokenPermissionOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenPermissionOrderBySchema
);

export const AccessTokenPermissionWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    permissionId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    accessTokenId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    permission: PermissionOwnWhereSchema,
    accessToken: AccessTokenOwnWhereSchema,
  })
  .partial();

export const AccessTokenPermissionWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenPermissionWhereSchema
);

export const AccessTokenPermissionSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    permissionId: PZ.Scalar.bool(),
    accessTokenId: PZ.Scalar.bool(),
    permission: PZ.Scalar.bool().or(PermissionOwnQueryOneSchema),
    accessToken: PZ.Scalar.bool().or(AccessTokenOwnQueryOneSchema),
  })
  .partial();

export const AccessTokenPermissionSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenPermissionSelectFieldsSchema
);

export const AccessTokenPermissionOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    permissionId: PZ.Scalar.bool(),
    accessTokenId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'permissionId', 'accessTokenId'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const AccessTokenPermissionOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenPermissionOmitFieldsSchema
);

export const AccessTokenPermissionIncludeSchema = z
  .object({
    permission: PZ.Scalar.bool().or(PermissionOwnQueryOneSchema),
    accessToken: PZ.Scalar.bool().or(AccessTokenOwnQueryOneSchema),
  })
  .partial();

export const AccessTokenPermissionIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AccessTokenPermissionIncludeSchema
);

export const AccessTokenPermissionProjectionSchema = z.union([
  z.object({ omit: AccessTokenPermissionOmitFieldsSchemaJson }),
  z.object({ select: AccessTokenPermissionSelectFieldsSchemaJson }),
  z.object({ include: AccessTokenPermissionIncludeSchemaJson }),
  z.object({}),
]);

export const UserQueryOneSchema = z
  .object({
    where: UserWhereSchemaJson,
    distinct: UserDistinctFieldsSchema,
  })
  .partial();

export const UserQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: UserWhereSchemaJson,
    distinct: UserDistinctFieldsSchema,
    orderBy: UserOrderBySchemaJson,
  })
  .partial();

export type UserCreate = z.infer<typeof UserRawCreateSchema>;

export type UserUpdate = z.infer<typeof UserRawUpdateSchema>;

export type UserOrderBy = z.infer<typeof UserOrderBySchema>;

export type UserOwnSelectFields = z.infer<typeof UserOwnSelectFieldsSchema>;

export type UserOwnWhere = z.infer<typeof UserOwnWhereSchema>;

export type UserOwnQuery = z.infer<typeof UserOwnQuerySchema>;

export type UserOwnQueryOne = z.infer<typeof UserOwnQueryOneSchema>;

export type UserWhere = z.infer<typeof UserWhereSchema>;

export type UserInclude = z.infer<typeof UserIncludeSchema>;

export type UserQueryOne = z.infer<typeof UserQueryOneSchema>;

export type UserQuery = z.infer<typeof UserQuerySchema>;

export type UserOmitFields = z.infer<typeof UserOmitFieldsSchema>;

export type UserSelectFields = z.infer<typeof UserSelectFieldsSchema>;

export type UserProjection = z.infer<typeof UserProjectionSchema>;

export const AccessTokenQueryOneSchema = z
  .object({
    where: AccessTokenWhereSchemaJson,
    distinct: AccessTokenDistinctFieldsSchema,
  })
  .partial();

export const AccessTokenQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: AccessTokenWhereSchemaJson,
    distinct: AccessTokenDistinctFieldsSchema,
    orderBy: AccessTokenOrderBySchemaJson,
  })
  .partial();

export type AccessTokenCreate = z.infer<typeof AccessTokenRawCreateSchema>;

export type AccessTokenUpdate = z.infer<typeof AccessTokenRawUpdateSchema>;

export type AccessTokenOrderBy = z.infer<typeof AccessTokenOrderBySchema>;

export type AccessTokenOwnSelectFields = z.infer<
  typeof AccessTokenOwnSelectFieldsSchema
>;

export type AccessTokenOwnWhere = z.infer<typeof AccessTokenOwnWhereSchema>;

export type AccessTokenOwnQuery = z.infer<typeof AccessTokenOwnQuerySchema>;

export type AccessTokenOwnQueryOne = z.infer<
  typeof AccessTokenOwnQueryOneSchema
>;

export type AccessTokenWhere = z.infer<typeof AccessTokenWhereSchema>;

export type AccessTokenInclude = z.infer<typeof AccessTokenIncludeSchema>;

export type AccessTokenQueryOne = z.infer<typeof AccessTokenQueryOneSchema>;

export type AccessTokenQuery = z.infer<typeof AccessTokenQuerySchema>;

export type AccessTokenOmitFields = z.infer<typeof AccessTokenOmitFieldsSchema>;

export type AccessTokenSelectFields = z.infer<
  typeof AccessTokenSelectFieldsSchema
>;

export type AccessTokenProjection = z.infer<typeof AccessTokenProjectionSchema>;

export const ScopeQueryOneSchema = z
  .object({
    where: ScopeWhereSchemaJson,
    distinct: ScopeDistinctFieldsSchema,
  })
  .partial();

export const ScopeQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: ScopeWhereSchemaJson,
    distinct: ScopeDistinctFieldsSchema,
    orderBy: ScopeOrderBySchemaJson,
  })
  .partial();

export type ScopeCreate = z.infer<typeof ScopeRawCreateSchema>;

export type ScopeUpdate = z.infer<typeof ScopeRawUpdateSchema>;

export type ScopeOrderBy = z.infer<typeof ScopeOrderBySchema>;

export type ScopeOwnSelectFields = z.infer<typeof ScopeOwnSelectFieldsSchema>;

export type ScopeOwnWhere = z.infer<typeof ScopeOwnWhereSchema>;

export type ScopeOwnQuery = z.infer<typeof ScopeOwnQuerySchema>;

export type ScopeOwnQueryOne = z.infer<typeof ScopeOwnQueryOneSchema>;

export type ScopeWhere = z.infer<typeof ScopeWhereSchema>;

export type ScopeInclude = z.infer<typeof ScopeIncludeSchema>;

export type ScopeQueryOne = z.infer<typeof ScopeQueryOneSchema>;

export type ScopeQuery = z.infer<typeof ScopeQuerySchema>;

export type ScopeOmitFields = z.infer<typeof ScopeOmitFieldsSchema>;

export type ScopeSelectFields = z.infer<typeof ScopeSelectFieldsSchema>;

export type ScopeProjection = z.infer<typeof ScopeProjectionSchema>;

export const ResourceQueryOneSchema = z
  .object({
    where: ResourceWhereSchemaJson,
    distinct: ResourceDistinctFieldsSchema,
  })
  .partial();

export const ResourceQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: ResourceWhereSchemaJson,
    distinct: ResourceDistinctFieldsSchema,
    orderBy: ResourceOrderBySchemaJson,
  })
  .partial();

export type ResourceCreate = z.infer<typeof ResourceRawCreateSchema>;

export type ResourceUpdate = z.infer<typeof ResourceRawUpdateSchema>;

export type ResourceOrderBy = z.infer<typeof ResourceOrderBySchema>;

export type ResourceOwnSelectFields = z.infer<
  typeof ResourceOwnSelectFieldsSchema
>;

export type ResourceOwnWhere = z.infer<typeof ResourceOwnWhereSchema>;

export type ResourceOwnQuery = z.infer<typeof ResourceOwnQuerySchema>;

export type ResourceOwnQueryOne = z.infer<typeof ResourceOwnQueryOneSchema>;

export type ResourceWhere = z.infer<typeof ResourceWhereSchema>;

export type ResourceInclude = z.infer<typeof ResourceIncludeSchema>;

export type ResourceQueryOne = z.infer<typeof ResourceQueryOneSchema>;

export type ResourceQuery = z.infer<typeof ResourceQuerySchema>;

export type ResourceOmitFields = z.infer<typeof ResourceOmitFieldsSchema>;

export type ResourceSelectFields = z.infer<typeof ResourceSelectFieldsSchema>;

export type ResourceProjection = z.infer<typeof ResourceProjectionSchema>;

export const OperationQueryOneSchema = z
  .object({
    where: OperationWhereSchemaJson,
    distinct: OperationDistinctFieldsSchema,
  })
  .partial();

export const OperationQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: OperationWhereSchemaJson,
    distinct: OperationDistinctFieldsSchema,
    orderBy: OperationOrderBySchemaJson,
  })
  .partial();

export type OperationCreate = z.infer<typeof OperationRawCreateSchema>;

export type OperationUpdate = z.infer<typeof OperationRawUpdateSchema>;

export type OperationOrderBy = z.infer<typeof OperationOrderBySchema>;

export type OperationOwnSelectFields = z.infer<
  typeof OperationOwnSelectFieldsSchema
>;

export type OperationOwnWhere = z.infer<typeof OperationOwnWhereSchema>;

export type OperationOwnQuery = z.infer<typeof OperationOwnQuerySchema>;

export type OperationOwnQueryOne = z.infer<typeof OperationOwnQueryOneSchema>;

export type OperationWhere = z.infer<typeof OperationWhereSchema>;

export type OperationInclude = z.infer<typeof OperationIncludeSchema>;

export type OperationQueryOne = z.infer<typeof OperationQueryOneSchema>;

export type OperationQuery = z.infer<typeof OperationQuerySchema>;

export type OperationOmitFields = z.infer<typeof OperationOmitFieldsSchema>;

export type OperationSelectFields = z.infer<typeof OperationSelectFieldsSchema>;

export type OperationProjection = z.infer<typeof OperationProjectionSchema>;

export const ActivityQueryOneSchema = z
  .object({
    where: ActivityWhereSchemaJson,
    distinct: ActivityDistinctFieldsSchema,
  })
  .partial();

export const ActivityQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: ActivityWhereSchemaJson,
    distinct: ActivityDistinctFieldsSchema,
    orderBy: ActivityOrderBySchemaJson,
  })
  .partial();

export type ActivityCreate = z.infer<typeof ActivityRawCreateSchema>;

export type ActivityUpdate = z.infer<typeof ActivityRawUpdateSchema>;

export type ActivityOrderBy = z.infer<typeof ActivityOrderBySchema>;

export type ActivityOwnSelectFields = z.infer<
  typeof ActivityOwnSelectFieldsSchema
>;

export type ActivityOwnWhere = z.infer<typeof ActivityOwnWhereSchema>;

export type ActivityOwnQuery = z.infer<typeof ActivityOwnQuerySchema>;

export type ActivityOwnQueryOne = z.infer<typeof ActivityOwnQueryOneSchema>;

export type ActivityWhere = z.infer<typeof ActivityWhereSchema>;

export type ActivityInclude = z.infer<typeof ActivityIncludeSchema>;

export type ActivityQueryOne = z.infer<typeof ActivityQueryOneSchema>;

export type ActivityQuery = z.infer<typeof ActivityQuerySchema>;

export type ActivityOmitFields = z.infer<typeof ActivityOmitFieldsSchema>;

export type ActivitySelectFields = z.infer<typeof ActivitySelectFieldsSchema>;

export type ActivityProjection = z.infer<typeof ActivityProjectionSchema>;

export const PermissionQueryOneSchema = z
  .object({
    where: PermissionWhereSchemaJson,
    distinct: PermissionDistinctFieldsSchema,
  })
  .partial();

export const PermissionQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: PermissionWhereSchemaJson,
    distinct: PermissionDistinctFieldsSchema,
    orderBy: PermissionOrderBySchemaJson,
  })
  .partial();

export type PermissionCreate = z.infer<typeof PermissionRawCreateSchema>;

export type PermissionUpdate = z.infer<typeof PermissionRawUpdateSchema>;

export type PermissionOrderBy = z.infer<typeof PermissionOrderBySchema>;

export type PermissionOwnSelectFields = z.infer<
  typeof PermissionOwnSelectFieldsSchema
>;

export type PermissionOwnWhere = z.infer<typeof PermissionOwnWhereSchema>;

export type PermissionOwnQuery = z.infer<typeof PermissionOwnQuerySchema>;

export type PermissionOwnQueryOne = z.infer<typeof PermissionOwnQueryOneSchema>;

export type PermissionWhere = z.infer<typeof PermissionWhereSchema>;

export type PermissionInclude = z.infer<typeof PermissionIncludeSchema>;

export type PermissionQueryOne = z.infer<typeof PermissionQueryOneSchema>;

export type PermissionQuery = z.infer<typeof PermissionQuerySchema>;

export type PermissionOmitFields = z.infer<typeof PermissionOmitFieldsSchema>;

export type PermissionSelectFields = z.infer<
  typeof PermissionSelectFieldsSchema
>;

export type PermissionProjection = z.infer<typeof PermissionProjectionSchema>;

export const RoleQueryOneSchema = z
  .object({
    where: RoleWhereSchemaJson,
    distinct: RoleDistinctFieldsSchema,
  })
  .partial();

export const RoleQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: RoleWhereSchemaJson,
    distinct: RoleDistinctFieldsSchema,
    orderBy: RoleOrderBySchemaJson,
  })
  .partial();

export type RoleCreate = z.infer<typeof RoleRawCreateSchema>;

export type RoleUpdate = z.infer<typeof RoleRawUpdateSchema>;

export type RoleOrderBy = z.infer<typeof RoleOrderBySchema>;

export type RoleOwnSelectFields = z.infer<typeof RoleOwnSelectFieldsSchema>;

export type RoleOwnWhere = z.infer<typeof RoleOwnWhereSchema>;

export type RoleOwnQuery = z.infer<typeof RoleOwnQuerySchema>;

export type RoleOwnQueryOne = z.infer<typeof RoleOwnQueryOneSchema>;

export type RoleWhere = z.infer<typeof RoleWhereSchema>;

export type RoleInclude = z.infer<typeof RoleIncludeSchema>;

export type RoleQueryOne = z.infer<typeof RoleQueryOneSchema>;

export type RoleQuery = z.infer<typeof RoleQuerySchema>;

export type RoleOmitFields = z.infer<typeof RoleOmitFieldsSchema>;

export type RoleSelectFields = z.infer<typeof RoleSelectFieldsSchema>;

export type RoleProjection = z.infer<typeof RoleProjectionSchema>;

export const RolePermissionQueryOneSchema = z
  .object({
    where: RolePermissionWhereSchemaJson,
    distinct: RolePermissionDistinctFieldsSchema,
  })
  .partial();

export const RolePermissionQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: RolePermissionWhereSchemaJson,
    distinct: RolePermissionDistinctFieldsSchema,
    orderBy: RolePermissionOrderBySchemaJson,
  })
  .partial();

export type RolePermissionCreate = z.infer<
  typeof RolePermissionRawCreateSchema
>;

export type RolePermissionUpdate = z.infer<
  typeof RolePermissionRawUpdateSchema
>;

export type RolePermissionOrderBy = z.infer<typeof RolePermissionOrderBySchema>;

export type RolePermissionOwnSelectFields = z.infer<
  typeof RolePermissionOwnSelectFieldsSchema
>;

export type RolePermissionOwnWhere = z.infer<
  typeof RolePermissionOwnWhereSchema
>;

export type RolePermissionOwnQuery = z.infer<
  typeof RolePermissionOwnQuerySchema
>;

export type RolePermissionOwnQueryOne = z.infer<
  typeof RolePermissionOwnQueryOneSchema
>;

export type RolePermissionWhere = z.infer<typeof RolePermissionWhereSchema>;

export type RolePermissionInclude = z.infer<typeof RolePermissionIncludeSchema>;

export type RolePermissionQueryOne = z.infer<
  typeof RolePermissionQueryOneSchema
>;

export type RolePermissionQuery = z.infer<typeof RolePermissionQuerySchema>;

export type RolePermissionOmitFields = z.infer<
  typeof RolePermissionOmitFieldsSchema
>;

export type RolePermissionSelectFields = z.infer<
  typeof RolePermissionSelectFieldsSchema
>;

export type RolePermissionProjection = z.infer<
  typeof RolePermissionProjectionSchema
>;

export const SessionQueryOneSchema = z
  .object({
    where: SessionWhereSchemaJson,
    distinct: SessionDistinctFieldsSchema,
  })
  .partial();

export const SessionQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: SessionWhereSchemaJson,
    distinct: SessionDistinctFieldsSchema,
    orderBy: SessionOrderBySchemaJson,
  })
  .partial();

export type SessionCreate = z.infer<typeof SessionRawCreateSchema>;

export type SessionUpdate = z.infer<typeof SessionRawUpdateSchema>;

export type SessionOrderBy = z.infer<typeof SessionOrderBySchema>;

export type SessionOwnSelectFields = z.infer<
  typeof SessionOwnSelectFieldsSchema
>;

export type SessionOwnWhere = z.infer<typeof SessionOwnWhereSchema>;

export type SessionOwnQuery = z.infer<typeof SessionOwnQuerySchema>;

export type SessionOwnQueryOne = z.infer<typeof SessionOwnQueryOneSchema>;

export type SessionWhere = z.infer<typeof SessionWhereSchema>;

export type SessionInclude = z.infer<typeof SessionIncludeSchema>;

export type SessionQueryOne = z.infer<typeof SessionQueryOneSchema>;

export type SessionQuery = z.infer<typeof SessionQuerySchema>;

export type SessionOmitFields = z.infer<typeof SessionOmitFieldsSchema>;

export type SessionSelectFields = z.infer<typeof SessionSelectFieldsSchema>;

export type SessionProjection = z.infer<typeof SessionProjectionSchema>;

export const ActivityLogQueryOneSchema = z
  .object({
    where: ActivityLogWhereSchemaJson,
    distinct: ActivityLogDistinctFieldsSchema,
  })
  .partial();

export const ActivityLogQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: ActivityLogWhereSchemaJson,
    distinct: ActivityLogDistinctFieldsSchema,
    orderBy: ActivityLogOrderBySchemaJson,
  })
  .partial();

export type ActivityLogCreate = z.infer<typeof ActivityLogRawCreateSchema>;

export type ActivityLogUpdate = z.infer<typeof ActivityLogRawUpdateSchema>;

export type ActivityLogOrderBy = z.infer<typeof ActivityLogOrderBySchema>;

export type ActivityLogOwnSelectFields = z.infer<
  typeof ActivityLogOwnSelectFieldsSchema
>;

export type ActivityLogOwnWhere = z.infer<typeof ActivityLogOwnWhereSchema>;

export type ActivityLogOwnQuery = z.infer<typeof ActivityLogOwnQuerySchema>;

export type ActivityLogOwnQueryOne = z.infer<
  typeof ActivityLogOwnQueryOneSchema
>;

export type ActivityLogWhere = z.infer<typeof ActivityLogWhereSchema>;

export type ActivityLogInclude = z.infer<typeof ActivityLogIncludeSchema>;

export type ActivityLogQueryOne = z.infer<typeof ActivityLogQueryOneSchema>;

export type ActivityLogQuery = z.infer<typeof ActivityLogQuerySchema>;

export type ActivityLogOmitFields = z.infer<typeof ActivityLogOmitFieldsSchema>;

export type ActivityLogSelectFields = z.infer<
  typeof ActivityLogSelectFieldsSchema
>;

export type ActivityLogProjection = z.infer<typeof ActivityLogProjectionSchema>;

export const UserPermissionQueryOneSchema = z
  .object({
    where: UserPermissionWhereSchemaJson,
    distinct: UserPermissionDistinctFieldsSchema,
  })
  .partial();

export const UserPermissionQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: UserPermissionWhereSchemaJson,
    distinct: UserPermissionDistinctFieldsSchema,
    orderBy: UserPermissionOrderBySchemaJson,
  })
  .partial();

export type UserPermissionCreate = z.infer<
  typeof UserPermissionRawCreateSchema
>;

export type UserPermissionUpdate = z.infer<
  typeof UserPermissionRawUpdateSchema
>;

export type UserPermissionOrderBy = z.infer<typeof UserPermissionOrderBySchema>;

export type UserPermissionOwnSelectFields = z.infer<
  typeof UserPermissionOwnSelectFieldsSchema
>;

export type UserPermissionOwnWhere = z.infer<
  typeof UserPermissionOwnWhereSchema
>;

export type UserPermissionOwnQuery = z.infer<
  typeof UserPermissionOwnQuerySchema
>;

export type UserPermissionOwnQueryOne = z.infer<
  typeof UserPermissionOwnQueryOneSchema
>;

export type UserPermissionWhere = z.infer<typeof UserPermissionWhereSchema>;

export type UserPermissionInclude = z.infer<typeof UserPermissionIncludeSchema>;

export type UserPermissionQueryOne = z.infer<
  typeof UserPermissionQueryOneSchema
>;

export type UserPermissionQuery = z.infer<typeof UserPermissionQuerySchema>;

export type UserPermissionOmitFields = z.infer<
  typeof UserPermissionOmitFieldsSchema
>;

export type UserPermissionSelectFields = z.infer<
  typeof UserPermissionSelectFieldsSchema
>;

export type UserPermissionProjection = z.infer<
  typeof UserPermissionProjectionSchema
>;

export const AccessTokenPermissionQueryOneSchema = z
  .object({
    where: AccessTokenPermissionWhereSchemaJson,
    distinct: AccessTokenPermissionDistinctFieldsSchema,
  })
  .partial();

export const AccessTokenPermissionQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: AccessTokenPermissionWhereSchemaJson,
    distinct: AccessTokenPermissionDistinctFieldsSchema,
    orderBy: AccessTokenPermissionOrderBySchemaJson,
  })
  .partial();

export type AccessTokenPermissionCreate = z.infer<
  typeof AccessTokenPermissionRawCreateSchema
>;

export type AccessTokenPermissionUpdate = z.infer<
  typeof AccessTokenPermissionRawUpdateSchema
>;

export type AccessTokenPermissionOrderBy = z.infer<
  typeof AccessTokenPermissionOrderBySchema
>;

export type AccessTokenPermissionOwnSelectFields = z.infer<
  typeof AccessTokenPermissionOwnSelectFieldsSchema
>;

export type AccessTokenPermissionOwnWhere = z.infer<
  typeof AccessTokenPermissionOwnWhereSchema
>;

export type AccessTokenPermissionOwnQuery = z.infer<
  typeof AccessTokenPermissionOwnQuerySchema
>;

export type AccessTokenPermissionOwnQueryOne = z.infer<
  typeof AccessTokenPermissionOwnQueryOneSchema
>;

export type AccessTokenPermissionWhere = z.infer<
  typeof AccessTokenPermissionWhereSchema
>;

export type AccessTokenPermissionInclude = z.infer<
  typeof AccessTokenPermissionIncludeSchema
>;

export type AccessTokenPermissionQueryOne = z.infer<
  typeof AccessTokenPermissionQueryOneSchema
>;

export type AccessTokenPermissionQuery = z.infer<
  typeof AccessTokenPermissionQuerySchema
>;

export type AccessTokenPermissionOmitFields = z.infer<
  typeof AccessTokenPermissionOmitFieldsSchema
>;

export type AccessTokenPermissionSelectFields = z.infer<
  typeof AccessTokenPermissionSelectFieldsSchema
>;

export type AccessTokenPermissionProjection = z.infer<
  typeof AccessTokenPermissionProjectionSchema
>;

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

export const SessionStatusSchema = z.enum(['ACTIVE', 'EXPIRED', 'REVOKED']);

export const UserOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    username: z.boolean(),
    password: z.boolean(),
    sessions: z.boolean(),
    permissions: z.boolean(),
    AccessToken: z.boolean(),
  })
  .partial();

export const UserOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  UserOwnSelectFieldsSchema
);

export const UserDistinctFieldsSchema = z
  .enum(['id', 'uuid', 'username', 'password'])
  .array();

export const AccessTokenOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    userId: z.boolean(),
    user: z.boolean(),
    AccessTokenPermission: z.boolean(),
  })
  .partial();

export const AccessTokenOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AccessTokenOwnSelectFieldsSchema
);

export const AccessTokenDistinctFieldsSchema = z
  .enum(['id', 'name', 'userId'])
  .array();

export const ScopeOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    permissions: z.boolean(),
  })
  .partial();

export const ScopeOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ScopeOwnSelectFieldsSchema
);

export const ScopeDistinctFieldsSchema = z.enum(['id', 'name']).array();

export const ResourceOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    activities: z.boolean(),
  })
  .partial();

export const ResourceOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ResourceOwnSelectFieldsSchema
);

export const ResourceDistinctFieldsSchema = z.enum(['id', 'name']).array();

export const OperationOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    activities: z.boolean(),
  })
  .partial();

export const OperationOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  OperationOwnSelectFieldsSchema
);

export const OperationDistinctFieldsSchema = z.enum(['id', 'name']).array();

export const ActivityOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    resourceId: z.boolean(),
    operationId: z.boolean(),
    resouce: z.boolean(),
    operation: z.boolean(),
    permissions: z.boolean(),
    logs: z.boolean(),
  })
  .partial();

export const ActivityOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ActivityOwnSelectFieldsSchema
);

export const ActivityDistinctFieldsSchema = z
  .enum(['id', 'name', 'resourceId', 'operationId'])
  .array();

export const PermissionOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    scopeId: z.boolean(),
    activityId: z.boolean(),
    scope: z.boolean(),
    activity: z.boolean(),
    roles: z.boolean(),
    UserPermission: z.boolean(),
    AccessTokenPermission: z.boolean(),
  })
  .partial();

export const PermissionOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PermissionOwnSelectFieldsSchema
);

export const PermissionDistinctFieldsSchema = z
  .enum(['id', 'scopeId', 'activityId'])
  .array();

export const RoleOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    permissions: z.boolean(),
  })
  .partial();

export const RoleOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  RoleOwnSelectFieldsSchema
);

export const RoleDistinctFieldsSchema = z.enum(['id', 'name']).array();

export const RolePermissionOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    roleId: z.boolean(),
    permissionId: z.boolean(),
    role: z.boolean(),
    permission: z.boolean(),
  })
  .partial();

export const RolePermissionOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  RolePermissionOwnSelectFieldsSchema
);

export const RolePermissionDistinctFieldsSchema = z
  .enum(['id', 'roleId', 'permissionId'])
  .array();

export const SessionOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    userId: z.boolean(),
    description: z.boolean(),
    status: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    user: z.boolean(),
    logs: z.boolean(),
  })
  .partial();

export const SessionOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SessionOwnSelectFieldsSchema
);

export const SessionDistinctFieldsSchema = z
  .enum(['id', 'userId', 'description', 'status', 'startDate', 'endDate'])
  .array();

export const ActivityLogOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    sessionId: z.boolean(),
    activityId: z.boolean(),
    createdAt: z.boolean(),
    notes: z.boolean(),
    activity: z.boolean(),
    session: z.boolean(),
  })
  .partial();

export const ActivityLogOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ActivityLogOwnSelectFieldsSchema
);

export const ActivityLogDistinctFieldsSchema = z
  .enum(['id', 'sessionId', 'activityId', 'createdAt', 'notes'])
  .array();

export const UserPermissionOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    userId: z.boolean(),
    permissionId: z.boolean(),
    user: z.boolean(),
    permission: z.boolean(),
  })
  .partial();

export const UserPermissionOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  UserPermissionOwnSelectFieldsSchema
);

export const UserPermissionDistinctFieldsSchema = z
  .enum(['id', 'userId', 'permissionId'])
  .array();

export const AccessTokenPermissionOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    permissionId: z.boolean(),
    accessTokenId: z.boolean(),
    permission: z.boolean(),
    accessToken: z.boolean(),
  })
  .partial();

export const AccessTokenPermissionOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
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
  jsonParser,
  AccessTokenOwnWhereSchema
);

export const ScopeOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const ScopeOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ScopeOwnWhereSchema
);

export const ResourceOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const ResourceOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ResourceOwnWhereSchema
);

export const OperationOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const OperationOwnWhereSchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
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
  jsonParser,
  PermissionOwnWhereSchema
);

export const RoleOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const RoleOwnWhereSchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
  AccessTokenPermissionOwnWhereSchema
);

export const UserOwnIncludeSchema = z
  .object({
    sessions: z.boolean(),
    permissions: z.boolean(),
    AccessToken: z.boolean(),
  })
  .partial();

export const UserOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    user: z.boolean(),
    AccessTokenPermission: z.boolean(),
  })
  .partial();

export const AccessTokenOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    permissions: z.boolean(),
  })
  .partial();

export const ScopeOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    activities: z.boolean(),
  })
  .partial();

export const ResourceOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    activities: z.boolean(),
  })
  .partial();

export const OperationOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    resouce: z.boolean(),
    operation: z.boolean(),
    permissions: z.boolean(),
    logs: z.boolean(),
  })
  .partial();

export const ActivityOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    scope: z.boolean(),
    activity: z.boolean(),
    roles: z.boolean(),
    UserPermission: z.boolean(),
    AccessTokenPermission: z.boolean(),
  })
  .partial();

export const PermissionOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    permissions: z.boolean(),
  })
  .partial();

export const RoleOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    role: z.boolean(),
    permission: z.boolean(),
  })
  .partial();

export const RolePermissionOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    user: z.boolean(),
    logs: z.boolean(),
  })
  .partial();

export const SessionOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    activity: z.boolean(),
    session: z.boolean(),
  })
  .partial();

export const ActivityLogOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    user: z.boolean(),
    permission: z.boolean(),
  })
  .partial();

export const UserPermissionOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    permission: z.boolean(),
    accessToken: z.boolean(),
  })
  .partial();

export const AccessTokenPermissionOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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

export const UserCreateSchema = z.object({
  uuid: z.string(),
  username: z.string(),
  password: z.string(),
});

export const UserUpdateSchema = z.object({
  uuid: z.string().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
});

export const UserOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    username: PZ.OrderDirectionSchema,
    password: PZ.OrderDirectionSchema,
  })
  .partial();

export const UserOrderBySchemaJson = z.preprocess(
  jsonParser,
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

export const UserWhereSchemaJson = z.preprocess(jsonParser, UserWhereSchema);

export const UserSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    username: z.boolean(),
    password: z.boolean(),
    sessions: z.boolean().or(SessionOwnQuerySchema),
    permissions: z.boolean().or(UserPermissionOwnQuerySchema),
    AccessToken: z.boolean().or(AccessTokenOwnQuerySchema),
  })
  .partial();

export const UserSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  UserSelectFieldsSchema
);

export const UserIncludeSchema = z
  .object({
    sessions: z.boolean().or(SessionOwnQuerySchema),
    permissions: z.boolean().or(UserPermissionOwnQuerySchema),
    AccessToken: z.boolean().or(AccessTokenOwnQuerySchema),
  })
  .partial();

export const UserIncludeSchemaJson = z.preprocess(
  jsonParser,
  UserIncludeSchema
);

export const UserProjectionSchema = z.union([
  z.object({ omit: UserSelectFieldsSchemaJson }),
  z.object({ select: UserSelectFieldsSchemaJson }),
  z.object({ include: UserIncludeSchemaJson }),
  z.object({}),
]);

export const AccessTokenCreateSchema = z.object({
  name: nameSchema.clone(),
  userId: z.coerce.number().int(),
});

export const AccessTokenUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
  userId: z.coerce.number().int().optional(),
});

export const AccessTokenOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    userId: PZ.OrderDirectionSchema,
  })
  .partial();

export const AccessTokenOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  AccessTokenWhereSchema
);

export const AccessTokenSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    userId: z.boolean(),
    user: z.boolean().or(UserOwnQueryOneSchema),
    AccessTokenPermission: z.boolean().or(AccessTokenPermissionOwnQuerySchema),
  })
  .partial();

export const AccessTokenSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AccessTokenSelectFieldsSchema
);

export const AccessTokenIncludeSchema = z
  .object({
    user: z.boolean().or(UserOwnQueryOneSchema),
    AccessTokenPermission: z.boolean().or(AccessTokenPermissionOwnQuerySchema),
  })
  .partial();

export const AccessTokenIncludeSchemaJson = z.preprocess(
  jsonParser,
  AccessTokenIncludeSchema
);

export const AccessTokenProjectionSchema = z.union([
  z.object({ omit: AccessTokenSelectFieldsSchemaJson }),
  z.object({ select: AccessTokenSelectFieldsSchemaJson }),
  z.object({ include: AccessTokenIncludeSchemaJson }),
  z.object({}),
]);

export const ScopeCreateSchema = z.object({
  name: nameSchema.clone(),
});

export const ScopeUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
});

export const ScopeOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial();

export const ScopeOrderBySchemaJson = z.preprocess(
  jsonParser,
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

export const ScopeWhereSchemaJson = z.preprocess(jsonParser, ScopeWhereSchema);

export const ScopeSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    permissions: z.boolean().or(PermissionOwnQuerySchema),
  })
  .partial();

export const ScopeSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ScopeSelectFieldsSchema
);

export const ScopeIncludeSchema = z
  .object({
    permissions: z.boolean().or(PermissionOwnQuerySchema),
  })
  .partial();

export const ScopeIncludeSchemaJson = z.preprocess(
  jsonParser,
  ScopeIncludeSchema
);

export const ScopeProjectionSchema = z.union([
  z.object({ omit: ScopeSelectFieldsSchemaJson }),
  z.object({ select: ScopeSelectFieldsSchemaJson }),
  z.object({ include: ScopeIncludeSchemaJson }),
  z.object({}),
]);

export const ResourceCreateSchema = z.object({
  name: nameSchema.clone(),
});

export const ResourceUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
});

export const ResourceOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial();

export const ResourceOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  ResourceWhereSchema
);

export const ResourceSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    activities: z.boolean().or(ActivityOwnQuerySchema),
  })
  .partial();

export const ResourceSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ResourceSelectFieldsSchema
);

export const ResourceIncludeSchema = z
  .object({
    activities: z.boolean().or(ActivityOwnQuerySchema),
  })
  .partial();

export const ResourceIncludeSchemaJson = z.preprocess(
  jsonParser,
  ResourceIncludeSchema
);

export const ResourceProjectionSchema = z.union([
  z.object({ omit: ResourceSelectFieldsSchemaJson }),
  z.object({ select: ResourceSelectFieldsSchemaJson }),
  z.object({ include: ResourceIncludeSchemaJson }),
  z.object({}),
]);

export const OperationCreateSchema = z.object({
  name: nameSchema.clone(),
});

export const OperationUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
});

export const OperationOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial();

export const OperationOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  OperationWhereSchema
);

export const OperationSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    activities: z.boolean().or(ActivityOwnQuerySchema),
  })
  .partial();

export const OperationSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  OperationSelectFieldsSchema
);

export const OperationIncludeSchema = z
  .object({
    activities: z.boolean().or(ActivityOwnQuerySchema),
  })
  .partial();

export const OperationIncludeSchemaJson = z.preprocess(
  jsonParser,
  OperationIncludeSchema
);

export const OperationProjectionSchema = z.union([
  z.object({ omit: OperationSelectFieldsSchemaJson }),
  z.object({ select: OperationSelectFieldsSchemaJson }),
  z.object({ include: OperationIncludeSchemaJson }),
  z.object({}),
]);

export const ActivityCreateSchema = z.object({
  name: nameSchema.clone(),
  resourceId: z.coerce.number().int(),
  operationId: z.coerce.number().int(),
});

export const ActivityUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
  resourceId: z.coerce.number().int().optional(),
  operationId: z.coerce.number().int().optional(),
});

export const ActivityOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    resourceId: PZ.OrderDirectionSchema,
    operationId: PZ.OrderDirectionSchema,
  })
  .partial();

export const ActivityOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  ActivityWhereSchema
);

export const ActivitySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    resourceId: z.boolean(),
    operationId: z.boolean(),
    resouce: z.boolean().or(ResourceOwnQueryOneSchema),
    operation: z.boolean().or(OperationOwnQueryOneSchema),
    permissions: z.boolean().or(PermissionOwnQuerySchema),
    logs: z.boolean().or(ActivityLogOwnQuerySchema),
  })
  .partial();

export const ActivitySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ActivitySelectFieldsSchema
);

export const ActivityIncludeSchema = z
  .object({
    resouce: z.boolean().or(ResourceOwnQueryOneSchema),
    operation: z.boolean().or(OperationOwnQueryOneSchema),
    permissions: z.boolean().or(PermissionOwnQuerySchema),
    logs: z.boolean().or(ActivityLogOwnQuerySchema),
  })
  .partial();

export const ActivityIncludeSchemaJson = z.preprocess(
  jsonParser,
  ActivityIncludeSchema
);

export const ActivityProjectionSchema = z.union([
  z.object({ omit: ActivitySelectFieldsSchemaJson }),
  z.object({ select: ActivitySelectFieldsSchemaJson }),
  z.object({ include: ActivityIncludeSchemaJson }),
  z.object({}),
]);

export const PermissionCreateSchema = z.object({
  scopeId: z.coerce.number().int(),
  activityId: z.coerce.number().int(),
});

export const PermissionUpdateSchema = z.object({
  scopeId: z.coerce.number().int().optional(),
  activityId: z.coerce.number().int().optional(),
});

export const PermissionOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    scopeId: PZ.OrderDirectionSchema,
    activityId: PZ.OrderDirectionSchema,
  })
  .partial();

export const PermissionOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  PermissionWhereSchema
);

export const PermissionSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    scopeId: z.boolean(),
    activityId: z.boolean(),
    scope: z.boolean().or(ScopeOwnQueryOneSchema),
    activity: z.boolean().or(ActivityOwnQueryOneSchema),
    roles: z.boolean().or(RolePermissionOwnQuerySchema),
    UserPermission: z.boolean().or(UserPermissionOwnQuerySchema),
    AccessTokenPermission: z.boolean().or(AccessTokenPermissionOwnQuerySchema),
  })
  .partial();

export const PermissionSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PermissionSelectFieldsSchema
);

export const PermissionIncludeSchema = z
  .object({
    scope: z.boolean().or(ScopeOwnQueryOneSchema),
    activity: z.boolean().or(ActivityOwnQueryOneSchema),
    roles: z.boolean().or(RolePermissionOwnQuerySchema),
    UserPermission: z.boolean().or(UserPermissionOwnQuerySchema),
    AccessTokenPermission: z.boolean().or(AccessTokenPermissionOwnQuerySchema),
  })
  .partial();

export const PermissionIncludeSchemaJson = z.preprocess(
  jsonParser,
  PermissionIncludeSchema
);

export const PermissionProjectionSchema = z.union([
  z.object({ omit: PermissionSelectFieldsSchemaJson }),
  z.object({ select: PermissionSelectFieldsSchemaJson }),
  z.object({ include: PermissionIncludeSchemaJson }),
  z.object({}),
]);

export const RoleCreateSchema = z.object({
  name: nameSchema.clone(),
});

export const RoleUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
});

export const RoleOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial();

export const RoleOrderBySchemaJson = z.preprocess(
  jsonParser,
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

export const RoleWhereSchemaJson = z.preprocess(jsonParser, RoleWhereSchema);

export const RoleSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    permissions: z.boolean().or(RolePermissionOwnQuerySchema),
  })
  .partial();

export const RoleSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  RoleSelectFieldsSchema
);

export const RoleIncludeSchema = z
  .object({
    permissions: z.boolean().or(RolePermissionOwnQuerySchema),
  })
  .partial();

export const RoleIncludeSchemaJson = z.preprocess(
  jsonParser,
  RoleIncludeSchema
);

export const RoleProjectionSchema = z.union([
  z.object({ omit: RoleSelectFieldsSchemaJson }),
  z.object({ select: RoleSelectFieldsSchemaJson }),
  z.object({ include: RoleIncludeSchemaJson }),
  z.object({}),
]);

export const RolePermissionCreateSchema = z.object({
  roleId: z.coerce.number().int(),
  permissionId: z.coerce.number().int(),
});

export const RolePermissionUpdateSchema = z.object({
  roleId: z.coerce.number().int().optional(),
  permissionId: z.coerce.number().int().optional(),
});

export const RolePermissionOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    roleId: PZ.OrderDirectionSchema,
    permissionId: PZ.OrderDirectionSchema,
  })
  .partial();

export const RolePermissionOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  RolePermissionWhereSchema
);

export const RolePermissionSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    roleId: z.boolean(),
    permissionId: z.boolean(),
    role: z.boolean().or(RoleOwnQueryOneSchema),
    permission: z.boolean().or(PermissionOwnQueryOneSchema),
  })
  .partial();

export const RolePermissionSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  RolePermissionSelectFieldsSchema
);

export const RolePermissionIncludeSchema = z
  .object({
    role: z.boolean().or(RoleOwnQueryOneSchema),
    permission: z.boolean().or(PermissionOwnQueryOneSchema),
  })
  .partial();

export const RolePermissionIncludeSchemaJson = z.preprocess(
  jsonParser,
  RolePermissionIncludeSchema
);

export const RolePermissionProjectionSchema = z.union([
  z.object({ omit: RolePermissionSelectFieldsSchemaJson }),
  z.object({ select: RolePermissionSelectFieldsSchemaJson }),
  z.object({ include: RolePermissionIncludeSchemaJson }),
  z.object({}),
]);

export const SessionCreateSchema = z.object({
  userId: z.coerce.number().int(),
  description: descriptionSchema.clone().optional(),
  status: SessionStatusSchema.optional(),
  endDate: dateSchema.clone(),
});

export const SessionUpdateSchema = z.object({
  userId: z.coerce.number().int().optional(),
  description: descriptionSchema.clone().optional().optional(),
  status: SessionStatusSchema.optional().optional(),
  endDate: dateSchema.clone().optional(),
});

export const SessionOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    userId: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    startDate: PZ.OrderDirectionSchema,
    endDate: PZ.OrderDirectionSchema,
  })
  .partial();

export const SessionOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  SessionWhereSchema
);

export const SessionSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    userId: z.boolean(),
    description: z.boolean(),
    status: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    user: z.boolean().or(UserOwnQueryOneSchema),
    logs: z.boolean().or(ActivityLogOwnQuerySchema),
  })
  .partial();

export const SessionSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SessionSelectFieldsSchema
);

export const SessionIncludeSchema = z
  .object({
    user: z.boolean().or(UserOwnQueryOneSchema),
    logs: z.boolean().or(ActivityLogOwnQuerySchema),
  })
  .partial();

export const SessionIncludeSchemaJson = z.preprocess(
  jsonParser,
  SessionIncludeSchema
);

export const SessionProjectionSchema = z.union([
  z.object({ omit: SessionSelectFieldsSchemaJson }),
  z.object({ select: SessionSelectFieldsSchemaJson }),
  z.object({ include: SessionIncludeSchemaJson }),
  z.object({}),
]);

export const ActivityLogCreateSchema = z.object({
  sessionId: z.coerce.number().int(),
  activityId: z.coerce.number().int(),
  notes: z.string().optional(),
});

export const ActivityLogUpdateSchema = z.object({
  sessionId: z.coerce.number().int().optional(),
  activityId: z.coerce.number().int().optional(),
  notes: z.string().optional().optional(),
});

export const ActivityLogOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    sessionId: PZ.OrderDirectionSchema,
    activityId: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    notes: PZ.OrderDirectionSchema,
  })
  .partial();

export const ActivityLogOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  ActivityLogWhereSchema
);

export const ActivityLogSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    sessionId: z.boolean(),
    activityId: z.boolean(),
    createdAt: z.boolean(),
    notes: z.boolean(),
    activity: z.boolean().or(ActivityOwnQueryOneSchema),
    session: z.boolean().or(SessionOwnQueryOneSchema),
  })
  .partial();

export const ActivityLogSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ActivityLogSelectFieldsSchema
);

export const ActivityLogIncludeSchema = z
  .object({
    activity: z.boolean().or(ActivityOwnQueryOneSchema),
    session: z.boolean().or(SessionOwnQueryOneSchema),
  })
  .partial();

export const ActivityLogIncludeSchemaJson = z.preprocess(
  jsonParser,
  ActivityLogIncludeSchema
);

export const ActivityLogProjectionSchema = z.union([
  z.object({ omit: ActivityLogSelectFieldsSchemaJson }),
  z.object({ select: ActivityLogSelectFieldsSchemaJson }),
  z.object({ include: ActivityLogIncludeSchemaJson }),
  z.object({}),
]);

export const UserPermissionCreateSchema = z.object({
  userId: z.coerce.number().int(),
  permissionId: z.coerce.number().int(),
});

export const UserPermissionUpdateSchema = z.object({
  userId: z.coerce.number().int().optional(),
  permissionId: z.coerce.number().int().optional(),
});

export const UserPermissionOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    userId: PZ.OrderDirectionSchema,
    permissionId: PZ.OrderDirectionSchema,
  })
  .partial();

export const UserPermissionOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  UserPermissionWhereSchema
);

export const UserPermissionSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    userId: z.boolean(),
    permissionId: z.boolean(),
    user: z.boolean().or(UserOwnQueryOneSchema),
    permission: z.boolean().or(PermissionOwnQueryOneSchema),
  })
  .partial();

export const UserPermissionSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  UserPermissionSelectFieldsSchema
);

export const UserPermissionIncludeSchema = z
  .object({
    user: z.boolean().or(UserOwnQueryOneSchema),
    permission: z.boolean().or(PermissionOwnQueryOneSchema),
  })
  .partial();

export const UserPermissionIncludeSchemaJson = z.preprocess(
  jsonParser,
  UserPermissionIncludeSchema
);

export const UserPermissionProjectionSchema = z.union([
  z.object({ omit: UserPermissionSelectFieldsSchemaJson }),
  z.object({ select: UserPermissionSelectFieldsSchemaJson }),
  z.object({ include: UserPermissionIncludeSchemaJson }),
  z.object({}),
]);

export const AccessTokenPermissionCreateSchema = z.object({
  permissionId: z.coerce.number().int(),
  accessTokenId: z.coerce.number().int(),
});

export const AccessTokenPermissionUpdateSchema = z.object({
  permissionId: z.coerce.number().int().optional(),
  accessTokenId: z.coerce.number().int().optional(),
});

export const AccessTokenPermissionOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    permissionId: PZ.OrderDirectionSchema,
    accessTokenId: PZ.OrderDirectionSchema,
  })
  .partial();

export const AccessTokenPermissionOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  AccessTokenPermissionWhereSchema
);

export const AccessTokenPermissionSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    permissionId: z.boolean(),
    accessTokenId: z.boolean(),
    permission: z.boolean().or(PermissionOwnQueryOneSchema),
    accessToken: z.boolean().or(AccessTokenOwnQueryOneSchema),
  })
  .partial();

export const AccessTokenPermissionSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AccessTokenPermissionSelectFieldsSchema
);

export const AccessTokenPermissionIncludeSchema = z
  .object({
    permission: z.boolean().or(PermissionOwnQueryOneSchema),
    accessToken: z.boolean().or(AccessTokenOwnQueryOneSchema),
  })
  .partial();

export const AccessTokenPermissionIncludeSchemaJson = z.preprocess(
  jsonParser,
  AccessTokenPermissionIncludeSchema
);

export const AccessTokenPermissionProjectionSchema = z.union([
  z.object({ omit: AccessTokenPermissionSelectFieldsSchemaJson }),
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

export type UserCreate = z.infer<typeof UserCreateSchema>;

export type UserUpdate = z.infer<typeof UserUpdateSchema>;

export type UserOrderBy = z.infer<typeof UserOrderBySchema>;

export type UserOwnSelectFields = z.infer<typeof UserOwnSelectFieldsSchema>;

export type UserOwnWhere = z.infer<typeof UserOwnWhereSchema>;

export type UserOwnQuery = z.infer<typeof UserOwnQuerySchema>;

export type UserOwnQueryOne = z.infer<typeof UserOwnQueryOneSchema>;

export type UserWhere = z.infer<typeof UserWhereSchema>;

export type UserInclude = z.infer<typeof UserIncludeSchema>;

export type UserQueryOne = z.infer<typeof UserQueryOneSchema>;

export type UserQuery = z.infer<typeof UserQuerySchema>;

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

export type AccessTokenCreate = z.infer<typeof AccessTokenCreateSchema>;

export type AccessTokenUpdate = z.infer<typeof AccessTokenUpdateSchema>;

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

export type ScopeCreate = z.infer<typeof ScopeCreateSchema>;

export type ScopeUpdate = z.infer<typeof ScopeUpdateSchema>;

export type ScopeOrderBy = z.infer<typeof ScopeOrderBySchema>;

export type ScopeOwnSelectFields = z.infer<typeof ScopeOwnSelectFieldsSchema>;

export type ScopeOwnWhere = z.infer<typeof ScopeOwnWhereSchema>;

export type ScopeOwnQuery = z.infer<typeof ScopeOwnQuerySchema>;

export type ScopeOwnQueryOne = z.infer<typeof ScopeOwnQueryOneSchema>;

export type ScopeWhere = z.infer<typeof ScopeWhereSchema>;

export type ScopeInclude = z.infer<typeof ScopeIncludeSchema>;

export type ScopeQueryOne = z.infer<typeof ScopeQueryOneSchema>;

export type ScopeQuery = z.infer<typeof ScopeQuerySchema>;

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

export type ResourceCreate = z.infer<typeof ResourceCreateSchema>;

export type ResourceUpdate = z.infer<typeof ResourceUpdateSchema>;

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

export type OperationCreate = z.infer<typeof OperationCreateSchema>;

export type OperationUpdate = z.infer<typeof OperationUpdateSchema>;

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

export type ActivityCreate = z.infer<typeof ActivityCreateSchema>;

export type ActivityUpdate = z.infer<typeof ActivityUpdateSchema>;

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

export type PermissionCreate = z.infer<typeof PermissionCreateSchema>;

export type PermissionUpdate = z.infer<typeof PermissionUpdateSchema>;

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

export type RoleCreate = z.infer<typeof RoleCreateSchema>;

export type RoleUpdate = z.infer<typeof RoleUpdateSchema>;

export type RoleOrderBy = z.infer<typeof RoleOrderBySchema>;

export type RoleOwnSelectFields = z.infer<typeof RoleOwnSelectFieldsSchema>;

export type RoleOwnWhere = z.infer<typeof RoleOwnWhereSchema>;

export type RoleOwnQuery = z.infer<typeof RoleOwnQuerySchema>;

export type RoleOwnQueryOne = z.infer<typeof RoleOwnQueryOneSchema>;

export type RoleWhere = z.infer<typeof RoleWhereSchema>;

export type RoleInclude = z.infer<typeof RoleIncludeSchema>;

export type RoleQueryOne = z.infer<typeof RoleQueryOneSchema>;

export type RoleQuery = z.infer<typeof RoleQuerySchema>;

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

export type RolePermissionCreate = z.infer<typeof RolePermissionCreateSchema>;

export type RolePermissionUpdate = z.infer<typeof RolePermissionUpdateSchema>;

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

export type SessionCreate = z.infer<typeof SessionCreateSchema>;

export type SessionUpdate = z.infer<typeof SessionUpdateSchema>;

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

export type ActivityLogCreate = z.infer<typeof ActivityLogCreateSchema>;

export type ActivityLogUpdate = z.infer<typeof ActivityLogUpdateSchema>;

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

export type UserPermissionCreate = z.infer<typeof UserPermissionCreateSchema>;

export type UserPermissionUpdate = z.infer<typeof UserPermissionUpdateSchema>;

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
  typeof AccessTokenPermissionCreateSchema
>;

export type AccessTokenPermissionUpdate = z.infer<
  typeof AccessTokenPermissionUpdateSchema
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

export type AccessTokenPermissionSelectFields = z.infer<
  typeof AccessTokenPermissionSelectFieldsSchema
>;

export type AccessTokenPermissionProjection = z.infer<
  typeof AccessTokenPermissionProjectionSchema
>;

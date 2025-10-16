/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PZ from '@puq/zod';
import { z } from 'zod';
import { slugify } from '@puq/names';

export const takeSchema = z.coerce.number().int().min(1).default(20).optional();
export const skipSchema = z.coerce.number().int().min(0).default(0).optional();

export const PaginationSchema = z
  .object({
    take: takeSchema,
    skip: skipSchema,
  })
  .partial();

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

export const UserOwnProjectionSchema = z
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

export const UserOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  UserOwnProjectionSchema
);

export const AccessTokenOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    userId: z.boolean(),
    user: z.boolean(),
    AccessTokenPermission: z.boolean(),
  })
  .partial();

export const AccessTokenOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  AccessTokenOwnProjectionSchema
);

export const ScopeOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    permissions: z.boolean(),
  })
  .partial();

export const ScopeOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ScopeOwnProjectionSchema
);

export const ResourceOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    activities: z.boolean(),
  })
  .partial();

export const ResourceOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ResourceOwnProjectionSchema
);

export const OperationOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    activities: z.boolean(),
  })
  .partial();

export const OperationOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  OperationOwnProjectionSchema
);

export const ActivityOwnProjectionSchema = z
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

export const ActivityOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ActivityOwnProjectionSchema
);

export const PermissionOwnProjectionSchema = z
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

export const PermissionOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PermissionOwnProjectionSchema
);

export const RoleOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    permissions: z.boolean(),
  })
  .partial();

export const RoleOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  RoleOwnProjectionSchema
);

export const RolePermissionOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    roleId: z.boolean(),
    permissionId: z.boolean(),
    role: z.boolean(),
    permission: z.boolean(),
  })
  .partial();

export const RolePermissionOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  RolePermissionOwnProjectionSchema
);

export const SessionOwnProjectionSchema = z
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

export const SessionOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  SessionOwnProjectionSchema
);

export const ActivityLogOwnProjectionSchema = z
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

export const ActivityLogOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ActivityLogOwnProjectionSchema
);

export const UserPermissionOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    userId: z.boolean(),
    permissionId: z.boolean(),
    user: z.boolean(),
    permission: z.boolean(),
  })
  .partial();

export const UserPermissionOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  UserPermissionOwnProjectionSchema
);

export const AccessTokenPermissionOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    permissionId: z.boolean(),
    accessTokenId: z.boolean(),
    permission: z.boolean(),
    accessToken: z.boolean(),
  })
  .partial();

export const AccessTokenPermissionOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  AccessTokenPermissionOwnProjectionSchema
);

export const UserOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    username: PZ.StringFilterSchema,
    password: PZ.StringFilterSchema,
  })
  .partial();

export const UserOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  UserOwnWhereSchema
);

export const AccessTokenOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    userId: PZ.IntegerFilterSchema,
  })
  .partial();

export const AccessTokenOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AccessTokenOwnWhereSchema
);

export const ScopeOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const ScopeOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ScopeOwnWhereSchema
);

export const ResourceOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const ResourceOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ResourceOwnWhereSchema
);

export const OperationOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const OperationOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  OperationOwnWhereSchema
);

export const ActivityOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    resourceId: PZ.IntegerFilterSchema,
    operationId: PZ.IntegerFilterSchema,
  })
  .partial();

export const ActivityOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ActivityOwnWhereSchema
);

export const PermissionOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    scopeId: PZ.IntegerFilterSchema,
    activityId: PZ.IntegerFilterSchema,
  })
  .partial();

export const PermissionOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PermissionOwnWhereSchema
);

export const RoleOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const RoleOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  RoleOwnWhereSchema
);

export const RolePermissionOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    roleId: PZ.IntegerFilterSchema,
    permissionId: PZ.IntegerFilterSchema,
  })
  .partial();

export const RolePermissionOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  RolePermissionOwnWhereSchema
);

export const SessionOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    userId: PZ.IntegerFilterSchema,
    description: PZ.StringFilterSchema,
    status: SessionStatusSchema,
    startDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
  })
  .partial();

export const SessionOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  SessionOwnWhereSchema
);

export const ActivityLogOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    sessionId: PZ.IntegerFilterSchema,
    activityId: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    notes: PZ.StringFilterSchema,
  })
  .partial();

export const ActivityLogOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ActivityLogOwnWhereSchema
);

export const UserPermissionOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    userId: PZ.IntegerFilterSchema,
    permissionId: PZ.IntegerFilterSchema,
  })
  .partial();

export const UserPermissionOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  UserPermissionOwnWhereSchema
);

export const AccessTokenPermissionOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    permissionId: PZ.IntegerFilterSchema,
    accessTokenId: PZ.IntegerFilterSchema,
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
    select: UserOwnProjectionSchemaJson,
    omit: UserOwnProjectionSchemaJson,
    include: UserOwnIncludeSchemaJson,
  })
  .partial();

export const UserOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: UserOwnWhereSchemaJson,
    select: UserOwnProjectionSchemaJson,
    omit: UserOwnProjectionSchemaJson,
    include: UserOwnIncludeSchemaJson,
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
    select: AccessTokenOwnProjectionSchemaJson,
    omit: AccessTokenOwnProjectionSchemaJson,
    include: AccessTokenOwnIncludeSchemaJson,
  })
  .partial();

export const AccessTokenOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AccessTokenOwnWhereSchemaJson,
    select: AccessTokenOwnProjectionSchemaJson,
    omit: AccessTokenOwnProjectionSchemaJson,
    include: AccessTokenOwnIncludeSchemaJson,
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
    select: ScopeOwnProjectionSchemaJson,
    omit: ScopeOwnProjectionSchemaJson,
    include: ScopeOwnIncludeSchemaJson,
  })
  .partial();

export const ScopeOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ScopeOwnWhereSchemaJson,
    select: ScopeOwnProjectionSchemaJson,
    omit: ScopeOwnProjectionSchemaJson,
    include: ScopeOwnIncludeSchemaJson,
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
    select: ResourceOwnProjectionSchemaJson,
    omit: ResourceOwnProjectionSchemaJson,
    include: ResourceOwnIncludeSchemaJson,
  })
  .partial();

export const ResourceOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ResourceOwnWhereSchemaJson,
    select: ResourceOwnProjectionSchemaJson,
    omit: ResourceOwnProjectionSchemaJson,
    include: ResourceOwnIncludeSchemaJson,
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
    select: OperationOwnProjectionSchemaJson,
    omit: OperationOwnProjectionSchemaJson,
    include: OperationOwnIncludeSchemaJson,
  })
  .partial();

export const OperationOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: OperationOwnWhereSchemaJson,
    select: OperationOwnProjectionSchemaJson,
    omit: OperationOwnProjectionSchemaJson,
    include: OperationOwnIncludeSchemaJson,
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
    select: ActivityOwnProjectionSchemaJson,
    omit: ActivityOwnProjectionSchemaJson,
    include: ActivityOwnIncludeSchemaJson,
  })
  .partial();

export const ActivityOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ActivityOwnWhereSchemaJson,
    select: ActivityOwnProjectionSchemaJson,
    omit: ActivityOwnProjectionSchemaJson,
    include: ActivityOwnIncludeSchemaJson,
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
    select: PermissionOwnProjectionSchemaJson,
    omit: PermissionOwnProjectionSchemaJson,
    include: PermissionOwnIncludeSchemaJson,
  })
  .partial();

export const PermissionOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PermissionOwnWhereSchemaJson,
    select: PermissionOwnProjectionSchemaJson,
    omit: PermissionOwnProjectionSchemaJson,
    include: PermissionOwnIncludeSchemaJson,
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
    select: RoleOwnProjectionSchemaJson,
    omit: RoleOwnProjectionSchemaJson,
    include: RoleOwnIncludeSchemaJson,
  })
  .partial();

export const RoleOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: RoleOwnWhereSchemaJson,
    select: RoleOwnProjectionSchemaJson,
    omit: RoleOwnProjectionSchemaJson,
    include: RoleOwnIncludeSchemaJson,
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
    select: RolePermissionOwnProjectionSchemaJson,
    omit: RolePermissionOwnProjectionSchemaJson,
    include: RolePermissionOwnIncludeSchemaJson,
  })
  .partial();

export const RolePermissionOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: RolePermissionOwnWhereSchemaJson,
    select: RolePermissionOwnProjectionSchemaJson,
    omit: RolePermissionOwnProjectionSchemaJson,
    include: RolePermissionOwnIncludeSchemaJson,
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
    select: SessionOwnProjectionSchemaJson,
    omit: SessionOwnProjectionSchemaJson,
    include: SessionOwnIncludeSchemaJson,
  })
  .partial();

export const SessionOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SessionOwnWhereSchemaJson,
    select: SessionOwnProjectionSchemaJson,
    omit: SessionOwnProjectionSchemaJson,
    include: SessionOwnIncludeSchemaJson,
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
    select: ActivityLogOwnProjectionSchemaJson,
    omit: ActivityLogOwnProjectionSchemaJson,
    include: ActivityLogOwnIncludeSchemaJson,
  })
  .partial();

export const ActivityLogOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ActivityLogOwnWhereSchemaJson,
    select: ActivityLogOwnProjectionSchemaJson,
    omit: ActivityLogOwnProjectionSchemaJson,
    include: ActivityLogOwnIncludeSchemaJson,
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
    select: UserPermissionOwnProjectionSchemaJson,
    omit: UserPermissionOwnProjectionSchemaJson,
    include: UserPermissionOwnIncludeSchemaJson,
  })
  .partial();

export const UserPermissionOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: UserPermissionOwnWhereSchemaJson,
    select: UserPermissionOwnProjectionSchemaJson,
    omit: UserPermissionOwnProjectionSchemaJson,
    include: UserPermissionOwnIncludeSchemaJson,
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
    select: AccessTokenPermissionOwnProjectionSchemaJson,
    omit: AccessTokenPermissionOwnProjectionSchemaJson,
    include: AccessTokenPermissionOwnIncludeSchemaJson,
  })
  .partial();

export const AccessTokenPermissionOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AccessTokenPermissionOwnWhereSchemaJson,
    select: AccessTokenPermissionOwnProjectionSchemaJson,
    omit: AccessTokenPermissionOwnProjectionSchemaJson,
    include: AccessTokenPermissionOwnIncludeSchemaJson,
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
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    username: PZ.StringFilterSchema,
    password: PZ.StringFilterSchema,
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

export const UserProjectionSchema = z
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

export const UserProjectionSchemaJson = z.preprocess(
  jsonParser,
  UserProjectionSchema
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

export const AccessTokenCreateSchema = z.object({
  name: z.string(),
  userId: z.int(),
});

export const AccessTokenUpdateSchema = z.object({
  name: z.string().optional(),
  userId: z.int().optional(),
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
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    userId: PZ.IntegerFilterSchema,
    user: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
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

export const AccessTokenWhereSchemaJson = z.preprocess(
  jsonParser,
  AccessTokenWhereSchema
);

export const AccessTokenProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    userId: z.boolean(),
    user: z.boolean().or(UserOwnQueryOneSchema),
    AccessTokenPermission: z.boolean().or(AccessTokenPermissionOwnQuerySchema),
  })
  .partial();

export const AccessTokenProjectionSchemaJson = z.preprocess(
  jsonParser,
  AccessTokenProjectionSchema
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

export const ScopeCreateSchema = z.object({
  name: z.string(),
});

export const ScopeUpdateSchema = z.object({
  name: z.string().optional(),
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
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
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

export const ScopeProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    permissions: z.boolean().or(PermissionOwnQuerySchema),
  })
  .partial();

export const ScopeProjectionSchemaJson = z.preprocess(
  jsonParser,
  ScopeProjectionSchema
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

export const ResourceCreateSchema = z.object({
  name: z.string(),
});

export const ResourceUpdateSchema = z.object({
  name: z.string().optional(),
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
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
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

export const ResourceProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    activities: z.boolean().or(ActivityOwnQuerySchema),
  })
  .partial();

export const ResourceProjectionSchemaJson = z.preprocess(
  jsonParser,
  ResourceProjectionSchema
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

export const OperationCreateSchema = z.object({
  name: z.string(),
});

export const OperationUpdateSchema = z.object({
  name: z.string().optional(),
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
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
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

export const OperationProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    activities: z.boolean().or(ActivityOwnQuerySchema),
  })
  .partial();

export const OperationProjectionSchemaJson = z.preprocess(
  jsonParser,
  OperationProjectionSchema
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

export const ActivityCreateSchema = z.object({
  name: z.string(),
  resourceId: z.int(),
  operationId: z.int(),
});

export const ActivityUpdateSchema = z.object({
  name: z.string().optional(),
  resourceId: z.int().optional(),
  operationId: z.int().optional(),
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
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    resourceId: PZ.IntegerFilterSchema,
    operationId: PZ.IntegerFilterSchema,
    resouce: z
      .object({
        some: ResourceOwnWhereSchema,
        every: ResourceOwnWhereSchema,
        none: ResourceOwnWhereSchema,
      })
      .partial(),
    operation: z
      .object({
        some: OperationOwnWhereSchema,
        every: OperationOwnWhereSchema,
        none: OperationOwnWhereSchema,
      })
      .partial(),
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

export const ActivityProjectionSchema = z
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

export const ActivityProjectionSchemaJson = z.preprocess(
  jsonParser,
  ActivityProjectionSchema
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

export const PermissionCreateSchema = z.object({
  scopeId: z.int(),
  activityId: z.int(),
});

export const PermissionUpdateSchema = z.object({
  scopeId: z.int().optional(),
  activityId: z.int().optional(),
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
    id: PZ.IntegerFilterSchema,
    scopeId: PZ.IntegerFilterSchema,
    activityId: PZ.IntegerFilterSchema,
    scope: z
      .object({
        some: ScopeOwnWhereSchema,
        every: ScopeOwnWhereSchema,
        none: ScopeOwnWhereSchema,
      })
      .partial(),
    activity: z
      .object({
        some: ActivityOwnWhereSchema,
        every: ActivityOwnWhereSchema,
        none: ActivityOwnWhereSchema,
      })
      .partial(),
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

export const PermissionProjectionSchema = z
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

export const PermissionProjectionSchemaJson = z.preprocess(
  jsonParser,
  PermissionProjectionSchema
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

export const RoleCreateSchema = z.object({
  name: z.string(),
});

export const RoleUpdateSchema = z.object({
  name: z.string().optional(),
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
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
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

export const RoleProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    permissions: z.boolean().or(RolePermissionOwnQuerySchema),
  })
  .partial();

export const RoleProjectionSchemaJson = z.preprocess(
  jsonParser,
  RoleProjectionSchema
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

export const RolePermissionCreateSchema = z.object({
  roleId: z.int(),
  permissionId: z.int(),
});

export const RolePermissionUpdateSchema = z.object({
  roleId: z.int().optional(),
  permissionId: z.int().optional(),
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
    id: PZ.IntegerFilterSchema,
    roleId: PZ.IntegerFilterSchema,
    permissionId: PZ.IntegerFilterSchema,
    role: z
      .object({
        some: RoleOwnWhereSchema,
        every: RoleOwnWhereSchema,
        none: RoleOwnWhereSchema,
      })
      .partial(),
    permission: z
      .object({
        some: PermissionOwnWhereSchema,
        every: PermissionOwnWhereSchema,
        none: PermissionOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const RolePermissionWhereSchemaJson = z.preprocess(
  jsonParser,
  RolePermissionWhereSchema
);

export const RolePermissionProjectionSchema = z
  .object({
    id: z.boolean(),
    roleId: z.boolean(),
    permissionId: z.boolean(),
    role: z.boolean().or(RoleOwnQueryOneSchema),
    permission: z.boolean().or(PermissionOwnQueryOneSchema),
  })
  .partial();

export const RolePermissionProjectionSchemaJson = z.preprocess(
  jsonParser,
  RolePermissionProjectionSchema
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

export const SessionCreateSchema = z.object({
  userId: z.int(),
  description: z.string().optional(),
  status: SessionStatusSchema.optional(),
  endDate: z.iso.datetime(),
});

export const SessionUpdateSchema = z.object({
  userId: z.int().optional(),
  description: z.string().optional().optional(),
  status: SessionStatusSchema.optional().optional(),
  endDate: z.iso.datetime().optional(),
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
    id: PZ.IntegerFilterSchema,
    userId: PZ.IntegerFilterSchema,
    description: PZ.StringFilterSchema,
    status: SessionStatusSchema,
    startDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
    user: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
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

export const SessionWhereSchemaJson = z.preprocess(
  jsonParser,
  SessionWhereSchema
);

export const SessionProjectionSchema = z
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

export const SessionProjectionSchemaJson = z.preprocess(
  jsonParser,
  SessionProjectionSchema
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

export const ActivityLogCreateSchema = z.object({
  sessionId: z.int(),
  activityId: z.int(),
  notes: z.string().optional(),
});

export const ActivityLogUpdateSchema = z.object({
  sessionId: z.int().optional(),
  activityId: z.int().optional(),
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
    id: PZ.IntegerFilterSchema,
    sessionId: PZ.IntegerFilterSchema,
    activityId: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    notes: PZ.StringFilterSchema,
    activity: z
      .object({
        some: ActivityOwnWhereSchema,
        every: ActivityOwnWhereSchema,
        none: ActivityOwnWhereSchema,
      })
      .partial(),
    session: z
      .object({
        some: SessionOwnWhereSchema,
        every: SessionOwnWhereSchema,
        none: SessionOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ActivityLogWhereSchemaJson = z.preprocess(
  jsonParser,
  ActivityLogWhereSchema
);

export const ActivityLogProjectionSchema = z
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

export const ActivityLogProjectionSchemaJson = z.preprocess(
  jsonParser,
  ActivityLogProjectionSchema
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

export const UserPermissionCreateSchema = z.object({
  userId: z.int(),
  permissionId: z.int(),
});

export const UserPermissionUpdateSchema = z.object({
  userId: z.int().optional(),
  permissionId: z.int().optional(),
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
    id: PZ.IntegerFilterSchema,
    userId: PZ.IntegerFilterSchema,
    permissionId: PZ.IntegerFilterSchema,
    user: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      })
      .partial(),
    permission: z
      .object({
        some: PermissionOwnWhereSchema,
        every: PermissionOwnWhereSchema,
        none: PermissionOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const UserPermissionWhereSchemaJson = z.preprocess(
  jsonParser,
  UserPermissionWhereSchema
);

export const UserPermissionProjectionSchema = z
  .object({
    id: z.boolean(),
    userId: z.boolean(),
    permissionId: z.boolean(),
    user: z.boolean().or(UserOwnQueryOneSchema),
    permission: z.boolean().or(PermissionOwnQueryOneSchema),
  })
  .partial();

export const UserPermissionProjectionSchemaJson = z.preprocess(
  jsonParser,
  UserPermissionProjectionSchema
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

export const AccessTokenPermissionCreateSchema = z.object({
  permissionId: z.int(),
  accessTokenId: z.int(),
});

export const AccessTokenPermissionUpdateSchema = z.object({
  permissionId: z.int().optional(),
  accessTokenId: z.int().optional(),
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
    id: PZ.IntegerFilterSchema,
    permissionId: PZ.IntegerFilterSchema,
    accessTokenId: PZ.IntegerFilterSchema,
    permission: z
      .object({
        some: PermissionOwnWhereSchema,
        every: PermissionOwnWhereSchema,
        none: PermissionOwnWhereSchema,
      })
      .partial(),
    accessToken: z
      .object({
        some: AccessTokenOwnWhereSchema,
        every: AccessTokenOwnWhereSchema,
        none: AccessTokenOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const AccessTokenPermissionWhereSchemaJson = z.preprocess(
  jsonParser,
  AccessTokenPermissionWhereSchema
);

export const AccessTokenPermissionProjectionSchema = z
  .object({
    id: z.boolean(),
    permissionId: z.boolean(),
    accessTokenId: z.boolean(),
    permission: z.boolean().or(PermissionOwnQueryOneSchema),
    accessToken: z.boolean().or(AccessTokenOwnQueryOneSchema),
  })
  .partial();

export const AccessTokenPermissionProjectionSchemaJson = z.preprocess(
  jsonParser,
  AccessTokenPermissionProjectionSchema
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

export const UserQueryOneSchema = z
  .object({
    where: UserWhereSchemaJson,
    select: UserProjectionSchemaJson,
    omit: UserProjectionSchemaJson,
    include: UserIncludeSchemaJson,
  })
  .partial();

export const UserQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: UserWhereSchemaJson,
    select: UserProjectionSchemaJson,
    omit: UserProjectionSchemaJson,
    include: UserIncludeSchemaJson,
  })
  .partial();

export type UserCreate = z.infer<typeof UserCreateSchema>;

export type UserUpdate = z.infer<typeof UserUpdateSchema>;

export type UserOrderBy = z.infer<typeof UserOrderBySchema>;

export type UserOwnProjection = z.infer<typeof UserOwnProjectionSchema>;

export type UserOwnWhere = z.infer<typeof UserOwnWhereSchema>;

export type UserOwnQuery = z.infer<typeof UserOwnQuerySchema>;

export type UserOwnQueryOne = z.infer<typeof UserOwnQueryOneSchema>;

export type UserWhere = z.infer<typeof UserWhereSchema>;

export type UserInclude = z.infer<typeof UserIncludeSchema>;

export type UserQueryOne = z.infer<typeof UserQueryOneSchema>;

export type UserQuery = z.infer<typeof UserQuerySchema>;

export type UserProjection = z.infer<typeof UserProjectionSchema>;

export const AccessTokenQueryOneSchema = z
  .object({
    where: AccessTokenWhereSchemaJson,
    select: AccessTokenProjectionSchemaJson,
    omit: AccessTokenProjectionSchemaJson,
    include: AccessTokenIncludeSchemaJson,
  })
  .partial();

export const AccessTokenQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AccessTokenWhereSchemaJson,
    select: AccessTokenProjectionSchemaJson,
    omit: AccessTokenProjectionSchemaJson,
    include: AccessTokenIncludeSchemaJson,
  })
  .partial();

export type AccessTokenCreate = z.infer<typeof AccessTokenCreateSchema>;

export type AccessTokenUpdate = z.infer<typeof AccessTokenUpdateSchema>;

export type AccessTokenOrderBy = z.infer<typeof AccessTokenOrderBySchema>;

export type AccessTokenOwnProjection = z.infer<
  typeof AccessTokenOwnProjectionSchema
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

export type AccessTokenProjection = z.infer<typeof AccessTokenProjectionSchema>;

export const ScopeQueryOneSchema = z
  .object({
    where: ScopeWhereSchemaJson,
    select: ScopeProjectionSchemaJson,
    omit: ScopeProjectionSchemaJson,
    include: ScopeIncludeSchemaJson,
  })
  .partial();

export const ScopeQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ScopeWhereSchemaJson,
    select: ScopeProjectionSchemaJson,
    omit: ScopeProjectionSchemaJson,
    include: ScopeIncludeSchemaJson,
  })
  .partial();

export type ScopeCreate = z.infer<typeof ScopeCreateSchema>;

export type ScopeUpdate = z.infer<typeof ScopeUpdateSchema>;

export type ScopeOrderBy = z.infer<typeof ScopeOrderBySchema>;

export type ScopeOwnProjection = z.infer<typeof ScopeOwnProjectionSchema>;

export type ScopeOwnWhere = z.infer<typeof ScopeOwnWhereSchema>;

export type ScopeOwnQuery = z.infer<typeof ScopeOwnQuerySchema>;

export type ScopeOwnQueryOne = z.infer<typeof ScopeOwnQueryOneSchema>;

export type ScopeWhere = z.infer<typeof ScopeWhereSchema>;

export type ScopeInclude = z.infer<typeof ScopeIncludeSchema>;

export type ScopeQueryOne = z.infer<typeof ScopeQueryOneSchema>;

export type ScopeQuery = z.infer<typeof ScopeQuerySchema>;

export type ScopeProjection = z.infer<typeof ScopeProjectionSchema>;

export const ResourceQueryOneSchema = z
  .object({
    where: ResourceWhereSchemaJson,
    select: ResourceProjectionSchemaJson,
    omit: ResourceProjectionSchemaJson,
    include: ResourceIncludeSchemaJson,
  })
  .partial();

export const ResourceQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ResourceWhereSchemaJson,
    select: ResourceProjectionSchemaJson,
    omit: ResourceProjectionSchemaJson,
    include: ResourceIncludeSchemaJson,
  })
  .partial();

export type ResourceCreate = z.infer<typeof ResourceCreateSchema>;

export type ResourceUpdate = z.infer<typeof ResourceUpdateSchema>;

export type ResourceOrderBy = z.infer<typeof ResourceOrderBySchema>;

export type ResourceOwnProjection = z.infer<typeof ResourceOwnProjectionSchema>;

export type ResourceOwnWhere = z.infer<typeof ResourceOwnWhereSchema>;

export type ResourceOwnQuery = z.infer<typeof ResourceOwnQuerySchema>;

export type ResourceOwnQueryOne = z.infer<typeof ResourceOwnQueryOneSchema>;

export type ResourceWhere = z.infer<typeof ResourceWhereSchema>;

export type ResourceInclude = z.infer<typeof ResourceIncludeSchema>;

export type ResourceQueryOne = z.infer<typeof ResourceQueryOneSchema>;

export type ResourceQuery = z.infer<typeof ResourceQuerySchema>;

export type ResourceProjection = z.infer<typeof ResourceProjectionSchema>;

export const OperationQueryOneSchema = z
  .object({
    where: OperationWhereSchemaJson,
    select: OperationProjectionSchemaJson,
    omit: OperationProjectionSchemaJson,
    include: OperationIncludeSchemaJson,
  })
  .partial();

export const OperationQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: OperationWhereSchemaJson,
    select: OperationProjectionSchemaJson,
    omit: OperationProjectionSchemaJson,
    include: OperationIncludeSchemaJson,
  })
  .partial();

export type OperationCreate = z.infer<typeof OperationCreateSchema>;

export type OperationUpdate = z.infer<typeof OperationUpdateSchema>;

export type OperationOrderBy = z.infer<typeof OperationOrderBySchema>;

export type OperationOwnProjection = z.infer<
  typeof OperationOwnProjectionSchema
>;

export type OperationOwnWhere = z.infer<typeof OperationOwnWhereSchema>;

export type OperationOwnQuery = z.infer<typeof OperationOwnQuerySchema>;

export type OperationOwnQueryOne = z.infer<typeof OperationOwnQueryOneSchema>;

export type OperationWhere = z.infer<typeof OperationWhereSchema>;

export type OperationInclude = z.infer<typeof OperationIncludeSchema>;

export type OperationQueryOne = z.infer<typeof OperationQueryOneSchema>;

export type OperationQuery = z.infer<typeof OperationQuerySchema>;

export type OperationProjection = z.infer<typeof OperationProjectionSchema>;

export const ActivityQueryOneSchema = z
  .object({
    where: ActivityWhereSchemaJson,
    select: ActivityProjectionSchemaJson,
    omit: ActivityProjectionSchemaJson,
    include: ActivityIncludeSchemaJson,
  })
  .partial();

export const ActivityQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ActivityWhereSchemaJson,
    select: ActivityProjectionSchemaJson,
    omit: ActivityProjectionSchemaJson,
    include: ActivityIncludeSchemaJson,
  })
  .partial();

export type ActivityCreate = z.infer<typeof ActivityCreateSchema>;

export type ActivityUpdate = z.infer<typeof ActivityUpdateSchema>;

export type ActivityOrderBy = z.infer<typeof ActivityOrderBySchema>;

export type ActivityOwnProjection = z.infer<typeof ActivityOwnProjectionSchema>;

export type ActivityOwnWhere = z.infer<typeof ActivityOwnWhereSchema>;

export type ActivityOwnQuery = z.infer<typeof ActivityOwnQuerySchema>;

export type ActivityOwnQueryOne = z.infer<typeof ActivityOwnQueryOneSchema>;

export type ActivityWhere = z.infer<typeof ActivityWhereSchema>;

export type ActivityInclude = z.infer<typeof ActivityIncludeSchema>;

export type ActivityQueryOne = z.infer<typeof ActivityQueryOneSchema>;

export type ActivityQuery = z.infer<typeof ActivityQuerySchema>;

export type ActivityProjection = z.infer<typeof ActivityProjectionSchema>;

export const PermissionQueryOneSchema = z
  .object({
    where: PermissionWhereSchemaJson,
    select: PermissionProjectionSchemaJson,
    omit: PermissionProjectionSchemaJson,
    include: PermissionIncludeSchemaJson,
  })
  .partial();

export const PermissionQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PermissionWhereSchemaJson,
    select: PermissionProjectionSchemaJson,
    omit: PermissionProjectionSchemaJson,
    include: PermissionIncludeSchemaJson,
  })
  .partial();

export type PermissionCreate = z.infer<typeof PermissionCreateSchema>;

export type PermissionUpdate = z.infer<typeof PermissionUpdateSchema>;

export type PermissionOrderBy = z.infer<typeof PermissionOrderBySchema>;

export type PermissionOwnProjection = z.infer<
  typeof PermissionOwnProjectionSchema
>;

export type PermissionOwnWhere = z.infer<typeof PermissionOwnWhereSchema>;

export type PermissionOwnQuery = z.infer<typeof PermissionOwnQuerySchema>;

export type PermissionOwnQueryOne = z.infer<typeof PermissionOwnQueryOneSchema>;

export type PermissionWhere = z.infer<typeof PermissionWhereSchema>;

export type PermissionInclude = z.infer<typeof PermissionIncludeSchema>;

export type PermissionQueryOne = z.infer<typeof PermissionQueryOneSchema>;

export type PermissionQuery = z.infer<typeof PermissionQuerySchema>;

export type PermissionProjection = z.infer<typeof PermissionProjectionSchema>;

export const RoleQueryOneSchema = z
  .object({
    where: RoleWhereSchemaJson,
    select: RoleProjectionSchemaJson,
    omit: RoleProjectionSchemaJson,
    include: RoleIncludeSchemaJson,
  })
  .partial();

export const RoleQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: RoleWhereSchemaJson,
    select: RoleProjectionSchemaJson,
    omit: RoleProjectionSchemaJson,
    include: RoleIncludeSchemaJson,
  })
  .partial();

export type RoleCreate = z.infer<typeof RoleCreateSchema>;

export type RoleUpdate = z.infer<typeof RoleUpdateSchema>;

export type RoleOrderBy = z.infer<typeof RoleOrderBySchema>;

export type RoleOwnProjection = z.infer<typeof RoleOwnProjectionSchema>;

export type RoleOwnWhere = z.infer<typeof RoleOwnWhereSchema>;

export type RoleOwnQuery = z.infer<typeof RoleOwnQuerySchema>;

export type RoleOwnQueryOne = z.infer<typeof RoleOwnQueryOneSchema>;

export type RoleWhere = z.infer<typeof RoleWhereSchema>;

export type RoleInclude = z.infer<typeof RoleIncludeSchema>;

export type RoleQueryOne = z.infer<typeof RoleQueryOneSchema>;

export type RoleQuery = z.infer<typeof RoleQuerySchema>;

export type RoleProjection = z.infer<typeof RoleProjectionSchema>;

export const RolePermissionQueryOneSchema = z
  .object({
    where: RolePermissionWhereSchemaJson,
    select: RolePermissionProjectionSchemaJson,
    omit: RolePermissionProjectionSchemaJson,
    include: RolePermissionIncludeSchemaJson,
  })
  .partial();

export const RolePermissionQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: RolePermissionWhereSchemaJson,
    select: RolePermissionProjectionSchemaJson,
    omit: RolePermissionProjectionSchemaJson,
    include: RolePermissionIncludeSchemaJson,
  })
  .partial();

export type RolePermissionCreate = z.infer<typeof RolePermissionCreateSchema>;

export type RolePermissionUpdate = z.infer<typeof RolePermissionUpdateSchema>;

export type RolePermissionOrderBy = z.infer<typeof RolePermissionOrderBySchema>;

export type RolePermissionOwnProjection = z.infer<
  typeof RolePermissionOwnProjectionSchema
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

export type RolePermissionProjection = z.infer<
  typeof RolePermissionProjectionSchema
>;

export const SessionQueryOneSchema = z
  .object({
    where: SessionWhereSchemaJson,
    select: SessionProjectionSchemaJson,
    omit: SessionProjectionSchemaJson,
    include: SessionIncludeSchemaJson,
  })
  .partial();

export const SessionQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SessionWhereSchemaJson,
    select: SessionProjectionSchemaJson,
    omit: SessionProjectionSchemaJson,
    include: SessionIncludeSchemaJson,
  })
  .partial();

export type SessionCreate = z.infer<typeof SessionCreateSchema>;

export type SessionUpdate = z.infer<typeof SessionUpdateSchema>;

export type SessionOrderBy = z.infer<typeof SessionOrderBySchema>;

export type SessionOwnProjection = z.infer<typeof SessionOwnProjectionSchema>;

export type SessionOwnWhere = z.infer<typeof SessionOwnWhereSchema>;

export type SessionOwnQuery = z.infer<typeof SessionOwnQuerySchema>;

export type SessionOwnQueryOne = z.infer<typeof SessionOwnQueryOneSchema>;

export type SessionWhere = z.infer<typeof SessionWhereSchema>;

export type SessionInclude = z.infer<typeof SessionIncludeSchema>;

export type SessionQueryOne = z.infer<typeof SessionQueryOneSchema>;

export type SessionQuery = z.infer<typeof SessionQuerySchema>;

export type SessionProjection = z.infer<typeof SessionProjectionSchema>;

export const ActivityLogQueryOneSchema = z
  .object({
    where: ActivityLogWhereSchemaJson,
    select: ActivityLogProjectionSchemaJson,
    omit: ActivityLogProjectionSchemaJson,
    include: ActivityLogIncludeSchemaJson,
  })
  .partial();

export const ActivityLogQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ActivityLogWhereSchemaJson,
    select: ActivityLogProjectionSchemaJson,
    omit: ActivityLogProjectionSchemaJson,
    include: ActivityLogIncludeSchemaJson,
  })
  .partial();

export type ActivityLogCreate = z.infer<typeof ActivityLogCreateSchema>;

export type ActivityLogUpdate = z.infer<typeof ActivityLogUpdateSchema>;

export type ActivityLogOrderBy = z.infer<typeof ActivityLogOrderBySchema>;

export type ActivityLogOwnProjection = z.infer<
  typeof ActivityLogOwnProjectionSchema
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

export type ActivityLogProjection = z.infer<typeof ActivityLogProjectionSchema>;

export const UserPermissionQueryOneSchema = z
  .object({
    where: UserPermissionWhereSchemaJson,
    select: UserPermissionProjectionSchemaJson,
    omit: UserPermissionProjectionSchemaJson,
    include: UserPermissionIncludeSchemaJson,
  })
  .partial();

export const UserPermissionQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: UserPermissionWhereSchemaJson,
    select: UserPermissionProjectionSchemaJson,
    omit: UserPermissionProjectionSchemaJson,
    include: UserPermissionIncludeSchemaJson,
  })
  .partial();

export type UserPermissionCreate = z.infer<typeof UserPermissionCreateSchema>;

export type UserPermissionUpdate = z.infer<typeof UserPermissionUpdateSchema>;

export type UserPermissionOrderBy = z.infer<typeof UserPermissionOrderBySchema>;

export type UserPermissionOwnProjection = z.infer<
  typeof UserPermissionOwnProjectionSchema
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

export type UserPermissionProjection = z.infer<
  typeof UserPermissionProjectionSchema
>;

export const AccessTokenPermissionQueryOneSchema = z
  .object({
    where: AccessTokenPermissionWhereSchemaJson,
    select: AccessTokenPermissionProjectionSchemaJson,
    omit: AccessTokenPermissionProjectionSchemaJson,
    include: AccessTokenPermissionIncludeSchemaJson,
  })
  .partial();

export const AccessTokenPermissionQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AccessTokenPermissionWhereSchemaJson,
    select: AccessTokenPermissionProjectionSchemaJson,
    omit: AccessTokenPermissionProjectionSchemaJson,
    include: AccessTokenPermissionIncludeSchemaJson,
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

export type AccessTokenPermissionOwnProjection = z.infer<
  typeof AccessTokenPermissionOwnProjectionSchema
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

export type AccessTokenPermissionProjection = z.infer<
  typeof AccessTokenPermissionProjectionSchema
>;

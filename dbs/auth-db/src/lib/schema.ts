import * as PZ from '@puq/zod';
import { z } from 'zod';

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

export const AccessTokenOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    userId: z.boolean(),
    user: z.boolean(),
    AccessTokenPermission: z.boolean(),
  })
  .partial();

export const ScopeOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    permissions: z.boolean(),
  })
  .partial();

export const ResourceOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    activities: z.boolean(),
  })
  .partial();

export const OperationOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    activities: z.boolean(),
  })
  .partial();

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

export const RoleOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    permissions: z.boolean(),
  })
  .partial();

export const RolePermissionOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    roleId: z.boolean(),
    permissionId: z.boolean(),
    role: z.boolean(),
    permission: z.boolean(),
  })
  .partial();

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

export const UserPermissionOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    userId: z.boolean(),
    permissionId: z.boolean(),
    user: z.boolean(),
    permission: z.boolean(),
  })
  .partial();

export const AccessTokenPermissionOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    permissionId: z.boolean(),
    accessTokenId: z.boolean(),
    permission: z.boolean(),
    accessToken: z.boolean(),
  })
  .partial();

export const UserOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    username: PZ.StringFilterSchema,
    password: PZ.StringFilterSchema,
  })
  .partial();

export const AccessTokenOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    userId: PZ.IntegerFilterSchema,
  })
  .partial();

export const ScopeOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const ResourceOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const OperationOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const ActivityOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    resourceId: PZ.IntegerFilterSchema,
    operationId: PZ.IntegerFilterSchema,
  })
  .partial();

export const PermissionOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    scopeId: PZ.IntegerFilterSchema,
    activityId: PZ.IntegerFilterSchema,
  })
  .partial();

export const RoleOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const RolePermissionOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    roleId: PZ.IntegerFilterSchema,
    permissionId: PZ.IntegerFilterSchema,
  })
  .partial();

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

export const ActivityLogOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    sessionId: PZ.IntegerFilterSchema,
    activityId: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    notes: PZ.StringFilterSchema,
  })
  .partial();

export const UserPermissionOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    userId: PZ.IntegerFilterSchema,
    permissionId: PZ.IntegerFilterSchema,
  })
  .partial();

export const AccessTokenPermissionOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    permissionId: PZ.IntegerFilterSchema,
    accessTokenId: PZ.IntegerFilterSchema,
  })
  .partial();

export const UserOwnQueryOneSchema = z
  .object({
    where: UserOwnWhereSchema,
    select: UserOwnProjectionSchema,
    omit: UserOwnProjectionSchema,
  })
  .partial();

export const UserOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: UserOwnWhereSchema,
    select: UserOwnProjectionSchema,
    omit: UserOwnProjectionSchema,
  })
  .partial();

export const AccessTokenOwnQueryOneSchema = z
  .object({
    where: AccessTokenOwnWhereSchema,
    select: AccessTokenOwnProjectionSchema,
    omit: AccessTokenOwnProjectionSchema,
  })
  .partial();

export const AccessTokenOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: AccessTokenOwnWhereSchema,
    select: AccessTokenOwnProjectionSchema,
    omit: AccessTokenOwnProjectionSchema,
  })
  .partial();

export const ScopeOwnQueryOneSchema = z
  .object({
    where: ScopeOwnWhereSchema,
    select: ScopeOwnProjectionSchema,
    omit: ScopeOwnProjectionSchema,
  })
  .partial();

export const ScopeOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ScopeOwnWhereSchema,
    select: ScopeOwnProjectionSchema,
    omit: ScopeOwnProjectionSchema,
  })
  .partial();

export const ResourceOwnQueryOneSchema = z
  .object({
    where: ResourceOwnWhereSchema,
    select: ResourceOwnProjectionSchema,
    omit: ResourceOwnProjectionSchema,
  })
  .partial();

export const ResourceOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ResourceOwnWhereSchema,
    select: ResourceOwnProjectionSchema,
    omit: ResourceOwnProjectionSchema,
  })
  .partial();

export const OperationOwnQueryOneSchema = z
  .object({
    where: OperationOwnWhereSchema,
    select: OperationOwnProjectionSchema,
    omit: OperationOwnProjectionSchema,
  })
  .partial();

export const OperationOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: OperationOwnWhereSchema,
    select: OperationOwnProjectionSchema,
    omit: OperationOwnProjectionSchema,
  })
  .partial();

export const ActivityOwnQueryOneSchema = z
  .object({
    where: ActivityOwnWhereSchema,
    select: ActivityOwnProjectionSchema,
    omit: ActivityOwnProjectionSchema,
  })
  .partial();

export const ActivityOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ActivityOwnWhereSchema,
    select: ActivityOwnProjectionSchema,
    omit: ActivityOwnProjectionSchema,
  })
  .partial();

export const PermissionOwnQueryOneSchema = z
  .object({
    where: PermissionOwnWhereSchema,
    select: PermissionOwnProjectionSchema,
    omit: PermissionOwnProjectionSchema,
  })
  .partial();

export const PermissionOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PermissionOwnWhereSchema,
    select: PermissionOwnProjectionSchema,
    omit: PermissionOwnProjectionSchema,
  })
  .partial();

export const RoleOwnQueryOneSchema = z
  .object({
    where: RoleOwnWhereSchema,
    select: RoleOwnProjectionSchema,
    omit: RoleOwnProjectionSchema,
  })
  .partial();

export const RoleOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: RoleOwnWhereSchema,
    select: RoleOwnProjectionSchema,
    omit: RoleOwnProjectionSchema,
  })
  .partial();

export const RolePermissionOwnQueryOneSchema = z
  .object({
    where: RolePermissionOwnWhereSchema,
    select: RolePermissionOwnProjectionSchema,
    omit: RolePermissionOwnProjectionSchema,
  })
  .partial();

export const RolePermissionOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: RolePermissionOwnWhereSchema,
    select: RolePermissionOwnProjectionSchema,
    omit: RolePermissionOwnProjectionSchema,
  })
  .partial();

export const SessionOwnQueryOneSchema = z
  .object({
    where: SessionOwnWhereSchema,
    select: SessionOwnProjectionSchema,
    omit: SessionOwnProjectionSchema,
  })
  .partial();

export const SessionOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: SessionOwnWhereSchema,
    select: SessionOwnProjectionSchema,
    omit: SessionOwnProjectionSchema,
  })
  .partial();

export const ActivityLogOwnQueryOneSchema = z
  .object({
    where: ActivityLogOwnWhereSchema,
    select: ActivityLogOwnProjectionSchema,
    omit: ActivityLogOwnProjectionSchema,
  })
  .partial();

export const ActivityLogOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ActivityLogOwnWhereSchema,
    select: ActivityLogOwnProjectionSchema,
    omit: ActivityLogOwnProjectionSchema,
  })
  .partial();

export const UserPermissionOwnQueryOneSchema = z
  .object({
    where: UserPermissionOwnWhereSchema,
    select: UserPermissionOwnProjectionSchema,
    omit: UserPermissionOwnProjectionSchema,
  })
  .partial();

export const UserPermissionOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: UserPermissionOwnWhereSchema,
    select: UserPermissionOwnProjectionSchema,
    omit: UserPermissionOwnProjectionSchema,
  })
  .partial();

export const AccessTokenPermissionOwnQueryOneSchema = z
  .object({
    where: AccessTokenPermissionOwnWhereSchema,
    select: AccessTokenPermissionOwnProjectionSchema,
    omit: AccessTokenPermissionOwnProjectionSchema,
  })
  .partial();

export const AccessTokenPermissionOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: AccessTokenPermissionOwnWhereSchema,
    select: AccessTokenPermissionOwnProjectionSchema,
    omit: AccessTokenPermissionOwnProjectionSchema,
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

export const UserProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    username: z.boolean(),
    password: z.boolean(),
    sessions: SessionOwnQuerySchema,
    permissions: UserPermissionOwnQuerySchema,
    AccessToken: AccessTokenOwnQuerySchema,
  })
  .partial();

export const UserQueryOneSchema = z
  .object({
    where: UserWhereSchema,
    select: UserProjectionSchema,
    omit: UserProjectionSchema,
  })
  .partial();

export const UserQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: UserWhereSchema,
    select: UserProjectionSchema,
    omit: UserProjectionSchema,
  })
  .partial();

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

export const AccessTokenProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    userId: z.boolean(),
    user: UserOwnQueryOneSchema,
    AccessTokenPermission: AccessTokenPermissionOwnQuerySchema,
  })
  .partial();

export const AccessTokenQueryOneSchema = z
  .object({
    where: AccessTokenWhereSchema,
    select: AccessTokenProjectionSchema,
    omit: AccessTokenProjectionSchema,
  })
  .partial();

export const AccessTokenQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: AccessTokenWhereSchema,
    select: AccessTokenProjectionSchema,
    omit: AccessTokenProjectionSchema,
  })
  .partial();

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

export const ScopeProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    permissions: PermissionOwnQuerySchema,
  })
  .partial();

export const ScopeQueryOneSchema = z
  .object({
    where: ScopeWhereSchema,
    select: ScopeProjectionSchema,
    omit: ScopeProjectionSchema,
  })
  .partial();

export const ScopeQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ScopeWhereSchema,
    select: ScopeProjectionSchema,
    omit: ScopeProjectionSchema,
  })
  .partial();

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

export const ResourceProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    activities: ActivityOwnQuerySchema,
  })
  .partial();

export const ResourceQueryOneSchema = z
  .object({
    where: ResourceWhereSchema,
    select: ResourceProjectionSchema,
    omit: ResourceProjectionSchema,
  })
  .partial();

export const ResourceQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ResourceWhereSchema,
    select: ResourceProjectionSchema,
    omit: ResourceProjectionSchema,
  })
  .partial();

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

export const OperationProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    activities: ActivityOwnQuerySchema,
  })
  .partial();

export const OperationQueryOneSchema = z
  .object({
    where: OperationWhereSchema,
    select: OperationProjectionSchema,
    omit: OperationProjectionSchema,
  })
  .partial();

export const OperationQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: OperationWhereSchema,
    select: OperationProjectionSchema,
    omit: OperationProjectionSchema,
  })
  .partial();

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

export const ActivityProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    resourceId: z.boolean(),
    operationId: z.boolean(),
    resouce: ResourceOwnQueryOneSchema,
    operation: OperationOwnQueryOneSchema,
    permissions: PermissionOwnQuerySchema,
    logs: ActivityLogOwnQuerySchema,
  })
  .partial();

export const ActivityQueryOneSchema = z
  .object({
    where: ActivityWhereSchema,
    select: ActivityProjectionSchema,
    omit: ActivityProjectionSchema,
  })
  .partial();

export const ActivityQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ActivityWhereSchema,
    select: ActivityProjectionSchema,
    omit: ActivityProjectionSchema,
  })
  .partial();

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

export const PermissionProjectionSchema = z
  .object({
    id: z.boolean(),
    scopeId: z.boolean(),
    activityId: z.boolean(),
    scope: ScopeOwnQueryOneSchema,
    activity: ActivityOwnQueryOneSchema,
    roles: RolePermissionOwnQuerySchema,
    UserPermission: UserPermissionOwnQuerySchema,
    AccessTokenPermission: AccessTokenPermissionOwnQuerySchema,
  })
  .partial();

export const PermissionQueryOneSchema = z
  .object({
    where: PermissionWhereSchema,
    select: PermissionProjectionSchema,
    omit: PermissionProjectionSchema,
  })
  .partial();

export const PermissionQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PermissionWhereSchema,
    select: PermissionProjectionSchema,
    omit: PermissionProjectionSchema,
  })
  .partial();

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

export const RoleProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    permissions: RolePermissionOwnQuerySchema,
  })
  .partial();

export const RoleQueryOneSchema = z
  .object({
    where: RoleWhereSchema,
    select: RoleProjectionSchema,
    omit: RoleProjectionSchema,
  })
  .partial();

export const RoleQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: RoleWhereSchema,
    select: RoleProjectionSchema,
    omit: RoleProjectionSchema,
  })
  .partial();

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

export const RolePermissionProjectionSchema = z
  .object({
    id: z.boolean(),
    roleId: z.boolean(),
    permissionId: z.boolean(),
    role: RoleOwnQueryOneSchema,
    permission: PermissionOwnQueryOneSchema,
  })
  .partial();

export const RolePermissionQueryOneSchema = z
  .object({
    where: RolePermissionWhereSchema,
    select: RolePermissionProjectionSchema,
    omit: RolePermissionProjectionSchema,
  })
  .partial();

export const RolePermissionQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: RolePermissionWhereSchema,
    select: RolePermissionProjectionSchema,
    omit: RolePermissionProjectionSchema,
  })
  .partial();

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

export const SessionProjectionSchema = z
  .object({
    id: z.boolean(),
    userId: z.boolean(),
    description: z.boolean(),
    status: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    user: UserOwnQueryOneSchema,
    logs: ActivityLogOwnQuerySchema,
  })
  .partial();

export const SessionQueryOneSchema = z
  .object({
    where: SessionWhereSchema,
    select: SessionProjectionSchema,
    omit: SessionProjectionSchema,
  })
  .partial();

export const SessionQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: SessionWhereSchema,
    select: SessionProjectionSchema,
    omit: SessionProjectionSchema,
  })
  .partial();

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

export const ActivityLogProjectionSchema = z
  .object({
    id: z.boolean(),
    sessionId: z.boolean(),
    activityId: z.boolean(),
    createdAt: z.boolean(),
    notes: z.boolean(),
    activity: ActivityOwnQueryOneSchema,
    session: SessionOwnQueryOneSchema,
  })
  .partial();

export const ActivityLogQueryOneSchema = z
  .object({
    where: ActivityLogWhereSchema,
    select: ActivityLogProjectionSchema,
    omit: ActivityLogProjectionSchema,
  })
  .partial();

export const ActivityLogQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ActivityLogWhereSchema,
    select: ActivityLogProjectionSchema,
    omit: ActivityLogProjectionSchema,
  })
  .partial();

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

export const UserPermissionProjectionSchema = z
  .object({
    id: z.boolean(),
    userId: z.boolean(),
    permissionId: z.boolean(),
    user: UserOwnQueryOneSchema,
    permission: PermissionOwnQueryOneSchema,
  })
  .partial();

export const UserPermissionQueryOneSchema = z
  .object({
    where: UserPermissionWhereSchema,
    select: UserPermissionProjectionSchema,
    omit: UserPermissionProjectionSchema,
  })
  .partial();

export const UserPermissionQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: UserPermissionWhereSchema,
    select: UserPermissionProjectionSchema,
    omit: UserPermissionProjectionSchema,
  })
  .partial();

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

export const AccessTokenPermissionProjectionSchema = z
  .object({
    id: z.boolean(),
    permissionId: z.boolean(),
    accessTokenId: z.boolean(),
    permission: PermissionOwnQueryOneSchema,
    accessToken: AccessTokenOwnQueryOneSchema,
  })
  .partial();

export const AccessTokenPermissionQueryOneSchema = z
  .object({
    where: AccessTokenPermissionWhereSchema,
    select: AccessTokenPermissionProjectionSchema,
    omit: AccessTokenPermissionProjectionSchema,
  })
  .partial();

export const AccessTokenPermissionQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: AccessTokenPermissionWhereSchema,
    select: AccessTokenPermissionProjectionSchema,
    omit: AccessTokenPermissionProjectionSchema,
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

export type UserQueryOne = z.infer<typeof UserQueryOneSchema>;

export type UserQuery = z.infer<typeof UserQuerySchema>;

export type UserProjection = z.infer<typeof UserProjectionSchema>;

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

export type AccessTokenQueryOne = z.infer<typeof AccessTokenQueryOneSchema>;

export type AccessTokenQuery = z.infer<typeof AccessTokenQuerySchema>;

export type AccessTokenProjection = z.infer<typeof AccessTokenProjectionSchema>;

export type ScopeCreate = z.infer<typeof ScopeCreateSchema>;

export type ScopeUpdate = z.infer<typeof ScopeUpdateSchema>;

export type ScopeOrderBy = z.infer<typeof ScopeOrderBySchema>;

export type ScopeOwnProjection = z.infer<typeof ScopeOwnProjectionSchema>;

export type ScopeOwnWhere = z.infer<typeof ScopeOwnWhereSchema>;

export type ScopeOwnQuery = z.infer<typeof ScopeOwnQuerySchema>;

export type ScopeOwnQueryOne = z.infer<typeof ScopeOwnQueryOneSchema>;

export type ScopeWhere = z.infer<typeof ScopeWhereSchema>;

export type ScopeQueryOne = z.infer<typeof ScopeQueryOneSchema>;

export type ScopeQuery = z.infer<typeof ScopeQuerySchema>;

export type ScopeProjection = z.infer<typeof ScopeProjectionSchema>;

export type ResourceCreate = z.infer<typeof ResourceCreateSchema>;

export type ResourceUpdate = z.infer<typeof ResourceUpdateSchema>;

export type ResourceOrderBy = z.infer<typeof ResourceOrderBySchema>;

export type ResourceOwnProjection = z.infer<typeof ResourceOwnProjectionSchema>;

export type ResourceOwnWhere = z.infer<typeof ResourceOwnWhereSchema>;

export type ResourceOwnQuery = z.infer<typeof ResourceOwnQuerySchema>;

export type ResourceOwnQueryOne = z.infer<typeof ResourceOwnQueryOneSchema>;

export type ResourceWhere = z.infer<typeof ResourceWhereSchema>;

export type ResourceQueryOne = z.infer<typeof ResourceQueryOneSchema>;

export type ResourceQuery = z.infer<typeof ResourceQuerySchema>;

export type ResourceProjection = z.infer<typeof ResourceProjectionSchema>;

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

export type OperationQueryOne = z.infer<typeof OperationQueryOneSchema>;

export type OperationQuery = z.infer<typeof OperationQuerySchema>;

export type OperationProjection = z.infer<typeof OperationProjectionSchema>;

export type ActivityCreate = z.infer<typeof ActivityCreateSchema>;

export type ActivityUpdate = z.infer<typeof ActivityUpdateSchema>;

export type ActivityOrderBy = z.infer<typeof ActivityOrderBySchema>;

export type ActivityOwnProjection = z.infer<typeof ActivityOwnProjectionSchema>;

export type ActivityOwnWhere = z.infer<typeof ActivityOwnWhereSchema>;

export type ActivityOwnQuery = z.infer<typeof ActivityOwnQuerySchema>;

export type ActivityOwnQueryOne = z.infer<typeof ActivityOwnQueryOneSchema>;

export type ActivityWhere = z.infer<typeof ActivityWhereSchema>;

export type ActivityQueryOne = z.infer<typeof ActivityQueryOneSchema>;

export type ActivityQuery = z.infer<typeof ActivityQuerySchema>;

export type ActivityProjection = z.infer<typeof ActivityProjectionSchema>;

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

export type PermissionQueryOne = z.infer<typeof PermissionQueryOneSchema>;

export type PermissionQuery = z.infer<typeof PermissionQuerySchema>;

export type PermissionProjection = z.infer<typeof PermissionProjectionSchema>;

export type RoleCreate = z.infer<typeof RoleCreateSchema>;

export type RoleUpdate = z.infer<typeof RoleUpdateSchema>;

export type RoleOrderBy = z.infer<typeof RoleOrderBySchema>;

export type RoleOwnProjection = z.infer<typeof RoleOwnProjectionSchema>;

export type RoleOwnWhere = z.infer<typeof RoleOwnWhereSchema>;

export type RoleOwnQuery = z.infer<typeof RoleOwnQuerySchema>;

export type RoleOwnQueryOne = z.infer<typeof RoleOwnQueryOneSchema>;

export type RoleWhere = z.infer<typeof RoleWhereSchema>;

export type RoleQueryOne = z.infer<typeof RoleQueryOneSchema>;

export type RoleQuery = z.infer<typeof RoleQuerySchema>;

export type RoleProjection = z.infer<typeof RoleProjectionSchema>;

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

export type RolePermissionQueryOne = z.infer<
  typeof RolePermissionQueryOneSchema
>;

export type RolePermissionQuery = z.infer<typeof RolePermissionQuerySchema>;

export type RolePermissionProjection = z.infer<
  typeof RolePermissionProjectionSchema
>;

export type SessionCreate = z.infer<typeof SessionCreateSchema>;

export type SessionUpdate = z.infer<typeof SessionUpdateSchema>;

export type SessionOrderBy = z.infer<typeof SessionOrderBySchema>;

export type SessionOwnProjection = z.infer<typeof SessionOwnProjectionSchema>;

export type SessionOwnWhere = z.infer<typeof SessionOwnWhereSchema>;

export type SessionOwnQuery = z.infer<typeof SessionOwnQuerySchema>;

export type SessionOwnQueryOne = z.infer<typeof SessionOwnQueryOneSchema>;

export type SessionWhere = z.infer<typeof SessionWhereSchema>;

export type SessionQueryOne = z.infer<typeof SessionQueryOneSchema>;

export type SessionQuery = z.infer<typeof SessionQuerySchema>;

export type SessionProjection = z.infer<typeof SessionProjectionSchema>;

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

export type ActivityLogQueryOne = z.infer<typeof ActivityLogQueryOneSchema>;

export type ActivityLogQuery = z.infer<typeof ActivityLogQuerySchema>;

export type ActivityLogProjection = z.infer<typeof ActivityLogProjectionSchema>;

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

export type UserPermissionQueryOne = z.infer<
  typeof UserPermissionQueryOneSchema
>;

export type UserPermissionQuery = z.infer<typeof UserPermissionQuerySchema>;

export type UserPermissionProjection = z.infer<
  typeof UserPermissionProjectionSchema
>;

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

export type AccessTokenPermissionQueryOne = z.infer<
  typeof AccessTokenPermissionQueryOneSchema
>;

export type AccessTokenPermissionQuery = z.infer<
  typeof AccessTokenPermissionQuerySchema
>;

export type AccessTokenPermissionProjection = z.infer<
  typeof AccessTokenPermissionProjectionSchema
>;

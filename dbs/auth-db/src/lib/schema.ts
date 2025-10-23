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

export const _phone = z
  .string()
  .regex(/^[0-9]{3} [0-9]{3} [0-9]{2}-[0-9]{2}$/, {
    error: "Invalid phone format",
  });

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

export const _json = z.preprocess((value) => {
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }
  return value;
}, z.any());

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

export const _jsonFilter = z.object({
  path: _str.array().optional(),
  array_contains: _str.optional(),
  array_ends_with: _str.optional(),
  array_starts_with: _str.optional(),
  equals: _str.optional(),
  gt: _str.optional(),
  gte: _str.optional(),
  lt: _str.optional(),
  lte: _str.optional(),
  mode: _strMode,
  string_contains: _str.optional(),
  string_ends_with: _str.optional(),
  string_starts_with: _str.optional(),
  not: _str.optional(),
});

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

export const SessionStatusSchema = z.enum(["ACTIVE", "EXPIRED", "REVOKED"]);

export const __SessionStatusFilterSchema = z.object({
  equals: SessionStatusSchema.optional(),
  in: SessionStatusSchema.array().optional(),
  notIn: SessionStatusSchema.array().optional(),
});
export const SessionStatusFilterSchema = z.object({
  equals: SessionStatusSchema.optional(),
  in: SessionStatusSchema.array().optional(),
  notIn: SessionStatusSchema.array().optional(),
  not: SessionStatusSchema.or(__SessionStatusFilterSchema).optional(),
});

export const SessionStatusArrayFilterSchema = z.object({
  equals: SessionStatusSchema.array().optional(),
  has: SessionStatusSchema.optional(),
  hasEvery: SessionStatusSchema.array().optional(),
  hasSome: SessionStatusSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const UserDistinctSchema = z
  .enum(["id", "uuid", "username", "password"])
  .array()
  .optional();

export const AccessTokenDistinctSchema = z
  .enum(["id", "name", "userId"])
  .array()
  .optional();

export const ScopeDistinctSchema = z.enum(["id", "name"]).array().optional();

export const ResourceDistinctSchema = z.enum(["id", "name"]).array().optional();

export const OperationDistinctSchema = z
  .enum(["id", "name"])
  .array()
  .optional();

export const ActivityDistinctSchema = z
  .enum(["id", "name", "resourceId", "operationId"])
  .array()
  .optional();

export const PermissionDistinctSchema = z
  .enum(["id", "scopeId", "activityId"])
  .array()
  .optional();

export const RoleDistinctSchema = z.enum(["id", "name"]).array().optional();

export const RolePermissionDistinctSchema = z
  .enum(["id", "roleId", "permissionId"])
  .array()
  .optional();

export const SessionDistinctSchema = z
  .enum(["id", "userId", "description", "status", "startDate", "endDate"])
  .array()
  .optional();

export const ActivityLogDistinctSchema = z
  .enum(["id", "sessionId", "activityId", "createdAt", "notes"])
  .array()
  .optional();

export const UserPermissionDistinctSchema = z
  .enum(["id", "userId", "permissionId"])
  .array()
  .optional();

export const AccessTokenPermissionDistinctSchema = z
  .enum(["id", "permissionId", "accessTokenId"])
  .array()
  .optional();

export const UserOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  username: _strFilter.optional(),
  password: _strFilter.optional(),
});

export const AccessTokenOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  userId: _intFilter.optional(),
});

export const ScopeOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const ResourceOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const OperationOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const ActivityOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  resourceId: _intFilter.optional(),
  operationId: _intFilter.optional(),
});

export const PermissionOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  scopeId: _intFilter.optional(),
  activityId: _intFilter.optional(),
});

export const RoleOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const RolePermissionOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  roleId: _intFilter.optional(),
  permissionId: _intFilter.optional(),
});

export const SessionOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  userId: _intFilter.optional(),
  description: _strFilter.optional(),
  status: SessionStatusFilterSchema.optional(),
  startDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
});

export const ActivityLogOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  sessionId: _intFilter.optional(),
  activityId: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  notes: _strFilter.optional(),
});

export const UserPermissionOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  userId: _intFilter.optional(),
  permissionId: _intFilter.optional(),
});

export const AccessTokenPermissionOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  permissionId: _intFilter.optional(),
  accessTokenId: _intFilter.optional(),
});

export const UserOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserOwnWhereSchema
);

export const AccessTokenOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenOwnWhereSchema
);

export const ScopeOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ScopeOwnWhereSchema
);

export const ResourceOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ResourceOwnWhereSchema
);

export const OperationOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  OperationOwnWhereSchema
);

export const ActivityOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityOwnWhereSchema
);

export const PermissionOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PermissionOwnWhereSchema
);

export const RoleOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoleOwnWhereSchema
);

export const RolePermissionOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RolePermissionOwnWhereSchema
);

export const SessionOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SessionOwnWhereSchema
);

export const ActivityLogOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityLogOwnWhereSchema
);

export const UserPermissionOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserPermissionOwnWhereSchema
);

export const AccessTokenPermissionOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenPermissionOwnWhereSchema
);

export const UserWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  username: _strFilter.optional(),
  password: _strFilter.optional(),
  sessions: z
    .object({
      every: SessionOwnWhereSchema.optional(),
      some: SessionOwnWhereSchema.optional(),
      none: SessionOwnWhereSchema.optional(),
    })
    .optional(),
  permissions: z
    .object({
      every: UserPermissionOwnWhereSchema.optional(),
      some: UserPermissionOwnWhereSchema.optional(),
      none: UserPermissionOwnWhereSchema.optional(),
    })
    .optional(),
  AccessToken: z
    .object({
      every: AccessTokenOwnWhereSchema.optional(),
      some: AccessTokenOwnWhereSchema.optional(),
      none: AccessTokenOwnWhereSchema.optional(),
    })
    .optional(),
});

export const AccessTokenWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  userId: _intFilter.optional(),
  user: UserOwnWhereSchema.optional(),
  AccessTokenPermission: z
    .object({
      every: AccessTokenPermissionOwnWhereSchema.optional(),
      some: AccessTokenPermissionOwnWhereSchema.optional(),
      none: AccessTokenPermissionOwnWhereSchema.optional(),
    })
    .optional(),
});

export const ScopeWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  permissions: z
    .object({
      every: PermissionOwnWhereSchema.optional(),
      some: PermissionOwnWhereSchema.optional(),
      none: PermissionOwnWhereSchema.optional(),
    })
    .optional(),
});

export const ResourceWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  activities: z
    .object({
      every: ActivityOwnWhereSchema.optional(),
      some: ActivityOwnWhereSchema.optional(),
      none: ActivityOwnWhereSchema.optional(),
    })
    .optional(),
});

export const OperationWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  activities: z
    .object({
      every: ActivityOwnWhereSchema.optional(),
      some: ActivityOwnWhereSchema.optional(),
      none: ActivityOwnWhereSchema.optional(),
    })
    .optional(),
});

export const ActivityWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  resourceId: _intFilter.optional(),
  operationId: _intFilter.optional(),
  resouce: ResourceOwnWhereSchema.optional(),
  operation: OperationOwnWhereSchema.optional(),
  permissions: z
    .object({
      every: PermissionOwnWhereSchema.optional(),
      some: PermissionOwnWhereSchema.optional(),
      none: PermissionOwnWhereSchema.optional(),
    })
    .optional(),
  logs: z
    .object({
      every: ActivityLogOwnWhereSchema.optional(),
      some: ActivityLogOwnWhereSchema.optional(),
      none: ActivityLogOwnWhereSchema.optional(),
    })
    .optional(),
});

export const PermissionWhereSchema = z.object({
  id: _intFilter.optional(),
  scopeId: _intFilter.optional(),
  activityId: _intFilter.optional(),
  scope: ScopeOwnWhereSchema.optional(),
  activity: ActivityOwnWhereSchema.optional(),
  roles: z
    .object({
      every: RolePermissionOwnWhereSchema.optional(),
      some: RolePermissionOwnWhereSchema.optional(),
      none: RolePermissionOwnWhereSchema.optional(),
    })
    .optional(),
  UserPermission: z
    .object({
      every: UserPermissionOwnWhereSchema.optional(),
      some: UserPermissionOwnWhereSchema.optional(),
      none: UserPermissionOwnWhereSchema.optional(),
    })
    .optional(),
  AccessTokenPermission: z
    .object({
      every: AccessTokenPermissionOwnWhereSchema.optional(),
      some: AccessTokenPermissionOwnWhereSchema.optional(),
      none: AccessTokenPermissionOwnWhereSchema.optional(),
    })
    .optional(),
});

export const RoleWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  permissions: z
    .object({
      every: RolePermissionOwnWhereSchema.optional(),
      some: RolePermissionOwnWhereSchema.optional(),
      none: RolePermissionOwnWhereSchema.optional(),
    })
    .optional(),
});

export const RolePermissionWhereSchema = z.object({
  id: _intFilter.optional(),
  roleId: _intFilter.optional(),
  permissionId: _intFilter.optional(),
  role: RoleOwnWhereSchema.optional(),
  permission: PermissionOwnWhereSchema.optional(),
});

export const SessionWhereSchema = z.object({
  id: _intFilter.optional(),
  userId: _intFilter.optional(),
  description: _strFilter.optional(),
  status: SessionStatusFilterSchema.optional(),
  startDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
  user: UserOwnWhereSchema.optional(),
  logs: z
    .object({
      every: ActivityLogOwnWhereSchema.optional(),
      some: ActivityLogOwnWhereSchema.optional(),
      none: ActivityLogOwnWhereSchema.optional(),
    })
    .optional(),
});

export const ActivityLogWhereSchema = z.object({
  id: _intFilter.optional(),
  sessionId: _intFilter.optional(),
  activityId: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  notes: _strFilter.optional(),
  activity: ActivityOwnWhereSchema.optional(),
  session: SessionOwnWhereSchema.optional(),
});

export const UserPermissionWhereSchema = z.object({
  id: _intFilter.optional(),
  userId: _intFilter.optional(),
  permissionId: _intFilter.optional(),
  user: UserOwnWhereSchema.optional(),
  permission: PermissionOwnWhereSchema.optional(),
});

export const AccessTokenPermissionWhereSchema = z.object({
  id: _intFilter.optional(),
  permissionId: _intFilter.optional(),
  accessTokenId: _intFilter.optional(),
  permission: PermissionOwnWhereSchema.optional(),
  accessToken: AccessTokenOwnWhereSchema.optional(),
});

export const UserWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserWhereSchema
);

export const AccessTokenWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenWhereSchema
);

export const ScopeWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ScopeWhereSchema
);

export const ResourceWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ResourceWhereSchema
);

export const OperationWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  OperationWhereSchema
);

export const ActivityWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityWhereSchema
);

export const PermissionWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PermissionWhereSchema
);

export const RoleWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoleWhereSchema
);

export const RolePermissionWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RolePermissionWhereSchema
);

export const SessionWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SessionWhereSchema
);

export const ActivityLogWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityLogWhereSchema
);

export const UserPermissionWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserPermissionWhereSchema
);

export const AccessTokenPermissionWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenPermissionWhereSchema
);

export const UserOwnOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  username: _direction,
  password: _direction,
});

export const AccessTokenOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  userId: _direction,
});

export const ScopeOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
});

export const ResourceOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
});

export const OperationOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
});

export const ActivityOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  resourceId: _direction,
  operationId: _direction,
});

export const PermissionOwnOrderBySchema = z.object({
  id: _direction,
  scopeId: _direction,
  activityId: _direction,
});

export const RoleOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
});

export const RolePermissionOwnOrderBySchema = z.object({
  id: _direction,
  roleId: _direction,
  permissionId: _direction,
});

export const SessionOwnOrderBySchema = z.object({
  id: _direction,
  userId: _direction,
  description: _direction,
  status: _direction,
  startDate: _direction,
  endDate: _direction,
});

export const ActivityLogOwnOrderBySchema = z.object({
  id: _direction,
  sessionId: _direction,
  activityId: _direction,
  createdAt: _direction,
  notes: _direction,
});

export const UserPermissionOwnOrderBySchema = z.object({
  id: _direction,
  userId: _direction,
  permissionId: _direction,
});

export const AccessTokenPermissionOwnOrderBySchema = z.object({
  id: _direction,
  permissionId: _direction,
  accessTokenId: _direction,
});

export const UserOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserOwnOrderBySchema
);

export const AccessTokenOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenOwnOrderBySchema
);

export const ScopeOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ScopeOwnOrderBySchema
);

export const ResourceOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ResourceOwnOrderBySchema
);

export const OperationOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  OperationOwnOrderBySchema
);

export const ActivityOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityOwnOrderBySchema
);

export const PermissionOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PermissionOwnOrderBySchema
);

export const RoleOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoleOwnOrderBySchema
);

export const RolePermissionOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RolePermissionOwnOrderBySchema
);

export const SessionOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SessionOwnOrderBySchema
);

export const ActivityLogOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityLogOwnOrderBySchema
);

export const UserPermissionOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserPermissionOwnOrderBySchema
);

export const AccessTokenPermissionOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenPermissionOwnOrderBySchema
);

export const UserOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  username: _direction,
  password: _direction,
  sessions: _orderByCount,
  permissions: _orderByCount,
  AccessToken: _orderByCount,
});

export const AccessTokenOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  userId: _direction,
  user: UserOwnOrderBySchema.optional(),
  AccessTokenPermission: _orderByCount,
});

export const ScopeOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  permissions: _orderByCount,
});

export const ResourceOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  activities: _orderByCount,
});

export const OperationOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  activities: _orderByCount,
});

export const ActivityOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  resourceId: _direction,
  operationId: _direction,
  resouce: ResourceOwnOrderBySchema.optional(),
  operation: OperationOwnOrderBySchema.optional(),
  permissions: _orderByCount,
  logs: _orderByCount,
});

export const PermissionOrderBySchema = z.object({
  id: _direction,
  scopeId: _direction,
  activityId: _direction,
  scope: ScopeOwnOrderBySchema.optional(),
  activity: ActivityOwnOrderBySchema.optional(),
  roles: _orderByCount,
  UserPermission: _orderByCount,
  AccessTokenPermission: _orderByCount,
});

export const RoleOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  permissions: _orderByCount,
});

export const RolePermissionOrderBySchema = z.object({
  id: _direction,
  roleId: _direction,
  permissionId: _direction,
  role: RoleOwnOrderBySchema.optional(),
  permission: PermissionOwnOrderBySchema.optional(),
});

export const SessionOrderBySchema = z.object({
  id: _direction,
  userId: _direction,
  description: _direction,
  status: _direction,
  startDate: _direction,
  endDate: _direction,
  user: UserOwnOrderBySchema.optional(),
  logs: _orderByCount,
});

export const ActivityLogOrderBySchema = z.object({
  id: _direction,
  sessionId: _direction,
  activityId: _direction,
  createdAt: _direction,
  notes: _direction,
  activity: ActivityOwnOrderBySchema.optional(),
  session: SessionOwnOrderBySchema.optional(),
});

export const UserPermissionOrderBySchema = z.object({
  id: _direction,
  userId: _direction,
  permissionId: _direction,
  user: UserOwnOrderBySchema.optional(),
  permission: PermissionOwnOrderBySchema.optional(),
});

export const AccessTokenPermissionOrderBySchema = z.object({
  id: _direction,
  permissionId: _direction,
  accessTokenId: _direction,
  permission: PermissionOwnOrderBySchema.optional(),
  accessToken: AccessTokenOwnOrderBySchema.optional(),
});

export const UserOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserOrderBySchema
);

export const AccessTokenOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenOrderBySchema
);

export const ScopeOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ScopeOrderBySchema
);

export const ResourceOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ResourceOrderBySchema
);

export const OperationOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  OperationOrderBySchema
);

export const ActivityOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityOrderBySchema
);

export const PermissionOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PermissionOrderBySchema
);

export const RoleOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoleOrderBySchema
);

export const RolePermissionOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RolePermissionOrderBySchema
);

export const SessionOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SessionOrderBySchema
);

export const ActivityLogOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityLogOrderBySchema
);

export const UserPermissionOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserPermissionOrderBySchema
);

export const AccessTokenPermissionOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenPermissionOrderBySchema
);

export const UserOwnSelectSchema = z.object({
  id: _select,
  uuid: _select,
  username: _select,
  password: _select,
});

export const AccessTokenOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  userId: _select,
});

export const ScopeOwnSelectSchema = z.object({ id: _select, name: _select });

export const ResourceOwnSelectSchema = z.object({ id: _select, name: _select });

export const OperationOwnSelectSchema = z.object({
  id: _select,
  name: _select,
});

export const ActivityOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  resourceId: _select,
  operationId: _select,
});

export const PermissionOwnSelectSchema = z.object({
  id: _select,
  scopeId: _select,
  activityId: _select,
});

export const RoleOwnSelectSchema = z.object({ id: _select, name: _select });

export const RolePermissionOwnSelectSchema = z.object({
  id: _select,
  roleId: _select,
  permissionId: _select,
});

export const SessionOwnSelectSchema = z.object({
  id: _select,
  userId: _select,
  description: _select,
  status: _select,
  startDate: _select,
  endDate: _select,
});

export const ActivityLogOwnSelectSchema = z.object({
  id: _select,
  sessionId: _select,
  activityId: _select,
  createdAt: _select,
  notes: _select,
});

export const UserPermissionOwnSelectSchema = z.object({
  id: _select,
  userId: _select,
  permissionId: _select,
});

export const AccessTokenPermissionOwnSelectSchema = z.object({
  id: _select,
  permissionId: _select,
  accessTokenId: _select,
});

export const UserOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserOwnSelectSchema
);

export const AccessTokenOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenOwnSelectSchema
);

export const ScopeOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ScopeOwnSelectSchema
);

export const ResourceOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ResourceOwnSelectSchema
);

export const OperationOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  OperationOwnSelectSchema
);

export const ActivityOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityOwnSelectSchema
);

export const PermissionOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PermissionOwnSelectSchema
);

export const RoleOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoleOwnSelectSchema
);

export const RolePermissionOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RolePermissionOwnSelectSchema
);

export const SessionOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SessionOwnSelectSchema
);

export const ActivityLogOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityLogOwnSelectSchema
);

export const UserPermissionOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserPermissionOwnSelectSchema
);

export const AccessTokenPermissionOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenPermissionOwnSelectSchema
);

export const UserSelectSchema = z.object({
  id: _select,
  uuid: _select,
  username: _select,
  password: _select,
  sessions: _select,
  permissions: _select,
  AccessToken: _select,
});

export const AccessTokenSelectSchema = z.object({
  id: _select,
  name: _select,
  userId: _select,
  user: _select,
  AccessTokenPermission: _select,
});

export const ScopeSelectSchema = z.object({
  id: _select,
  name: _select,
  permissions: _select,
});

export const ResourceSelectSchema = z.object({
  id: _select,
  name: _select,
  activities: _select,
});

export const OperationSelectSchema = z.object({
  id: _select,
  name: _select,
  activities: _select,
});

export const ActivitySelectSchema = z.object({
  id: _select,
  name: _select,
  resourceId: _select,
  operationId: _select,
  resouce: _select,
  operation: _select,
  permissions: _select,
  logs: _select,
});

export const PermissionSelectSchema = z.object({
  id: _select,
  scopeId: _select,
  activityId: _select,
  scope: _select,
  activity: _select,
  roles: _select,
  UserPermission: _select,
  AccessTokenPermission: _select,
});

export const RoleSelectSchema = z.object({
  id: _select,
  name: _select,
  permissions: _select,
});

export const RolePermissionSelectSchema = z.object({
  id: _select,
  roleId: _select,
  permissionId: _select,
  role: _select,
  permission: _select,
});

export const SessionSelectSchema = z.object({
  id: _select,
  userId: _select,
  description: _select,
  status: _select,
  startDate: _select,
  endDate: _select,
  user: _select,
  logs: _select,
});

export const ActivityLogSelectSchema = z.object({
  id: _select,
  sessionId: _select,
  activityId: _select,
  createdAt: _select,
  notes: _select,
  activity: _select,
  session: _select,
});

export const UserPermissionSelectSchema = z.object({
  id: _select,
  userId: _select,
  permissionId: _select,
  user: _select,
  permission: _select,
});

export const AccessTokenPermissionSelectSchema = z.object({
  id: _select,
  permissionId: _select,
  accessTokenId: _select,
  permission: _select,
  accessToken: _select,
});

export const UserSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserSelectSchema
);

export const AccessTokenSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenSelectSchema
);

export const ScopeSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ScopeSelectSchema
);

export const ResourceSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ResourceSelectSchema
);

export const OperationSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  OperationSelectSchema
);

export const ActivitySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivitySelectSchema
);

export const PermissionSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PermissionSelectSchema
);

export const RoleSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoleSelectSchema
);

export const RolePermissionSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RolePermissionSelectSchema
);

export const SessionSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SessionSelectSchema
);

export const ActivityLogSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityLogSelectSchema
);

export const UserPermissionSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserPermissionSelectSchema
);

export const AccessTokenPermissionSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenPermissionSelectSchema
);

export const UserOmitSchema = z.object({
  id: _select,
  uuid: _select,
  username: _select,
  password: _select,
});

export const AccessTokenOmitSchema = z.object({
  id: _select,
  name: _select,
  userId: _select,
});

export const ScopeOmitSchema = z.object({ id: _select, name: _select });

export const ResourceOmitSchema = z.object({ id: _select, name: _select });

export const OperationOmitSchema = z.object({ id: _select, name: _select });

export const ActivityOmitSchema = z.object({
  id: _select,
  name: _select,
  resourceId: _select,
  operationId: _select,
});

export const PermissionOmitSchema = z.object({
  id: _select,
  scopeId: _select,
  activityId: _select,
});

export const RoleOmitSchema = z.object({ id: _select, name: _select });

export const RolePermissionOmitSchema = z.object({
  id: _select,
  roleId: _select,
  permissionId: _select,
});

export const SessionOmitSchema = z.object({
  id: _select,
  userId: _select,
  description: _select,
  status: _select,
  startDate: _select,
  endDate: _select,
});

export const ActivityLogOmitSchema = z.object({
  id: _select,
  sessionId: _select,
  activityId: _select,
  createdAt: _select,
  notes: _select,
});

export const UserPermissionOmitSchema = z.object({
  id: _select,
  userId: _select,
  permissionId: _select,
});

export const AccessTokenPermissionOmitSchema = z.object({
  id: _select,
  permissionId: _select,
  accessTokenId: _select,
});

export const UserOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserOmitSchema
);

export const AccessTokenOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenOmitSchema
);

export const ScopeOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ScopeOmitSchema
);

export const ResourceOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ResourceOmitSchema
);

export const OperationOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  OperationOmitSchema
);

export const ActivityOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityOmitSchema
);

export const PermissionOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PermissionOmitSchema
);

export const RoleOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoleOmitSchema
);

export const RolePermissionOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RolePermissionOmitSchema
);

export const SessionOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SessionOmitSchema
);

export const ActivityLogOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityLogOmitSchema
);

export const UserPermissionOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserPermissionOmitSchema
);

export const AccessTokenPermissionOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenPermissionOmitSchema
);

export const UserOwnQueryOneSchema = z.object({
  select: UserOwnSelectSchemaJson.optional(),
  omit: UserOmitSchemaJson.optional(),
  where: UserOwnWhereSchemaJson.optional(),
});

export const AccessTokenOwnQueryOneSchema = z.object({
  select: AccessTokenOwnSelectSchemaJson.optional(),
  omit: AccessTokenOmitSchemaJson.optional(),
  where: AccessTokenOwnWhereSchemaJson.optional(),
});

export const ScopeOwnQueryOneSchema = z.object({
  select: ScopeOwnSelectSchemaJson.optional(),
  omit: ScopeOmitSchemaJson.optional(),
  where: ScopeOwnWhereSchemaJson.optional(),
});

export const ResourceOwnQueryOneSchema = z.object({
  select: ResourceOwnSelectSchemaJson.optional(),
  omit: ResourceOmitSchemaJson.optional(),
  where: ResourceOwnWhereSchemaJson.optional(),
});

export const OperationOwnQueryOneSchema = z.object({
  select: OperationOwnSelectSchemaJson.optional(),
  omit: OperationOmitSchemaJson.optional(),
  where: OperationOwnWhereSchemaJson.optional(),
});

export const ActivityOwnQueryOneSchema = z.object({
  select: ActivityOwnSelectSchemaJson.optional(),
  omit: ActivityOmitSchemaJson.optional(),
  where: ActivityOwnWhereSchemaJson.optional(),
});

export const PermissionOwnQueryOneSchema = z.object({
  select: PermissionOwnSelectSchemaJson.optional(),
  omit: PermissionOmitSchemaJson.optional(),
  where: PermissionOwnWhereSchemaJson.optional(),
});

export const RoleOwnQueryOneSchema = z.object({
  select: RoleOwnSelectSchemaJson.optional(),
  omit: RoleOmitSchemaJson.optional(),
  where: RoleOwnWhereSchemaJson.optional(),
});

export const RolePermissionOwnQueryOneSchema = z.object({
  select: RolePermissionOwnSelectSchemaJson.optional(),
  omit: RolePermissionOmitSchemaJson.optional(),
  where: RolePermissionOwnWhereSchemaJson.optional(),
});

export const SessionOwnQueryOneSchema = z.object({
  select: SessionOwnSelectSchemaJson.optional(),
  omit: SessionOmitSchemaJson.optional(),
  where: SessionOwnWhereSchemaJson.optional(),
});

export const ActivityLogOwnQueryOneSchema = z.object({
  select: ActivityLogOwnSelectSchemaJson.optional(),
  omit: ActivityLogOmitSchemaJson.optional(),
  where: ActivityLogOwnWhereSchemaJson.optional(),
});

export const UserPermissionOwnQueryOneSchema = z.object({
  select: UserPermissionOwnSelectSchemaJson.optional(),
  omit: UserPermissionOmitSchemaJson.optional(),
  where: UserPermissionOwnWhereSchemaJson.optional(),
});

export const AccessTokenPermissionOwnQueryOneSchema = z.object({
  select: AccessTokenPermissionOwnSelectSchemaJson.optional(),
  omit: AccessTokenPermissionOmitSchemaJson.optional(),
  where: AccessTokenPermissionOwnWhereSchemaJson.optional(),
});

export const UserOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserOwnQueryOneSchema
);

export const AccessTokenOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenOwnQueryOneSchema
);

export const ScopeOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ScopeOwnQueryOneSchema
);

export const ResourceOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ResourceOwnQueryOneSchema
);

export const OperationOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  OperationOwnQueryOneSchema
);

export const ActivityOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityOwnQueryOneSchema
);

export const PermissionOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PermissionOwnQueryOneSchema
);

export const RoleOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoleOwnQueryOneSchema
);

export const RolePermissionOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RolePermissionOwnQueryOneSchema
);

export const SessionOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SessionOwnQueryOneSchema
);

export const ActivityLogOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityLogOwnQueryOneSchema
);

export const UserPermissionOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserPermissionOwnQueryOneSchema
);

export const AccessTokenPermissionOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenPermissionOwnQueryOneSchema
);

export const UserOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: UserDistinctSchema.optional(),
  select: UserOwnSelectSchemaJson.optional(),
  omit: UserOmitSchemaJson.optional(),
  where: UserOwnWhereSchemaJson.optional(),
  orderBy: UserOwnOrderBySchemaJson.optional(),
});

export const AccessTokenOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AccessTokenDistinctSchema.optional(),
  select: AccessTokenOwnSelectSchemaJson.optional(),
  omit: AccessTokenOmitSchemaJson.optional(),
  where: AccessTokenOwnWhereSchemaJson.optional(),
  orderBy: AccessTokenOwnOrderBySchemaJson.optional(),
});

export const ScopeOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ScopeDistinctSchema.optional(),
  select: ScopeOwnSelectSchemaJson.optional(),
  omit: ScopeOmitSchemaJson.optional(),
  where: ScopeOwnWhereSchemaJson.optional(),
  orderBy: ScopeOwnOrderBySchemaJson.optional(),
});

export const ResourceOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ResourceDistinctSchema.optional(),
  select: ResourceOwnSelectSchemaJson.optional(),
  omit: ResourceOmitSchemaJson.optional(),
  where: ResourceOwnWhereSchemaJson.optional(),
  orderBy: ResourceOwnOrderBySchemaJson.optional(),
});

export const OperationOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: OperationDistinctSchema.optional(),
  select: OperationOwnSelectSchemaJson.optional(),
  omit: OperationOmitSchemaJson.optional(),
  where: OperationOwnWhereSchemaJson.optional(),
  orderBy: OperationOwnOrderBySchemaJson.optional(),
});

export const ActivityOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ActivityDistinctSchema.optional(),
  select: ActivityOwnSelectSchemaJson.optional(),
  omit: ActivityOmitSchemaJson.optional(),
  where: ActivityOwnWhereSchemaJson.optional(),
  orderBy: ActivityOwnOrderBySchemaJson.optional(),
});

export const PermissionOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PermissionDistinctSchema.optional(),
  select: PermissionOwnSelectSchemaJson.optional(),
  omit: PermissionOmitSchemaJson.optional(),
  where: PermissionOwnWhereSchemaJson.optional(),
  orderBy: PermissionOwnOrderBySchemaJson.optional(),
});

export const RoleOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: RoleDistinctSchema.optional(),
  select: RoleOwnSelectSchemaJson.optional(),
  omit: RoleOmitSchemaJson.optional(),
  where: RoleOwnWhereSchemaJson.optional(),
  orderBy: RoleOwnOrderBySchemaJson.optional(),
});

export const RolePermissionOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: RolePermissionDistinctSchema.optional(),
  select: RolePermissionOwnSelectSchemaJson.optional(),
  omit: RolePermissionOmitSchemaJson.optional(),
  where: RolePermissionOwnWhereSchemaJson.optional(),
  orderBy: RolePermissionOwnOrderBySchemaJson.optional(),
});

export const SessionOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SessionDistinctSchema.optional(),
  select: SessionOwnSelectSchemaJson.optional(),
  omit: SessionOmitSchemaJson.optional(),
  where: SessionOwnWhereSchemaJson.optional(),
  orderBy: SessionOwnOrderBySchemaJson.optional(),
});

export const ActivityLogOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ActivityLogDistinctSchema.optional(),
  select: ActivityLogOwnSelectSchemaJson.optional(),
  omit: ActivityLogOmitSchemaJson.optional(),
  where: ActivityLogOwnWhereSchemaJson.optional(),
  orderBy: ActivityLogOwnOrderBySchemaJson.optional(),
});

export const UserPermissionOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: UserPermissionDistinctSchema.optional(),
  select: UserPermissionOwnSelectSchemaJson.optional(),
  omit: UserPermissionOmitSchemaJson.optional(),
  where: UserPermissionOwnWhereSchemaJson.optional(),
  orderBy: UserPermissionOwnOrderBySchemaJson.optional(),
});

export const AccessTokenPermissionOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AccessTokenPermissionDistinctSchema.optional(),
  select: AccessTokenPermissionOwnSelectSchemaJson.optional(),
  omit: AccessTokenPermissionOmitSchemaJson.optional(),
  where: AccessTokenPermissionOwnWhereSchemaJson.optional(),
  orderBy: AccessTokenPermissionOwnOrderBySchemaJson.optional(),
});

export const UserOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserOwnQuerySchema
);

export const AccessTokenOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenOwnQuerySchema
);

export const ScopeOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ScopeOwnQuerySchema
);

export const ResourceOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ResourceOwnQuerySchema
);

export const OperationOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  OperationOwnQuerySchema
);

export const ActivityOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityOwnQuerySchema
);

export const PermissionOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PermissionOwnQuerySchema
);

export const RoleOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoleOwnQuerySchema
);

export const RolePermissionOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RolePermissionOwnQuerySchema
);

export const SessionOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SessionOwnQuerySchema
);

export const ActivityLogOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityLogOwnQuerySchema
);

export const UserPermissionOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserPermissionOwnQuerySchema
);

export const AccessTokenPermissionOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenPermissionOwnQuerySchema
);

export const UserIncludeSchema = z.object({
  sessions: _select.or(SessionOwnQueryOneSchema).optional(),
  permissions: _select.or(UserPermissionOwnQueryOneSchema).optional(),
  AccessToken: _select.or(AccessTokenOwnQueryOneSchema).optional(),
});

export const AccessTokenIncludeSchema = z.object({
  user: _select.or(UserOwnQueryOneSchema).optional(),
  AccessTokenPermission: _select
    .or(AccessTokenPermissionOwnQueryOneSchema)
    .optional(),
});

export const ScopeIncludeSchema = z.object({
  permissions: _select.or(PermissionOwnQueryOneSchema).optional(),
});

export const ResourceIncludeSchema = z.object({
  activities: _select.or(ActivityOwnQueryOneSchema).optional(),
});

export const OperationIncludeSchema = z.object({
  activities: _select.or(ActivityOwnQueryOneSchema).optional(),
});

export const ActivityIncludeSchema = z.object({
  resouce: _select.or(ResourceOwnQueryOneSchema).optional(),
  operation: _select.or(OperationOwnQueryOneSchema).optional(),
  permissions: _select.or(PermissionOwnQueryOneSchema).optional(),
  logs: _select.or(ActivityLogOwnQueryOneSchema).optional(),
});

export const PermissionIncludeSchema = z.object({
  scope: _select.or(ScopeOwnQueryOneSchema).optional(),
  activity: _select.or(ActivityOwnQueryOneSchema).optional(),
  roles: _select.or(RolePermissionOwnQueryOneSchema).optional(),
  UserPermission: _select.or(UserPermissionOwnQueryOneSchema).optional(),
  AccessTokenPermission: _select
    .or(AccessTokenPermissionOwnQueryOneSchema)
    .optional(),
});

export const RoleIncludeSchema = z.object({
  permissions: _select.or(RolePermissionOwnQueryOneSchema).optional(),
});

export const RolePermissionIncludeSchema = z.object({
  role: _select.or(RoleOwnQueryOneSchema).optional(),
  permission: _select.or(PermissionOwnQueryOneSchema).optional(),
});

export const SessionIncludeSchema = z.object({
  user: _select.or(UserOwnQueryOneSchema).optional(),
  logs: _select.or(ActivityLogOwnQueryOneSchema).optional(),
});

export const ActivityLogIncludeSchema = z.object({
  activity: _select.or(ActivityOwnQueryOneSchema).optional(),
  session: _select.or(SessionOwnQueryOneSchema).optional(),
});

export const UserPermissionIncludeSchema = z.object({
  user: _select.or(UserOwnQueryOneSchema).optional(),
  permission: _select.or(PermissionOwnQueryOneSchema).optional(),
});

export const AccessTokenPermissionIncludeSchema = z.object({
  permission: _select.or(PermissionOwnQueryOneSchema).optional(),
  accessToken: _select.or(AccessTokenOwnQueryOneSchema).optional(),
});

export const UserIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserIncludeSchema
);

export const AccessTokenIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenIncludeSchema
);

export const ScopeIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ScopeIncludeSchema
);

export const ResourceIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ResourceIncludeSchema
);

export const OperationIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  OperationIncludeSchema
);

export const ActivityIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityIncludeSchema
);

export const PermissionIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PermissionIncludeSchema
);

export const RoleIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoleIncludeSchema
);

export const RolePermissionIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RolePermissionIncludeSchema
);

export const SessionIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SessionIncludeSchema
);

export const ActivityLogIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityLogIncludeSchema
);

export const UserPermissionIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserPermissionIncludeSchema
);

export const AccessTokenPermissionIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenPermissionIncludeSchema
);

export const UserCompleteSelectSchema = z.object({
  id: _select,
  uuid: _select,
  username: _select,
  password: _select,
  sessions: _select.or(SessionOwnQueryOneSchema).optional(),
  permissions: _select.or(UserPermissionOwnQueryOneSchema).optional(),
  AccessToken: _select.or(AccessTokenOwnQueryOneSchema).optional(),
});

export const AccessTokenCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  userId: _select,
  user: _select.or(UserOwnQueryOneSchema).optional(),
  AccessTokenPermission: _select
    .or(AccessTokenPermissionOwnQueryOneSchema)
    .optional(),
});

export const ScopeCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  permissions: _select.or(PermissionOwnQueryOneSchema).optional(),
});

export const ResourceCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  activities: _select.or(ActivityOwnQueryOneSchema).optional(),
});

export const OperationCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  activities: _select.or(ActivityOwnQueryOneSchema).optional(),
});

export const ActivityCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  resourceId: _select,
  operationId: _select,
  resouce: _select.or(ResourceOwnQueryOneSchema).optional(),
  operation: _select.or(OperationOwnQueryOneSchema).optional(),
  permissions: _select.or(PermissionOwnQueryOneSchema).optional(),
  logs: _select.or(ActivityLogOwnQueryOneSchema).optional(),
});

export const PermissionCompleteSelectSchema = z.object({
  id: _select,
  scopeId: _select,
  activityId: _select,
  scope: _select.or(ScopeOwnQueryOneSchema).optional(),
  activity: _select.or(ActivityOwnQueryOneSchema).optional(),
  roles: _select.or(RolePermissionOwnQueryOneSchema).optional(),
  UserPermission: _select.or(UserPermissionOwnQueryOneSchema).optional(),
  AccessTokenPermission: _select
    .or(AccessTokenPermissionOwnQueryOneSchema)
    .optional(),
});

export const RoleCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  permissions: _select.or(RolePermissionOwnQueryOneSchema).optional(),
});

export const RolePermissionCompleteSelectSchema = z.object({
  id: _select,
  roleId: _select,
  permissionId: _select,
  role: _select.or(RoleOwnQueryOneSchema).optional(),
  permission: _select.or(PermissionOwnQueryOneSchema).optional(),
});

export const SessionCompleteSelectSchema = z.object({
  id: _select,
  userId: _select,
  description: _select,
  status: _select,
  startDate: _select,
  endDate: _select,
  user: _select.or(UserOwnQueryOneSchema).optional(),
  logs: _select.or(ActivityLogOwnQueryOneSchema).optional(),
});

export const ActivityLogCompleteSelectSchema = z.object({
  id: _select,
  sessionId: _select,
  activityId: _select,
  createdAt: _select,
  notes: _select,
  activity: _select.or(ActivityOwnQueryOneSchema).optional(),
  session: _select.or(SessionOwnQueryOneSchema).optional(),
});

export const UserPermissionCompleteSelectSchema = z.object({
  id: _select,
  userId: _select,
  permissionId: _select,
  user: _select.or(UserOwnQueryOneSchema).optional(),
  permission: _select.or(PermissionOwnQueryOneSchema).optional(),
});

export const AccessTokenPermissionCompleteSelectSchema = z.object({
  id: _select,
  permissionId: _select,
  accessTokenId: _select,
  permission: _select.or(PermissionOwnQueryOneSchema).optional(),
  accessToken: _select.or(AccessTokenOwnQueryOneSchema).optional(),
});

export const UserCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserCompleteSelectSchema
);

export const AccessTokenCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenCompleteSelectSchema
);

export const ScopeCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ScopeCompleteSelectSchema
);

export const ResourceCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ResourceCompleteSelectSchema
);

export const OperationCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  OperationCompleteSelectSchema
);

export const ActivityCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityCompleteSelectSchema
);

export const PermissionCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PermissionCompleteSelectSchema
);

export const RoleCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoleCompleteSelectSchema
);

export const RolePermissionCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RolePermissionCompleteSelectSchema
);

export const SessionCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SessionCompleteSelectSchema
);

export const ActivityLogCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityLogCompleteSelectSchema
);

export const UserPermissionCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserPermissionCompleteSelectSchema
);

export const AccessTokenPermissionCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenPermissionCompleteSelectSchema
);

export const UserQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: UserDistinctSchema.optional(),
  select: UserOwnSelectSchemaJson.optional(),
  omit: UserOmitSchemaJson.optional(),
  include: UserIncludeSchemaJson.optional(),
  where: UserOwnWhereSchemaJson.optional(),
  orderBy: UserOwnOrderBySchemaJson.optional(),
});

export const AccessTokenQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AccessTokenDistinctSchema.optional(),
  select: AccessTokenOwnSelectSchemaJson.optional(),
  omit: AccessTokenOmitSchemaJson.optional(),
  include: AccessTokenIncludeSchemaJson.optional(),
  where: AccessTokenOwnWhereSchemaJson.optional(),
  orderBy: AccessTokenOwnOrderBySchemaJson.optional(),
});

export const ScopeQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ScopeDistinctSchema.optional(),
  select: ScopeOwnSelectSchemaJson.optional(),
  omit: ScopeOmitSchemaJson.optional(),
  include: ScopeIncludeSchemaJson.optional(),
  where: ScopeOwnWhereSchemaJson.optional(),
  orderBy: ScopeOwnOrderBySchemaJson.optional(),
});

export const ResourceQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ResourceDistinctSchema.optional(),
  select: ResourceOwnSelectSchemaJson.optional(),
  omit: ResourceOmitSchemaJson.optional(),
  include: ResourceIncludeSchemaJson.optional(),
  where: ResourceOwnWhereSchemaJson.optional(),
  orderBy: ResourceOwnOrderBySchemaJson.optional(),
});

export const OperationQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: OperationDistinctSchema.optional(),
  select: OperationOwnSelectSchemaJson.optional(),
  omit: OperationOmitSchemaJson.optional(),
  include: OperationIncludeSchemaJson.optional(),
  where: OperationOwnWhereSchemaJson.optional(),
  orderBy: OperationOwnOrderBySchemaJson.optional(),
});

export const ActivityQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ActivityDistinctSchema.optional(),
  select: ActivityOwnSelectSchemaJson.optional(),
  omit: ActivityOmitSchemaJson.optional(),
  include: ActivityIncludeSchemaJson.optional(),
  where: ActivityOwnWhereSchemaJson.optional(),
  orderBy: ActivityOwnOrderBySchemaJson.optional(),
});

export const PermissionQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PermissionDistinctSchema.optional(),
  select: PermissionOwnSelectSchemaJson.optional(),
  omit: PermissionOmitSchemaJson.optional(),
  include: PermissionIncludeSchemaJson.optional(),
  where: PermissionOwnWhereSchemaJson.optional(),
  orderBy: PermissionOwnOrderBySchemaJson.optional(),
});

export const RoleQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: RoleDistinctSchema.optional(),
  select: RoleOwnSelectSchemaJson.optional(),
  omit: RoleOmitSchemaJson.optional(),
  include: RoleIncludeSchemaJson.optional(),
  where: RoleOwnWhereSchemaJson.optional(),
  orderBy: RoleOwnOrderBySchemaJson.optional(),
});

export const RolePermissionQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: RolePermissionDistinctSchema.optional(),
  select: RolePermissionOwnSelectSchemaJson.optional(),
  omit: RolePermissionOmitSchemaJson.optional(),
  include: RolePermissionIncludeSchemaJson.optional(),
  where: RolePermissionOwnWhereSchemaJson.optional(),
  orderBy: RolePermissionOwnOrderBySchemaJson.optional(),
});

export const SessionQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SessionDistinctSchema.optional(),
  select: SessionOwnSelectSchemaJson.optional(),
  omit: SessionOmitSchemaJson.optional(),
  include: SessionIncludeSchemaJson.optional(),
  where: SessionOwnWhereSchemaJson.optional(),
  orderBy: SessionOwnOrderBySchemaJson.optional(),
});

export const ActivityLogQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ActivityLogDistinctSchema.optional(),
  select: ActivityLogOwnSelectSchemaJson.optional(),
  omit: ActivityLogOmitSchemaJson.optional(),
  include: ActivityLogIncludeSchemaJson.optional(),
  where: ActivityLogOwnWhereSchemaJson.optional(),
  orderBy: ActivityLogOwnOrderBySchemaJson.optional(),
});

export const UserPermissionQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: UserPermissionDistinctSchema.optional(),
  select: UserPermissionOwnSelectSchemaJson.optional(),
  omit: UserPermissionOmitSchemaJson.optional(),
  include: UserPermissionIncludeSchemaJson.optional(),
  where: UserPermissionOwnWhereSchemaJson.optional(),
  orderBy: UserPermissionOwnOrderBySchemaJson.optional(),
});

export const AccessTokenPermissionQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AccessTokenPermissionDistinctSchema.optional(),
  select: AccessTokenPermissionOwnSelectSchemaJson.optional(),
  omit: AccessTokenPermissionOmitSchemaJson.optional(),
  include: AccessTokenPermissionIncludeSchemaJson.optional(),
  where: AccessTokenPermissionOwnWhereSchemaJson.optional(),
  orderBy: AccessTokenPermissionOwnOrderBySchemaJson.optional(),
});

export const UserQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserQuerySchema
);

export const AccessTokenQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenQuerySchema
);

export const ScopeQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ScopeQuerySchema
);

export const ResourceQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ResourceQuerySchema
);

export const OperationQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  OperationQuerySchema
);

export const ActivityQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityQuerySchema
);

export const PermissionQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PermissionQuerySchema
);

export const RoleQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoleQuerySchema
);

export const RolePermissionQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RolePermissionQuerySchema
);

export const SessionQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SessionQuerySchema
);

export const ActivityLogQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityLogQuerySchema
);

export const UserPermissionQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserPermissionQuerySchema
);

export const AccessTokenPermissionQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenPermissionQuerySchema
);

export const UserCompleteQueryOneSchema = z.object({
  select: UserSelectSchemaJson.optional(),
  omit: UserOmitSchemaJson.optional(),
  include: UserIncludeSchemaJson.optional(),
  where: UserWhereSchemaJson.optional(),
});

export const AccessTokenCompleteQueryOneSchema = z.object({
  select: AccessTokenSelectSchemaJson.optional(),
  omit: AccessTokenOmitSchemaJson.optional(),
  include: AccessTokenIncludeSchemaJson.optional(),
  where: AccessTokenWhereSchemaJson.optional(),
});

export const ScopeCompleteQueryOneSchema = z.object({
  select: ScopeSelectSchemaJson.optional(),
  omit: ScopeOmitSchemaJson.optional(),
  include: ScopeIncludeSchemaJson.optional(),
  where: ScopeWhereSchemaJson.optional(),
});

export const ResourceCompleteQueryOneSchema = z.object({
  select: ResourceSelectSchemaJson.optional(),
  omit: ResourceOmitSchemaJson.optional(),
  include: ResourceIncludeSchemaJson.optional(),
  where: ResourceWhereSchemaJson.optional(),
});

export const OperationCompleteQueryOneSchema = z.object({
  select: OperationSelectSchemaJson.optional(),
  omit: OperationOmitSchemaJson.optional(),
  include: OperationIncludeSchemaJson.optional(),
  where: OperationWhereSchemaJson.optional(),
});

export const ActivityCompleteQueryOneSchema = z.object({
  select: ActivitySelectSchemaJson.optional(),
  omit: ActivityOmitSchemaJson.optional(),
  include: ActivityIncludeSchemaJson.optional(),
  where: ActivityWhereSchemaJson.optional(),
});

export const PermissionCompleteQueryOneSchema = z.object({
  select: PermissionSelectSchemaJson.optional(),
  omit: PermissionOmitSchemaJson.optional(),
  include: PermissionIncludeSchemaJson.optional(),
  where: PermissionWhereSchemaJson.optional(),
});

export const RoleCompleteQueryOneSchema = z.object({
  select: RoleSelectSchemaJson.optional(),
  omit: RoleOmitSchemaJson.optional(),
  include: RoleIncludeSchemaJson.optional(),
  where: RoleWhereSchemaJson.optional(),
});

export const RolePermissionCompleteQueryOneSchema = z.object({
  select: RolePermissionSelectSchemaJson.optional(),
  omit: RolePermissionOmitSchemaJson.optional(),
  include: RolePermissionIncludeSchemaJson.optional(),
  where: RolePermissionWhereSchemaJson.optional(),
});

export const SessionCompleteQueryOneSchema = z.object({
  select: SessionSelectSchemaJson.optional(),
  omit: SessionOmitSchemaJson.optional(),
  include: SessionIncludeSchemaJson.optional(),
  where: SessionWhereSchemaJson.optional(),
});

export const ActivityLogCompleteQueryOneSchema = z.object({
  select: ActivityLogSelectSchemaJson.optional(),
  omit: ActivityLogOmitSchemaJson.optional(),
  include: ActivityLogIncludeSchemaJson.optional(),
  where: ActivityLogWhereSchemaJson.optional(),
});

export const UserPermissionCompleteQueryOneSchema = z.object({
  select: UserPermissionSelectSchemaJson.optional(),
  omit: UserPermissionOmitSchemaJson.optional(),
  include: UserPermissionIncludeSchemaJson.optional(),
  where: UserPermissionWhereSchemaJson.optional(),
});

export const AccessTokenPermissionCompleteQueryOneSchema = z.object({
  select: AccessTokenPermissionSelectSchemaJson.optional(),
  omit: AccessTokenPermissionOmitSchemaJson.optional(),
  include: AccessTokenPermissionIncludeSchemaJson.optional(),
  where: AccessTokenPermissionWhereSchemaJson.optional(),
});

export const UserCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserCompleteQueryOneSchema
);

export const AccessTokenCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenCompleteQueryOneSchema
);

export const ScopeCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ScopeCompleteQueryOneSchema
);

export const ResourceCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ResourceCompleteQueryOneSchema
);

export const OperationCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  OperationCompleteQueryOneSchema
);

export const ActivityCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityCompleteQueryOneSchema
);

export const PermissionCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PermissionCompleteQueryOneSchema
);

export const RoleCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoleCompleteQueryOneSchema
);

export const RolePermissionCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RolePermissionCompleteQueryOneSchema
);

export const SessionCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SessionCompleteQueryOneSchema
);

export const ActivityLogCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityLogCompleteQueryOneSchema
);

export const UserPermissionCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserPermissionCompleteQueryOneSchema
);

export const AccessTokenPermissionCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenPermissionCompleteQueryOneSchema
);

export const UserCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: UserDistinctSchema.optional(),
  select: UserCompleteSelectSchemaJson.optional(),
  omit: UserOmitSchemaJson.optional(),
  include: UserIncludeSchemaJson.optional(),
  where: UserWhereSchemaJson.optional(),
  orderBy: UserOrderBySchemaJson.optional(),
});

export const AccessTokenCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AccessTokenDistinctSchema.optional(),
  select: AccessTokenCompleteSelectSchemaJson.optional(),
  omit: AccessTokenOmitSchemaJson.optional(),
  include: AccessTokenIncludeSchemaJson.optional(),
  where: AccessTokenWhereSchemaJson.optional(),
  orderBy: AccessTokenOrderBySchemaJson.optional(),
});

export const ScopeCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ScopeDistinctSchema.optional(),
  select: ScopeCompleteSelectSchemaJson.optional(),
  omit: ScopeOmitSchemaJson.optional(),
  include: ScopeIncludeSchemaJson.optional(),
  where: ScopeWhereSchemaJson.optional(),
  orderBy: ScopeOrderBySchemaJson.optional(),
});

export const ResourceCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ResourceDistinctSchema.optional(),
  select: ResourceCompleteSelectSchemaJson.optional(),
  omit: ResourceOmitSchemaJson.optional(),
  include: ResourceIncludeSchemaJson.optional(),
  where: ResourceWhereSchemaJson.optional(),
  orderBy: ResourceOrderBySchemaJson.optional(),
});

export const OperationCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: OperationDistinctSchema.optional(),
  select: OperationCompleteSelectSchemaJson.optional(),
  omit: OperationOmitSchemaJson.optional(),
  include: OperationIncludeSchemaJson.optional(),
  where: OperationWhereSchemaJson.optional(),
  orderBy: OperationOrderBySchemaJson.optional(),
});

export const ActivityCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ActivityDistinctSchema.optional(),
  select: ActivityCompleteSelectSchemaJson.optional(),
  omit: ActivityOmitSchemaJson.optional(),
  include: ActivityIncludeSchemaJson.optional(),
  where: ActivityWhereSchemaJson.optional(),
  orderBy: ActivityOrderBySchemaJson.optional(),
});

export const PermissionCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PermissionDistinctSchema.optional(),
  select: PermissionCompleteSelectSchemaJson.optional(),
  omit: PermissionOmitSchemaJson.optional(),
  include: PermissionIncludeSchemaJson.optional(),
  where: PermissionWhereSchemaJson.optional(),
  orderBy: PermissionOrderBySchemaJson.optional(),
});

export const RoleCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: RoleDistinctSchema.optional(),
  select: RoleCompleteSelectSchemaJson.optional(),
  omit: RoleOmitSchemaJson.optional(),
  include: RoleIncludeSchemaJson.optional(),
  where: RoleWhereSchemaJson.optional(),
  orderBy: RoleOrderBySchemaJson.optional(),
});

export const RolePermissionCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: RolePermissionDistinctSchema.optional(),
  select: RolePermissionCompleteSelectSchemaJson.optional(),
  omit: RolePermissionOmitSchemaJson.optional(),
  include: RolePermissionIncludeSchemaJson.optional(),
  where: RolePermissionWhereSchemaJson.optional(),
  orderBy: RolePermissionOrderBySchemaJson.optional(),
});

export const SessionCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SessionDistinctSchema.optional(),
  select: SessionCompleteSelectSchemaJson.optional(),
  omit: SessionOmitSchemaJson.optional(),
  include: SessionIncludeSchemaJson.optional(),
  where: SessionWhereSchemaJson.optional(),
  orderBy: SessionOrderBySchemaJson.optional(),
});

export const ActivityLogCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ActivityLogDistinctSchema.optional(),
  select: ActivityLogCompleteSelectSchemaJson.optional(),
  omit: ActivityLogOmitSchemaJson.optional(),
  include: ActivityLogIncludeSchemaJson.optional(),
  where: ActivityLogWhereSchemaJson.optional(),
  orderBy: ActivityLogOrderBySchemaJson.optional(),
});

export const UserPermissionCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: UserPermissionDistinctSchema.optional(),
  select: UserPermissionCompleteSelectSchemaJson.optional(),
  omit: UserPermissionOmitSchemaJson.optional(),
  include: UserPermissionIncludeSchemaJson.optional(),
  where: UserPermissionWhereSchemaJson.optional(),
  orderBy: UserPermissionOrderBySchemaJson.optional(),
});

export const AccessTokenPermissionCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AccessTokenPermissionDistinctSchema.optional(),
  select: AccessTokenPermissionCompleteSelectSchemaJson.optional(),
  omit: AccessTokenPermissionOmitSchemaJson.optional(),
  include: AccessTokenPermissionIncludeSchemaJson.optional(),
  where: AccessTokenPermissionWhereSchemaJson.optional(),
  orderBy: AccessTokenPermissionOrderBySchemaJson.optional(),
});

export const UserCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserCompleteQuerySchema
);

export const AccessTokenCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenCompleteQuerySchema
);

export const ScopeCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ScopeCompleteQuerySchema
);

export const ResourceCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ResourceCompleteQuerySchema
);

export const OperationCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  OperationCompleteQuerySchema
);

export const ActivityCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityCompleteQuerySchema
);

export const PermissionCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PermissionCompleteQuerySchema
);

export const RoleCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoleCompleteQuerySchema
);

export const RolePermissionCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RolePermissionCompleteQuerySchema
);

export const SessionCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SessionCompleteQuerySchema
);

export const ActivityLogCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ActivityLogCompleteQuerySchema
);

export const UserPermissionCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserPermissionCompleteQuerySchema
);

export const AccessTokenPermissionCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AccessTokenPermissionCompleteQuerySchema
);

export const UserProjectionSchema = z.union([
  z.object({ omit: UserOmitSchemaJson }),
  z.object({ select: UserSelectSchemaJson }),
  z.object({ include: UserIncludeSchemaJson }),
  z.object({}),
]);

export const AccessTokenProjectionSchema = z.union([
  z.object({ omit: AccessTokenOmitSchemaJson }),
  z.object({ select: AccessTokenSelectSchemaJson }),
  z.object({ include: AccessTokenIncludeSchemaJson }),
  z.object({}),
]);

export const ScopeProjectionSchema = z.union([
  z.object({ omit: ScopeOmitSchemaJson }),
  z.object({ select: ScopeSelectSchemaJson }),
  z.object({ include: ScopeIncludeSchemaJson }),
  z.object({}),
]);

export const ResourceProjectionSchema = z.union([
  z.object({ omit: ResourceOmitSchemaJson }),
  z.object({ select: ResourceSelectSchemaJson }),
  z.object({ include: ResourceIncludeSchemaJson }),
  z.object({}),
]);

export const OperationProjectionSchema = z.union([
  z.object({ omit: OperationOmitSchemaJson }),
  z.object({ select: OperationSelectSchemaJson }),
  z.object({ include: OperationIncludeSchemaJson }),
  z.object({}),
]);

export const ActivityProjectionSchema = z.union([
  z.object({ omit: ActivityOmitSchemaJson }),
  z.object({ select: ActivitySelectSchemaJson }),
  z.object({ include: ActivityIncludeSchemaJson }),
  z.object({}),
]);

export const PermissionProjectionSchema = z.union([
  z.object({ omit: PermissionOmitSchemaJson }),
  z.object({ select: PermissionSelectSchemaJson }),
  z.object({ include: PermissionIncludeSchemaJson }),
  z.object({}),
]);

export const RoleProjectionSchema = z.union([
  z.object({ omit: RoleOmitSchemaJson }),
  z.object({ select: RoleSelectSchemaJson }),
  z.object({ include: RoleIncludeSchemaJson }),
  z.object({}),
]);

export const RolePermissionProjectionSchema = z.union([
  z.object({ omit: RolePermissionOmitSchemaJson }),
  z.object({ select: RolePermissionSelectSchemaJson }),
  z.object({ include: RolePermissionIncludeSchemaJson }),
  z.object({}),
]);

export const SessionProjectionSchema = z.union([
  z.object({ omit: SessionOmitSchemaJson }),
  z.object({ select: SessionSelectSchemaJson }),
  z.object({ include: SessionIncludeSchemaJson }),
  z.object({}),
]);

export const ActivityLogProjectionSchema = z.union([
  z.object({ omit: ActivityLogOmitSchemaJson }),
  z.object({ select: ActivityLogSelectSchemaJson }),
  z.object({ include: ActivityLogIncludeSchemaJson }),
  z.object({}),
]);

export const UserPermissionProjectionSchema = z.union([
  z.object({ omit: UserPermissionOmitSchemaJson }),
  z.object({ select: UserPermissionSelectSchemaJson }),
  z.object({ include: UserPermissionIncludeSchemaJson }),
  z.object({}),
]);

export const AccessTokenPermissionProjectionSchema = z.union([
  z.object({ omit: AccessTokenPermissionOmitSchemaJson }),
  z.object({ select: AccessTokenPermissionSelectSchemaJson }),
  z.object({ include: AccessTokenPermissionIncludeSchemaJson }),
  z.object({}),
]);

export const UserOwnCreateSchema = z.object({
  uuid: _str,
  username: _email,
  password: _password,
});

export const AccessTokenOwnCreateSchema = z.object({
  name: _name,
  userId: _id,
});

export const ScopeOwnCreateSchema = z.object({ name: _name });

export const ResourceOwnCreateSchema = z.object({ name: _name });

export const OperationOwnCreateSchema = z.object({ name: _name });

export const ActivityOwnCreateSchema = z.object({
  name: _name,
  resourceId: _id,
  operationId: _id,
});

export const PermissionOwnCreateSchema = z.object({
  scopeId: _id,
  activityId: _id,
});

export const RoleOwnCreateSchema = z.object({ name: _name });

export const RolePermissionOwnCreateSchema = z.object({
  roleId: _id,
  permissionId: _id,
});

export const SessionOwnCreateSchema = z.object({
  userId: _id,
  description: _description.optional(),
  status: SessionStatusSchema.optional(),
  endDate: _date,
});

export const ActivityLogOwnCreateSchema = z.object({
  sessionId: _id,
  activityId: _id,
  notes: _str.optional(),
});

export const UserPermissionOwnCreateSchema = z.object({
  userId: _id,
  permissionId: _id,
});

export const AccessTokenPermissionOwnCreateSchema = z.object({
  permissionId: _id,
  accessTokenId: _id,
});

export const UserCreateSchema = z.object({
  uuid: _str,
  username: _email,
  password: _password,
  sessions: z.object({ createMany: SessionOwnCreateSchema.array() }).array(),
  permissions: z
    .object({ createMany: UserPermissionOwnCreateSchema.array() })
    .array(),
  AccessToken: z
    .object({ createMany: AccessTokenOwnCreateSchema.array() })
    .array(),
});

export const AccessTokenCreateSchema = z.object({
  name: _name,
  userId: _id,
  user: z.object({ create: UserOwnCreateSchema }),
  AccessTokenPermission: z
    .object({ createMany: AccessTokenPermissionOwnCreateSchema.array() })
    .array(),
});

export const ScopeCreateSchema = z.object({
  name: _name,
  permissions: z
    .object({ createMany: PermissionOwnCreateSchema.array() })
    .array(),
});

export const ResourceCreateSchema = z.object({
  name: _name,
  activities: z.object({ createMany: ActivityOwnCreateSchema.array() }).array(),
});

export const OperationCreateSchema = z.object({
  name: _name,
  activities: z.object({ createMany: ActivityOwnCreateSchema.array() }).array(),
});

export const ActivityCreateSchema = z.object({
  name: _name,
  resourceId: _id,
  operationId: _id,
  resouce: z.object({ create: ResourceOwnCreateSchema }),
  operation: z.object({ create: OperationOwnCreateSchema }),
  permissions: z
    .object({ createMany: PermissionOwnCreateSchema.array() })
    .array(),
  logs: z.object({ createMany: ActivityLogOwnCreateSchema.array() }).array(),
});

export const PermissionCreateSchema = z.object({
  scopeId: _id,
  activityId: _id,
  scope: z.object({ create: ScopeOwnCreateSchema }),
  activity: z.object({ create: ActivityOwnCreateSchema }),
  roles: z
    .object({ createMany: RolePermissionOwnCreateSchema.array() })
    .array(),
  UserPermission: z
    .object({ createMany: UserPermissionOwnCreateSchema.array() })
    .array(),
  AccessTokenPermission: z
    .object({ createMany: AccessTokenPermissionOwnCreateSchema.array() })
    .array(),
});

export const RoleCreateSchema = z.object({
  name: _name,
  permissions: z
    .object({ createMany: RolePermissionOwnCreateSchema.array() })
    .array(),
});

export const RolePermissionCreateSchema = z.object({
  roleId: _id,
  permissionId: _id,
  role: z.object({ create: RoleOwnCreateSchema }),
  permission: z.object({ create: PermissionOwnCreateSchema }),
});

export const SessionCreateSchema = z.object({
  userId: _id,
  description: _description.optional(),
  status: SessionStatusSchema.optional(),
  endDate: _date,
  user: z.object({ create: UserOwnCreateSchema }),
  logs: z.object({ createMany: ActivityLogOwnCreateSchema.array() }).array(),
});

export const ActivityLogCreateSchema = z.object({
  sessionId: _id,
  activityId: _id,
  notes: _str.optional(),
  activity: z.object({ create: ActivityOwnCreateSchema }),
  session: z.object({ create: SessionOwnCreateSchema }),
});

export const UserPermissionCreateSchema = z.object({
  userId: _id,
  permissionId: _id,
  user: z.object({ create: UserOwnCreateSchema }),
  permission: z.object({ create: PermissionOwnCreateSchema }),
});

export const AccessTokenPermissionCreateSchema = z.object({
  permissionId: _id,
  accessTokenId: _id,
  permission: z.object({ create: PermissionOwnCreateSchema }),
  accessToken: z.object({ create: AccessTokenOwnCreateSchema }),
});

export const UserUpdateSchema = z.object({
  uuid: _str,
  username: _email,
  password: _password,
});

export const AccessTokenUpdateSchema = z.object({ name: _name, userId: _id });

export const ScopeUpdateSchema = z.object({ name: _name });

export const ResourceUpdateSchema = z.object({ name: _name });

export const OperationUpdateSchema = z.object({ name: _name });

export const ActivityUpdateSchema = z.object({
  name: _name,
  resourceId: _id,
  operationId: _id,
});

export const PermissionUpdateSchema = z.object({
  scopeId: _id,
  activityId: _id,
});

export const RoleUpdateSchema = z.object({ name: _name });

export const RolePermissionUpdateSchema = z.object({
  roleId: _id,
  permissionId: _id,
});

export const SessionUpdateSchema = z.object({
  userId: _id,
  description: _description.optional(),
  status: SessionStatusSchema.optional(),
  endDate: _date,
});

export const ActivityLogUpdateSchema = z.object({
  sessionId: _id,
  activityId: _id,
  notes: _str.optional(),
});

export const UserPermissionUpdateSchema = z.object({
  userId: _id,
  permissionId: _id,
});

export const AccessTokenPermissionUpdateSchema = z.object({
  permissionId: _id,
  accessTokenId: _id,
});

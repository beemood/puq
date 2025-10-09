
import { toOrderBySchema, toWhereQuerySchema } from '@puq/zod';
import {z} from 'zod';
    

// ---------- User Schemas ----------


export const UserSchema = z.object({
  id: z.number().int(),
  uuid: z.string(),
  username: z.string(),
  password: z.string(),
});

export const UserCreateSchema = z.object({
  uuid: z.string(),
  username: z.string(),
  password: z.string(),
});

export const UserUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
});

export const UserWhereSchema = toWhereQuerySchema(UserSchema);

export const UserOrderSchema =  toOrderBySchema(UserSchema);

export const UserSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  sessions: z.boolean().optional(),
  permissions: z.boolean().optional(),
  AccessToken: z.boolean().optional(),
});

export const UserQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: UserWhereSchema.optional(),
  orderBy: UserOrderSchema.optional(),
  select: UserSelectSchema.optional()
});

export type User = z.infer<typeof UserSchema>;
export type UserCreate = z.infer<typeof UserCreateSchema>;
export type UserUpdate = z.infer<typeof UserUpdateSchema>;
export type UserWhere = z.infer<typeof UserWhereSchema>;
export type UserOrder = z.infer<typeof UserOrderSchema>;
export type UserSelect = z.infer<typeof UserSelectSchema>;
export type UserQuery = z.infer<typeof UserQuerySchema>;




// ---------- AccessToken Schemas ----------


export const AccessTokenSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  userId: z.number().int(),
});

export const AccessTokenCreateSchema = z.object({
  name: z.string(),
  userId: z.number().int(),
});

export const AccessTokenUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  userId: z.number().int().optional(),
});

export const AccessTokenWhereSchema = toWhereQuerySchema(AccessTokenSchema);

export const AccessTokenOrderSchema =  toOrderBySchema(AccessTokenSchema);

export const AccessTokenSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.boolean().optional(),
  AccessTokenPermission: z.boolean().optional(),
});

export const AccessTokenQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: AccessTokenWhereSchema.optional(),
  orderBy: AccessTokenOrderSchema.optional(),
  select: AccessTokenSelectSchema.optional()
});

export type AccessToken = z.infer<typeof AccessTokenSchema>;
export type AccessTokenCreate = z.infer<typeof AccessTokenCreateSchema>;
export type AccessTokenUpdate = z.infer<typeof AccessTokenUpdateSchema>;
export type AccessTokenWhere = z.infer<typeof AccessTokenWhereSchema>;
export type AccessTokenOrder = z.infer<typeof AccessTokenOrderSchema>;
export type AccessTokenSelect = z.infer<typeof AccessTokenSelectSchema>;
export type AccessTokenQuery = z.infer<typeof AccessTokenQuerySchema>;




// ---------- Scope Schemas ----------


export const ScopeSchema = z.object({
  id: z.number().int(),
  name: z.string(),
});

export const ScopeCreateSchema = z.object({
  name: z.string(),
});

export const ScopeUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});

export const ScopeWhereSchema = toWhereQuerySchema(ScopeSchema);

export const ScopeOrderSchema =  toOrderBySchema(ScopeSchema);

export const ScopeSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  permissions: z.boolean().optional(),
});

export const ScopeQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ScopeWhereSchema.optional(),
  orderBy: ScopeOrderSchema.optional(),
  select: ScopeSelectSchema.optional()
});

export type Scope = z.infer<typeof ScopeSchema>;
export type ScopeCreate = z.infer<typeof ScopeCreateSchema>;
export type ScopeUpdate = z.infer<typeof ScopeUpdateSchema>;
export type ScopeWhere = z.infer<typeof ScopeWhereSchema>;
export type ScopeOrder = z.infer<typeof ScopeOrderSchema>;
export type ScopeSelect = z.infer<typeof ScopeSelectSchema>;
export type ScopeQuery = z.infer<typeof ScopeQuerySchema>;




// ---------- Resource Schemas ----------


export const ResourceSchema = z.object({
  id: z.number().int(),
  name: z.string(),
});

export const ResourceCreateSchema = z.object({
  name: z.string(),
});

export const ResourceUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});

export const ResourceWhereSchema = toWhereQuerySchema(ResourceSchema);

export const ResourceOrderSchema =  toOrderBySchema(ResourceSchema);

export const ResourceSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  activities: z.boolean().optional(),
});

export const ResourceQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ResourceWhereSchema.optional(),
  orderBy: ResourceOrderSchema.optional(),
  select: ResourceSelectSchema.optional()
});

export type Resource = z.infer<typeof ResourceSchema>;
export type ResourceCreate = z.infer<typeof ResourceCreateSchema>;
export type ResourceUpdate = z.infer<typeof ResourceUpdateSchema>;
export type ResourceWhere = z.infer<typeof ResourceWhereSchema>;
export type ResourceOrder = z.infer<typeof ResourceOrderSchema>;
export type ResourceSelect = z.infer<typeof ResourceSelectSchema>;
export type ResourceQuery = z.infer<typeof ResourceQuerySchema>;




// ---------- Operation Schemas ----------


export const OperationSchema = z.object({
  id: z.number().int(),
  name: z.string(),
});

export const OperationCreateSchema = z.object({
  name: z.string(),
});

export const OperationUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});

export const OperationWhereSchema = toWhereQuerySchema(OperationSchema);

export const OperationOrderSchema =  toOrderBySchema(OperationSchema);

export const OperationSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  activities: z.boolean().optional(),
});

export const OperationQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: OperationWhereSchema.optional(),
  orderBy: OperationOrderSchema.optional(),
  select: OperationSelectSchema.optional()
});

export type Operation = z.infer<typeof OperationSchema>;
export type OperationCreate = z.infer<typeof OperationCreateSchema>;
export type OperationUpdate = z.infer<typeof OperationUpdateSchema>;
export type OperationWhere = z.infer<typeof OperationWhereSchema>;
export type OperationOrder = z.infer<typeof OperationOrderSchema>;
export type OperationSelect = z.infer<typeof OperationSelectSchema>;
export type OperationQuery = z.infer<typeof OperationQuerySchema>;




// ---------- Activity Schemas ----------


export const ActivitySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  resourceId: z.number().int(),
  operationId: z.number().int(),
});

export const ActivityCreateSchema = z.object({
  name: z.string(),
  resourceId: z.number().int(),
  operationId: z.number().int(),
});

export const ActivityUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  resourceId: z.number().int().optional(),
  operationId: z.number().int().optional(),
});

export const ActivityWhereSchema = toWhereQuerySchema(ActivitySchema);

export const ActivityOrderSchema =  toOrderBySchema(ActivitySchema);

export const ActivitySelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  resourceId: z.boolean().optional(),
  operationId: z.boolean().optional(),
  resouce: z.boolean().optional(),
  operation: z.boolean().optional(),
  permissions: z.boolean().optional(),
  logs: z.boolean().optional(),
});

export const ActivityQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ActivityWhereSchema.optional(),
  orderBy: ActivityOrderSchema.optional(),
  select: ActivitySelectSchema.optional()
});

export type Activity = z.infer<typeof ActivitySchema>;
export type ActivityCreate = z.infer<typeof ActivityCreateSchema>;
export type ActivityUpdate = z.infer<typeof ActivityUpdateSchema>;
export type ActivityWhere = z.infer<typeof ActivityWhereSchema>;
export type ActivityOrder = z.infer<typeof ActivityOrderSchema>;
export type ActivitySelect = z.infer<typeof ActivitySelectSchema>;
export type ActivityQuery = z.infer<typeof ActivityQuerySchema>;




// ---------- Permission Schemas ----------


export const PermissionSchema = z.object({
  id: z.number().int(),
  scopeId: z.number().int(),
  activityId: z.number().int(),
});

export const PermissionCreateSchema = z.object({
  scopeId: z.number().int(),
  activityId: z.number().int(),
});

export const PermissionUpdateSchema = z.object({
  id: z.number().int().optional(),
  scopeId: z.number().int().optional(),
  activityId: z.number().int().optional(),
});

export const PermissionWhereSchema = toWhereQuerySchema(PermissionSchema);

export const PermissionOrderSchema =  toOrderBySchema(PermissionSchema);

export const PermissionSelectSchema = z.object({
  id: z.boolean().optional(),
  scopeId: z.boolean().optional(),
  activityId: z.boolean().optional(),
  scope: z.boolean().optional(),
  activity: z.boolean().optional(),
  roles: z.boolean().optional(),
  UserPermission: z.boolean().optional(),
  AccessTokenPermission: z.boolean().optional(),
});

export const PermissionQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PermissionWhereSchema.optional(),
  orderBy: PermissionOrderSchema.optional(),
  select: PermissionSelectSchema.optional()
});

export type Permission = z.infer<typeof PermissionSchema>;
export type PermissionCreate = z.infer<typeof PermissionCreateSchema>;
export type PermissionUpdate = z.infer<typeof PermissionUpdateSchema>;
export type PermissionWhere = z.infer<typeof PermissionWhereSchema>;
export type PermissionOrder = z.infer<typeof PermissionOrderSchema>;
export type PermissionSelect = z.infer<typeof PermissionSelectSchema>;
export type PermissionQuery = z.infer<typeof PermissionQuerySchema>;




// ---------- Role Schemas ----------


export const RoleSchema = z.object({
  id: z.number().int(),
  name: z.string(),
});

export const RoleCreateSchema = z.object({
  name: z.string(),
});

export const RoleUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});

export const RoleWhereSchema = toWhereQuerySchema(RoleSchema);

export const RoleOrderSchema =  toOrderBySchema(RoleSchema);

export const RoleSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  permissions: z.boolean().optional(),
});

export const RoleQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: RoleWhereSchema.optional(),
  orderBy: RoleOrderSchema.optional(),
  select: RoleSelectSchema.optional()
});

export type Role = z.infer<typeof RoleSchema>;
export type RoleCreate = z.infer<typeof RoleCreateSchema>;
export type RoleUpdate = z.infer<typeof RoleUpdateSchema>;
export type RoleWhere = z.infer<typeof RoleWhereSchema>;
export type RoleOrder = z.infer<typeof RoleOrderSchema>;
export type RoleSelect = z.infer<typeof RoleSelectSchema>;
export type RoleQuery = z.infer<typeof RoleQuerySchema>;




// ---------- RolePermission Schemas ----------


export const RolePermissionSchema = z.object({
  id: z.number().int(),
  roleId: z.number().int(),
  permissionId: z.number().int(),
});

export const RolePermissionCreateSchema = z.object({
  roleId: z.number().int(),
  permissionId: z.number().int(),
});

export const RolePermissionUpdateSchema = z.object({
  id: z.number().int().optional(),
  roleId: z.number().int().optional(),
  permissionId: z.number().int().optional(),
});

export const RolePermissionWhereSchema = toWhereQuerySchema(RolePermissionSchema);

export const RolePermissionOrderSchema =  toOrderBySchema(RolePermissionSchema);

export const RolePermissionSelectSchema = z.object({
  id: z.boolean().optional(),
  roleId: z.boolean().optional(),
  permissionId: z.boolean().optional(),
  role: z.boolean().optional(),
  permission: z.boolean().optional(),
});

export const RolePermissionQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: RolePermissionWhereSchema.optional(),
  orderBy: RolePermissionOrderSchema.optional(),
  select: RolePermissionSelectSchema.optional()
});

export type RolePermission = z.infer<typeof RolePermissionSchema>;
export type RolePermissionCreate = z.infer<typeof RolePermissionCreateSchema>;
export type RolePermissionUpdate = z.infer<typeof RolePermissionUpdateSchema>;
export type RolePermissionWhere = z.infer<typeof RolePermissionWhereSchema>;
export type RolePermissionOrder = z.infer<typeof RolePermissionOrderSchema>;
export type RolePermissionSelect = z.infer<typeof RolePermissionSelectSchema>;
export type RolePermissionQuery = z.infer<typeof RolePermissionQuerySchema>;




// ---------- Session Schemas ----------


export const SessionSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  description: z.string(),
  status: z.any(),
  startDate: z.date(),
  endDate: z.date(),
});

export const SessionCreateSchema = z.object({
  userId: z.number().int(),
  description: z.string(),
  status: z.any(),
  endDate: z.date(),
});

export const SessionUpdateSchema = z.object({
  id: z.number().int().optional(),
  userId: z.number().int().optional(),
  description: z.string().optional(),
  status: z.any().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
});

export const SessionWhereSchema = toWhereQuerySchema(SessionSchema);

export const SessionOrderSchema =  toOrderBySchema(SessionSchema);

export const SessionSelectSchema = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  description: z.boolean().optional(),
  status: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  user: z.boolean().optional(),
  logs: z.boolean().optional(),
});

export const SessionQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: SessionWhereSchema.optional(),
  orderBy: SessionOrderSchema.optional(),
  select: SessionSelectSchema.optional()
});

export type Session = z.infer<typeof SessionSchema>;
export type SessionCreate = z.infer<typeof SessionCreateSchema>;
export type SessionUpdate = z.infer<typeof SessionUpdateSchema>;
export type SessionWhere = z.infer<typeof SessionWhereSchema>;
export type SessionOrder = z.infer<typeof SessionOrderSchema>;
export type SessionSelect = z.infer<typeof SessionSelectSchema>;
export type SessionQuery = z.infer<typeof SessionQuerySchema>;




// ---------- ActivityLog Schemas ----------


export const ActivityLogSchema = z.object({
  id: z.number().int(),
  sessionId: z.number().int(),
  activityId: z.number().int(),
  createdAt: z.date(),
  notes: z.string().nullish(),
});

export const ActivityLogCreateSchema = z.object({
  sessionId: z.number().int(),
  activityId: z.number().int(),
  notes: z.string().nullish(),
});

export const ActivityLogUpdateSchema = z.object({
  id: z.number().int().optional(),
  sessionId: z.number().int().optional(),
  activityId: z.number().int().optional(),
  createdAt: z.date().optional(),
  notes: z.string().nullish().optional(),
});

export const ActivityLogWhereSchema = toWhereQuerySchema(ActivityLogSchema);

export const ActivityLogOrderSchema =  toOrderBySchema(ActivityLogSchema);

export const ActivityLogSelectSchema = z.object({
  id: z.boolean().optional(),
  sessionId: z.boolean().optional(),
  activityId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  notes: z.boolean().optional(),
  activity: z.boolean().optional(),
  session: z.boolean().optional(),
});

export const ActivityLogQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ActivityLogWhereSchema.optional(),
  orderBy: ActivityLogOrderSchema.optional(),
  select: ActivityLogSelectSchema.optional()
});

export type ActivityLog = z.infer<typeof ActivityLogSchema>;
export type ActivityLogCreate = z.infer<typeof ActivityLogCreateSchema>;
export type ActivityLogUpdate = z.infer<typeof ActivityLogUpdateSchema>;
export type ActivityLogWhere = z.infer<typeof ActivityLogWhereSchema>;
export type ActivityLogOrder = z.infer<typeof ActivityLogOrderSchema>;
export type ActivityLogSelect = z.infer<typeof ActivityLogSelectSchema>;
export type ActivityLogQuery = z.infer<typeof ActivityLogQuerySchema>;




// ---------- UserPermission Schemas ----------


export const UserPermissionSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  permissionId: z.number().int(),
});

export const UserPermissionCreateSchema = z.object({
  userId: z.number().int(),
  permissionId: z.number().int(),
});

export const UserPermissionUpdateSchema = z.object({
  id: z.number().int().optional(),
  userId: z.number().int().optional(),
  permissionId: z.number().int().optional(),
});

export const UserPermissionWhereSchema = toWhereQuerySchema(UserPermissionSchema);

export const UserPermissionOrderSchema =  toOrderBySchema(UserPermissionSchema);

export const UserPermissionSelectSchema = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  permissionId: z.boolean().optional(),
  user: z.boolean().optional(),
  permission: z.boolean().optional(),
});

export const UserPermissionQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: UserPermissionWhereSchema.optional(),
  orderBy: UserPermissionOrderSchema.optional(),
  select: UserPermissionSelectSchema.optional()
});

export type UserPermission = z.infer<typeof UserPermissionSchema>;
export type UserPermissionCreate = z.infer<typeof UserPermissionCreateSchema>;
export type UserPermissionUpdate = z.infer<typeof UserPermissionUpdateSchema>;
export type UserPermissionWhere = z.infer<typeof UserPermissionWhereSchema>;
export type UserPermissionOrder = z.infer<typeof UserPermissionOrderSchema>;
export type UserPermissionSelect = z.infer<typeof UserPermissionSelectSchema>;
export type UserPermissionQuery = z.infer<typeof UserPermissionQuerySchema>;




// ---------- AccessTokenPermission Schemas ----------


export const AccessTokenPermissionSchema = z.object({
  id: z.number().int(),
  permissionId: z.number().int(),
  accessTokenId: z.number().int(),
});

export const AccessTokenPermissionCreateSchema = z.object({
  permissionId: z.number().int(),
  accessTokenId: z.number().int(),
});

export const AccessTokenPermissionUpdateSchema = z.object({
  id: z.number().int().optional(),
  permissionId: z.number().int().optional(),
  accessTokenId: z.number().int().optional(),
});

export const AccessTokenPermissionWhereSchema = toWhereQuerySchema(AccessTokenPermissionSchema);

export const AccessTokenPermissionOrderSchema =  toOrderBySchema(AccessTokenPermissionSchema);

export const AccessTokenPermissionSelectSchema = z.object({
  id: z.boolean().optional(),
  permissionId: z.boolean().optional(),
  accessTokenId: z.boolean().optional(),
  permission: z.boolean().optional(),
  accessToken: z.boolean().optional(),
});

export const AccessTokenPermissionQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: AccessTokenPermissionWhereSchema.optional(),
  orderBy: AccessTokenPermissionOrderSchema.optional(),
  select: AccessTokenPermissionSelectSchema.optional()
});

export type AccessTokenPermission = z.infer<typeof AccessTokenPermissionSchema>;
export type AccessTokenPermissionCreate = z.infer<typeof AccessTokenPermissionCreateSchema>;
export type AccessTokenPermissionUpdate = z.infer<typeof AccessTokenPermissionUpdateSchema>;
export type AccessTokenPermissionWhere = z.infer<typeof AccessTokenPermissionWhereSchema>;
export type AccessTokenPermissionOrder = z.infer<typeof AccessTokenPermissionOrderSchema>;
export type AccessTokenPermissionSelect = z.infer<typeof AccessTokenPermissionSelectSchema>;
export type AccessTokenPermissionQuery = z.infer<typeof AccessTokenPermissionQuerySchema>;



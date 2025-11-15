import { z } from 'zod';
import * as P from '@puq/zod';

  /**
   * OperatorType schema (Fri Nov 14 2025)
   */
export const OperatorType = z.enum([ 'USER', 'SYSTEM' ])
export type OperatorTypeType = z.infer<typeof OperatorType>; 

  /**
   * UserField schema (Fri Nov 14 2025)
   */
export const UserField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'username', 'password', 'displayName', 'readonly' ])
export type UserFieldType = z.infer<typeof UserField>; 

  /**
   * UserRoleField schema (Fri Nov 14 2025)
   */
export const UserRoleField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'userId', 'roleId', 'readonly' ])
export type UserRoleFieldType = z.infer<typeof UserRoleField>; 

  /**
   * AppField schema (Fri Nov 14 2025)
   */
export const AppField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'name', 'readonly' ])
export type AppFieldType = z.infer<typeof AppField>; 

  /**
   * PermissionField schema (Fri Nov 14 2025)
   */
export const PermissionField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'resourceName', 'operationName', 'description', 'appId', 'readonly' ])
export type PermissionFieldType = z.infer<typeof PermissionField>; 

  /**
   * RoleField schema (Fri Nov 14 2025)
   */
export const RoleField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'name', 'description', 'readonly' ])
export type RoleFieldType = z.infer<typeof RoleField>; 

  /**
   * RolePermissionField schema (Fri Nov 14 2025)
   */
export const RolePermissionField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'roleId', 'permissionId', 'readonly' ])
export type RolePermissionFieldType = z.infer<typeof RolePermissionField>; 

  /**
   * AccessTokenField schema (Fri Nov 14 2025)
   */
export const AccessTokenField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'name', 'token', 'readonly' ])
export type AccessTokenFieldType = z.infer<typeof AccessTokenField>; 

  /**
   * AccessTokenPermissionField schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'lastUsedAt', 'useageLimit', 'usageCount', 'expiresAt', 'active', 'updatedById', 'accessTokenId', 'permissionId', 'readonly' ])
export type AccessTokenPermissionFieldType = z.infer<typeof AccessTokenPermissionField>; 

  /**
   * LogField schema (Fri Nov 14 2025)
   */
export const LogField = z.enum([ 'id', 'createdAt', 'updatedAt', 'operatorId', 'operatorType', 'operationName', 'recordName', 'recordId', 'difference', 'readonly', 'successful' ])
export type LogFieldType = z.infer<typeof LogField>; 

  /**
   * OperatorTypeFilter schema (Fri Nov 14 2025)
   */
export const OperatorTypeFilter = z.object({ 
      equals: OperatorType,
      in: OperatorType.array(),
      not: OperatorType,
      notIn: OperatorType.array()
  }).partial()
export type OperatorTypeFilterType = z.infer<typeof OperatorTypeFilter>; 

  /**
   * OperatorTypeArrayFilter schema (Fri Nov 14 2025)
   */
export const OperatorTypeArrayFilter = z.object({ 
      equals: OperatorType.array(),
      has: OperatorType,
      hasEvery: OperatorType.array(),
      hasSome: OperatorType.array(),
      isEmpty: P.bool
    }).partial()
export type OperatorTypeArrayFilterType = z.infer<typeof OperatorTypeArrayFilter>; 

  /**
   * UserOmit schema (Fri Nov 14 2025)
   */
export const UserOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, username: P.bool, password: P.bool, displayName: P.bool, readonly: P.bool }).partial()
export type UserOmitType = z.infer<typeof UserOmit>; 

  /**
   * UserRoleOmit schema (Fri Nov 14 2025)
   */
export const UserRoleOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, userId: P.bool, roleId: P.bool, readonly: P.bool }).partial()
export type UserRoleOmitType = z.infer<typeof UserRoleOmit>; 

  /**
   * AppOmit schema (Fri Nov 14 2025)
   */
export const AppOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, name: P.bool, readonly: P.bool }).partial()
export type AppOmitType = z.infer<typeof AppOmit>; 

  /**
   * PermissionOmit schema (Fri Nov 14 2025)
   */
export const PermissionOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, resourceName: P.bool, operationName: P.bool, description: P.bool, appId: P.bool, readonly: P.bool }).partial()
export type PermissionOmitType = z.infer<typeof PermissionOmit>; 

  /**
   * RoleOmit schema (Fri Nov 14 2025)
   */
export const RoleOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, name: P.bool, description: P.bool, readonly: P.bool }).partial()
export type RoleOmitType = z.infer<typeof RoleOmit>; 

  /**
   * RolePermissionOmit schema (Fri Nov 14 2025)
   */
export const RolePermissionOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, roleId: P.bool, permissionId: P.bool, readonly: P.bool }).partial()
export type RolePermissionOmitType = z.infer<typeof RolePermissionOmit>; 

  /**
   * AccessTokenOmit schema (Fri Nov 14 2025)
   */
export const AccessTokenOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, name: P.bool, token: P.bool, readonly: P.bool }).partial()
export type AccessTokenOmitType = z.infer<typeof AccessTokenOmit>; 

  /**
   * AccessTokenPermissionOmit schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, lastUsedAt: P.bool, useageLimit: P.bool, usageCount: P.bool, expiresAt: P.bool, active: P.bool, updatedById: P.bool, accessTokenId: P.bool, permissionId: P.bool, readonly: P.bool }).partial()
export type AccessTokenPermissionOmitType = z.infer<typeof AccessTokenPermissionOmit>; 

  /**
   * LogOmit schema (Fri Nov 14 2025)
   */
export const LogOmit = z.object({ id: P.bool, createdAt: P.bool, updatedAt: P.bool, operatorId: P.bool, operatorType: P.bool, operationName: P.bool, recordName: P.bool, recordId: P.bool, difference: P.bool, readonly: P.bool, successful: P.bool }).partial()
export type LogOmitType = z.infer<typeof LogOmit>; 

  /**
   * UserSelectOwn schema (Fri Nov 14 2025)
   */
export const UserSelectOwn = UserOmit
export type UserSelectOwnType = z.infer<typeof UserSelectOwn>; 

  /**
   * UserRoleSelectOwn schema (Fri Nov 14 2025)
   */
export const UserRoleSelectOwn = UserRoleOmit
export type UserRoleSelectOwnType = z.infer<typeof UserRoleSelectOwn>; 

  /**
   * AppSelectOwn schema (Fri Nov 14 2025)
   */
export const AppSelectOwn = AppOmit
export type AppSelectOwnType = z.infer<typeof AppSelectOwn>; 

  /**
   * PermissionSelectOwn schema (Fri Nov 14 2025)
   */
export const PermissionSelectOwn = PermissionOmit
export type PermissionSelectOwnType = z.infer<typeof PermissionSelectOwn>; 

  /**
   * RoleSelectOwn schema (Fri Nov 14 2025)
   */
export const RoleSelectOwn = RoleOmit
export type RoleSelectOwnType = z.infer<typeof RoleSelectOwn>; 

  /**
   * RolePermissionSelectOwn schema (Fri Nov 14 2025)
   */
export const RolePermissionSelectOwn = RolePermissionOmit
export type RolePermissionSelectOwnType = z.infer<typeof RolePermissionSelectOwn>; 

  /**
   * AccessTokenSelectOwn schema (Fri Nov 14 2025)
   */
export const AccessTokenSelectOwn = AccessTokenOmit
export type AccessTokenSelectOwnType = z.infer<typeof AccessTokenSelectOwn>; 

  /**
   * AccessTokenPermissionSelectOwn schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionSelectOwn = AccessTokenPermissionOmit
export type AccessTokenPermissionSelectOwnType = z.infer<typeof AccessTokenPermissionSelectOwn>; 

  /**
   * LogSelectOwn schema (Fri Nov 14 2025)
   */
export const LogSelectOwn = LogOmit
export type LogSelectOwnType = z.infer<typeof LogSelectOwn>; 

  /**
   * UserInclude schema (Fri Nov 14 2025)
   */
export const UserInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), userRoles: z.object({ select :UserRoleSelectOwn }).or(P.bool), updatedUsers: z.object({ select :UserSelectOwn }).or(P.bool), updatedApps: z.object({ select :AppSelectOwn }).or(P.bool), updatedPermissions: z.object({ select :PermissionSelectOwn }).or(P.bool), updatedRoles: z.object({ select :RoleSelectOwn }).or(P.bool), updatedRolePermissions: z.object({ select :RolePermissionSelectOwn }).or(P.bool), updatedUserRoles: z.object({ select :UserRoleSelectOwn }).or(P.bool), updatedAccessTokens: z.object({ select :AccessTokenSelectOwn }).or(P.bool), updatedAccessTokenPermissions: z.object({ select :AccessTokenPermissionSelectOwn }).or(P.bool) }).partial()
export type UserIncludeType = z.infer<typeof UserInclude>; 

  /**
   * UserRoleInclude schema (Fri Nov 14 2025)
   */
export const UserRoleInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), user: z.object({ select :UserSelectOwn }).or(P.bool), role: z.object({ select :RoleSelectOwn }).or(P.bool) }).partial()
export type UserRoleIncludeType = z.infer<typeof UserRoleInclude>; 

  /**
   * AppInclude schema (Fri Nov 14 2025)
   */
export const AppInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), permissions: z.object({ select :PermissionSelectOwn }).or(P.bool) }).partial()
export type AppIncludeType = z.infer<typeof AppInclude>; 

  /**
   * PermissionInclude schema (Fri Nov 14 2025)
   */
export const PermissionInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), app: z.object({ select :AppSelectOwn }).or(P.bool), rolePermissions: z.object({ select :RolePermissionSelectOwn }).or(P.bool), accessTokenPermissions: z.object({ select :AccessTokenPermissionSelectOwn }).or(P.bool) }).partial()
export type PermissionIncludeType = z.infer<typeof PermissionInclude>; 

  /**
   * RoleInclude schema (Fri Nov 14 2025)
   */
export const RoleInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), rolePermissions: z.object({ select :RolePermissionSelectOwn }).or(P.bool), userRoles: z.object({ select :UserRoleSelectOwn }).or(P.bool) }).partial()
export type RoleIncludeType = z.infer<typeof RoleInclude>; 

  /**
   * RolePermissionInclude schema (Fri Nov 14 2025)
   */
export const RolePermissionInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), role: z.object({ select :RoleSelectOwn }).or(P.bool), permission: z.object({ select :PermissionSelectOwn }).or(P.bool) }).partial()
export type RolePermissionIncludeType = z.infer<typeof RolePermissionInclude>; 

  /**
   * AccessTokenInclude schema (Fri Nov 14 2025)
   */
export const AccessTokenInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), accessTokenPermissions: z.object({ select :AccessTokenPermissionSelectOwn }).or(P.bool) }).partial()
export type AccessTokenIncludeType = z.infer<typeof AccessTokenInclude>; 

  /**
   * AccessTokenPermissionInclude schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), accessToken: z.object({ select :AccessTokenSelectOwn }).or(P.bool), permission: z.object({ select :PermissionSelectOwn }).or(P.bool) }).partial()
export type AccessTokenPermissionIncludeType = z.infer<typeof AccessTokenPermissionInclude>; 

  /**
   * LogInclude schema (Fri Nov 14 2025)
   */
export const LogInclude = z.any()
export type LogIncludeType = z.infer<typeof LogInclude>; 

  /**
   * UserOrderByOwn schema (Fri Nov 14 2025)
   */
export const UserOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, username: P.dir, password: P.dir, displayName: P.dir, readonly: P.dir 
  }).partial()
export type UserOrderByOwnType = z.infer<typeof UserOrderByOwn>; 

  /**
   * UserRoleOrderByOwn schema (Fri Nov 14 2025)
   */
export const UserRoleOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, userId: P.dir, roleId: P.dir, readonly: P.dir 
  }).partial()
export type UserRoleOrderByOwnType = z.infer<typeof UserRoleOrderByOwn>; 

  /**
   * AppOrderByOwn schema (Fri Nov 14 2025)
   */
export const AppOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, name: P.dir, readonly: P.dir 
  }).partial()
export type AppOrderByOwnType = z.infer<typeof AppOrderByOwn>; 

  /**
   * PermissionOrderByOwn schema (Fri Nov 14 2025)
   */
export const PermissionOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, resourceName: P.dir, operationName: P.dir, description: P.dir, appId: P.dir, readonly: P.dir 
  }).partial()
export type PermissionOrderByOwnType = z.infer<typeof PermissionOrderByOwn>; 

  /**
   * RoleOrderByOwn schema (Fri Nov 14 2025)
   */
export const RoleOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, name: P.dir, description: P.dir, readonly: P.dir 
  }).partial()
export type RoleOrderByOwnType = z.infer<typeof RoleOrderByOwn>; 

  /**
   * RolePermissionOrderByOwn schema (Fri Nov 14 2025)
   */
export const RolePermissionOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, roleId: P.dir, permissionId: P.dir, readonly: P.dir 
  }).partial()
export type RolePermissionOrderByOwnType = z.infer<typeof RolePermissionOrderByOwn>; 

  /**
   * AccessTokenOrderByOwn schema (Fri Nov 14 2025)
   */
export const AccessTokenOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, name: P.dir, token: P.dir, readonly: P.dir 
  }).partial()
export type AccessTokenOrderByOwnType = z.infer<typeof AccessTokenOrderByOwn>; 

  /**
   * AccessTokenPermissionOrderByOwn schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, lastUsedAt: P.dir, useageLimit: P.dir, usageCount: P.dir, expiresAt: P.dir, active: P.dir, updatedById: P.dir, accessTokenId: P.dir, permissionId: P.dir, readonly: P.dir 
  }).partial()
export type AccessTokenPermissionOrderByOwnType = z.infer<typeof AccessTokenPermissionOrderByOwn>; 

  /**
   * LogOrderByOwn schema (Fri Nov 14 2025)
   */
export const LogOrderByOwn = z.object({ 
    id: P.dir, createdAt: P.dir, updatedAt: P.dir, operatorId: P.dir, operatorType: P.dir, operationName: P.dir, recordName: P.dir, recordId: P.dir, difference: P.dir, readonly: P.dir, successful: P.dir 
  }).partial()
export type LogOrderByOwnType = z.infer<typeof LogOrderByOwn>; 

  /**
   * UserOrderBy schema (Fri Nov 14 2025)
   */
export const UserOrderBy = z.object({
    ...UserOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, userRoles: P.orderByCount, updatedUsers: P.orderByCount, updatedApps: P.orderByCount, updatedPermissions: P.orderByCount, updatedRoles: P.orderByCount, updatedRolePermissions: P.orderByCount, updatedUserRoles: P.orderByCount, updatedAccessTokens: P.orderByCount, updatedAccessTokenPermissions: P.orderByCount 
  }).partial()
export type UserOrderByType = z.infer<typeof UserOrderBy>; 

  /**
   * UserRoleOrderBy schema (Fri Nov 14 2025)
   */
export const UserRoleOrderBy = z.object({
    ...UserRoleOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, user: UserOrderByOwn, role: RoleOrderByOwn 
  }).partial()
export type UserRoleOrderByType = z.infer<typeof UserRoleOrderBy>; 

  /**
   * AppOrderBy schema (Fri Nov 14 2025)
   */
export const AppOrderBy = z.object({
    ...AppOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, permissions: P.orderByCount 
  }).partial()
export type AppOrderByType = z.infer<typeof AppOrderBy>; 

  /**
   * PermissionOrderBy schema (Fri Nov 14 2025)
   */
export const PermissionOrderBy = z.object({
    ...PermissionOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, app: AppOrderByOwn, rolePermissions: P.orderByCount, accessTokenPermissions: P.orderByCount 
  }).partial()
export type PermissionOrderByType = z.infer<typeof PermissionOrderBy>; 

  /**
   * RoleOrderBy schema (Fri Nov 14 2025)
   */
export const RoleOrderBy = z.object({
    ...RoleOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, rolePermissions: P.orderByCount, userRoles: P.orderByCount 
  }).partial()
export type RoleOrderByType = z.infer<typeof RoleOrderBy>; 

  /**
   * RolePermissionOrderBy schema (Fri Nov 14 2025)
   */
export const RolePermissionOrderBy = z.object({
    ...RolePermissionOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, role: RoleOrderByOwn, permission: PermissionOrderByOwn 
  }).partial()
export type RolePermissionOrderByType = z.infer<typeof RolePermissionOrderBy>; 

  /**
   * AccessTokenOrderBy schema (Fri Nov 14 2025)
   */
export const AccessTokenOrderBy = z.object({
    ...AccessTokenOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, accessTokenPermissions: P.orderByCount 
  }).partial()
export type AccessTokenOrderByType = z.infer<typeof AccessTokenOrderBy>; 

  /**
   * AccessTokenPermissionOrderBy schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionOrderBy = z.object({
    ...AccessTokenPermissionOrderByOwn.shape, 
    updatedBy: UserOrderByOwn, accessToken: AccessTokenOrderByOwn, permission: PermissionOrderByOwn 
  }).partial()
export type AccessTokenPermissionOrderByType = z.infer<typeof AccessTokenPermissionOrderBy>; 

  /**
   * LogOrderBy schema (Fri Nov 14 2025)
   */
export const LogOrderBy = z.object({
    ...LogOrderByOwn.shape, 
     
  }).partial()
export type LogOrderByType = z.infer<typeof LogOrderBy>; 

  /**
   * UserWhereOwn schema (Fri Nov 14 2025)
   */
export const UserWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, username: P.strFilter, password: P.strFilter, displayName: P.strFilter, readonly: P.boolFilter }).partial()
export type UserWhereOwnType = z.infer<typeof UserWhereOwn>; 

  /**
   * UserRoleWhereOwn schema (Fri Nov 14 2025)
   */
export const UserRoleWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, userId: P.intFilter, roleId: P.intFilter, readonly: P.boolFilter }).partial()
export type UserRoleWhereOwnType = z.infer<typeof UserRoleWhereOwn>; 

  /**
   * AppWhereOwn schema (Fri Nov 14 2025)
   */
export const AppWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, name: P.strFilter, readonly: P.boolFilter }).partial()
export type AppWhereOwnType = z.infer<typeof AppWhereOwn>; 

  /**
   * PermissionWhereOwn schema (Fri Nov 14 2025)
   */
export const PermissionWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, resourceName: P.strFilter, operationName: P.strFilter, description: P.strFilter, appId: P.intFilter, readonly: P.boolFilter }).partial()
export type PermissionWhereOwnType = z.infer<typeof PermissionWhereOwn>; 

  /**
   * RoleWhereOwn schema (Fri Nov 14 2025)
   */
export const RoleWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, name: P.strFilter, description: P.strFilter, readonly: P.boolFilter }).partial()
export type RoleWhereOwnType = z.infer<typeof RoleWhereOwn>; 

  /**
   * RolePermissionWhereOwn schema (Fri Nov 14 2025)
   */
export const RolePermissionWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, roleId: P.intFilter, permissionId: P.intFilter, readonly: P.boolFilter }).partial()
export type RolePermissionWhereOwnType = z.infer<typeof RolePermissionWhereOwn>; 

  /**
   * AccessTokenWhereOwn schema (Fri Nov 14 2025)
   */
export const AccessTokenWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, name: P.strFilter, token: P.strFilter, readonly: P.boolFilter }).partial()
export type AccessTokenWhereOwnType = z.infer<typeof AccessTokenWhereOwn>; 

  /**
   * AccessTokenPermissionWhereOwn schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, lastUsedAt: P.datetimeFilter, useageLimit: P.intFilter, usageCount: P.intFilter, expiresAt: P.datetimeFilter, active: P.boolFilter, updatedById: P.intFilter, accessTokenId: P.intFilter, permissionId: P.intFilter, readonly: P.boolFilter }).partial()
export type AccessTokenPermissionWhereOwnType = z.infer<typeof AccessTokenPermissionWhereOwn>; 

  /**
   * LogWhereOwn schema (Fri Nov 14 2025)
   */
export const LogWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, operatorId: P.strFilter, operatorType: OperatorTypeFilter, operationName: P.strFilter, recordName: P.strFilter, recordId: P.intFilter, difference: P.jsonFilter, readonly: P.boolFilter, successful: P.boolFilter }).partial()
export type LogWhereOwnType = z.infer<typeof LogWhereOwn>; 

  /**
   * UserWhere schema (Fri Nov 14 2025)
   */
export const UserWhere = z.object({ ...UserWhereOwn.shape,updatedBy: UserWhereOwn.partial(), userRoles: z.object({ 
          some: UserRoleWhereOwn,
          every: UserRoleWhereOwn,
          none: UserRoleWhereOwn
        }).partial(), updatedUsers: z.object({ 
          some: UserWhereOwn,
          every: UserWhereOwn,
          none: UserWhereOwn
        }).partial(), updatedApps: z.object({ 
          some: AppWhereOwn,
          every: AppWhereOwn,
          none: AppWhereOwn
        }).partial(), updatedPermissions: z.object({ 
          some: PermissionWhereOwn,
          every: PermissionWhereOwn,
          none: PermissionWhereOwn
        }).partial(), updatedRoles: z.object({ 
          some: RoleWhereOwn,
          every: RoleWhereOwn,
          none: RoleWhereOwn
        }).partial(), updatedRolePermissions: z.object({ 
          some: RolePermissionWhereOwn,
          every: RolePermissionWhereOwn,
          none: RolePermissionWhereOwn
        }).partial(), updatedUserRoles: z.object({ 
          some: UserRoleWhereOwn,
          every: UserRoleWhereOwn,
          none: UserRoleWhereOwn
        }).partial(), updatedAccessTokens: z.object({ 
          some: AccessTokenWhereOwn,
          every: AccessTokenWhereOwn,
          none: AccessTokenWhereOwn
        }).partial(), updatedAccessTokenPermissions: z.object({ 
          some: AccessTokenPermissionWhereOwn,
          every: AccessTokenPermissionWhereOwn,
          none: AccessTokenPermissionWhereOwn
        }).partial(),AND: UserWhereOwn,OR:  UserWhereOwn.array(),NOT: UserWhereOwn.or(UserWhereOwn.array()) }).partial()
export type UserWhereType = z.infer<typeof UserWhere>; 

  /**
   * UserRoleWhere schema (Fri Nov 14 2025)
   */
export const UserRoleWhere = z.object({ ...UserRoleWhereOwn.shape,updatedBy: UserWhereOwn.partial(), user: UserWhereOwn.partial(), role: RoleWhereOwn.partial(),AND: UserRoleWhereOwn,OR:  UserRoleWhereOwn.array(),NOT: UserRoleWhereOwn.or(UserRoleWhereOwn.array()) }).partial()
export type UserRoleWhereType = z.infer<typeof UserRoleWhere>; 

  /**
   * AppWhere schema (Fri Nov 14 2025)
   */
export const AppWhere = z.object({ ...AppWhereOwn.shape,updatedBy: UserWhereOwn.partial(), permissions: z.object({ 
          some: PermissionWhereOwn,
          every: PermissionWhereOwn,
          none: PermissionWhereOwn
        }).partial(),AND: AppWhereOwn,OR:  AppWhereOwn.array(),NOT: AppWhereOwn.or(AppWhereOwn.array()) }).partial()
export type AppWhereType = z.infer<typeof AppWhere>; 

  /**
   * PermissionWhere schema (Fri Nov 14 2025)
   */
export const PermissionWhere = z.object({ ...PermissionWhereOwn.shape,updatedBy: UserWhereOwn.partial(), app: AppWhereOwn.partial(), rolePermissions: z.object({ 
          some: RolePermissionWhereOwn,
          every: RolePermissionWhereOwn,
          none: RolePermissionWhereOwn
        }).partial(), accessTokenPermissions: z.object({ 
          some: AccessTokenPermissionWhereOwn,
          every: AccessTokenPermissionWhereOwn,
          none: AccessTokenPermissionWhereOwn
        }).partial(),AND: PermissionWhereOwn,OR:  PermissionWhereOwn.array(),NOT: PermissionWhereOwn.or(PermissionWhereOwn.array()) }).partial()
export type PermissionWhereType = z.infer<typeof PermissionWhere>; 

  /**
   * RoleWhere schema (Fri Nov 14 2025)
   */
export const RoleWhere = z.object({ ...RoleWhereOwn.shape,updatedBy: UserWhereOwn.partial(), rolePermissions: z.object({ 
          some: RolePermissionWhereOwn,
          every: RolePermissionWhereOwn,
          none: RolePermissionWhereOwn
        }).partial(), userRoles: z.object({ 
          some: UserRoleWhereOwn,
          every: UserRoleWhereOwn,
          none: UserRoleWhereOwn
        }).partial(),AND: RoleWhereOwn,OR:  RoleWhereOwn.array(),NOT: RoleWhereOwn.or(RoleWhereOwn.array()) }).partial()
export type RoleWhereType = z.infer<typeof RoleWhere>; 

  /**
   * RolePermissionWhere schema (Fri Nov 14 2025)
   */
export const RolePermissionWhere = z.object({ ...RolePermissionWhereOwn.shape,updatedBy: UserWhereOwn.partial(), role: RoleWhereOwn.partial(), permission: PermissionWhereOwn.partial(),AND: RolePermissionWhereOwn,OR:  RolePermissionWhereOwn.array(),NOT: RolePermissionWhereOwn.or(RolePermissionWhereOwn.array()) }).partial()
export type RolePermissionWhereType = z.infer<typeof RolePermissionWhere>; 

  /**
   * AccessTokenWhere schema (Fri Nov 14 2025)
   */
export const AccessTokenWhere = z.object({ ...AccessTokenWhereOwn.shape,updatedBy: UserWhereOwn.partial(), accessTokenPermissions: z.object({ 
          some: AccessTokenPermissionWhereOwn,
          every: AccessTokenPermissionWhereOwn,
          none: AccessTokenPermissionWhereOwn
        }).partial(),AND: AccessTokenWhereOwn,OR:  AccessTokenWhereOwn.array(),NOT: AccessTokenWhereOwn.or(AccessTokenWhereOwn.array()) }).partial()
export type AccessTokenWhereType = z.infer<typeof AccessTokenWhere>; 

  /**
   * AccessTokenPermissionWhere schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionWhere = z.object({ ...AccessTokenPermissionWhereOwn.shape,updatedBy: UserWhereOwn.partial(), accessToken: AccessTokenWhereOwn.partial(), permission: PermissionWhereOwn.partial(),AND: AccessTokenPermissionWhereOwn,OR:  AccessTokenPermissionWhereOwn.array(),NOT: AccessTokenPermissionWhereOwn.or(AccessTokenPermissionWhereOwn.array()) }).partial()
export type AccessTokenPermissionWhereType = z.infer<typeof AccessTokenPermissionWhere>; 

  /**
   * LogWhere schema (Fri Nov 14 2025)
   */
export const LogWhere = z.object({ ...LogWhereOwn.shape,AND: LogWhereOwn,OR:  LogWhereOwn.array(),NOT: LogWhereOwn.or(LogWhereOwn.array()) }).partial()
export type LogWhereType = z.infer<typeof LogWhere>; 

  /**
   * UserQueryOwn schema (Fri Nov 14 2025)
   */
export const UserQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: UserField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, UserOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, UserWhere)
  }).partial()
export type UserQueryOwnType = z.infer<typeof UserQueryOwn>; 

  /**
   * UserRoleQueryOwn schema (Fri Nov 14 2025)
   */
export const UserRoleQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: UserRoleField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, UserRoleOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, UserRoleWhere)
  }).partial()
export type UserRoleQueryOwnType = z.infer<typeof UserRoleQueryOwn>; 

  /**
   * AppQueryOwn schema (Fri Nov 14 2025)
   */
export const AppQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: AppField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, AppOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, AppWhere)
  }).partial()
export type AppQueryOwnType = z.infer<typeof AppQueryOwn>; 

  /**
   * PermissionQueryOwn schema (Fri Nov 14 2025)
   */
export const PermissionQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: PermissionField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, PermissionOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, PermissionWhere)
  }).partial()
export type PermissionQueryOwnType = z.infer<typeof PermissionQueryOwn>; 

  /**
   * RoleQueryOwn schema (Fri Nov 14 2025)
   */
export const RoleQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: RoleField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, RoleOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, RoleWhere)
  }).partial()
export type RoleQueryOwnType = z.infer<typeof RoleQueryOwn>; 

  /**
   * RolePermissionQueryOwn schema (Fri Nov 14 2025)
   */
export const RolePermissionQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: RolePermissionField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, RolePermissionOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, RolePermissionWhere)
  }).partial()
export type RolePermissionQueryOwnType = z.infer<typeof RolePermissionQueryOwn>; 

  /**
   * AccessTokenQueryOwn schema (Fri Nov 14 2025)
   */
export const AccessTokenQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: AccessTokenField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, AccessTokenOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, AccessTokenWhere)
  }).partial()
export type AccessTokenQueryOwnType = z.infer<typeof AccessTokenQueryOwn>; 

  /**
   * AccessTokenPermissionQueryOwn schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: AccessTokenPermissionField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, AccessTokenPermissionOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, AccessTokenPermissionWhere)
  }).partial()
export type AccessTokenPermissionQueryOwnType = z.infer<typeof AccessTokenPermissionQueryOwn>; 

  /**
   * LogQueryOwn schema (Fri Nov 14 2025)
   */
export const LogQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: LogField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, LogOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, LogWhere)
  }).partial()
export type LogQueryOwnType = z.infer<typeof LogQueryOwn>; 

  /**
   * UserQueryOne schema (Fri Nov 14 2025)
   */
export const UserQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, UserSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, UserOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, UserInclude),
    where:    z.preprocess(P.parseJsonOrReturn, UserWhere)
  }).partial()
export type UserQueryOneType = z.infer<typeof UserQueryOne>; 

  /**
   * UserRoleQueryOne schema (Fri Nov 14 2025)
   */
export const UserRoleQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, UserRoleSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, UserRoleOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, UserRoleInclude),
    where:    z.preprocess(P.parseJsonOrReturn, UserRoleWhere)
  }).partial()
export type UserRoleQueryOneType = z.infer<typeof UserRoleQueryOne>; 

  /**
   * AppQueryOne schema (Fri Nov 14 2025)
   */
export const AppQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, AppSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, AppOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, AppInclude),
    where:    z.preprocess(P.parseJsonOrReturn, AppWhere)
  }).partial()
export type AppQueryOneType = z.infer<typeof AppQueryOne>; 

  /**
   * PermissionQueryOne schema (Fri Nov 14 2025)
   */
export const PermissionQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, PermissionSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, PermissionOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, PermissionInclude),
    where:    z.preprocess(P.parseJsonOrReturn, PermissionWhere)
  }).partial()
export type PermissionQueryOneType = z.infer<typeof PermissionQueryOne>; 

  /**
   * RoleQueryOne schema (Fri Nov 14 2025)
   */
export const RoleQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, RoleSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, RoleOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, RoleInclude),
    where:    z.preprocess(P.parseJsonOrReturn, RoleWhere)
  }).partial()
export type RoleQueryOneType = z.infer<typeof RoleQueryOne>; 

  /**
   * RolePermissionQueryOne schema (Fri Nov 14 2025)
   */
export const RolePermissionQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, RolePermissionSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, RolePermissionOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, RolePermissionInclude),
    where:    z.preprocess(P.parseJsonOrReturn, RolePermissionWhere)
  }).partial()
export type RolePermissionQueryOneType = z.infer<typeof RolePermissionQueryOne>; 

  /**
   * AccessTokenQueryOne schema (Fri Nov 14 2025)
   */
export const AccessTokenQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, AccessTokenSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, AccessTokenOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, AccessTokenInclude),
    where:    z.preprocess(P.parseJsonOrReturn, AccessTokenWhere)
  }).partial()
export type AccessTokenQueryOneType = z.infer<typeof AccessTokenQueryOne>; 

  /**
   * AccessTokenPermissionQueryOne schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, AccessTokenPermissionSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, AccessTokenPermissionOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, AccessTokenPermissionInclude),
    where:    z.preprocess(P.parseJsonOrReturn, AccessTokenPermissionWhere)
  }).partial()
export type AccessTokenPermissionQueryOneType = z.infer<typeof AccessTokenPermissionQueryOne>; 

  /**
   * LogQueryOne schema (Fri Nov 14 2025)
   */
export const LogQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, LogSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, LogOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, LogInclude),
    where:    z.preprocess(P.parseJsonOrReturn, LogWhere)
  }).partial()
export type LogQueryOneType = z.infer<typeof LogQueryOne>; 

  /**
   * UserQuery schema (Fri Nov 14 2025)
   */
export const UserQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, UserSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, UserOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, UserInclude   ),
    ...UserQueryOwn.shape 
  }).partial()
export type UserQueryType = z.infer<typeof UserQuery>; 

  /**
   * UserRoleQuery schema (Fri Nov 14 2025)
   */
export const UserRoleQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, UserRoleSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, UserRoleOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, UserRoleInclude   ),
    ...UserRoleQueryOwn.shape 
  }).partial()
export type UserRoleQueryType = z.infer<typeof UserRoleQuery>; 

  /**
   * AppQuery schema (Fri Nov 14 2025)
   */
export const AppQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, AppSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, AppOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, AppInclude   ),
    ...AppQueryOwn.shape 
  }).partial()
export type AppQueryType = z.infer<typeof AppQuery>; 

  /**
   * PermissionQuery schema (Fri Nov 14 2025)
   */
export const PermissionQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, PermissionSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, PermissionOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, PermissionInclude   ),
    ...PermissionQueryOwn.shape 
  }).partial()
export type PermissionQueryType = z.infer<typeof PermissionQuery>; 

  /**
   * RoleQuery schema (Fri Nov 14 2025)
   */
export const RoleQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, RoleSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, RoleOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, RoleInclude   ),
    ...RoleQueryOwn.shape 
  }).partial()
export type RoleQueryType = z.infer<typeof RoleQuery>; 

  /**
   * RolePermissionQuery schema (Fri Nov 14 2025)
   */
export const RolePermissionQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, RolePermissionSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, RolePermissionOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, RolePermissionInclude   ),
    ...RolePermissionQueryOwn.shape 
  }).partial()
export type RolePermissionQueryType = z.infer<typeof RolePermissionQuery>; 

  /**
   * AccessTokenQuery schema (Fri Nov 14 2025)
   */
export const AccessTokenQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, AccessTokenSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, AccessTokenOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, AccessTokenInclude   ),
    ...AccessTokenQueryOwn.shape 
  }).partial()
export type AccessTokenQueryType = z.infer<typeof AccessTokenQuery>; 

  /**
   * AccessTokenPermissionQuery schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, AccessTokenPermissionSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, AccessTokenPermissionOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, AccessTokenPermissionInclude   ),
    ...AccessTokenPermissionQueryOwn.shape 
  }).partial()
export type AccessTokenPermissionQueryType = z.infer<typeof AccessTokenPermissionQuery>; 

  /**
   * LogQuery schema (Fri Nov 14 2025)
   */
export const LogQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, LogSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, LogOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, LogInclude   ),
    ...LogQueryOwn.shape 
  }).partial()
export type LogQueryType = z.infer<typeof LogQuery>; 

  /**
   * UserSelect schema (Fri Nov 14 2025)
   */
export const UserSelect = z.object({...UserSelectOwn.shape,  }).partial()
export type UserSelectType = z.infer<typeof UserSelect>; 

  /**
   * UserRoleSelect schema (Fri Nov 14 2025)
   */
export const UserRoleSelect = z.object({...UserRoleSelectOwn.shape,  }).partial()
export type UserRoleSelectType = z.infer<typeof UserRoleSelect>; 

  /**
   * AppSelect schema (Fri Nov 14 2025)
   */
export const AppSelect = z.object({...AppSelectOwn.shape,  }).partial()
export type AppSelectType = z.infer<typeof AppSelect>; 

  /**
   * PermissionSelect schema (Fri Nov 14 2025)
   */
export const PermissionSelect = z.object({...PermissionSelectOwn.shape,  }).partial()
export type PermissionSelectType = z.infer<typeof PermissionSelect>; 

  /**
   * RoleSelect schema (Fri Nov 14 2025)
   */
export const RoleSelect = z.object({...RoleSelectOwn.shape,  }).partial()
export type RoleSelectType = z.infer<typeof RoleSelect>; 

  /**
   * RolePermissionSelect schema (Fri Nov 14 2025)
   */
export const RolePermissionSelect = z.object({...RolePermissionSelectOwn.shape,  }).partial()
export type RolePermissionSelectType = z.infer<typeof RolePermissionSelect>; 

  /**
   * AccessTokenSelect schema (Fri Nov 14 2025)
   */
export const AccessTokenSelect = z.object({...AccessTokenSelectOwn.shape,  }).partial()
export type AccessTokenSelectType = z.infer<typeof AccessTokenSelect>; 

  /**
   * AccessTokenPermissionSelect schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionSelect = z.object({...AccessTokenPermissionSelectOwn.shape,  }).partial()
export type AccessTokenPermissionSelectType = z.infer<typeof AccessTokenPermissionSelect>; 

  /**
   * LogSelect schema (Fri Nov 14 2025)
   */
export const LogSelect = z.object({...LogSelectOwn.shape,  }).partial()
export type LogSelectType = z.infer<typeof LogSelect>; 

  /**
   * UserProjection schema (Fri Nov 14 2025)
   */
export const UserProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, UserSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, UserOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, UserInclude) }),
        z.object({})
    ])
export type UserProjectionType = z.infer<typeof UserProjection>; 

  /**
   * UserRoleProjection schema (Fri Nov 14 2025)
   */
export const UserRoleProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, UserRoleSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, UserRoleOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, UserRoleInclude) }),
        z.object({})
    ])
export type UserRoleProjectionType = z.infer<typeof UserRoleProjection>; 

  /**
   * AppProjection schema (Fri Nov 14 2025)
   */
export const AppProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, AppSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, AppOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, AppInclude) }),
        z.object({})
    ])
export type AppProjectionType = z.infer<typeof AppProjection>; 

  /**
   * PermissionProjection schema (Fri Nov 14 2025)
   */
export const PermissionProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, PermissionSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, PermissionOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, PermissionInclude) }),
        z.object({})
    ])
export type PermissionProjectionType = z.infer<typeof PermissionProjection>; 

  /**
   * RoleProjection schema (Fri Nov 14 2025)
   */
export const RoleProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, RoleSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, RoleOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, RoleInclude) }),
        z.object({})
    ])
export type RoleProjectionType = z.infer<typeof RoleProjection>; 

  /**
   * RolePermissionProjection schema (Fri Nov 14 2025)
   */
export const RolePermissionProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, RolePermissionSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, RolePermissionOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, RolePermissionInclude) }),
        z.object({})
    ])
export type RolePermissionProjectionType = z.infer<typeof RolePermissionProjection>; 

  /**
   * AccessTokenProjection schema (Fri Nov 14 2025)
   */
export const AccessTokenProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, AccessTokenSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, AccessTokenOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, AccessTokenInclude) }),
        z.object({})
    ])
export type AccessTokenProjectionType = z.infer<typeof AccessTokenProjection>; 

  /**
   * AccessTokenPermissionProjection schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, AccessTokenPermissionSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, AccessTokenPermissionOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, AccessTokenPermissionInclude) }),
        z.object({})
    ])
export type AccessTokenPermissionProjectionType = z.infer<typeof AccessTokenPermissionProjection>; 

  /**
   * LogProjection schema (Fri Nov 14 2025)
   */
export const LogProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, LogSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, LogOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, LogInclude) }),
        z.object({})
    ])
export type LogProjectionType = z.infer<typeof LogProjection>; 

  /**
   * UserCreateOwn schema (Fri Nov 14 2025)
   */
export const UserCreateOwn = z.object({ uuid: P.uuid,username: P.email,password: P.pass,readonly: P.bool.optional() })
export type UserCreateOwnType = z.infer<typeof UserCreateOwn>; 

  /**
   * UserRoleCreateOwn schema (Fri Nov 14 2025)
   */
export const UserRoleCreateOwn = z.object({ userId: P.int,roleId: P.int,readonly: P.bool.optional() })
export type UserRoleCreateOwnType = z.infer<typeof UserRoleCreateOwn>; 

  /**
   * AppCreateOwn schema (Fri Nov 14 2025)
   */
export const AppCreateOwn = z.object({ name: P.short,readonly: P.bool.optional() })
export type AppCreateOwnType = z.infer<typeof AppCreateOwn>; 

  /**
   * PermissionCreateOwn schema (Fri Nov 14 2025)
   */
export const PermissionCreateOwn = z.object({ uuid: P.uuid,resourceName: P.str,operationName: P.str,appId: P.int,readonly: P.bool.optional() })
export type PermissionCreateOwnType = z.infer<typeof PermissionCreateOwn>; 

  /**
   * RoleCreateOwn schema (Fri Nov 14 2025)
   */
export const RoleCreateOwn = z.object({ uuid: P.uuid,name: P.short,readonly: P.bool.optional() })
export type RoleCreateOwnType = z.infer<typeof RoleCreateOwn>; 

  /**
   * RolePermissionCreateOwn schema (Fri Nov 14 2025)
   */
export const RolePermissionCreateOwn = z.object({ uuid: P.uuid,roleId: P.int,permissionId: P.int,readonly: P.bool.optional() })
export type RolePermissionCreateOwnType = z.infer<typeof RolePermissionCreateOwn>; 

  /**
   * AccessTokenCreateOwn schema (Fri Nov 14 2025)
   */
export const AccessTokenCreateOwn = z.object({ uuid: P.uuid,name: P.short,token: P.str,readonly: P.bool.optional() })
export type AccessTokenCreateOwnType = z.infer<typeof AccessTokenCreateOwn>; 

  /**
   * AccessTokenPermissionCreateOwn schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionCreateOwn = z.object({ uuid: P.uuid,usageCount: P.int.optional(),active: P.bool.optional(),accessTokenId: P.int,permissionId: P.int,readonly: P.bool.optional() })
export type AccessTokenPermissionCreateOwnType = z.infer<typeof AccessTokenPermissionCreateOwn>; 

  /**
   * LogCreateOwn schema (Fri Nov 14 2025)
   */
export const LogCreateOwn = z.object({ operationName: P.str,recordName: P.str,readonly: P.bool.optional(),successful: P.bool.optional() })
export type LogCreateOwnType = z.infer<typeof LogCreateOwn>; 

  /**
   * UserCreate schema (Fri Nov 14 2025)
   */
export const UserCreate = z.object({ uuid: P.uuid, updatedById: P.int.optional(), username: P.email, password: P.pass, displayName: P.str.optional(), readonly: P.bool.optional(), userRoles: P.connectMany.optional(), updatedUsers: P.connectMany.optional(), updatedApps: P.connectMany.optional(), updatedPermissions: P.connectMany.optional(), updatedRoles: P.connectMany.optional(), updatedRolePermissions: P.connectMany.optional(), updatedUserRoles: P.connectMany.optional(), updatedAccessTokens: P.connectMany.optional(), updatedAccessTokenPermissions: P.connectMany.optional() })
export type UserCreateType = z.infer<typeof UserCreate>; 

  /**
   * UserUpdate schema (Fri Nov 14 2025)
   */
export const UserUpdate = UserCreate.clone().partial()
export type UserUpdateType = z.infer<typeof UserUpdate>; 

  /**
   * UserRoleCreate schema (Fri Nov 14 2025)
   */
export const UserRoleCreate = z.object({ updatedById: P.int.optional(), userId: P.int, roleId: P.int, readonly: P.bool.optional() })
export type UserRoleCreateType = z.infer<typeof UserRoleCreate>; 

  /**
   * UserRoleUpdate schema (Fri Nov 14 2025)
   */
export const UserRoleUpdate = UserRoleCreate.clone().partial()
export type UserRoleUpdateType = z.infer<typeof UserRoleUpdate>; 

  /**
   * AppCreate schema (Fri Nov 14 2025)
   */
export const AppCreate = z.object({ updatedById: P.int.optional(), name: P.short, permissions: P.connectMany.optional(), readonly: P.bool.optional() })
export type AppCreateType = z.infer<typeof AppCreate>; 

  /**
   * AppUpdate schema (Fri Nov 14 2025)
   */
export const AppUpdate = AppCreate.clone().partial()
export type AppUpdateType = z.infer<typeof AppUpdate>; 

  /**
   * PermissionCreate schema (Fri Nov 14 2025)
   */
export const PermissionCreate = z.object({ uuid: P.uuid, updatedById: P.int.optional(), resourceName: P.str, operationName: P.str, description: P.long.optional(), appId: P.int, rolePermissions: P.connectMany.optional(), readonly: P.bool.optional(), accessTokenPermissions: P.connectMany.optional() })
export type PermissionCreateType = z.infer<typeof PermissionCreate>; 

  /**
   * PermissionUpdate schema (Fri Nov 14 2025)
   */
export const PermissionUpdate = PermissionCreate.clone().partial()
export type PermissionUpdateType = z.infer<typeof PermissionUpdate>; 

  /**
   * RoleCreate schema (Fri Nov 14 2025)
   */
export const RoleCreate = z.object({ uuid: P.uuid, updatedById: P.int.optional(), name: P.short, description: P.long.optional(), rolePermissions: P.connectMany.optional(), readonly: P.bool.optional(), userRoles: P.connectMany.optional() })
export type RoleCreateType = z.infer<typeof RoleCreate>; 

  /**
   * RoleUpdate schema (Fri Nov 14 2025)
   */
export const RoleUpdate = RoleCreate.clone().partial()
export type RoleUpdateType = z.infer<typeof RoleUpdate>; 

  /**
   * RolePermissionCreate schema (Fri Nov 14 2025)
   */
export const RolePermissionCreate = z.object({ uuid: P.uuid, updatedById: P.int.optional(), roleId: P.int, permissionId: P.int, readonly: P.bool.optional() })
export type RolePermissionCreateType = z.infer<typeof RolePermissionCreate>; 

  /**
   * RolePermissionUpdate schema (Fri Nov 14 2025)
   */
export const RolePermissionUpdate = RolePermissionCreate.clone().partial()
export type RolePermissionUpdateType = z.infer<typeof RolePermissionUpdate>; 

  /**
   * AccessTokenCreate schema (Fri Nov 14 2025)
   */
export const AccessTokenCreate = z.object({ uuid: P.uuid, updatedById: P.int.optional(), name: P.short, token: P.str, accessTokenPermissions: P.connectMany.optional(), readonly: P.bool.optional() })
export type AccessTokenCreateType = z.infer<typeof AccessTokenCreate>; 

  /**
   * AccessTokenUpdate schema (Fri Nov 14 2025)
   */
export const AccessTokenUpdate = AccessTokenCreate.clone().partial()
export type AccessTokenUpdateType = z.infer<typeof AccessTokenUpdate>; 

  /**
   * AccessTokenPermissionCreate schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionCreate = z.object({ uuid: P.uuid, lastUsedAt: P.datetime.optional(), useageLimit: P.int.optional(), usageCount: P.int.optional(), expiresAt: P.datetime.optional(), active: P.bool.optional(), updatedById: P.int.optional(), accessTokenId: P.int, permissionId: P.int, readonly: P.bool.optional() })
export type AccessTokenPermissionCreateType = z.infer<typeof AccessTokenPermissionCreate>; 

  /**
   * AccessTokenPermissionUpdate schema (Fri Nov 14 2025)
   */
export const AccessTokenPermissionUpdate = AccessTokenPermissionCreate.clone().partial()
export type AccessTokenPermissionUpdateType = z.infer<typeof AccessTokenPermissionUpdate>; 

  /**
   * LogCreate schema (Fri Nov 14 2025)
   */
export const LogCreate = z.object({ operatorId: P.str.optional(), operatorType: OperatorType.optional(), operationName: P.str, recordName: P.str, recordId: P.int.optional(), difference: P.json.optional(), readonly: P.bool.optional(), successful: P.bool.optional() })
export type LogCreateType = z.infer<typeof LogCreate>; 

  /**
   * LogUpdate schema (Fri Nov 14 2025)
   */
export const LogUpdate = LogCreate.clone().partial()
export type LogUpdateType = z.infer<typeof LogUpdate>; 
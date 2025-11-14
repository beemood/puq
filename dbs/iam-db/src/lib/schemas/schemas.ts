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
export const UserField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'displayName', 'readonly' ])
export type UserFieldType = z.infer<typeof UserField>; 

  /**
   * SampleField schema (Fri Nov 14 2025)
   */
export const SampleField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedById', 'name', 'description', 'readonly' ])
export type SampleFieldType = z.infer<typeof SampleField>; 

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
export const UserOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, displayName: P.bool, readonly: P.bool }).partial()
export type UserOmitType = z.infer<typeof UserOmit>; 

  /**
   * SampleOmit schema (Fri Nov 14 2025)
   */
export const SampleOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedById: P.bool, name: P.bool, description: P.bool, readonly: P.bool }).partial()
export type SampleOmitType = z.infer<typeof SampleOmit>; 

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
   * SampleSelectOwn schema (Fri Nov 14 2025)
   */
export const SampleSelectOwn = SampleOmit
export type SampleSelectOwnType = z.infer<typeof SampleSelectOwn>; 

  /**
   * LogSelectOwn schema (Fri Nov 14 2025)
   */
export const LogSelectOwn = LogOmit
export type LogSelectOwnType = z.infer<typeof LogSelectOwn>; 

  /**
   * UserInclude schema (Fri Nov 14 2025)
   */
export const UserInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool), updatedUsers: z.object({ select :UserSelectOwn }).or(P.bool), updatedSamples: z.object({ select :SampleSelectOwn }).or(P.bool) }).partial()
export type UserIncludeType = z.infer<typeof UserInclude>; 

  /**
   * SampleInclude schema (Fri Nov 14 2025)
   */
export const SampleInclude = z.object({ updatedBy: z.object({ select :UserSelectOwn }).or(P.bool) }).partial()
export type SampleIncludeType = z.infer<typeof SampleInclude>; 

  /**
   * LogInclude schema (Fri Nov 14 2025)
   */
export const LogInclude = z.object({  }).partial()
export type LogIncludeType = z.infer<typeof LogInclude>; 

  /**
   * UserOrderByOwn schema (Fri Nov 14 2025)
   */
export const UserOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, displayName: P.dir, readonly: P.dir 
  }).partial()
export type UserOrderByOwnType = z.infer<typeof UserOrderByOwn>; 

  /**
   * SampleOrderByOwn schema (Fri Nov 14 2025)
   */
export const SampleOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedById: P.dir, name: P.dir, description: P.dir, readonly: P.dir 
  }).partial()
export type SampleOrderByOwnType = z.infer<typeof SampleOrderByOwn>; 

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
    updatedBy: UserOrderByOwn, updatedUsers: P.orderByCount, updatedSamples: P.orderByCount 
  }).partial()
export type UserOrderByType = z.infer<typeof UserOrderBy>; 

  /**
   * SampleOrderBy schema (Fri Nov 14 2025)
   */
export const SampleOrderBy = z.object({
    ...SampleOrderByOwn.shape, 
    updatedBy: UserOrderByOwn 
  }).partial()
export type SampleOrderByType = z.infer<typeof SampleOrderBy>; 

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
export const UserWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, displayName: P.strFilter, readonly: P.boolFilter }).partial()
export type UserWhereOwnType = z.infer<typeof UserWhereOwn>; 

  /**
   * SampleWhereOwn schema (Fri Nov 14 2025)
   */
export const SampleWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedById: P.intFilter, name: P.strFilter, description: P.strFilter, readonly: P.boolFilter }).partial()
export type SampleWhereOwnType = z.infer<typeof SampleWhereOwn>; 

  /**
   * LogWhereOwn schema (Fri Nov 14 2025)
   */
export const LogWhereOwn = z.object({ id: P.intFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, operatorId: P.strFilter, operatorType: OperatorTypeFilter, operationName: P.strFilter, recordName: P.strFilter, recordId: P.intFilter, difference: P.strFilter, readonly: P.boolFilter, successful: P.boolFilter }).partial()
export type LogWhereOwnType = z.infer<typeof LogWhereOwn>; 

  /**
   * UserWhere schema (Fri Nov 14 2025)
   */
export const UserWhere = z.object({ ...UserWhereOwn.shape,updatedBy: UserWhereOwn.partial(), updatedUsers: z.object({ 
          some: UserWhereOwn,
          every: UserWhereOwn,
          none: UserWhereOwn
        }).partial(), updatedSamples: z.object({ 
          some: SampleWhereOwn,
          every: SampleWhereOwn,
          none: SampleWhereOwn
        }).partial(),AND: UserWhereOwn,OR:  UserWhereOwn.array(),NOT: UserWhereOwn.or(UserWhereOwn.array()) }).partial()
export type UserWhereType = z.infer<typeof UserWhere>; 

  /**
   * SampleWhere schema (Fri Nov 14 2025)
   */
export const SampleWhere = z.object({ ...SampleWhereOwn.shape,updatedBy: UserWhereOwn.partial(),AND: SampleWhereOwn,OR:  SampleWhereOwn.array(),NOT: SampleWhereOwn.or(SampleWhereOwn.array()) }).partial()
export type SampleWhereType = z.infer<typeof SampleWhere>; 

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
   * SampleQueryOwn schema (Fri Nov 14 2025)
   */
export const SampleQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: SampleField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, SampleOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, SampleWhere)
  }).partial()
export type SampleQueryOwnType = z.infer<typeof SampleQueryOwn>; 

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
   * SampleQueryOne schema (Fri Nov 14 2025)
   */
export const SampleQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, SampleSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, SampleOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, SampleInclude),
    where:    z.preprocess(P.parseJsonOrReturn, SampleWhere)
  }).partial()
export type SampleQueryOneType = z.infer<typeof SampleQueryOne>; 

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
   * SampleQuery schema (Fri Nov 14 2025)
   */
export const SampleQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, SampleSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, SampleOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, SampleInclude   ),
    ...SampleQueryOwn.shape 
  }).partial()
export type SampleQueryType = z.infer<typeof SampleQuery>; 

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
   * SampleSelect schema (Fri Nov 14 2025)
   */
export const SampleSelect = z.object({...SampleSelectOwn.shape,  }).partial()
export type SampleSelectType = z.infer<typeof SampleSelect>; 

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
   * SampleProjection schema (Fri Nov 14 2025)
   */
export const SampleProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, SampleSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, SampleOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, SampleInclude) }),
        z.object({})
    ])
export type SampleProjectionType = z.infer<typeof SampleProjection>; 

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
export const UserCreateOwn = z.object({ uuid: P.uuid,readonly: P.bool.optional() })
export type UserCreateOwnType = z.infer<typeof UserCreateOwn>; 

  /**
   * SampleCreateOwn schema (Fri Nov 14 2025)
   */
export const SampleCreateOwn = z.object({ uuid: P.uuid,name: P.short,readonly: P.bool.optional() })
export type SampleCreateOwnType = z.infer<typeof SampleCreateOwn>; 

  /**
   * LogCreateOwn schema (Fri Nov 14 2025)
   */
export const LogCreateOwn = z.object({ operationName: P.str,recordName: P.str,readonly: P.bool.optional(),successful: P.bool.optional() })
export type LogCreateOwnType = z.infer<typeof LogCreateOwn>; 

  /**
   * UserCreate schema (Fri Nov 14 2025)
   */
export const UserCreate = z.object({ uuid: P.uuid, updatedById: P.int.optional(), displayName: P.str.optional(), readonly: P.bool.optional(), updatedUsers: P.connectMany.optional(), updatedSamples: P.connectMany.optional() })
export type UserCreateType = z.infer<typeof UserCreate>; 

  /**
   * UserUpdate schema (Fri Nov 14 2025)
   */
export const UserUpdate = UserCreate.clone().partial()
export type UserUpdateType = z.infer<typeof UserUpdate>; 

  /**
   * SampleCreate schema (Fri Nov 14 2025)
   */
export const SampleCreate = z.object({ uuid: P.uuid, updatedById: P.int.optional(), name: P.short, description: P.long.optional(), readonly: P.bool.optional() })
export type SampleCreateType = z.infer<typeof SampleCreate>; 

  /**
   * SampleUpdate schema (Fri Nov 14 2025)
   */
export const SampleUpdate = SampleCreate.clone().partial()
export type SampleUpdateType = z.infer<typeof SampleUpdate>; 

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
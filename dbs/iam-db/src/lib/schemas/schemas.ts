import { z } from 'zod';
import * as P from '@puq/zod';

  /**
   * IamDbField schema (Wed Nov 12 2025)
   */
export const IamDbField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'updatedBy', 'readonly', 'name' ])
export type IamDbFieldType = z.infer<typeof IamDbField>; 

  /**
   * IamDbOmit schema (Wed Nov 12 2025)
   */
export const IamDbOmit = z.object({ id: P.bool, uuid: P.bool, createdAt: P.bool, updatedAt: P.bool, deletedAt: P.bool, updatedBy: P.bool, readonly: P.bool, name: P.bool }).partial()
export type IamDbOmitType = z.infer<typeof IamDbOmit>; 

  /**
   * IamDbSelectOwn schema (Wed Nov 12 2025)
   */
export const IamDbSelectOwn = IamDbOmit
export type IamDbSelectOwnType = z.infer<typeof IamDbSelectOwn>; 

  /**
   * IamDbInclude schema (Wed Nov 12 2025)
   */
export const IamDbInclude = z.object({  }).partial()
export type IamDbIncludeType = z.infer<typeof IamDbInclude>; 

  /**
   * IamDbOrderByOwn schema (Wed Nov 12 2025)
   */
export const IamDbOrderByOwn = z.object({ 
    id: P.dir, uuid: P.dir, createdAt: P.dir, updatedAt: P.dir, deletedAt: P.dir, updatedBy: P.dir, readonly: P.dir, name: P.dir 
  }).partial()
export type IamDbOrderByOwnType = z.infer<typeof IamDbOrderByOwn>; 

  /**
   * IamDbOrderBy schema (Wed Nov 12 2025)
   */
export const IamDbOrderBy = z.object({
    ...IamDbOrderByOwn.shape, 
     
  }).partial()
export type IamDbOrderByType = z.infer<typeof IamDbOrderBy>; 

  /**
   * IamDbWhereOwn schema (Wed Nov 12 2025)
   */
export const IamDbWhereOwn = z.object({ id: P.intFilter, uuid: P.strFilter, createdAt: P.datetimeFilter, updatedAt: P.datetimeFilter, deletedAt: P.datetimeFilter, updatedBy: P.strFilter, readonly: P.boolFilter, name: P.strFilter }).partial()
export type IamDbWhereOwnType = z.infer<typeof IamDbWhereOwn>; 

  /**
   * IamDbWhere schema (Wed Nov 12 2025)
   */
export const IamDbWhere = z.object({ ...IamDbWhereOwn.shape,AND: IamDbWhereOwn,OR:  IamDbWhereOwn.array(),NOT: IamDbWhereOwn.or(IamDbWhereOwn.array()) }).partial()
export type IamDbWhereType = z.infer<typeof IamDbWhere>; 

  /**
   * IamDbQueryOwn schema (Wed Nov 12 2025)
   */
export const IamDbQueryOwn = z.object({
    take:     P.take,
    skip:     P.skip,
    distinct: IamDbField.array(),
    orderBy:  z.preprocess(P.parseJsonOrReturn, IamDbOrderBy),
    where:    z.preprocess(P.parseJsonOrReturn, IamDbWhere)
  }).partial()
export type IamDbQueryOwnType = z.infer<typeof IamDbQueryOwn>; 

  /**
   * IamDbQueryOne schema (Wed Nov 12 2025)
   */
export const IamDbQueryOne = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, IamDbSelectOwn ),
    omit:     z.preprocess(P.parseJsonOrReturn, IamDbOmit   ),
    include: z.preprocess(P.parseJsonOrReturn, IamDbInclude),
    where:    z.preprocess(P.parseJsonOrReturn, IamDbWhere)
  }).partial()
export type IamDbQueryOneType = z.infer<typeof IamDbQueryOne>; 

  /**
   * IamDbQuery schema (Wed Nov 12 2025)
   */
export const IamDbQuery = z.object({ 
    select:   z.preprocess(P.parseJsonOrReturn, IamDbSelectOwn ), 
    omit:     z.preprocess(P.parseJsonOrReturn, IamDbOmit   ), 
    include:  z.preprocess(P.parseJsonOrReturn, IamDbInclude   ),
    ...IamDbQueryOwn.shape 
  }).partial()
export type IamDbQueryType = z.infer<typeof IamDbQuery>; 

  /**
   * IamDbSelect schema (Wed Nov 12 2025)
   */
export const IamDbSelect = z.object({...IamDbSelectOwn.shape,  }).partial()
export type IamDbSelectType = z.infer<typeof IamDbSelect>; 

  /**
   * IamDbProjection schema (Wed Nov 12 2025)
   */
export const IamDbProjection = z.union([
        z.object({ select:   z.preprocess(P.parseJsonOrReturn, IamDbSelect ) }),
        z.object({ omit:     z.preprocess(P.parseJsonOrReturn, IamDbOmit   ) }),
        z.object({ include:  z.preprocess(P.parseJsonOrReturn, IamDbInclude) }),
        z.object({})
    ])
export type IamDbProjectionType = z.infer<typeof IamDbProjection>; 

  /**
   * IamDbCreateOwn schema (Wed Nov 12 2025)
   */
export const IamDbCreateOwn = z.object({ readonly: P.bool.optional(),name: P.short })
export type IamDbCreateOwnType = z.infer<typeof IamDbCreateOwn>; 

  /**
   * IamDbCreate schema (Wed Nov 12 2025)
   */
export const IamDbCreate = z.object({ readonly: P.bool.optional(), name: P.short })
export type IamDbCreateType = z.infer<typeof IamDbCreate>; 

  /**
   * IamDbUpdate schema (Wed Nov 12 2025)
   */
export const IamDbUpdate = IamDbCreate.clone().partial()
export type IamDbUpdateType = z.infer<typeof IamDbUpdate>; 
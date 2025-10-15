import PZ from '@puq/zod';
import { z } from 'zod';


      export const AppOwnProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
description: z.boolean(),
version: z.boolean(),
host: z.boolean(),
port: z.boolean(),
history: z.boolean()
      }).partial()
      


      export const SecretOwnProjectionSchema = z.object({ 
          id: z.boolean(),
createdAt: z.boolean(),
updatedAt: z.boolean(),
version: z.boolean(),
secret: z.boolean()
      }).partial()
      


      export const AppHistoryOwnProjectionSchema = z.object({ 
          id: z.boolean(),
appId: z.boolean(),
startedAt: z.boolean(),
stopeedAt: z.boolean(),
app: z.boolean()
      }).partial()
      


    export const AppOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
description:PZ.StringFilterSchema,
version:PZ.StringFilterSchema,
host:PZ.StringFilterSchema,
port:PZ.StringFilterSchema
    }).partial()


    export const SecretOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
createdAt:PZ.DateTimeFilterSchema,
updatedAt:PZ.DateTimeFilterSchema,
version:PZ.StringFilterSchema,
secret:PZ.StringFilterSchema
    }).partial()


    export const AppHistoryOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
appId:PZ.IntegerFilterSchema,
startedAt:PZ.DateTimeFilterSchema,
stopeedAt:PZ.DateTimeFilterSchema
    }).partial()


    export const AppOwnQueryOneSchema = z.object({ 
        where:AppOwnWhereSchema, 
        select: AppOwnProjectionSchema, 
        omit: AppOwnProjectionSchema, 
    }).partial()
    


    export const AppOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AppOwnWhereSchema,
      select: AppOwnProjectionSchema, 
      omit: AppOwnProjectionSchema, 
    }).partial()
    


    export const SecretOwnQueryOneSchema = z.object({ 
        where:SecretOwnWhereSchema, 
        select: SecretOwnProjectionSchema, 
        omit: SecretOwnProjectionSchema, 
    }).partial()
    


    export const SecretOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: SecretOwnWhereSchema,
      select: SecretOwnProjectionSchema, 
      omit: SecretOwnProjectionSchema, 
    }).partial()
    


    export const AppHistoryOwnQueryOneSchema = z.object({ 
        where:AppHistoryOwnWhereSchema, 
        select: AppHistoryOwnProjectionSchema, 
        omit: AppHistoryOwnProjectionSchema, 
    }).partial()
    


    export const AppHistoryOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AppHistoryOwnWhereSchema,
      select: AppHistoryOwnProjectionSchema, 
      omit: AppHistoryOwnProjectionSchema, 
    }).partial()
    


    export const AppCreateSchema = z.object({ 
      name:z.string(),
description:z.string().optional(),
version:z.string().optional(),
host:z.string(),
port:z.string()
    })


    export const AppUpdateSchema = z.object({ 
        name:z.string().optional(),
description:z.string().optional().optional(),
version:z.string().optional().optional(),
host:z.string().optional(),
port:z.string().optional()
    })


    export const AppOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
description: PZ.OrderDirectionSchema,
version: PZ.OrderDirectionSchema,
host: PZ.OrderDirectionSchema,
port: PZ.OrderDirectionSchema
    }).partial()
    


    export const AppWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
description: PZ.StringFilterSchema,
version: PZ.StringFilterSchema,
host: PZ.StringFilterSchema,
port: PZ.StringFilterSchema,
history: z.object({ 
        some: AppHistoryOwnWhereSchema,
        every: AppHistoryOwnWhereSchema,
        none: AppHistoryOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const AppProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
description: z.boolean(),
version: z.boolean(),
host: z.boolean(),
port: z.boolean(),
history: AppHistoryOwnQuerySchema
     }).partial()
     


    export const AppQueryOneSchema = z.object({ 
      where: AppWhereSchema,
      select:AppProjectionSchema, 
      omit:AppProjectionSchema
    }).partial()
    


    export const AppQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AppWhereSchema, 
      select: AppProjectionSchema, 
      omit: AppProjectionSchema
    }).partial()
    


    export const SecretCreateSchema = z.object({ 
      secret:z.string()
    })


    export const SecretUpdateSchema = z.object({ 
        secret:z.string().optional()
    })


    export const SecretOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
createdAt: PZ.OrderDirectionSchema,
updatedAt: PZ.OrderDirectionSchema,
version: PZ.OrderDirectionSchema,
secret: PZ.OrderDirectionSchema
    }).partial()
    


    export const SecretWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
createdAt: PZ.DateTimeFilterSchema,
updatedAt: PZ.DateTimeFilterSchema,
version: PZ.StringFilterSchema,
secret: PZ.StringFilterSchema
    }).partial()
    


    export const SecretProjectionSchema = z.object({ 
          id: z.boolean(),
createdAt: z.boolean(),
updatedAt: z.boolean(),
version: z.boolean(),
secret: z.boolean()
     }).partial()
     


    export const SecretQueryOneSchema = z.object({ 
      where: SecretWhereSchema,
      select:SecretProjectionSchema, 
      omit:SecretProjectionSchema
    }).partial()
    


    export const SecretQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: SecretWhereSchema, 
      select: SecretProjectionSchema, 
      omit: SecretProjectionSchema
    }).partial()
    


    export const AppHistoryCreateSchema = z.object({ 
      appId:z.int(),
stopeedAt:z.iso.datetime().optional()
    })


    export const AppHistoryUpdateSchema = z.object({ 
        appId:z.int().optional(),
stopeedAt:z.iso.datetime().optional().optional()
    })


    export const AppHistoryOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
appId: PZ.OrderDirectionSchema,
startedAt: PZ.OrderDirectionSchema,
stopeedAt: PZ.OrderDirectionSchema
    }).partial()
    


    export const AppHistoryWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
appId: PZ.IntegerFilterSchema,
startedAt: PZ.DateTimeFilterSchema,
stopeedAt: PZ.DateTimeFilterSchema,
app: z.object({ 
        some: AppOwnWhereSchema,
        every: AppOwnWhereSchema,
        none: AppOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const AppHistoryProjectionSchema = z.object({ 
          id: z.boolean(),
appId: z.boolean(),
startedAt: z.boolean(),
stopeedAt: z.boolean(),
app: AppOwnQueryOneSchema
     }).partial()
     


    export const AppHistoryQueryOneSchema = z.object({ 
      where: AppHistoryWhereSchema,
      select:AppHistoryProjectionSchema, 
      omit:AppHistoryProjectionSchema
    }).partial()
    


    export const AppHistoryQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AppHistoryWhereSchema, 
      select: AppHistoryProjectionSchema, 
      omit: AppHistoryProjectionSchema
    }).partial()
    


export type  AppCreate = z.infer<typeof AppCreateSchema>; 

export type  AppUpdate = z.infer<typeof AppUpdateSchema>; 

export type  AppOrderBy = z.infer<typeof AppOrderBySchema>; 

export type  AppOwnProjection = z.infer<typeof AppOwnProjectionSchema>; 

export type  AppOwnWhere = z.infer<typeof AppOwnWhereSchema>; 

export type  AppOwnQuery = z.infer<typeof AppOwnQuerySchema>; 

export type  AppOwnQueryOne = z.infer<typeof AppOwnQueryOneSchema>; 

export type  AppWhere = z.infer<typeof AppWhereSchema>; 

export type  AppQueryOne = z.infer<typeof AppQueryOneSchema>; 

export type  AppQuery = z.infer<typeof AppQuerySchema>; 

export type  AppProjection = z.infer<typeof AppProjectionSchema>; 

    


export type  SecretCreate = z.infer<typeof SecretCreateSchema>; 

export type  SecretUpdate = z.infer<typeof SecretUpdateSchema>; 

export type  SecretOrderBy = z.infer<typeof SecretOrderBySchema>; 

export type  SecretOwnProjection = z.infer<typeof SecretOwnProjectionSchema>; 

export type  SecretOwnWhere = z.infer<typeof SecretOwnWhereSchema>; 

export type  SecretOwnQuery = z.infer<typeof SecretOwnQuerySchema>; 

export type  SecretOwnQueryOne = z.infer<typeof SecretOwnQueryOneSchema>; 

export type  SecretWhere = z.infer<typeof SecretWhereSchema>; 

export type  SecretQueryOne = z.infer<typeof SecretQueryOneSchema>; 

export type  SecretQuery = z.infer<typeof SecretQuerySchema>; 

export type  SecretProjection = z.infer<typeof SecretProjectionSchema>; 

    


export type  AppHistoryCreate = z.infer<typeof AppHistoryCreateSchema>; 

export type  AppHistoryUpdate = z.infer<typeof AppHistoryUpdateSchema>; 

export type  AppHistoryOrderBy = z.infer<typeof AppHistoryOrderBySchema>; 

export type  AppHistoryOwnProjection = z.infer<typeof AppHistoryOwnProjectionSchema>; 

export type  AppHistoryOwnWhere = z.infer<typeof AppHistoryOwnWhereSchema>; 

export type  AppHistoryOwnQuery = z.infer<typeof AppHistoryOwnQuerySchema>; 

export type  AppHistoryOwnQueryOne = z.infer<typeof AppHistoryOwnQueryOneSchema>; 

export type  AppHistoryWhere = z.infer<typeof AppHistoryWhereSchema>; 

export type  AppHistoryQueryOne = z.infer<typeof AppHistoryQueryOneSchema>; 

export type  AppHistoryQuery = z.infer<typeof AppHistoryQuerySchema>; 

export type  AppHistoryProjection = z.infer<typeof AppHistoryProjectionSchema>; 

    
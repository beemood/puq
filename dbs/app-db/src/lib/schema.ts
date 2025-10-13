
import { toOrderBySchema, toWhereQuerySchema } from '@puq/zod';
import {z} from 'zod';
    

// ---------- App Schemas ----------


export const AppSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullish(),
  version: z.string().nullish(),
  host: z.string(),
  port: z.string(),
});

export const AppCreateSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
  version: z.string().nullish(),
  host: z.string(),
  port: z.string(),
});

export const AppUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  description: z.string().nullish().optional(),
  version: z.string().nullish().optional(),
  host: z.string().optional(),
  port: z.string().optional(),
});

export const AppWhereSchema = toWhereQuerySchema(AppSchema);

export const AppOrderSchema =  toOrderBySchema(AppSchema);

export const AppSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  version: z.boolean().optional(),
  host: z.boolean().optional(),
  port: z.boolean().optional(),
  history: z.boolean().optional(),
});

export const AppQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: AppWhereSchema.optional(),
  orderBy: AppOrderSchema.optional(),
  select: AppSelectSchema.optional()
});

export type App = z.infer<typeof AppSchema>;
export type AppCreate = z.infer<typeof AppCreateSchema>;
export type AppUpdate = z.infer<typeof AppUpdateSchema>;
export type AppWhere = z.infer<typeof AppWhereSchema>;
export type AppOrder = z.infer<typeof AppOrderSchema>;
export type AppSelect = z.infer<typeof AppSelectSchema>;
export type AppQuery = z.infer<typeof AppQuerySchema>;




// ---------- AppHistory Schemas ----------


export const AppHistorySchema = z.object({
  id: z.number().int(),
  appId: z.number().int(),
  startedAt: z.date(),
  stopeedAt: z.date().nullish(),
});

export const AppHistoryCreateSchema = z.object({
  appId: z.number().int(),
  stopeedAt: z.date().nullish(),
});

export const AppHistoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  appId: z.number().int().optional(),
  startedAt: z.date().optional(),
  stopeedAt: z.date().nullish().optional(),
});

export const AppHistoryWhereSchema = toWhereQuerySchema(AppHistorySchema);

export const AppHistoryOrderSchema =  toOrderBySchema(AppHistorySchema);

export const AppHistorySelectSchema = z.object({
  id: z.boolean().optional(),
  appId: z.boolean().optional(),
  startedAt: z.boolean().optional(),
  stopeedAt: z.boolean().optional(),
  app: z.boolean().optional(),
});

export const AppHistoryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: AppHistoryWhereSchema.optional(),
  orderBy: AppHistoryOrderSchema.optional(),
  select: AppHistorySelectSchema.optional()
});

export type AppHistory = z.infer<typeof AppHistorySchema>;
export type AppHistoryCreate = z.infer<typeof AppHistoryCreateSchema>;
export type AppHistoryUpdate = z.infer<typeof AppHistoryUpdateSchema>;
export type AppHistoryWhere = z.infer<typeof AppHistoryWhereSchema>;
export type AppHistoryOrder = z.infer<typeof AppHistoryOrderSchema>;
export type AppHistorySelect = z.infer<typeof AppHistorySelectSchema>;
export type AppHistoryQuery = z.infer<typeof AppHistoryQuerySchema>;



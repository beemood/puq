
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




// ---------- Secret Schemas ----------


export const SecretSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  version: z.string(),
  secret: z.string(),
});

export const SecretCreateSchema = z.object({
  secret: z.string(),
});

export const SecretUpdateSchema = z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  version: z.string().optional(),
  secret: z.string().optional(),
});

export const SecretWhereSchema = toWhereQuerySchema(SecretSchema);

export const SecretOrderSchema =  toOrderBySchema(SecretSchema);

export const SecretSelectSchema = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  version: z.boolean().optional(),
  secret: z.boolean().optional(),
});

export const SecretQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: SecretWhereSchema.optional(),
  orderBy: SecretOrderSchema.optional(),
  select: SecretSelectSchema.optional()
});

export type Secret = z.infer<typeof SecretSchema>;
export type SecretCreate = z.infer<typeof SecretCreateSchema>;
export type SecretUpdate = z.infer<typeof SecretUpdateSchema>;
export type SecretWhere = z.infer<typeof SecretWhereSchema>;
export type SecretOrder = z.infer<typeof SecretOrderSchema>;
export type SecretSelect = z.infer<typeof SecretSelectSchema>;
export type SecretQuery = z.infer<typeof SecretQuerySchema>;




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



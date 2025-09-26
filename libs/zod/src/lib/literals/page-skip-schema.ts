import z from 'zod';

export const PageSkipSchema = z.coerce.number().int().min(0);

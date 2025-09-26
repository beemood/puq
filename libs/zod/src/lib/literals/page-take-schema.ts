import z from 'zod';

export const PageTakeSchema = z.coerce.number().int().min(1);

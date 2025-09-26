import z from 'zod';

export const IdSchema = z.coerce.number().int().min(1);

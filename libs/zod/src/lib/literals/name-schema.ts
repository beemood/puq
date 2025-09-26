import z from 'zod';

export const NameSchema = z.string().min(2).max(30);

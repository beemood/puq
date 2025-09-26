import z from 'zod';

export const RateSchema = z.int().min(0).max(5);

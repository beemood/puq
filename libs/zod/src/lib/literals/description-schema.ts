import z from 'zod';

export const DescriptionSchema = z.string().max(1000);

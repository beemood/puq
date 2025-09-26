import z from 'zod';

/**
 *
 * @group Literals
 */
export const OrderDirectionSchema = z.enum(['asc', 'des']);

export type OrderDirection = z.infer<typeof OrderDirectionSchema>;

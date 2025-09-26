import z from 'zod';
import { ORDER_ASC, ORDER_DESC } from '../constants/constants.js';

/**
 *
 * @group Literals
 */
export const OrderDirectionSchema = z.enum([ORDER_ASC, ORDER_DESC]);

export type OrderDirection = z.infer<typeof OrderDirectionSchema>;

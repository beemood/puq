import z from 'zod';

/**
 * 0 to 30 charcters long string
 */
export const shortText = z.string().max(30);

/**
 * 0 to 400 charcters long string
 */
export const text = z.string().max(400);

/**
 * 0 to 1000 charcters long string
 */
export const longText = z.string().max(1000);

/**
 * 3 to 30 charcters long string
 */
export const name = shortText.min(3);

/**
 * 0 to 400 charcters long string
 */
export const description = z.string().max(400);

/**
 * Strong password schema
 */
export const password = z
  .string()
  .min(8, { message: 'Password must be at least 8 characters long' })
  .regex(/[a-z]/)
  .regex(/[A-Z]/)
  .regex(/\d/)
  .regex(/[^a-zA-Z0-9]/);

/**
 * Barcode schema
 */
export const barcode = z.string().regex(/[0-9]{8,13}/, {
  message: 'barcode must have 8 to 13 numeric characters',
});

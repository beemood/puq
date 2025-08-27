import z from 'zod';

/**
 * String schema
 */
export const str = z.string();

/**
 * 0 to 30 charcters long string
 */
export const shortText = str.max(30);

/**
 * 0 to 400 charcters long string
 */
export const text = str.max(400);

/**
 * 0 to 1000 charcters long string
 */
export const longText = str.max(1000);

/**
 * 3 to 30 charcters long string
 */
export const name = shortText.min(3);

/**
 * 0 to 400 charcters long string
 */
export const description = str.max(400);

/**
 * Strong password schema
 */
export const password = str
  .min(8, { message: 'Password must be at least 8 characters long' })
  .regex(/[a-z]/)
  .regex(/[A-Z]/)
  .regex(/\d/)
  .regex(/[^a-zA-Z0-9]/);

/**
 * Iso date schema
 */
export const date = z.iso.date();

/**
 * Iso datetime schema
 */
export const datetime = z.iso.datetime();

/**
 * Barcode schema
 */
export const barcode = str.regex(/[0-9]{8,13}/, {
  message: 'barcode must have 8 to 13 numeric characters',
});

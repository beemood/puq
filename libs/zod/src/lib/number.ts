import z from 'zod';

export function intPreprocess(value: unknown) {
  if (typeof value === 'string') {
    return parseInt(value);
  }
  return value;
}
/**
 * Positive number property
 */
export const positive = z.preprocess(parseFloat, z.number().positive());

export const quantity = z.preprocess(intPreprocess, z.int().nonnegative());

export const rate = z.preprocess(intPreprocess, z.int().min(0).max(5));

export const percent = z.preprocess(intPreprocess, z.int().min(0).max(100));

/**
 * Id property
 */
export const id = z.preprocess(intPreprocess, z.int().positive());

export const currency = z
  .number()
  .refine(
    (val) => {
      // Check for a maximum of 2 decimal places
      const decimalPlaces = (val.toString().split('.')[1] || '').length;
      return decimalPlaces <= 2;
    },
    {
      message: 'Currency must have at most 2 decimal places.',
    }
  )
  .refine((val) => val >= 0, {
    message: 'Currency must be a non-negative value.',
  });

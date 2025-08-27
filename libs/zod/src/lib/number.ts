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

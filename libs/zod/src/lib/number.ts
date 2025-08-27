import z from 'zod';

export function intPreprocess(value: unknown) {
  if (typeof value === 'string') {
    return parseInt(value);
  }
  return value;
}

export const int = z.int();

export const num = z.number();

export const positive = z.preprocess(parseFloat, z.number().positive());

export const quantity = z.preprocess(intPreprocess, z.int().nonnegative());

export const rate = z.preprocess(intPreprocess, z.int().min(0).max(5));

export const percent = z.preprocess(intPreprocess, z.int().min(0).max(100));

export const id = z.preprocess(intPreprocess, z.int().positive());

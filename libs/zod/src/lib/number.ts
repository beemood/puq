import z from 'zod';

export function parseIntTransformer(value: string | number) {
  if (typeof value === 'string') {
    return parseInt(value);
  }
  return value;
}

export function parseNumTransformer(value: string | number) {
  if (typeof value === 'string') {
    return parseFloat(value);
  }
  return value;
}

export const num = z.number();

export const int = z.int();

export const positive = num.positive().transform(parseNumTransformer);

export const quantity = int.nonnegative().transform(parseIntTransformer);

export const rate = int.min(0).max(5).transform(parseIntTransformer);

export const percent = int.min(0).max(100).transform(parseIntTransformer);

export const id = z.int().positive().transform(parseIntTransformer);

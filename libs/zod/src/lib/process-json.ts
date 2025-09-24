import type { ZodObject } from 'zod';
import z from 'zod';

export function processJson(schema: ZodObject) {
  return z.preprocess((value) => {
    if (typeof value === 'string') {
      return JSON.parse(value);
    }
    return value;
  }, schema);
}

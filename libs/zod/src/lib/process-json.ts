import type { ZodObject } from 'zod';
import z from 'zod';

/**
 * Preproces the given {@link schema} by parsing json value.
 *
 * @param schema
 * @returns zod object schema
 */
export function processJson(schema: ZodObject) {
  return z.preprocess((value) => {
    if (typeof value === 'string') {
      return JSON.parse(value);
    }
    return value;
  }, schema);
}

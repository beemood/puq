import type { ZodObject } from 'zod';
import z from 'zod';

/**
 * Preprocess the given {@link schema} by parsing the value if it is json string
 *
 * @group Transformers
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

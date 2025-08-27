import type { ZodType } from 'zod';
import z from 'zod';
import { jsonTransformer } from './json-transformer.js';

export function omitFields(omitFields: Record<string, ZodType>) {
  return z.preprocess(
    jsonTransformer,
    z
      .object({ ...omitFields })
      .partial()
      .refine(
        (value) => {
          if (
            Object.keys(value).sort().toString() ===
            Object.keys(omitFields).sort().toString()
          ) {
            return false;
          }
          return true;
        },
        { message: 'omit should have some properties but got all!' }
      )
  );
}

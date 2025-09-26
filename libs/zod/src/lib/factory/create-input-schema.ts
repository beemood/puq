import type { Any } from '@puq/types';
import type { ZodObject, ZodType } from 'zod';
import z from 'zod';
import { isGeneratedSchema } from './to-generated-schema.js';

export function createInputSchema(schema: ZodObject<Any>) {
  const shape = schema.clone().shape;

  const entries = Object.entries(shape);

  const pickedEntries = entries.filter(([_, value]) => {
    return !isGeneratedSchema(value as ZodType);
  });

  return z.object(Object.fromEntries(pickedEntries));
}

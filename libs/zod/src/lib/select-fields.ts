import type { ZodType } from 'zod';
import z from 'zod';
import { jsonTransformer } from './json-transformer.js';

export function selectFields(selectFiedls: Record<string, ZodType>) {
  return z.preprocess(jsonTransformer, z.object({ ...selectFiedls }).partial());
}

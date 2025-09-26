import type { Any } from '@puq/types';
import type { ZodObject } from 'zod';
import z from 'zod';
import { jsonPreprocessor } from './json-preprocessor.js';

/**
 * Pipe json transformer {@link jsonPreprocessor} to the given {@link schema}.
 *
 * @group Preprocessers
 * @param schema
 * @returns
 */
export function preprocessJson(schema: ZodObject<Any>) {
  return z.preprocess(jsonPreprocessor, schema);
}

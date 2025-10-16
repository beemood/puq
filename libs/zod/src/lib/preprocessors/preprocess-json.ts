import type { EmptyObject } from '@puq/types';
import type { ZodObject } from 'zod';
import z from 'zod';
import { jsonPreprocessor } from './json-preprocessor.js';

/**
 * Pipe json transformer {@link jsonPreprocessor} to the given {@link schema} so the json input is parsed by JSON.parse before the schema parser
 *
 * @group Preprocessers
 * @param schema
 * @returns
 */
export function preprocessJson<T extends EmptyObject, O extends ZodObject<T>>(
  schema: O
) {
  return z.preprocess<O, O>(jsonPreprocessor, schema);
}

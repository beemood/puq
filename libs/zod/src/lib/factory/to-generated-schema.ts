import type { ZodType } from 'zod';
import { GENERATED_VALUE } from '../constants/constants.js';

export function toGeneratedSchema<T>(schema: ZodType<T>) {
  return schema.clone().describe(GENERATED_VALUE);
}

export function isGeneratedSchema<T>(schema: ZodType<T>): boolean {
  return !!schema.description?.startsWith(GENERATED_VALUE);
}

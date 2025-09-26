import type { EmptyObject } from '@puq/types';
import type { ZodObject } from 'zod';
import { omitGenerated } from './omit-generated-type.js';

export function toInputSchema<T extends EmptyObject>(schema: ZodObject<T>) {
  return omitGenerated<ZodObject<T>>(schema);
}

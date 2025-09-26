import type { ZodObject, ZodType } from 'zod';

export type Generated<T extends ZodType> = T & { __brand: 'Generated' };

export const Generated = <T extends ZodType>(schema: T): Generated<T> => {
  return schema.brand('Generated').describe('Generated') as Generated<T>;
};

export type OmitGeneratedType<T extends ZodObject> = {
  [K in keyof T['shape'] as T['shape'][K] extends Generated<T['shape'][K]>
    ? never
    : K]: T['shape'][K];
};

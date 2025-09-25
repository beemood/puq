import { Query as NestQuery } from '@nestjs/common';
import type { ZodObject } from 'zod';

export function Query(schema: ZodObject): ParameterDecorator {
  return (...args) => {
    NestQuery(schema)(...args);
  };
}

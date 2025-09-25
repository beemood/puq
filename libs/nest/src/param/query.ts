import { Query as NestQuery } from '@nestjs/common';
import type { ZodObject } from 'zod';
import { ZodValidationPipe } from '../zod/zod-validation.pipe.js';

export function Query(schema: ZodObject): ParameterDecorator {
  return (...args) => {
    NestQuery(new ZodValidationPipe(schema))(...args);
  };
}

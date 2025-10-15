import { Body as NestBody } from '@nestjs/common';
import { type ZodType } from 'zod';
import { ZodValidationPipe } from '../zod/zod-validation.pipe.js';

/**
 * Inject request-body as method parameters.
 * @param schema ZodType input validation schema
 * @returns ParameterDecorator
 */
export function Body<T extends ZodType>(schema?: T): ParameterDecorator {
  return (...args) => {
    const pipe = schema ? new ZodValidationPipe<T>(schema) : undefined;
    if (pipe != undefined) {
      NestBody(pipe)(...args);
    } else {
      NestBody()(...args);
    }
  };
}

import type { ParamDecoratorEnhancer } from '@nestjs/common';
import { Param as NestParam } from '@nestjs/common';
import type { ZodType } from 'zod';
import { ZodValidationPipe } from '../zod/zod-validation.pipe.js';

/**
 * Inject request parameters into the method parameters
 * @param schema Zod type for input validation and transformation
 * @returns
 *
 * ### Example
 * ````typescript
 *      method(@Param(ParamSchema) params){ }
 * ````
 */
export function Param<T extends ZodType>(schema?: T): ParamDecoratorEnhancer {
  return (...args) => {
    if (schema) {
      NestParam(new ZodValidationPipe(schema))(...args);
    } else {
      NestParam()(...args);
    }
  };
}

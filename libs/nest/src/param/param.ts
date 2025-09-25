import type { ParamDecoratorEnhancer } from '@nestjs/common';
import { Param as NestParam } from '@nestjs/common';
import { ZodValidationPipe } from 'src/zod/zod-validation.pipe.js';
import type { ZodObject } from 'zod';

export function Param(schema: ZodObject): ParamDecoratorEnhancer {
  return (...args) => {
    NestParam(new ZodValidationPipe(schema))(...args);
  };
}

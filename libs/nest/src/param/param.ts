import type { ParamDecoratorEnhancer } from '@nestjs/common';
import { Param as NestParam } from '@nestjs/common';
import type { ZodObject } from 'zod';
import { ZodValidationPipe } from '../zod/zod-validation.pipe.js';

export function Param(schema: ZodObject): ParamDecoratorEnhancer {
  return (...args) => {
    NestParam(new ZodValidationPipe(schema))(...args);
  };
}

import type { ParamDecoratorEnhancer } from '@nestjs/common';
import { Body as NestBody } from '@nestjs/common';
import { type ZodObject } from 'zod';
import { ZodValidationPipe } from '../zod/zod-validation.pipe.js';

export function Body(schema: ZodObject): ParamDecoratorEnhancer {
  return (...args) => {
    NestBody(new ZodValidationPipe(schema))(...args);
  };
}

import type { ParamDecoratorEnhancer } from '@nestjs/common';
import { Body as NestBody } from '@nestjs/common';

export function Body(): ParamDecoratorEnhancer {
  return (...args) => {
    NestBody()(...args);
  };
}
